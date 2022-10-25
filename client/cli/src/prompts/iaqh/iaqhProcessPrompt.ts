import { choices, IChoice } from "../choices";
import { prompt } from "enquirer";

import { createConfirmPrompt, createSelectPrompt } from "../actionPrompt";
import * as util from "util";
import {
	iaqhProcessLoginCheck, iaqhRetrieveIngredientsInventory,
	iaqhRetrieveIngredientsMapping, iaqhSaveIngredientsInventory,
	iaqhSaveIngredientsMapping,
	iaqhSaveRecipes
} from "../../actions/iaqhProcess";
import tempDish from '../spoonacular/temporaryDishes2.json'
import { createIngredientsSelectPrompt, createReceiptSelectPrompt } from "./recipes/iaqhRecipeDetailsPrompt";
import { migrosProductCards, migrosProductSearch } from "../../actions/migrosProduct";
import { createProductSearchPrompt, createProductSelectPrompt } from "../migros/products/productProductSelectPrompt";
import { createBringListsSelectPrompt } from "../bring/bringListDetailsPrompt";
import { bringGetItems, bringLoadLists, bringSetItems } from "../../actions/bringAccount";

export const createIaqhProcessPrompt = async (): Promise<IChoice | any> => {
	let promptResponse: IChoice = <IChoice>await createSelectPrompt(
		'iaqh_details',
		'IAQH - Account Details',
		[...choices.iaqh_details, ...choices["*"]].filter(value => {
			if (value.auth === 'login_complete' && !iaqhProcessLoginCheck()) {
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

	let response;

	switch (promptResponse.name) {
		case 'iaqh_details-search_recipes': {
			const dishes = tempDish
			const selectedRecipes = Object.values(await createReceiptSelectPrompt(dishes.results, 14))
			iaqhSaveRecipes(selectedRecipes)
			let necessaryIngredients: Record<string, any> = {}
			for (let i = 0; i < selectedRecipes.length; i++) {
				for (let j = 0; j < selectedRecipes[i].extendedIngredients.length; j++) {

					if (!necessaryIngredients[selectedRecipes[i].extendedIngredients[j].name]) {
						necessaryIngredients[selectedRecipes[i].extendedIngredients[j].name] = {
							name: selectedRecipes[i].extendedIngredients[j].name,
							types: {
								[selectedRecipes[i].extendedIngredients[j].nameClean || selectedRecipes[i].extendedIngredients[j].name]: {
									name: selectedRecipes[i].extendedIngredients[j].nameClean || selectedRecipes[i].extendedIngredients[j].name,
									originalName: selectedRecipes[i].extendedIngredients[j].originalName,
									amount: selectedRecipes[i].extendedIngredients[j].measures.metric.amount,
									unitShort: selectedRecipes[i].extendedIngredients[j].measures.metric.unitShort
								}
							},
							amountTotal: {
								[selectedRecipes[i].extendedIngredients[j].measures.metric.unitShort]: {
									amount: selectedRecipes[i].extendedIngredients[j].measures.metric.amount
								}
							}
						}
						continue;
					}

					if (!necessaryIngredients[selectedRecipes[i].extendedIngredients[j].name].types[selectedRecipes[i].extendedIngredients[j].nameClean]) {
						necessaryIngredients[selectedRecipes[i].extendedIngredients[j].name].types[selectedRecipes[i].extendedIngredients[j].nameClean] = {
							name: selectedRecipes[i].extendedIngredients[j].nameClean,
							amount: selectedRecipes[i].extendedIngredients[j].measures.metric.amount,
							unitShort: selectedRecipes[i].extendedIngredients[j].measures.metric.unitShort
						}
					} else {
						necessaryIngredients[selectedRecipes[i].extendedIngredients[j].name].types[selectedRecipes[i].extendedIngredients[j].nameClean].amount += selectedRecipes[i].extendedIngredients[j].measures.metric.amount
					}

					if (!necessaryIngredients[selectedRecipes[i].extendedIngredients[j].name].amountTotal[selectedRecipes[i].extendedIngredients[j].measures.metric.unitShort]) {
						necessaryIngredients[selectedRecipes[i].extendedIngredients[j].name].amountTotal[selectedRecipes[i].extendedIngredients[j].measures.metric.unitShort] = {
							amount: selectedRecipes[i].extendedIngredients[j].measures.metric.amount
						}
					} else {
						necessaryIngredients[selectedRecipes[i].extendedIngredients[j].name].amountTotal[selectedRecipes[i].extendedIngredients[j].measures.metric.unitShort].amount += selectedRecipes[i].extendedIngredients[j].amount
					}
				}
			}

			let necessaryIngredientsList = Object.values(necessaryIngredients)
			let ingredientMappings = iaqhRetrieveIngredientsMapping()
			let addToList = []
			for (let i = 0; i < necessaryIngredientsList.length; i++) {
				let types = <{name: string, amount: number, unitShort: string, originalName: string}[]>Object.values(necessaryIngredientsList[i].types)
				for (let j = 0; j < types.length; j++) {
					if (ingredientMappings[types[j].name]) {
						addToList.push({
							id: ingredientMappings[types[j].name].id,
							name: `${ingredientMappings[types[j].name].brand ? ingredientMappings[types[j].name].brand + ' ' : ''}${ingredientMappings[types[j].name].name}`,
							amount: types[j].amount,
							unitShort:  types[j].unitShort,
						})
					} else if (ingredientMappings[types[j].originalName]) {
						addToList.push({
							id: ingredientMappings[types[j].originalName].id,
							name: `${ingredientMappings[types[j].name].brand ? ingredientMappings[types[j].name].brand + ' ' : ''}${ingredientMappings[types[j].name].name}`,
							amount: types[j].amount,
							unitShort:  types[j].unitShort
						})
					} else {
						let responseProductSearch = await migrosProductSearch(types[j].originalName)
						if (responseProductSearch.productIds.length === 0) {
							responseProductSearch = await migrosProductSearch(types[j].name)
						}
						if (responseProductSearch.productIds.length === 0) {
							responseProductSearch = await migrosProductSearch(necessaryIngredientsList[i].name)
						}
						if (responseProductSearch.productIds.length === 0) {
							console.log(types[j])
							responseProductSearch = await migrosProductSearch(await createProductSearchPrompt())
						}
						if (responseProductSearch.productIds.length === 0) {
							console.log("No Products have been found. Using filler instead!")
							addToList.push({
								id: types[j].originalName,
								name: types[j].originalName,
								amount: types[j].amount,
								unitShort:  types[j].unitShort
							})
						} else {
							console.log(types[j])
							const responseProductDetails = await migrosProductCards(responseProductSearch.productIds)
							const responseProductSelection = await createProductSelectPrompt(responseProductDetails)
							const responseSelected = responseProductDetails.filter((item: any) => item.id === responseProductSelection)[0]

							addToList.push({
								id: responseSelected.id,
								name: `${responseSelected.brand ? responseSelected.brand + ' ' : ''}${responseSelected.name}`,
								amount: types[j].amount,
								unitShort:  types[j].unitShort
							})

							let confirmationOriginalName = await createConfirmPrompt("add-originalName-to-productMapping", `Do you want to map ${types[j].originalName} to ${responseSelected.brand ? responseSelected.brand + ' ' : ''}${responseSelected.name}`)
							if (confirmationOriginalName) {
								ingredientMappings[types[j].originalName] = responseSelected
							}
							if (confirmationOriginalName && types[j].originalName === types[j].name) {
								continue;
							}
							let confirmationCleanName = await createConfirmPrompt("add-cleanName-to-productMapping", `Do you want to map ${types[j].name} to ${responseSelected.brand ? responseSelected.brand + ' ' : ''}${responseSelected.name}`)
							if (confirmationCleanName) {
								ingredientMappings[types[j].name] = responseSelected
							}

						}
					}
				}
			}

			iaqhSaveIngredientsMapping(ingredientMappings)

			let addToListClean: any[] = []
			for (let i = 0; i < addToList.length; i++) {
				if (addToListClean.length === 0) {
					addToListClean.push(addToList[i])
					continue;
				}
				for (let j = 0; j < addToListClean.length; j++) {
					if (addToList[i].id === addToListClean[j].id && addToList[i].unitShort === addToListClean[j].unitShort) {
						addToListClean[j].amount += addToList[i].amount
					} else {
						addToListClean.push(addToList[i])
					}
				}
			}

			const selectedIngredientsAtHome = Object.values(await createIngredientsSelectPrompt(addToListClean, 14))
			addToListClean = addToListClean.filter((item: any) => !selectedIngredientsAtHome.includes(item))
			const ingredientsInventory = iaqhRetrieveIngredientsInventory()
			if (!ingredientsInventory.home) {
				const bringLists = await bringLoadLists()
				ingredientsInventory.home = await createBringListsSelectPrompt(bringLists)
			}
			if (!ingredientsInventory.shopping) {
				let bringLists = await bringLoadLists()
				bringLists = bringLists.filter((item: any) => item !== ingredientsInventory.home)
				ingredientsInventory.shopping = await createBringListsSelectPrompt(bringLists)
			}

			iaqhSaveIngredientsInventory(ingredientsInventory)

			let homeInventory = await bringGetItems(ingredientsInventory.home)
			let shoppingInventory = await bringGetItems(ingredientsInventory.shopping)

			for (let i = 0; i < homeInventory.purchase.length; i++) {
				for (let j = 0; j < addToListClean.length; j++) {
					if (`${addToListClean[j].name} (${addToListClean[j].unitShort})` !== shoppingInventory.purchase[i].name) {
						continue;
					}
					homeInventory.purchase[i].specification = `${await prompt({
							type: 'input',
							name: 'amount',
							message: `How many ${shoppingInventory.purchase[i].name} do you have at home?`
						})}`
				}
			}

			for (let i = 0; i < shoppingInventory.purchase.length; i++) {
				for (let j = 0; j < addToListClean.length; j++) {
					if (`${addToListClean[j].name} (${addToListClean[j].unitShort})` !== shoppingInventory.purchase[i].name) {
						continue;
					}
					shoppingInventory.purchase[i].specification = `${parseFloat(shoppingInventory.purchase[i].specification) + addToListClean[j].amount}`
				}
			}

			await bringSetItems(ingredientsInventory.home, homeInventory.purchase)
			await bringSetItems(ingredientsInventory.shopping, shoppingInventory.purchase)

			break;
		}
		case '*-return': {
			return promptResponse
		}
		default:
			return promptResponse
	}

	console.log(util.inspect(response, {showHidden: false, depth: null, colors: true}))

	return await createIaqhProcessPrompt();
}