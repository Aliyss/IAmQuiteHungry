import { choices, IChoice } from "../choices";

import { createSelectPrompt } from "../actionPrompt";
import * as util from "util";
import { bringAccountLoginCheck, bringGetItems, bringLoadLists } from "../../actions/bringAccount";
import { createBringListsSelectPrompt } from "./bringListDetailsPrompt";

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
		case '*-return': {
			return promptResponse
		}
		default:
			return promptResponse
	}

	console.log(util.inspect(response, {showHidden: false, depth: null, colors: true}))

	return await createBringAccountDetailsPrompt();
}