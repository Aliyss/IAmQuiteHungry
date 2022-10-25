import bringApi from "bring-shopping";
import { createBringAuthenticationPrompt } from "../prompts/authPrompt";

let bring: bringApi | null = null

export const bringAccountLoginCheck = (): boolean => {
	return !!bring;
}

export const bringAccountLogin = async () => {

	bring = new bringApi(await createBringAuthenticationPrompt());

	return (await bring.login())
}

export const bringLoadLists = async (): Promise<{ listUuid: string; name: string; theme: string; }[]> => {
	if (!bring) {
		throw Error("Bring is not connected!")
	}
	return (await bring.loadLists()).lists;
}

export const bringGetItems = async (listUUID: string) => {
	if (!bring) {
		throw Error("Bring is not connected!")
	}
	return await bring.getItems(listUUID)
}

export const bringSetItems = async (listUUID: string, items: any[]) => {
	if (!bring) {
		throw Error("Bring is not connected!")
	}
	let itemsOld = await bringGetItems(listUUID)
	for (let i = 0; i < itemsOld.purchase.length; i++) {
		await bring.removeItem(listUUID, itemsOld.purchase[i].name)
	}
	for (let i = 0; i < items.length; i++) {
		await bring.saveItem(listUUID, items[i].name, items[i].specification)
	}
}