import { createSelectPrompt } from "../actionPrompt";

const sortByName = (a: any, b: any) => {
	return b.name - a.name
}

const createMessageFromList = (list: any) => {
	return `${list.name}`
}

export async function createBringListsSelectPrompt(lists: { listUuid: string; name: string; theme: string; }[], sortBy: (a: any, b: any) => number = sortByName): Promise<string> {
	return createSelectPrompt(
		'lists',
		'Select a List',
		lists.sort(sortBy).map(list => {
			return {
				name: list.listUuid,
				value: list,
				message: createMessageFromList(list)
			}
		})
	);
}
