// NPM Modules
// @ts-ignore
import { Select } from "enquirer";

// Prompts
import { createAuthenticationPrompt } from "./authPrompt";
import { createProductSearchPrompt, createProductSelectPrompt } from "./productPrompt";

// Api
import { authenticate } from "../../api/login/authenticate";
import { getProductCards, getProductDetails, searchProduct } from "../../api/actions/search";

// Config
import * as login_settings from "../../config/login_settings.json";

export function createSelectPrompt(name: string, message: string, choices: string[] | Record<string, any>): Promise<string> {
	const prompt = new Select({
		name: name,
		message: message,
		choices: choices
	});
	return prompt.run();
}

export const createStartPrompt = async (exit: boolean = false): Promise<any> => {

	if (exit) {
		return;
	}

	let startResponse: string = await createSelectPrompt(
		'start',
		'Select an Action',
		[
			'Login to your Cumulus Account',
			'Search for a Product',
			'Exit'
		]
	)

	switch (startResponse) {
		case 'Login to your Cumulus Account':
			const authDetails = await createAuthenticationPrompt()
			const responseAuthDetails = await authenticate(login_settings.migros.url, authDetails.username, authDetails.password)
			console.log(responseAuthDetails)
			break;
		case 'Search for a Product':
			const productSearchString = await createProductSearchPrompt()
			const responseProductSearch = await searchProduct(productSearchString)
			const responseProductCards = await getProductCards(responseProductSearch.productIds)
			const productUID = await createProductSelectPrompt(responseProductCards)
			const productDetails = await getProductDetails(productUID)
			console.log(productDetails)
			break;
		default:
			exit = true
			break;
	}

	return await createStartPrompt(exit)
};