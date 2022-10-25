import { choices, IChoice } from "../choices";
import {
	migrosAccountDetailsCumulusStats,
	migrosAccountDetailsSecurityOptions,
	migrosAccountLoginCheck
} from "../../actions/migrosAccount";
import { createSelectPrompt } from "../actionPrompt";
import util from "util";

export const createMigrosAccountDetailsPrompt = async (): Promise<IChoice | any> => {
	let promptResponse: IChoice = <IChoice>await createSelectPrompt(
		'migros_account_details',
		'Migros - Account Details',
		[...choices.migros_account_details, ...choices["*"]].filter(value => {
			if (value.auth === 'login_cookies' && !migrosAccountLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'login_cookies' && migrosAccountLoginCheck()) {
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
		case 'migros_account_details-security_options': {
			response = await migrosAccountDetailsSecurityOptions()
			break;
		}
		case 'migros_account_details-cumulus_stats': {
			response = await migrosAccountDetailsCumulusStats()
			break;
		}
		case '*-return': {
			return promptResponse
		}
		default:
			return promptResponse
	}

	console.log(util.inspect(response, {showHidden: false, depth: null, colors: true}))

	return await createMigrosAccountDetailsPrompt();
}