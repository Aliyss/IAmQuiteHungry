import { createSelectPrompt } from "../actionPrompt";

const sortByName = (a: any, b: any) => {
	return b.itemId - a.itemId
}

const createMessageFromList = (item: any) => {
	return `${item.itemId}`
}

export async function createBringItemsSelectPrompt(items: {
	uuid: string,
	itemId: string,
	listUuid: string,
	userIconItemId: string,
	userSectionId: string,
	assignedTo: string,
	imageUrl: string
}[], sortBy: (a: any, b: any) => number = sortByName): Promise<string> {
	return createSelectPrompt(
		'items',
		'Select an Item',
		items.sort(sortBy).map(item => {
			return {
				name: item.uuid,
				value: item,
				message: createMessageFromList(item)
			}
		})
	);
}
