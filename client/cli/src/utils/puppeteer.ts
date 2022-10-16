import puppeteer, { Browser, Page } from "puppeteer-core";
import { getEdgePath } from "edge-paths"
import { getAppDataPath } from "./appdata-path";

const getCurrentPage = async function (browser: Browser): Promise<Page | null> {
	let targets = browser.targets();
	for (let i = 0, I = targets.length; i < I; ++i) {
		let target = targets[i];
		let page = await target.page();
		if (page) {
			return page;
		}
	}
	return null;
}

export const getBrowserSession = async (): Promise<Browser> => {
	return await puppeteer.launch({
		headless: false,
		executablePath: getEdgePath(),
		userDataDir: getAppDataPath(["IAmQuiteHungry", "cli", "browserDataDir"], true)
	})
}

export const getBrowserLoginPage = async (browser: Browser) => {
	const currentPage = await getCurrentPage(browser)
	if (!currentPage) {
		throw Error("No Page has been detected!")
	}
	await currentPage.goto('https://login.migros.ch/')
	return currentPage
}

export const getPageCookies = async (page: Page) => {
	await page.goto('https://login.migros.ch/account')
	return (await page.cookies())
}