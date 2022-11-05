import { choices, IChoice } from "../choices";
import configureMeasurements from 'convert-units';
import { allMeasures } from 'convert-units';

const convert = configureMeasurements(allMeasures);
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
import {
	createProductAmountPrompt,
	createProductSearchPrompt,
	createProductSelectPrompt
} from "../migros/products/productProductSelectPrompt";
import { createBringListsSelectPrompt } from "../bring/bringListDetailsPrompt";
import { bringGetItems, bringLoadLists, bringSetItems } from "../../actions/bringAccount";
import { spoonacularConvertAmount } from "../../actions/spoonacularAccount";

const retrieveIngredientsFromRecipes = (selectedRecipes: any[]) => {
	const necessaryIngredients: Record<string, any> = {}
	// eslint-disable-next-line no-loops/no-loops
	for (let i = 0; i < selectedRecipes.length; i++) {
		// eslint-disable-next-line no-loops/no-loops
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
	return necessaryIngredients;
}

const getAmountAndUnitFromItemConversion = async (itemMigros: Record<string, any>, originalItem: Record<string, any>) => {
	if (!itemMigros.price || !itemMigros.price.unitPrice) {
		return {
			amount: originalItem.amount,
			unitShort: originalItem.unitShort
		}
	}

	let err = false

	try {
		convert().from(originalItem.unitShort).to(itemMigros.price.unitPrice.unit)
	} catch (e) {
		err = true
	}

	try {
		if (err) {
			convert().from(originalItem.unitShort.substring(0, originalItem.unitShort.length - 1)).to(itemMigros.price.unitPrice.unit)
			originalItem.unitShort = originalItem.unitShort.substring(0, originalItem.unitShort.length - 1)
			err = false
		}
	} catch (e) {
		err = true
	}
	let amountMigrosAsUnit = 0;
	if (err) {
		try {
			const unitCount = await spoonacularConvertAmount({
				ingredientName: originalItem.name,
				sourceAmount: originalItem.amount,
				sourceUnit: originalItem.unitShort,
				targetUnit: itemMigros.price.unitPrice.unit
			})
			amountMigrosAsUnit = unitCount.targetAmount
		} catch (e) {
			console.log(e)
		}
	}

	if (err && !amountMigrosAsUnit) {
		amountMigrosAsUnit = parseFloat(await createProductAmountPrompt(`${originalItem.amount} ${originalItem.unitShort} --> ${itemMigros.brand || 'Migros'} ${itemMigros.name} (${itemMigros.quantity || itemMigros.noPriceReason})` + (itemMigros.price && itemMigros.price.value ? ` | ${itemMigros.price.value || itemMigros.noPriceReason} CHF` : '') + (itemMigros.price && itemMigros.price.unitPrice ? ` (${itemMigros.price.unitPrice.value} CHF per ${itemMigros.price.unitPrice.unit})` : '')))
		return {
			amount: Math.floor((amountMigrosAsUnit * itemMigros.price.value / itemMigros.price.unitPrice.value) * 1000) / 1000,
			unitShort: itemMigros.price.unitPrice.unit
		}
	}

	if (!amountMigrosAsUnit) {
		amountMigrosAsUnit = convert(originalItem.amount).from(originalItem.unitShort).to(itemMigros.price.unitPrice.unit)
	}

	if (!itemMigros.price.value) {
		return {
			amount: Math.floor(amountMigrosAsUnit * 1000) / 1000,
			unitShort: itemMigros.price.unitPrice.unit
		}
	}
	if ((amountMigrosAsUnit * itemMigros.price.unitPrice.value) <= itemMigros.price.value) {
		return {
			amount:  Math.floor((itemMigros.price.value / itemMigros.price.unitPrice.value) * 1000) / 1000,
			unitShort: itemMigros.price.unitPrice.unit
		}
	}

	return {
		amount:  Math.floor((Math.round(itemMigros.price.unitPrice.value / itemMigros.price.value * amountMigrosAsUnit) * itemMigros.price.value / itemMigros.price.unitPrice.value) * 1000) / 1000,
		unitShort: itemMigros.price.unitPrice.unit
	}
}

const createListFromIngredients = async (necessaryIngredientsList: any[]): Promise<any[]> => {
	const ingredientMappings = iaqhRetrieveIngredientsMapping()
	const addToList = []
	// eslint-disable-next-line no-loops/no-loops
	for (let i = 0; i < necessaryIngredientsList.length; i++) {
		const types = <{ name: string, amount: number, unitShort: string, originalName: string }[]>Object.values(necessaryIngredientsList[i].types)
		// eslint-disable-next-line no-loops/no-loops
		for (let j = 0; j < types.length; j++) {
			if (ingredientMappings[types[j].name]) {
				const dataConversion = await getAmountAndUnitFromItemConversion(ingredientMappings[types[j].name], types[j])
				addToList.push({
					id: ingredientMappings[types[j].name].id,
					name: `${ingredientMappings[types[j].name].brand ? ingredientMappings[types[j].name].brand + ' ' : ''}${ingredientMappings[types[j].name].name}`,
					amount: dataConversion.amount,
					unitShort: dataConversion.unitShort
				})
			} else if (ingredientMappings[types[j].originalName]) {
				const dataConversion = await getAmountAndUnitFromItemConversion(ingredientMappings[types[j].originalName], types[j])
				addToList.push({
					id: ingredientMappings[types[j].originalName].id,
					name: `${ingredientMappings[types[j].name].brand ? ingredientMappings[types[j].name].brand + ' ' : ''}${ingredientMappings[types[j].name].name}`,
					amount: dataConversion.amount,
					unitShort: dataConversion.unitShort
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
						unitShort: types[j].unitShort
					})
				} else {
					console.log(types[j])
					const responseProductDetails = await migrosProductCards(responseProductSearch.productIds)
					const responseProductSelection = await createProductSelectPrompt(responseProductDetails)
					const responseSelected = responseProductDetails.filter((item: any) => item.id === responseProductSelection)[0]

					const dataConversion = await getAmountAndUnitFromItemConversion(responseSelected, types[j])
					addToList.push({
						id: responseSelected.id,
						name: `${responseSelected.brand ? responseSelected.brand + ' ' : ''}${responseSelected.name}`,
						amount: dataConversion.amount,
						unitShort: dataConversion.unitShort
					})

					const confirmationOriginalName = await createConfirmPrompt("add-originalName-to-productMapping", `Do you want to map ${types[j].originalName} to ${responseSelected.brand ? responseSelected.brand + ' ' : ''}${responseSelected.name}`)
					if (confirmationOriginalName) {
						ingredientMappings[types[j].originalName] = responseSelected
					}
					if (confirmationOriginalName && types[j].originalName === types[j].name) {
						continue;
					}
					const confirmationCleanName = await createConfirmPrompt("add-cleanName-to-productMapping", `Do you want to map ${types[j].name} to ${responseSelected.brand ? responseSelected.brand + ' ' : ''}${responseSelected.name}`)
					if (confirmationCleanName) {
						ingredientMappings[types[j].name] = responseSelected
					}

				}
			}
		}
	}

	iaqhSaveIngredientsMapping(ingredientMappings)

	return addToList
}

const cleanList = async (addToList: any[]): Promise<any[]> => {
	addToList.reduce((acc, curr) => {
		if (!acc[curr.id]) {
			acc[curr.id] = { id: curr.id, name: curr.name, unitShort: curr.unitShort, amount: 0 }
		}

		if (acc[curr.id].unitShort === curr.unitShort) {
			acc[curr.id].amount += curr.amount;
		}

		return acc;

	}, {})
	const selectedIngredientsAtHome = Object.values(await createIngredientsSelectPrompt(addToList, 14))
	addToList = addToList.filter((item: any) => !selectedIngredientsAtHome.includes(item))
	return addToList
}

export const createIaqhProcessPrompt = async (): Promise<IChoice | any> => {
	const promptResponse: IChoice = <IChoice>await createSelectPrompt(
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

			const necessaryIngredientsList = Object.values(retrieveIngredientsFromRecipes(selectedRecipes))
			const addToList = await createListFromIngredients(necessaryIngredientsList)

			const addToListClean: any[] = await cleanList(addToList)

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

			const homeInventory = await bringGetItems(ingredientsInventory.home)
			const shoppingInventory = await bringGetItems(ingredientsInventory.shopping)

			// eslint-disable-next-line no-loops/no-loops
			for (let i = 0; i < homeInventory.purchase.length; i++) {
				// eslint-disable-next-line no-loops/no-loops
				for (let j = 0; j < addToListClean.length; j++) {
					if (`${addToListClean[j].name} (${addToListClean[j].unitShort})` !== shoppingInventory.purchase[i].name) {
						continue;
					}
					homeInventory.purchase[i].specification = `${await prompt({
						type: 'input',
						name: 'amount',
						message: `How many ${shoppingInventory.purchase[i].name} do you have at home?`
					})}`
					addToListClean.splice(j, 1)
					j--;
				}
			}

			// eslint-disable-next-line no-loops/no-loops
			for (let i = 0; i < shoppingInventory.purchase.length; i++) {
				// eslint-disable-next-line no-loops/no-loops
				for (let j = 0; j < addToListClean.length; j++) {
					if (`${addToListClean[j].name} (${addToListClean[j].unitShort})` !== shoppingInventory.purchase[i].name) {
						continue;
					}
					shoppingInventory.purchase[i].specification = `${parseFloat(shoppingInventory.purchase[i].specification) + addToListClean[j].amount}`
					addToListClean.splice(j, 1)
					j--;
				}
			}

			// eslint-disable-next-line no-loops/no-loops
			for (let i = 0; i < addToListClean.length; i++) {
				shoppingInventory.purchase.push({
					name: `${addToListClean[i].name} (${addToListClean[i].unitShort})`,
					specification: addToListClean[i].amount
				})
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

	console.log(util.inspect(response, { showHidden: false, depth: null, colors: true }))

	return await createIaqhProcessPrompt();
}