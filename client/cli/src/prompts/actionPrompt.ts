// NPM Modules
// @ts-ignore
import { Select, Confirm, MultiSelect } from "enquirer";

// Prompts
import { choices } from "./choices";
import { migrosAccountLogin, migrosAccountLoginCheck } from "../actions/migrosAccount";
import { createMigrosAccountDetailsPrompt } from "./migros/migrosAccountDetailsPrompt";
import { cumulusAccountLogin, cumulusAccountLoginCheck } from "../actions/cumulusAccount";
import { createCumulusAccountDetailsPrompt } from "./migros/cumulusAccountDetailsPrompt";
import { bringAccountLogin, bringAccountLoginCheck } from "../actions/bringAccount";
import { createBringAccountDetailsPrompt } from "./bring/bringAccountDetailsPrompt";
import { spoonacularAccountLogin, spoonacularAccountLoginCheck } from "../actions/spoonacularAccount";
import { createSpoonacularAccountDetailsPrompt } from "./spoonacular/spoonacularAccountDetailsPrompt";
import { createMigrosProductDetailsPrompt } from "./migros/productProductDetailsPrompt";
import { iaqhProcessLoginCheck } from "../actions/iaqhProcess";
import { createIaqhProcessPrompt } from "./iaqh/iaqhProcessPrompt";

export function createSelectPrompt(name: string, message: string, choices: any[]): Promise<any> {
	const prompt = new Select({
		name: name,
		message: message,
		choices: choices
	});
	return prompt.run();
}

export function createMultiSelectPrompt(name: string, message: string, limit: number, choices: any[]): Promise<any> {
	const prompt = new MultiSelect({
		name: name,
		message: message,
		limit: limit,
		choices: choices,
		result(names: any) {
			return this.map(names);
		}
	});
	return prompt.run();
}

export function createConfirmPrompt(name: string, message: string): Promise<string> {
	const prompt = new Confirm({
		name: name,
		message: message
	});
	return prompt.run();
}



export const createStartPrompt = async (exit: boolean = false): Promise<any> => {

	if (exit) {
		return;
	}

	if (!migrosAccountLoginCheck()) {
		await migrosAccountLogin()
	}

	if (!cumulusAccountLoginCheck()) {
		await cumulusAccountLogin()
	}

	if (!bringAccountLoginCheck()) {
		await bringAccountLogin()
	}

	if (!spoonacularAccountLoginCheck()) {
		await spoonacularAccountLogin()
	}

	let startResponse: Record<string, any> = await createSelectPrompt(
		'start',
		'Select an Action',
		[...choices.start, ...choices["*"]].filter(value => {
			if (value.auth === 'login_cookies' && !migrosAccountLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'login_cookies' && migrosAccountLoginCheck()) {
				return;
			} else if (value.auth === 'cumulus_cookies' && !cumulusAccountLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'cumulus_cookies' && cumulusAccountLoginCheck()) {
				return;
			} else if (value.auth === 'bring_login' && !bringAccountLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'bring_login' && bringAccountLoginCheck()) {
				return;
			} else if (value.auth === 'spoonacular_login' && !spoonacularAccountLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'spoonacular_login' && spoonacularAccountLoginCheck()) {
				return;
			} else if (value.auth === 'login_complete' && !iaqhProcessLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'login_complete' && iaqhProcessLoginCheck()) {
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

	let response = null

	switch (startResponse.name) {
		case 'iaqh_details':
			response = await createIaqhProcessPrompt()
			break;
		case 'migros_account_login':
			response = await migrosAccountLogin()
			break;
		case 'migros_account_details':
			response = await createMigrosAccountDetailsPrompt()
			break;
		case 'cumulus_account_login':
			response = await cumulusAccountLogin()
			break;
		case 'cumulus_account_details':
			response = await createCumulusAccountDetailsPrompt()
			break;
		case 'bring_account_login':
			response = await bringAccountLogin()
			break;
		case 'bring_account_details':
			response = await createBringAccountDetailsPrompt()
			break;
		case 'spoonacular_account_login':
			response = await spoonacularAccountLogin()
			break;
		case 'spoonacular_account_details':
			response = await createSpoonacularAccountDetailsPrompt()
			break;
		case 'product_details':
			response = await createMigrosProductDetailsPrompt()
			break;
		default:
			exit = true
			break;
	}

	if (response?.name === "*-exit") {
		exit = true;
	} else if (response) {
		console.log(response)
	}

	return await createStartPrompt(exit)
};