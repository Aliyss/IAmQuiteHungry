// NPM Modules
// @ts-ignore
import { Select, Confirm } from "enquirer";
import MigrosAPI from "migros-api-wrapper"

// Prompts
import { createProductSearchPrompt, createProductSelectPrompt } from "./productPrompt";
import { getBrowserLoginPage, getBrowserSession, getPageCookies } from "../utils/puppeteer";
import { ILoginCookies } from "migros-api-wrapper/dist/api/interfaces/cookies";

export function createSelectPrompt(name: string, message: string, choices: string[] | Record<string, any>): Promise<string> {
	const prompt = new Select({
		name: name,
		message: message,
		choices: choices
	});
	return prompt.run();
}

export function createConfirmPrompt(name: string, message: string): Promise<string> {
	const prompt = new Confirm({
		name: name,
		message: message
	});
	return prompt.run();
}

let loginCookies: ILoginCookies | null = null

export const createStartPrompt = async (exit: boolean = false): Promise<any> => {

	if (exit) {
		return;
	}

	let choices = []

	if (!loginCookies) {
		choices.push('Login to your Migros Account')
	} else {
		choices.push('Migros: Get security options')
	}

	let openChoices = [
		'Search for a Product',
	]

	choices = [...choices, ...openChoices]

	choices.push('Exit')

	let startResponse: string = await createSelectPrompt(
		'start',
		'Select an Action',
		choices
	)

	switch (startResponse) {
		case 'Login to your Migros Account':
			const browser = await getBrowserSession()
			const currentPage = await getBrowserLoginPage(browser)
			const loginResponse = await createConfirmPrompt('confirm-login', 'Did you login to Migros?')

			if (!loginResponse) {
				exit = true
				break;
			}

			const currentCookies = await getPageCookies(currentPage)
			await browser.close()

			const cookiesObject = <Record<string, string>>currentCookies.reduce((obj, item) => Object.assign(obj, { [item.name]: item.value }), {});

			const loginCookiesTemp = {
				__VCAP_ID__: cookiesObject["__VCAP_ID__"],
				MDID: cookiesObject["MDID"],
				JSESSIONID: cookiesObject["JSESSIONID"],
				CSRF: cookiesObject["CSRF"],
				MLRM: cookiesObject["MLRM"],
				MTID: cookiesObject["MTID"],
				hl: cookiesObject["hl"],
				TS012f1684: cookiesObject["TS012f1684"]
			}
			const securityOptionsCheck = await MigrosAPI.security.options.get(loginCookiesTemp)

			if (securityOptionsCheck) {
				loginCookies = loginCookiesTemp
			}
			console.log(securityOptionsCheck)
			break;
		case 'Migros: Get security options':
			if (!loginCookies) {
				throw Error('Login Cookies are undefined!')
			}
			const securityOptions = await MigrosAPI.security.options.get(loginCookies)
			console.log(securityOptions)
			break;
		case 'Search for a Product':
			const productSearchString = await createProductSearchPrompt()
			const responseProductSearch = await MigrosAPI.productSearch.v4.search({
				query: productSearchString
			})
			const responseProductCards = await MigrosAPI.productDisplay.v1.productCards.get({
				uids: responseProductSearch.productIds
			})
			const productUID = await createProductSelectPrompt(responseProductCards)
			const productDetails = await MigrosAPI.productDisplay.v1.productDetail.get({
				uids: productUID
			})
			console.log(productDetails)
			break;
		default:
			exit = true
			break;
	}

	return await createStartPrompt(exit)
};