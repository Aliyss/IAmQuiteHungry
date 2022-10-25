import { choices, IChoice } from "../choices";

import { createSelectPrompt } from "../actionPrompt";
import * as util from "util";
import {
	spoonacularAccountLoginCheck,
	spoonacularGetRandomRecipes
} from "../../actions/spoonacularAccount";
import tempDish from './temporaryDishes2.json'

export const createSpoonacularAccountDetailsPrompt = async (): Promise<IChoice | any> => {
	let promptResponse: IChoice = <IChoice>await createSelectPrompt(
		'spoonacular_account_details',
		'Spoonacular - Account Details',
		[...choices.spoonacular_account_details, ...choices["*"]].filter(value => {
			if (value.auth === 'spoonacular_login' && !spoonacularAccountLoginCheck()) {
				return;
			} else if (value.anti_auth && value.anti_auth === 'spoonacular_login' && spoonacularAccountLoginCheck()) {
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
		case 'spoonacular_account_details-random_recipes': {
			response = await spoonacularGetRandomRecipes({
				number: 1
			})
			break;
		}
		case 'spoonacular_account_details-search_recipes': {
			/*
			response = await spoonacularSearchRecipes({
				type: "main course",
				instructionsRequired: true,
				sort: 'random',
				number: 4,
				fillIngredients: true,
				addRecipeInformation: true
			})

			 */

			response = tempDish
			break;
		}
		case '*-return': {
			return promptResponse
		}
		default:
			return promptResponse
	}

	console.log(util.inspect(response, {showHidden: false, depth: null, colors: true}))

	return await createSpoonacularAccountDetailsPrompt();
}