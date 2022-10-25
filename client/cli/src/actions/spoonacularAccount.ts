import { createSpoonacularAuthenticationPrompt } from "../prompts/authPrompt";
import { createConfiguration, RecipesApi, SearchRecipes200Response } from "../sdk/spoonacular-sdk";
import {
	GetRandomRecipes200Response
} from "../sdk/spoonacular-sdk/com/spoonacular/client/model/models/GetRandomRecipes200Response";
import { RecipesApiGetRandomRecipesRequest, RecipesApiSearchRecipesRequest } from "../sdk/spoonacular-sdk/types/ObjectParamAPI";

let spoonacular: RecipesApi | null = null

export const spoonacularAccountLoginCheck = (): boolean => {
	return !!spoonacular;
}

export const spoonacularAccountLogin = async () => {
	const configuration = createConfiguration({
		authMethods: {
			apiKeyScheme: (await createSpoonacularAuthenticationPrompt()).apiKey
		}
	})
	spoonacular = new RecipesApi(configuration)
}

export const spoonacularGetRandomRecipes = async (options?: RecipesApiGetRandomRecipesRequest): Promise<GetRandomRecipes200Response> => {
	if (!spoonacular) {
		throw Error("Spoonacular is not connected!")
	}
	return spoonacular.getRandomRecipes(options?.limitLicense, options?.tags, options?.number);
}

export const spoonacularSearchRecipes = async (options?: RecipesApiSearchRecipesRequest): Promise<SearchRecipes200Response> => {
	if (!spoonacular) {
		throw Error("Spoonacular is not connected!")
	}
	return spoonacular.searchRecipes(
		options?.query,
		options?.cuisine,
		options?.excludeCuisine,
		options?.diet,
		options?.intolerances,
		options?.equipment,
		options?.includeIngredients,
		options?.excludeIngredients,
		options?.type,
		options?.instructionsRequired,
		options?.fillIngredients,
		options?.addRecipeInformation,
		options?.addRecipeNutrition,
		options?.author,
		options?.tags,
		options?.recipeBoxId,
		options?.titleMatch,
		options?.maxReadyTime,
		options?.ignorePantry,
		options?.sort,
		options?.sortDirection,
		options?.minCarbs,
		options?.maxCarbs,
		options?.minProtein,
		options?.maxProtein,
		options?.minCalories,
		options?.maxCalories,
		options?.minFat,
		options?.maxFat,
		options?.minAlcohol,
		options?.maxAlcohol,
		options?.minCaffeine,
		options?.maxCaffeine,
		options?.minCopper,
		options?.maxCopper,
		options?.minCalcium,
		options?.maxCalcium,
		options?.minCholine,
		options?.maxCholine,
		options?.minCholesterol,
		options?.maxCholesterol,
		options?.minFluoride,
		options?.maxFluoride,
		options?.minSaturatedFat,
		options?.maxSaturatedFat,
		options?.minVitaminA,
		options?.maxVitaminA,
		options?.minVitaminC,
		options?.maxVitaminC,
		options?.minVitaminD,
		options?.maxVitaminD,
		options?.minVitaminE,
		options?.maxVitaminE,
		options?.minVitaminK,
		options?.maxVitaminK,
		options?.minVitaminB1,
		options?.maxVitaminB1,
		options?.minVitaminB2,
		options?.maxVitaminB2,
		options?.minVitaminB5,
		options?.maxVitaminB5,
		options?.minVitaminB3,
		options?.maxVitaminB3,
		options?.minVitaminB6,
		options?.maxVitaminB6,
		options?.minVitaminB12,
		options?.maxVitaminB12,
		options?.minFiber,
		options?.maxFiber,
		options?.minFolate,
		options?.maxFolate,
		options?.minFolicAcid,
		options?.maxFolicAcid,
		options?.minIodine,
		options?.maxIodine,
		options?.minIron,
		options?.maxIron,
		options?.minMagnesium,
		options?.maxMagnesium,
		options?.minManganese,
		options?.maxManganese,
		options?.minPhosphorus,
		options?.maxPhosphorus,
		options?.minPotassium,
		options?.maxPotassium,
		options?.minSelenium,
		options?.maxSelenium,
		options?.minSodium,
		options?.maxSodium,
		options?.minSugar,
		options?.maxSugar,
		options?.minZinc,
		options?.maxZinc,
		options?.offset,
		options?.number,
		options?.limitLicense
	);
}