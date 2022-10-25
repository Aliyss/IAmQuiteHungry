import { createMultiSelectPrompt } from "../../actionPrompt";

const createMessageFromRecipe = (recipe: any) => {
	return `${recipe.title}${recipe.readyInMinutes ? (" (" + recipe.readyInMinutes + "min)") : ""}`
}

export async function createReceiptSelectPrompt(recipes: any[], limit: number): Promise<any[]> {
	return createMultiSelectPrompt(
		'recipes',
		'Select your Recipes',
		limit,
		recipes.map(recipe => {
			return {
				name: recipe.id,
				value: recipe,
				message: createMessageFromRecipe(recipe)
			}
		})
	);
}

const createMessageFromIngredient = (ingredient: any) => {
	return `${ingredient.name}`
}

export async function createIngredientsSelectPrompt(ingredients: any[], limit: number): Promise<any[]> {
	return createMultiSelectPrompt(
		'ingredients',
		'Select Ingredients already at home',
		limit,
		ingredients.map(ingredient => {
			return {
				name: ingredient.id,
				value: ingredient,
				message: createMessageFromIngredient(ingredient)
			}
		})
	);
}