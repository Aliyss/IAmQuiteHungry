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

export const getBrowserSession = async (headless: boolean = true): Promise<Browser> => {
	return await puppeteer.launch({
		headless: headless,
		executablePath: getEdgePath(),
		userDataDir: getAppDataPath(["IAmQuiteHungry", "cli", "browserDataDir"], true)
	})
}

export const getBrowserLoginPage = async (browser: Browser) => {
	const currentPage = await getCurrentPage(browser)
	if (!currentPage) {
		throw Error("No Page has been detected!")
	}
	return currentPage
}

export const getPageCookies = async (page: Page, url: string) => {
	await page.goto(url, { waitUntil: "networkidle2"})
	return (await page.cookies())
}