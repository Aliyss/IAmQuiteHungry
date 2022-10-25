import { choices, IChoice } from "../choices";
import {
	migrosProductCards,
	migrosProductSearch
} from "../../actions/migrosProduct";
import { createSelectPrompt } from "../actionPrompt";
import { createProductSearchPrompt, createProductSelectPrompt } from "./products/productProductSelectPrompt";
import util from "util";

export const createMigrosProductDetailsPrompt = async (): Promise<IChoice | any> => {
	let promptResponse: IChoice = <IChoice>await createSelectPrompt(
		'product_details',
		'Product - Product Details',
		[...choices.product_details, ...choices["*"]].filter(value => {
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
		case 'product_details-product_search': {
			const productSearchString = await createProductSearchPrompt()
			const responseProductSearch = await migrosProductSearch(productSearchString)
			const responseProductDetails = await migrosProductCards(responseProductSearch.productIds)
			response = await createProductSelectPrompt(responseProductDetails)
			break;
		}
		case '*-return': {
			return promptResponse
		}
		default:
			return promptResponse
	}

	console.log(util.inspect(response, {showHidden: false, depth: null, colors: true}))

	return await createMigrosProductDetailsPrompt();
}