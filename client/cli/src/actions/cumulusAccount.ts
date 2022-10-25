import { getBrowserLoginPage, getBrowserSession, getPageCookies } from "../utils/puppeteer";
import {
	ICumulusCookies,
	ICumulusReceiptOptions,
	ICumulusReceiptsOptions,
	MigrosAPI,
	MigrosApiPaths
} from "migros-api-wrapper";

let cumulusCookies: ICumulusCookies | null = null

export const cumulusAccountLoginCheck = (): boolean => {
	return !!cumulusCookies;
}

export const cumulusAccountLogin = async () => {
	const browser = await getBrowserSession()
	const currentPage = await getBrowserLoginPage(browser)
	const currentCookies = await getPageCookies(currentPage, `${MigrosApiPaths.cumulus}`)
	await browser.close()

	const cookiesObject = <Record<string, string>>currentCookies.reduce((obj, item) => Object.assign(obj, { [item.name]: item.value }), {});

	const cumulusCookiesTemp: ICumulusCookies = {
		JSESSIONID: cookiesObject["JSESSIONID"],
		"BIGipServerpool_shared_migros.ch_80": cookiesObject["BIGipServerpool_shared_migros.ch_80"],
		"cookie-banner-acceptance-state": cookiesObject["cookie-banner-acceptance-state"],
		"mo-fulfilmentOption": cookiesObject["mo-fulfilmentOption"],
		"mo-lang": cookiesObject["mo-lang"],
		"mo-securityContext": cookiesObject["mo-securityContext"],
		"mo-sidebarsState": cookiesObject["mo-sidebarsState"],
		REALPERSON_SESSION: cookiesObject["REALPERSON_SESSION"]
	}

	cumulusCookies = cumulusCookiesTemp
}

export const cumulusAccountDetailsCumulusReceipts = async (cumulusReceiptsOptions: ICumulusReceiptsOptions) => {
	if (!cumulusCookies) {
		throw Error('Login Cookies are undefined!')
	}

	return await MigrosAPI.account.cumulus.getCumulusReceipts(cumulusReceiptsOptions, cumulusCookies)
}

export const cumulusAccountDetailsCumulusReceipt = async (cumulusReceiptOptions: ICumulusReceiptOptions) => {
	if (!cumulusCookies) {
		throw Error('Login Cookies are undefined!')
	}

	return await MigrosAPI.account.cumulus.getCumulusReceipt(cumulusReceiptOptions, cumulusCookies)
}