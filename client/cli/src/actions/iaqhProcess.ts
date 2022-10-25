import { bringAccountLoginCheck } from "./bringAccount";
import { cumulusAccountLoginCheck } from "./cumulusAccount";
import { migrosAccountLoginCheck } from "./migrosAccount";
import { spoonacularAccountLoginCheck } from "./spoonacularAccount";
import * as fs from "fs";
import { getAppDataPath } from "../utils/appdata-path";
import path, { join } from "path";

const filePathIngredients = getAppDataPath(["IAmQuiteHungry", "cli", "config", "ingredients"], true)
const filePathPending = getAppDataPath(["IAmQuiteHungry", "cli", "config", "recipes", "pending"], true)
const filePathCompleted = getAppDataPath(["IAmQuiteHungry", "cli", "config", "recipes", "completed"], true)

export const iaqhProcessLoginCheck = (): boolean => {
	return (bringAccountLoginCheck() && cumulusAccountLoginCheck() && migrosAccountLoginCheck() && spoonacularAccountLoginCheck());
}

export const iaqhSaveRecipes = (recipes: any[]) => {
	for (let i = 0; i < recipes.length; i++) {
		fs.writeFileSync(join(filePathPending, `/${recipes[i].title}.json`), JSON.stringify(recipes[i], null, 4));
	}
}

export const iaqhRetrievePendingRecipes = (): any[] => {
	const jsonsInDir = fs.readdirSync(filePathPending).filter(file => path.extname(file) === '.json');

	let pendingRecipes: any[] = []
	jsonsInDir.forEach(file => {
		const fileData = fs.readFileSync(path.join(filePathPending, file));
		pendingRecipes.push(JSON.parse(fileData.toString()));
	});
	return pendingRecipes
}

export const iaqhRetrieveIngredientsMapping = (): Record<string, any> => {
	if (!fs.existsSync(join(filePathIngredients, `/mapping.json`))) {
		return {}
	}
	const fileData = fs.readFileSync(join(filePathIngredients, `/mapping.json`));
	return JSON.parse(fileData.toString())
}

export const iaqhSaveIngredientsMapping = (mappings: Record<string, any>) => {
	fs.writeFileSync(join(filePathIngredients, `/mapping.json`), JSON.stringify(mappings, null, 4));
}

export const iaqhRetrieveIngredientsInventory = (): Record<string, any> => {
	if (!fs.existsSync(join(filePathIngredients, `/inventory.json`))) {
		return {}
	}
	const fileData = fs.readFileSync(join(filePathIngredients, `/inventory.json`));
	return JSON.parse(fileData.toString())
}

export const iaqhSaveIngredientsInventory = (mappings: Record<string, any>) => {
	fs.writeFileSync(join(filePathIngredients, `/inventory.json`), JSON.stringify(mappings, null, 4));
}