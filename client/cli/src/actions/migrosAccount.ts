/* eslint-disable no-undef */
import { getBrowserLoginPage, getBrowserSession, getPageCookies } from "../utils/puppeteer";
import { MigrosAPI, ILoginCookies, MigrosApiPaths } from "migros-api-wrapper";
import { combineCookies } from "../utils/combineCookies";
import { createMigrosAuthenticationOTPPrompt, createMigrosAuthenticationPrompt } from "../prompts/authPrompt";
import { cumulusAccountLogin, cumulusAccountLoginCheck } from "./cumulusAccount";

let loginCookies: ILoginCookies | null = null

export const migrosAccountLoginCheck = (): boolean => {
	return !!loginCookies;
}

const testMigrosAccountLogin = async (loggedInTest = true) =>  {
	const browser = await getBrowserSession()
	const currentPage = await getBrowserLoginPage(browser)

	if (!loggedInTest) {
		await currentPage.goto(MigrosApiPaths.login)
		await currentPage.evaluate((loginData: { username: string, password: string }) => {
			(document.getElementById("username") as HTMLInputElement).value = loginData.username;
			(document.getElementById("password") as HTMLInputElement).value = loginData.password;
			(document.querySelector('button[type="submit"]') as HTMLElement).click();
		}, await createMigrosAuthenticationPrompt())
		await currentPage.waitForNavigation({ waitUntil: "networkidle2" })
		if (currentPage.url() === "https://login.migros.ch/login/second") {
			await currentPage.focus('#code')
			await currentPage.keyboard.type((await createMigrosAuthenticationOTPPrompt()).otp)
			await currentPage.evaluate(() => {
				(document.querySelector('input[type="submit"]') as HTMLElement).click();
			})
			await currentPage.waitForNavigation({ waitUntil: "networkidle2" })
		}
	}

	const currentCookies = await getPageCookies(currentPage, MigrosApiPaths.login + "/account")
	console.log(currentCookies.map(u => u.name + "=" + u.value).join('; '))
	const cookiesObject = <Record<string, string>>currentCookies.reduce((obj, item) => Object.assign(obj, { [item.name]: item.value }), {});

	const loginCookiesTemp = {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		__VCAP_ID__: cookiesObject["__VCAP_ID__"],
		MDID: cookiesObject["MDID"],
		JSESSIONID: cookiesObject["JSESSIONID"],
		CSRF: cookiesObject["CSRF"],
		MLRM: cookiesObject["MLRM"],
		MTID: cookiesObject["MTID"],
		hl: cookiesObject["hl"],
		// eslint-disable-next-line @typescript-eslint/naming-convention
		TS012f1684: cookiesObject["TS012f1684"]
	}

	await browser.close()

	const securityOptionsCheck = await MigrosAPI.account.security.getOptions(loginCookiesTemp)

	if (securityOptionsCheck.body) {
		loginCookies = <ILoginCookies>combineCookies(loginCookiesTemp, securityOptionsCheck['set-cookie'])
	}

	return (Object.keys(securityOptionsCheck.body).length !== 0)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const migrosAccountLogin = async () => {

	if (!(await testMigrosAccountLogin())) {
		if (!(await testMigrosAccountLogin(false))) {
			throw Error('Manual login failed!')
		}
	}

	if (!cumulusAccountLoginCheck()) {
		await cumulusAccountLogin()
	}

	const securityOptionsCheck = await MigrosAPI.account.security.getOptions(<ILoginCookies>loginCookies)

	return securityOptionsCheck.body
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const migrosAccountDetailsSecurityOptions = async () => {
	if (!loginCookies) {
		throw Error('Login Cookies are undefined!')
	}

	const response = await MigrosAPI.account.security.getOptions(loginCookies)

	if (response.body) {
		loginCookies = <ILoginCookies>combineCookies(loginCookies, response['set-cookie'])
	}

	return response.body
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const migrosAccountDetailsCumulusStats = async () => {
	if (!loginCookies) {
		throw Error('Login Cookies are undefined!')
	}

	const response = await MigrosAPI.account.cumulus.getCumulusStats(loginCookies)

	if (response.body) {
		loginCookies = <ILoginCookies>combineCookies(loginCookies, response['set-cookie'])
	}

	return response.body
}