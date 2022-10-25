import { choices, IChoice } from "../choices";

import { createSelectPrompt } from "../actionPrompt";
import {
	cumulusAccountDetailsCumulusReceipt,
	cumulusAccountDetailsCumulusReceipts,
	cumulusAccountLoginCheck
} from "../../actions/cumulusAccount";
import { createReceiptSelectPrompt } from "./cumulus/cumulusReceiptDetailsPrompt";
import * as util from "util";

export const createCumulusAccountDetailsPrompt = async (): Promise<IChoice | any> => {
	let promptResponse: IChoice = <IChoice>await createSelectPrompt(
		'cumulus_account_details',
		'Cumulus - Account Details',
		[...choices.cumulus_account_details, ...choices["*"]].filter(value => {
			if (value.auth === 'cumulus_cookies' && !cumulusAccountLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'cumulus_cookies' && cumulusAccountLoginCheck()) {
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
		case 'cumulus_account_details-cumulus_receipts': {
			const currentDateMinus1Y = new Date()
			currentDateMinus1Y.setFullYear(currentDateMinus1Y.getFullYear() - 1)
			const receipts = await cumulusAccountDetailsCumulusReceipts({
				from: currentDateMinus1Y,
				to: new Date()
			})
			response = await createReceiptSelectPrompt(receipts)
			response = await cumulusAccountDetailsCumulusReceipt({
				receiptId: response
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

	return await createCumulusAccountDetailsPrompt();
}