import { choices, IChoice } from "../choices";

import { createSelectPrompt } from "../actionPrompt";
import * as util from "util";
import {
	bringAccountLoginCheck,
	bringGetItemDetails,
	bringGetItems,
	bringLoadLists,
	bringUploadItemImage
} from "../../actions/bringAccount";
import { createBringListsSelectPrompt } from "./bringListDetailsPrompt";
import { createBringItemsSelectPrompt } from "./bringItemDetailsPrompt";
import superagent from "superagent";

export const createBringAccountDetailsPrompt = async (): Promise<IChoice | any> => {
	let promptResponse: IChoice = <IChoice>await createSelectPrompt(
		'bring_account_details',
		'Bring - Account Details',
		[...choices.bring_account_details, ...choices["*"]].filter(value => {
			if (value.auth === 'bring_login' && !bringAccountLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'bring_login' && bringAccountLoginCheck()) {
				return;
			}
			return value;
		}).map(value => {
			return {
				message: value.message,
				value: value
			}
		})
	)

	let response;

	switch (promptResponse.name) {
		case 'bring_account_details-shopping_lists': {
			const lists = await bringLoadLists()
			response = await createBringListsSelectPrompt(lists)
			response = await bringGetItems(response)
			break;
		}
		case 'bring_account_details-upload_file': {
			const lists = await bringLoadLists()
			response = await createBringListsSelectPrompt(lists)
			const items = await bringGetItemDetails(response)
			const selectedItem = await createBringItemsSelectPrompt(items)
			response = await bringUploadItemImage(selectedItem, {
				clientInstanceId: "clientInstanceId",
				imageData: (await superagent.get("https://image.migros.ch/mo-custom/v-w-175-h-150/80148babd095b03a7082dbfa7a94568bde89b8b2/el-tony-mate.jpg").buffer(true).parse(superagent.parse.image)).body
			})
			break;
		}
		case '*-return': {
			return promptResponse
		}
		default:
			return promptResponse
	}

	console.log(util.inspect(response, {showHidden: false, depth: null, colors: true}))

	return await createBringAccountDetailsPrompt();
}