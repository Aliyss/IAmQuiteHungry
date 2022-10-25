"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./AddMealPlanTemplate200Response"), exports);
__exportStar(require("./AddMealPlanTemplate200ResponseItemsInner"), exports);
__exportStar(require("./AddMealPlanTemplate200ResponseItemsInnerValue"), exports);
__exportStar(require("./AddToMealPlanRequest"), exports);
__exportStar(require("./AddToMealPlanRequest1"), exports);
__exportStar(require("./AddToMealPlanRequest1Value"), exports);
__exportStar(require("./AddToMealPlanRequest1ValueIngredientsInner"), exports);
__exportStar(require("./AddToShoppingListRequest"), exports);
__exportStar(require("./AnalyzeARecipeSearchQuery200Response"), exports);
__exportStar(require("./AnalyzeARecipeSearchQuery200ResponseDishesInner"), exports);
__exportStar(require("./AnalyzeARecipeSearchQuery200ResponseIngredientsInner"), exports);
__exportStar(require("./AnalyzeRecipeInstructions200Response"), exports);
__exportStar(require("./AnalyzeRecipeInstructions200ResponseIngredientsInner"), exports);
__exportStar(require("./AnalyzeRecipeInstructions200ResponseParsedInstructionsInner"), exports);
__exportStar(require("./AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner"), exports);
__exportStar(require("./AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner"), exports);
__exportStar(require("./AutocompleteIngredientSearch200ResponseInner"), exports);
__exportStar(require("./AutocompleteMenuItemSearch200Response"), exports);
__exportStar(require("./AutocompleteProductSearch200Response"), exports);
__exportStar(require("./AutocompleteProductSearch200ResponseResultsInner"), exports);
__exportStar(require("./AutocompleteRecipeSearch200ResponseInner"), exports);
__exportStar(require("./ClassifyCuisine200Response"), exports);
__exportStar(require("./ClassifyGroceryProduct200Response"), exports);
__exportStar(require("./ClassifyGroceryProductBulk200ResponseInner"), exports);
__exportStar(require("./ClassifyGroceryProductBulkRequestInner"), exports);
__exportStar(require("./ClassifyGroceryProductRequest"), exports);
__exportStar(require("./ClearMealPlanDayRequest"), exports);
__exportStar(require("./ComputeGlycemicLoad200Response"), exports);
__exportStar(require("./ComputeGlycemicLoad200ResponseIngredientsInner"), exports);
__exportStar(require("./ComputeGlycemicLoadRequest"), exports);
__exportStar(require("./ComputeIngredientAmount200Response"), exports);
__exportStar(require("./ConnectUser200Response"), exports);
__exportStar(require("./ConnectUserRequest"), exports);
__exportStar(require("./ConvertAmounts200Response"), exports);
__exportStar(require("./CreateRecipeCard200Response"), exports);
__exportStar(require("./DeleteFromMealPlanRequest"), exports);
__exportStar(require("./DetectFoodInText200Response"), exports);
__exportStar(require("./DetectFoodInText200ResponseAnnotationsInner"), exports);
__exportStar(require("./GenerateMealPlan200Response"), exports);
__exportStar(require("./GenerateMealPlan200ResponseNutrients"), exports);
__exportStar(require("./GenerateShoppingList200Response"), exports);
__exportStar(require("./GenerateShoppingListRequest"), exports);
__exportStar(require("./GetARandomFoodJoke200Response"), exports);
__exportStar(require("./GetAnalyzedRecipeInstructions200Response"), exports);
__exportStar(require("./GetAnalyzedRecipeInstructions200ResponseIngredientsInner"), exports);
__exportStar(require("./GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner"), exports);
__exportStar(require("./GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner"), exports);
__exportStar(require("./GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner"), exports);
__exportStar(require("./GetComparableProducts200Response"), exports);
__exportStar(require("./GetComparableProducts200ResponseComparableProducts"), exports);
__exportStar(require("./GetComparableProducts200ResponseComparableProductsProteinInner"), exports);
__exportStar(require("./GetConversationSuggests200Response"), exports);
__exportStar(require("./GetConversationSuggests200ResponseSuggests"), exports);
__exportStar(require("./GetConversationSuggests200ResponseSuggestsInner"), exports);
__exportStar(require("./GetDishPairingForWine200Response"), exports);
__exportStar(require("./GetIngredientInformation200Response"), exports);
__exportStar(require("./GetIngredientInformation200ResponseNutrition"), exports);
__exportStar(require("./GetIngredientSubstitutes200Response"), exports);
__exportStar(require("./GetMealPlanTemplate200Response"), exports);
__exportStar(require("./GetMealPlanTemplate200ResponseDaysInner"), exports);
__exportStar(require("./GetMealPlanTemplate200ResponseDaysInnerItemsInner"), exports);
__exportStar(require("./GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue"), exports);
__exportStar(require("./GetMealPlanTemplates200Response"), exports);
__exportStar(require("./GetMealPlanWeek200Response"), exports);
__exportStar(require("./GetMealPlanWeek200ResponseDaysInner"), exports);
__exportStar(require("./GetMealPlanWeek200ResponseDaysInnerItemsInner"), exports);
__exportStar(require("./GetMealPlanWeek200ResponseDaysInnerItemsInnerValue"), exports);
__exportStar(require("./GetMealPlanWeek200ResponseDaysInnerNutritionSummary"), exports);
__exportStar(require("./GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner"), exports);
__exportStar(require("./GetMenuItemInformation200Response"), exports);
__exportStar(require("./GetProductInformation200Response"), exports);
__exportStar(require("./GetProductInformation200ResponseIngredientsInner"), exports);
__exportStar(require("./GetRandomFoodTrivia200Response"), exports);
__exportStar(require("./GetRandomRecipes200Response"), exports);
__exportStar(require("./GetRandomRecipes200ResponseRecipesInner"), exports);
__exportStar(require("./GetRecipeEquipmentByID200Response"), exports);
__exportStar(require("./GetRecipeEquipmentByID200ResponseEquipmentInner"), exports);
__exportStar(require("./GetRecipeInformation200Response"), exports);
__exportStar(require("./GetRecipeInformation200ResponseExtendedIngredientsInner"), exports);
__exportStar(require("./GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures"), exports);
__exportStar(require("./GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric"), exports);
__exportStar(require("./GetRecipeInformation200ResponseWinePairing"), exports);
__exportStar(require("./GetRecipeInformation200ResponseWinePairingProductMatchesInner"), exports);
__exportStar(require("./GetRecipeInformationBulk200ResponseInner"), exports);
__exportStar(require("./GetRecipeIngredientsByID200Response"), exports);
__exportStar(require("./GetRecipeIngredientsByID200ResponseIngredientsInner"), exports);
__exportStar(require("./GetRecipeNutritionWidgetByID200Response"), exports);
__exportStar(require("./GetRecipeNutritionWidgetByID200ResponseBadInner"), exports);
__exportStar(require("./GetRecipeNutritionWidgetByID200ResponseGoodInner"), exports);
__exportStar(require("./GetRecipePriceBreakdownByID200Response"), exports);
__exportStar(require("./GetRecipePriceBreakdownByID200ResponseIngredientsInner"), exports);
__exportStar(require("./GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount"), exports);
__exportStar(require("./GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric"), exports);
__exportStar(require("./GetRecipeTasteByID200Response"), exports);
__exportStar(require("./GetShoppingList200Response"), exports);
__exportStar(require("./GetShoppingList200ResponseAislesInner"), exports);
__exportStar(require("./GetShoppingList200ResponseAislesInnerItemsInner"), exports);
__exportStar(require("./GetShoppingList200ResponseAislesInnerItemsInnerMeasures"), exports);
__exportStar(require("./GetSimilarRecipes200ResponseInner"), exports);
__exportStar(require("./GetWineDescription200Response"), exports);
__exportStar(require("./GetWinePairing200Response"), exports);
__exportStar(require("./GetWinePairing200ResponseProductMatchesInner"), exports);
__exportStar(require("./GetWineRecommendation200Response"), exports);
__exportStar(require("./GetWineRecommendation200ResponseRecommendedWinesInner"), exports);
__exportStar(require("./GuessNutritionByDishName200Response"), exports);
__exportStar(require("./GuessNutritionByDishName200ResponseCalories"), exports);
__exportStar(require("./GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent"), exports);
__exportStar(require("./ImageAnalysisByURL200Response"), exports);
__exportStar(require("./ImageAnalysisByURL200ResponseCategory"), exports);
__exportStar(require("./ImageAnalysisByURL200ResponseNutrition"), exports);
__exportStar(require("./ImageAnalysisByURL200ResponseNutritionCalories"), exports);
__exportStar(require("./ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent"), exports);
__exportStar(require("./ImageAnalysisByURL200ResponseRecipesInner"), exports);
__exportStar(require("./ImageClassificationByURL200Response"), exports);
__exportStar(require("./IngredientSearch200Response"), exports);
__exportStar(require("./IngredientSearch200ResponseResultsInner"), exports);
__exportStar(require("./MapIngredientsToGroceryProducts200ResponseInner"), exports);
__exportStar(require("./MapIngredientsToGroceryProducts200ResponseInnerProductsInner"), exports);
__exportStar(require("./MapIngredientsToGroceryProductsRequest"), exports);
__exportStar(require("./ParseIngredients200ResponseInner"), exports);
__exportStar(require("./ParseIngredients200ResponseInnerEstimatedCost"), exports);
__exportStar(require("./ParseIngredients200ResponseInnerNutrition"), exports);
__exportStar(require("./ParseIngredients200ResponseInnerNutritionCaloricBreakdown"), exports);
__exportStar(require("./ParseIngredients200ResponseInnerNutritionNutrientsInner"), exports);
__exportStar(require("./ParseIngredients200ResponseInnerNutritionPropertiesInner"), exports);
__exportStar(require("./ParseIngredients200ResponseInnerNutritionWeightPerServing"), exports);
__exportStar(require("./QuickAnswer200Response"), exports);
__exportStar(require("./SearchAllFood200Response"), exports);
__exportStar(require("./SearchAllFood200ResponseSearchResultsInner"), exports);
__exportStar(require("./SearchAllFood200ResponseSearchResultsInnerResultsInner"), exports);
__exportStar(require("./SearchCustomFoods200Response"), exports);
__exportStar(require("./SearchCustomFoods200ResponseCustomFoodsInner"), exports);
__exportStar(require("./SearchFoodVideos200Response"), exports);
__exportStar(require("./SearchFoodVideos200ResponseVideosInner"), exports);
__exportStar(require("./SearchGroceryProducts200Response"), exports);
__exportStar(require("./SearchGroceryProductsByUPC200Response"), exports);
__exportStar(require("./SearchGroceryProductsByUPC200ResponseIngredientsInner"), exports);
__exportStar(require("./SearchGroceryProductsByUPC200ResponseNutrition"), exports);
__exportStar(require("./SearchGroceryProductsByUPC200ResponseServings"), exports);
__exportStar(require("./SearchMenuItems200Response"), exports);
__exportStar(require("./SearchMenuItems200ResponseMenuItemsInner"), exports);
__exportStar(require("./SearchRecipes200Response"), exports);
__exportStar(require("./SearchRecipes200ResponseResultsInner"), exports);
__exportStar(require("./SearchRecipesByIngredients200ResponseInner"), exports);
__exportStar(require("./SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner"), exports);
__exportStar(require("./SearchRecipesByNutrients200ResponseInner"), exports);
__exportStar(require("./SearchSiteContent200Response"), exports);
__exportStar(require("./SearchSiteContent200ResponseArticlesInner"), exports);
__exportStar(require("./SearchSiteContent200ResponseGroceryProductsInner"), exports);
__exportStar(require("./SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner"), exports);
__exportStar(require("./SummarizeRecipe200Response"), exports);
__exportStar(require("./TalkToChatbot200Response"), exports);
var AddMealPlanTemplate200Response_1 = require("./AddMealPlanTemplate200Response");
var AddMealPlanTemplate200ResponseItemsInner_1 = require("./AddMealPlanTemplate200ResponseItemsInner");
var AddMealPlanTemplate200ResponseItemsInnerValue_1 = require("./AddMealPlanTemplate200ResponseItemsInnerValue");
var AddToMealPlanRequest_1 = require("./AddToMealPlanRequest");
var AddToMealPlanRequest1_1 = require("./AddToMealPlanRequest1");
var AddToMealPlanRequest1Value_1 = require("./AddToMealPlanRequest1Value");
var AddToMealPlanRequest1ValueIngredientsInner_1 = require("./AddToMealPlanRequest1ValueIngredientsInner");
var AddToShoppingListRequest_1 = require("./AddToShoppingListRequest");
var AnalyzeARecipeSearchQuery200Response_1 = require("./AnalyzeARecipeSearchQuery200Response");
var AnalyzeARecipeSearchQuery200ResponseDishesInner_1 = require("./AnalyzeARecipeSearchQuery200ResponseDishesInner");
var AnalyzeARecipeSearchQuery200ResponseIngredientsInner_1 = require("./AnalyzeARecipeSearchQuery200ResponseIngredientsInner");
var AnalyzeRecipeInstructions200Response_1 = require("./AnalyzeRecipeInstructions200Response");
var AnalyzeRecipeInstructions200ResponseIngredientsInner_1 = require("./AnalyzeRecipeInstructions200ResponseIngredientsInner");
var AnalyzeRecipeInstructions200ResponseParsedInstructionsInner_1 = require("./AnalyzeRecipeInstructions200ResponseParsedInstructionsInner");
var AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner_1 = require("./AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner");
var AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner_1 = require("./AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner");
var AutocompleteIngredientSearch200ResponseInner_1 = require("./AutocompleteIngredientSearch200ResponseInner");
var AutocompleteMenuItemSearch200Response_1 = require("./AutocompleteMenuItemSearch200Response");
var AutocompleteProductSearch200Response_1 = require("./AutocompleteProductSearch200Response");
var AutocompleteProductSearch200ResponseResultsInner_1 = require("./AutocompleteProductSearch200ResponseResultsInner");
var AutocompleteRecipeSearch200ResponseInner_1 = require("./AutocompleteRecipeSearch200ResponseInner");
var ClassifyCuisine200Response_1 = require("./ClassifyCuisine200Response");
var ClassifyGroceryProduct200Response_1 = require("./ClassifyGroceryProduct200Response");
var ClassifyGroceryProductBulk200ResponseInner_1 = require("./ClassifyGroceryProductBulk200ResponseInner");
var ClassifyGroceryProductBulkRequestInner_1 = require("./ClassifyGroceryProductBulkRequestInner");
var ClassifyGroceryProductRequest_1 = require("./ClassifyGroceryProductRequest");
var ClearMealPlanDayRequest_1 = require("./ClearMealPlanDayRequest");
var ComputeGlycemicLoad200Response_1 = require("./ComputeGlycemicLoad200Response");
var ComputeGlycemicLoad200ResponseIngredientsInner_1 = require("./ComputeGlycemicLoad200ResponseIngredientsInner");
var ComputeGlycemicLoadRequest_1 = require("./ComputeGlycemicLoadRequest");
var ComputeIngredientAmount200Response_1 = require("./ComputeIngredientAmount200Response");
var ConnectUser200Response_1 = require("./ConnectUser200Response");
var ConnectUserRequest_1 = require("./ConnectUserRequest");
var ConvertAmounts200Response_1 = require("./ConvertAmounts200Response");
var CreateRecipeCard200Response_1 = require("./CreateRecipeCard200Response");
var DeleteFromMealPlanRequest_1 = require("./DeleteFromMealPlanRequest");
var DetectFoodInText200Response_1 = require("./DetectFoodInText200Response");
var DetectFoodInText200ResponseAnnotationsInner_1 = require("./DetectFoodInText200ResponseAnnotationsInner");
var GenerateMealPlan200Response_1 = require("./GenerateMealPlan200Response");
var GenerateMealPlan200ResponseNutrients_1 = require("./GenerateMealPlan200ResponseNutrients");
var GenerateShoppingList200Response_1 = require("./GenerateShoppingList200Response");
var GenerateShoppingListRequest_1 = require("./GenerateShoppingListRequest");
var GetARandomFoodJoke200Response_1 = require("./GetARandomFoodJoke200Response");
var GetAnalyzedRecipeInstructions200Response_1 = require("./GetAnalyzedRecipeInstructions200Response");
var GetAnalyzedRecipeInstructions200ResponseIngredientsInner_1 = require("./GetAnalyzedRecipeInstructions200ResponseIngredientsInner");
var GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner_1 = require("./GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner");
var GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner_1 = require("./GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner");
var GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner_1 = require("./GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner");
var GetComparableProducts200Response_1 = require("./GetComparableProducts200Response");
var GetComparableProducts200ResponseComparableProducts_1 = require("./GetComparableProducts200ResponseComparableProducts");
var GetComparableProducts200ResponseComparableProductsProteinInner_1 = require("./GetComparableProducts200ResponseComparableProductsProteinInner");
var GetConversationSuggests200Response_1 = require("./GetConversationSuggests200Response");
var GetConversationSuggests200ResponseSuggests_1 = require("./GetConversationSuggests200ResponseSuggests");
var GetConversationSuggests200ResponseSuggestsInner_1 = require("./GetConversationSuggests200ResponseSuggestsInner");
var GetDishPairingForWine200Response_1 = require("./GetDishPairingForWine200Response");
var GetIngredientInformation200Response_1 = require("./GetIngredientInformation200Response");
var GetIngredientInformation200ResponseNutrition_1 = require("./GetIngredientInformation200ResponseNutrition");
var GetIngredientSubstitutes200Response_1 = require("./GetIngredientSubstitutes200Response");
var GetMealPlanTemplate200Response_1 = require("./GetMealPlanTemplate200Response");
var GetMealPlanTemplate200ResponseDaysInner_1 = require("./GetMealPlanTemplate200ResponseDaysInner");
var GetMealPlanTemplate200ResponseDaysInnerItemsInner_1 = require("./GetMealPlanTemplate200ResponseDaysInnerItemsInner");
var GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue_1 = require("./GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue");
var GetMealPlanTemplates200Response_1 = require("./GetMealPlanTemplates200Response");
var GetMealPlanWeek200Response_1 = require("./GetMealPlanWeek200Response");
var GetMealPlanWeek200ResponseDaysInner_1 = require("./GetMealPlanWeek200ResponseDaysInner");
var GetMealPlanWeek200ResponseDaysInnerItemsInner_1 = require("./GetMealPlanWeek200ResponseDaysInnerItemsInner");
var GetMealPlanWeek200ResponseDaysInnerItemsInnerValue_1 = require("./GetMealPlanWeek200ResponseDaysInnerItemsInnerValue");
var GetMealPlanWeek200ResponseDaysInnerNutritionSummary_1 = require("./GetMealPlanWeek200ResponseDaysInnerNutritionSummary");
var GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner_1 = require("./GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner");
var GetMenuItemInformation200Response_1 = require("./GetMenuItemInformation200Response");
var GetProductInformation200Response_1 = require("./GetProductInformation200Response");
var GetProductInformation200ResponseIngredientsInner_1 = require("./GetProductInformation200ResponseIngredientsInner");
var GetRandomFoodTrivia200Response_1 = require("./GetRandomFoodTrivia200Response");
var GetRandomRecipes200Response_1 = require("./GetRandomRecipes200Response");
var GetRandomRecipes200ResponseRecipesInner_1 = require("./GetRandomRecipes200ResponseRecipesInner");
var GetRecipeEquipmentByID200Response_1 = require("./GetRecipeEquipmentByID200Response");
var GetRecipeEquipmentByID200ResponseEquipmentInner_1 = require("./GetRecipeEquipmentByID200ResponseEquipmentInner");
var GetRecipeInformation200Response_1 = require("./GetRecipeInformation200Response");
var GetRecipeInformation200ResponseExtendedIngredientsInner_1 = require("./GetRecipeInformation200ResponseExtendedIngredientsInner");
var GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures_1 = require("./GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures");
var GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric_1 = require("./GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric");
var GetRecipeInformation200ResponseWinePairing_1 = require("./GetRecipeInformation200ResponseWinePairing");
var GetRecipeInformation200ResponseWinePairingProductMatchesInner_1 = require("./GetRecipeInformation200ResponseWinePairingProductMatchesInner");
var GetRecipeInformationBulk200ResponseInner_1 = require("./GetRecipeInformationBulk200ResponseInner");
var GetRecipeIngredientsByID200Response_1 = require("./GetRecipeIngredientsByID200Response");
var GetRecipeIngredientsByID200ResponseIngredientsInner_1 = require("./GetRecipeIngredientsByID200ResponseIngredientsInner");
var GetRecipeNutritionWidgetByID200Response_1 = require("./GetRecipeNutritionWidgetByID200Response");
var GetRecipeNutritionWidgetByID200ResponseBadInner_1 = require("./GetRecipeNutritionWidgetByID200ResponseBadInner");
var GetRecipeNutritionWidgetByID200ResponseGoodInner_1 = require("./GetRecipeNutritionWidgetByID200ResponseGoodInner");
var GetRecipePriceBreakdownByID200Response_1 = require("./GetRecipePriceBreakdownByID200Response");
var GetRecipePriceBreakdownByID200ResponseIngredientsInner_1 = require("./GetRecipePriceBreakdownByID200ResponseIngredientsInner");
var GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount_1 = require("./GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount");
var GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric_1 = require("./GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric");
var GetRecipeTasteByID200Response_1 = require("./GetRecipeTasteByID200Response");
var GetShoppingList200Response_1 = require("./GetShoppingList200Response");
var GetShoppingList200ResponseAislesInner_1 = require("./GetShoppingList200ResponseAislesInner");
var GetShoppingList200ResponseAislesInnerItemsInner_1 = require("./GetShoppingList200ResponseAislesInnerItemsInner");
var GetShoppingList200ResponseAislesInnerItemsInnerMeasures_1 = require("./GetShoppingList200ResponseAislesInnerItemsInnerMeasures");
var GetSimilarRecipes200ResponseInner_1 = require("./GetSimilarRecipes200ResponseInner");
var GetWineDescription200Response_1 = require("./GetWineDescription200Response");
var GetWinePairing200Response_1 = require("./GetWinePairing200Response");
var GetWinePairing200ResponseProductMatchesInner_1 = require("./GetWinePairing200ResponseProductMatchesInner");
var GetWineRecommendation200Response_1 = require("./GetWineRecommendation200Response");
var GetWineRecommendation200ResponseRecommendedWinesInner_1 = require("./GetWineRecommendation200ResponseRecommendedWinesInner");
var GuessNutritionByDishName200Response_1 = require("./GuessNutritionByDishName200Response");
var GuessNutritionByDishName200ResponseCalories_1 = require("./GuessNutritionByDishName200ResponseCalories");
var GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent_1 = require("./GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent");
var ImageAnalysisByURL200Response_1 = require("./ImageAnalysisByURL200Response");
var ImageAnalysisByURL200ResponseCategory_1 = require("./ImageAnalysisByURL200ResponseCategory");
var ImageAnalysisByURL200ResponseNutrition_1 = require("./ImageAnalysisByURL200ResponseNutrition");
var ImageAnalysisByURL200ResponseNutritionCalories_1 = require("./ImageAnalysisByURL200ResponseNutritionCalories");
var ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent_1 = require("./ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent");
var ImageAnalysisByURL200ResponseRecipesInner_1 = require("./ImageAnalysisByURL200ResponseRecipesInner");
var ImageClassificationByURL200Response_1 = require("./ImageClassificationByURL200Response");
var IngredientSearch200Response_1 = require("./IngredientSearch200Response");
var IngredientSearch200ResponseResultsInner_1 = require("./IngredientSearch200ResponseResultsInner");
var MapIngredientsToGroceryProducts200ResponseInner_1 = require("./MapIngredientsToGroceryProducts200ResponseInner");
var MapIngredientsToGroceryProducts200ResponseInnerProductsInner_1 = require("./MapIngredientsToGroceryProducts200ResponseInnerProductsInner");
var MapIngredientsToGroceryProductsRequest_1 = require("./MapIngredientsToGroceryProductsRequest");
var ParseIngredients200ResponseInner_1 = require("./ParseIngredients200ResponseInner");
var ParseIngredients200ResponseInnerEstimatedCost_1 = require("./ParseIngredients200ResponseInnerEstimatedCost");
var ParseIngredients200ResponseInnerNutrition_1 = require("./ParseIngredients200ResponseInnerNutrition");
var ParseIngredients200ResponseInnerNutritionCaloricBreakdown_1 = require("./ParseIngredients200ResponseInnerNutritionCaloricBreakdown");
var ParseIngredients200ResponseInnerNutritionNutrientsInner_1 = require("./ParseIngredients200ResponseInnerNutritionNutrientsInner");
var ParseIngredients200ResponseInnerNutritionPropertiesInner_1 = require("./ParseIngredients200ResponseInnerNutritionPropertiesInner");
var ParseIngredients200ResponseInnerNutritionWeightPerServing_1 = require("./ParseIngredients200ResponseInnerNutritionWeightPerServing");
var QuickAnswer200Response_1 = require("./QuickAnswer200Response");
var SearchAllFood200Response_1 = require("./SearchAllFood200Response");
var SearchAllFood200ResponseSearchResultsInner_1 = require("./SearchAllFood200ResponseSearchResultsInner");
var SearchAllFood200ResponseSearchResultsInnerResultsInner_1 = require("./SearchAllFood200ResponseSearchResultsInnerResultsInner");
var SearchCustomFoods200Response_1 = require("./SearchCustomFoods200Response");
var SearchCustomFoods200ResponseCustomFoodsInner_1 = require("./SearchCustomFoods200ResponseCustomFoodsInner");
var SearchFoodVideos200Response_1 = require("./SearchFoodVideos200Response");
var SearchFoodVideos200ResponseVideosInner_1 = require("./SearchFoodVideos200ResponseVideosInner");
var SearchGroceryProducts200Response_1 = require("./SearchGroceryProducts200Response");
var SearchGroceryProductsByUPC200Response_1 = require("./SearchGroceryProductsByUPC200Response");
var SearchGroceryProductsByUPC200ResponseIngredientsInner_1 = require("./SearchGroceryProductsByUPC200ResponseIngredientsInner");
var SearchGroceryProductsByUPC200ResponseNutrition_1 = require("./SearchGroceryProductsByUPC200ResponseNutrition");
var SearchGroceryProductsByUPC200ResponseServings_1 = require("./SearchGroceryProductsByUPC200ResponseServings");
var SearchMenuItems200Response_1 = require("./SearchMenuItems200Response");
var SearchMenuItems200ResponseMenuItemsInner_1 = require("./SearchMenuItems200ResponseMenuItemsInner");
var SearchRecipes200Response_1 = require("./SearchRecipes200Response");
var SearchRecipes200ResponseResultsInner_1 = require("./SearchRecipes200ResponseResultsInner");
var SearchRecipesByIngredients200ResponseInner_1 = require("./SearchRecipesByIngredients200ResponseInner");
var SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner_1 = require("./SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner");
var SearchRecipesByNutrients200ResponseInner_1 = require("./SearchRecipesByNutrients200ResponseInner");
var SearchSiteContent200Response_1 = require("./SearchSiteContent200Response");
var SearchSiteContent200ResponseArticlesInner_1 = require("./SearchSiteContent200ResponseArticlesInner");
var SearchSiteContent200ResponseGroceryProductsInner_1 = require("./SearchSiteContent200ResponseGroceryProductsInner");
var SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner_1 = require("./SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner");
var SummarizeRecipe200Response_1 = require("./SummarizeRecipe200Response");
var TalkToChatbot200Response_1 = require("./TalkToChatbot200Response");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([]);
var typeMap = {
    "AddMealPlanTemplate200Response": AddMealPlanTemplate200Response_1.AddMealPlanTemplate200Response,
    "AddMealPlanTemplate200ResponseItemsInner": AddMealPlanTemplate200ResponseItemsInner_1.AddMealPlanTemplate200ResponseItemsInner,
    "AddMealPlanTemplate200ResponseItemsInnerValue": AddMealPlanTemplate200ResponseItemsInnerValue_1.AddMealPlanTemplate200ResponseItemsInnerValue,
    "AddToMealPlanRequest": AddToMealPlanRequest_1.AddToMealPlanRequest,
    "AddToMealPlanRequest1": AddToMealPlanRequest1_1.AddToMealPlanRequest1,
    "AddToMealPlanRequest1Value": AddToMealPlanRequest1Value_1.AddToMealPlanRequest1Value,
    "AddToMealPlanRequest1ValueIngredientsInner": AddToMealPlanRequest1ValueIngredientsInner_1.AddToMealPlanRequest1ValueIngredientsInner,
    "AddToShoppingListRequest": AddToShoppingListRequest_1.AddToShoppingListRequest,
    "AnalyzeARecipeSearchQuery200Response": AnalyzeARecipeSearchQuery200Response_1.AnalyzeARecipeSearchQuery200Response,
    "AnalyzeARecipeSearchQuery200ResponseDishesInner": AnalyzeARecipeSearchQuery200ResponseDishesInner_1.AnalyzeARecipeSearchQuery200ResponseDishesInner,
    "AnalyzeARecipeSearchQuery200ResponseIngredientsInner": AnalyzeARecipeSearchQuery200ResponseIngredientsInner_1.AnalyzeARecipeSearchQuery200ResponseIngredientsInner,
    "AnalyzeRecipeInstructions200Response": AnalyzeRecipeInstructions200Response_1.AnalyzeRecipeInstructions200Response,
    "AnalyzeRecipeInstructions200ResponseIngredientsInner": AnalyzeRecipeInstructions200ResponseIngredientsInner_1.AnalyzeRecipeInstructions200ResponseIngredientsInner,
    "AnalyzeRecipeInstructions200ResponseParsedInstructionsInner": AnalyzeRecipeInstructions200ResponseParsedInstructionsInner_1.AnalyzeRecipeInstructions200ResponseParsedInstructionsInner,
    "AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner": AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner_1.AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner,
    "AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner": AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner_1.AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner,
    "AutocompleteIngredientSearch200ResponseInner": AutocompleteIngredientSearch200ResponseInner_1.AutocompleteIngredientSearch200ResponseInner,
    "AutocompleteMenuItemSearch200Response": AutocompleteMenuItemSearch200Response_1.AutocompleteMenuItemSearch200Response,
    "AutocompleteProductSearch200Response": AutocompleteProductSearch200Response_1.AutocompleteProductSearch200Response,
    "AutocompleteProductSearch200ResponseResultsInner": AutocompleteProductSearch200ResponseResultsInner_1.AutocompleteProductSearch200ResponseResultsInner,
    "AutocompleteRecipeSearch200ResponseInner": AutocompleteRecipeSearch200ResponseInner_1.AutocompleteRecipeSearch200ResponseInner,
    "ClassifyCuisine200Response": ClassifyCuisine200Response_1.ClassifyCuisine200Response,
    "ClassifyGroceryProduct200Response": ClassifyGroceryProduct200Response_1.ClassifyGroceryProduct200Response,
    "ClassifyGroceryProductBulk200ResponseInner": ClassifyGroceryProductBulk200ResponseInner_1.ClassifyGroceryProductBulk200ResponseInner,
    "ClassifyGroceryProductBulkRequestInner": ClassifyGroceryProductBulkRequestInner_1.ClassifyGroceryProductBulkRequestInner,
    "ClassifyGroceryProductRequest": ClassifyGroceryProductRequest_1.ClassifyGroceryProductRequest,
    "ClearMealPlanDayRequest": ClearMealPlanDayRequest_1.ClearMealPlanDayRequest,
    "ComputeGlycemicLoad200Response": ComputeGlycemicLoad200Response_1.ComputeGlycemicLoad200Response,
    "ComputeGlycemicLoad200ResponseIngredientsInner": ComputeGlycemicLoad200ResponseIngredientsInner_1.ComputeGlycemicLoad200ResponseIngredientsInner,
    "ComputeGlycemicLoadRequest": ComputeGlycemicLoadRequest_1.ComputeGlycemicLoadRequest,
    "ComputeIngredientAmount200Response": ComputeIngredientAmount200Response_1.ComputeIngredientAmount200Response,
    "ConnectUser200Response": ConnectUser200Response_1.ConnectUser200Response,
    "ConnectUserRequest": ConnectUserRequest_1.ConnectUserRequest,
    "ConvertAmounts200Response": ConvertAmounts200Response_1.ConvertAmounts200Response,
    "CreateRecipeCard200Response": CreateRecipeCard200Response_1.CreateRecipeCard200Response,
    "DeleteFromMealPlanRequest": DeleteFromMealPlanRequest_1.DeleteFromMealPlanRequest,
    "DetectFoodInText200Response": DetectFoodInText200Response_1.DetectFoodInText200Response,
    "DetectFoodInText200ResponseAnnotationsInner": DetectFoodInText200ResponseAnnotationsInner_1.DetectFoodInText200ResponseAnnotationsInner,
    "GenerateMealPlan200Response": GenerateMealPlan200Response_1.GenerateMealPlan200Response,
    "GenerateMealPlan200ResponseNutrients": GenerateMealPlan200ResponseNutrients_1.GenerateMealPlan200ResponseNutrients,
    "GenerateShoppingList200Response": GenerateShoppingList200Response_1.GenerateShoppingList200Response,
    "GenerateShoppingListRequest": GenerateShoppingListRequest_1.GenerateShoppingListRequest,
    "GetARandomFoodJoke200Response": GetARandomFoodJoke200Response_1.GetARandomFoodJoke200Response,
    "GetAnalyzedRecipeInstructions200Response": GetAnalyzedRecipeInstructions200Response_1.GetAnalyzedRecipeInstructions200Response,
    "GetAnalyzedRecipeInstructions200ResponseIngredientsInner": GetAnalyzedRecipeInstructions200ResponseIngredientsInner_1.GetAnalyzedRecipeInstructions200ResponseIngredientsInner,
    "GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner": GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner_1.GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner,
    "GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner": GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner_1.GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner,
    "GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner": GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner_1.GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner,
    "GetComparableProducts200Response": GetComparableProducts200Response_1.GetComparableProducts200Response,
    "GetComparableProducts200ResponseComparableProducts": GetComparableProducts200ResponseComparableProducts_1.GetComparableProducts200ResponseComparableProducts,
    "GetComparableProducts200ResponseComparableProductsProteinInner": GetComparableProducts200ResponseComparableProductsProteinInner_1.GetComparableProducts200ResponseComparableProductsProteinInner,
    "GetConversationSuggests200Response": GetConversationSuggests200Response_1.GetConversationSuggests200Response,
    "GetConversationSuggests200ResponseSuggests": GetConversationSuggests200ResponseSuggests_1.GetConversationSuggests200ResponseSuggests,
    "GetConversationSuggests200ResponseSuggestsInner": GetConversationSuggests200ResponseSuggestsInner_1.GetConversationSuggests200ResponseSuggestsInner,
    "GetDishPairingForWine200Response": GetDishPairingForWine200Response_1.GetDishPairingForWine200Response,
    "GetIngredientInformation200Response": GetIngredientInformation200Response_1.GetIngredientInformation200Response,
    "GetIngredientInformation200ResponseNutrition": GetIngredientInformation200ResponseNutrition_1.GetIngredientInformation200ResponseNutrition,
    "GetIngredientSubstitutes200Response": GetIngredientSubstitutes200Response_1.GetIngredientSubstitutes200Response,
    "GetMealPlanTemplate200Response": GetMealPlanTemplate200Response_1.GetMealPlanTemplate200Response,
    "GetMealPlanTemplate200ResponseDaysInner": GetMealPlanTemplate200ResponseDaysInner_1.GetMealPlanTemplate200ResponseDaysInner,
    "GetMealPlanTemplate200ResponseDaysInnerItemsInner": GetMealPlanTemplate200ResponseDaysInnerItemsInner_1.GetMealPlanTemplate200ResponseDaysInnerItemsInner,
    "GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue": GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue_1.GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue,
    "GetMealPlanTemplates200Response": GetMealPlanTemplates200Response_1.GetMealPlanTemplates200Response,
    "GetMealPlanWeek200Response": GetMealPlanWeek200Response_1.GetMealPlanWeek200Response,
    "GetMealPlanWeek200ResponseDaysInner": GetMealPlanWeek200ResponseDaysInner_1.GetMealPlanWeek200ResponseDaysInner,
    "GetMealPlanWeek200ResponseDaysInnerItemsInner": GetMealPlanWeek200ResponseDaysInnerItemsInner_1.GetMealPlanWeek200ResponseDaysInnerItemsInner,
    "GetMealPlanWeek200ResponseDaysInnerItemsInnerValue": GetMealPlanWeek200ResponseDaysInnerItemsInnerValue_1.GetMealPlanWeek200ResponseDaysInnerItemsInnerValue,
    "GetMealPlanWeek200ResponseDaysInnerNutritionSummary": GetMealPlanWeek200ResponseDaysInnerNutritionSummary_1.GetMealPlanWeek200ResponseDaysInnerNutritionSummary,
    "GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner": GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner_1.GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner,
    "GetMenuItemInformation200Response": GetMenuItemInformation200Response_1.GetMenuItemInformation200Response,
    "GetProductInformation200Response": GetProductInformation200Response_1.GetProductInformation200Response,
    "GetProductInformation200ResponseIngredientsInner": GetProductInformation200ResponseIngredientsInner_1.GetProductInformation200ResponseIngredientsInner,
    "GetRandomFoodTrivia200Response": GetRandomFoodTrivia200Response_1.GetRandomFoodTrivia200Response,
    "GetRandomRecipes200Response": GetRandomRecipes200Response_1.GetRandomRecipes200Response,
    "GetRandomRecipes200ResponseRecipesInner": GetRandomRecipes200ResponseRecipesInner_1.GetRandomRecipes200ResponseRecipesInner,
    "GetRecipeEquipmentByID200Response": GetRecipeEquipmentByID200Response_1.GetRecipeEquipmentByID200Response,
    "GetRecipeEquipmentByID200ResponseEquipmentInner": GetRecipeEquipmentByID200ResponseEquipmentInner_1.GetRecipeEquipmentByID200ResponseEquipmentInner,
    "GetRecipeInformation200Response": GetRecipeInformation200Response_1.GetRecipeInformation200Response,
    "GetRecipeInformation200ResponseExtendedIngredientsInner": GetRecipeInformation200ResponseExtendedIngredientsInner_1.GetRecipeInformation200ResponseExtendedIngredientsInner,
    "GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures": GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures_1.GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures,
    "GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric": GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric_1.GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric,
    "GetRecipeInformation200ResponseWinePairing": GetRecipeInformation200ResponseWinePairing_1.GetRecipeInformation200ResponseWinePairing,
    "GetRecipeInformation200ResponseWinePairingProductMatchesInner": GetRecipeInformation200ResponseWinePairingProductMatchesInner_1.GetRecipeInformation200ResponseWinePairingProductMatchesInner,
    "GetRecipeInformationBulk200ResponseInner": GetRecipeInformationBulk200ResponseInner_1.GetRecipeInformationBulk200ResponseInner,
    "GetRecipeIngredientsByID200Response": GetRecipeIngredientsByID200Response_1.GetRecipeIngredientsByID200Response,
    "GetRecipeIngredientsByID200ResponseIngredientsInner": GetRecipeIngredientsByID200ResponseIngredientsInner_1.GetRecipeIngredientsByID200ResponseIngredientsInner,
    "GetRecipeNutritionWidgetByID200Response": GetRecipeNutritionWidgetByID200Response_1.GetRecipeNutritionWidgetByID200Response,
    "GetRecipeNutritionWidgetByID200ResponseBadInner": GetRecipeNutritionWidgetByID200ResponseBadInner_1.GetRecipeNutritionWidgetByID200ResponseBadInner,
    "GetRecipeNutritionWidgetByID200ResponseGoodInner": GetRecipeNutritionWidgetByID200ResponseGoodInner_1.GetRecipeNutritionWidgetByID200ResponseGoodInner,
    "GetRecipePriceBreakdownByID200Response": GetRecipePriceBreakdownByID200Response_1.GetRecipePriceBreakdownByID200Response,
    "GetRecipePriceBreakdownByID200ResponseIngredientsInner": GetRecipePriceBreakdownByID200ResponseIngredientsInner_1.GetRecipePriceBreakdownByID200ResponseIngredientsInner,
    "GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount": GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount_1.GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmount,
    "GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric": GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric_1.GetRecipePriceBreakdownByID200ResponseIngredientsInnerAmountMetric,
    "GetRecipeTasteByID200Response": GetRecipeTasteByID200Response_1.GetRecipeTasteByID200Response,
    "GetShoppingList200Response": GetShoppingList200Response_1.GetShoppingList200Response,
    "GetShoppingList200ResponseAislesInner": GetShoppingList200ResponseAislesInner_1.GetShoppingList200ResponseAislesInner,
    "GetShoppingList200ResponseAislesInnerItemsInner": GetShoppingList200ResponseAislesInnerItemsInner_1.GetShoppingList200ResponseAislesInnerItemsInner,
    "GetShoppingList200ResponseAislesInnerItemsInnerMeasures": GetShoppingList200ResponseAislesInnerItemsInnerMeasures_1.GetShoppingList200ResponseAislesInnerItemsInnerMeasures,
    "GetSimilarRecipes200ResponseInner": GetSimilarRecipes200ResponseInner_1.GetSimilarRecipes200ResponseInner,
    "GetWineDescription200Response": GetWineDescription200Response_1.GetWineDescription200Response,
    "GetWinePairing200Response": GetWinePairing200Response_1.GetWinePairing200Response,
    "GetWinePairing200ResponseProductMatchesInner": GetWinePairing200ResponseProductMatchesInner_1.GetWinePairing200ResponseProductMatchesInner,
    "GetWineRecommendation200Response": GetWineRecommendation200Response_1.GetWineRecommendation200Response,
    "GetWineRecommendation200ResponseRecommendedWinesInner": GetWineRecommendation200ResponseRecommendedWinesInner_1.GetWineRecommendation200ResponseRecommendedWinesInner,
    "GuessNutritionByDishName200Response": GuessNutritionByDishName200Response_1.GuessNutritionByDishName200Response,
    "GuessNutritionByDishName200ResponseCalories": GuessNutritionByDishName200ResponseCalories_1.GuessNutritionByDishName200ResponseCalories,
    "GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent": GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent_1.GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent,
    "ImageAnalysisByURL200Response": ImageAnalysisByURL200Response_1.ImageAnalysisByURL200Response,
    "ImageAnalysisByURL200ResponseCategory": ImageAnalysisByURL200ResponseCategory_1.ImageAnalysisByURL200ResponseCategory,
    "ImageAnalysisByURL200ResponseNutrition": ImageAnalysisByURL200ResponseNutrition_1.ImageAnalysisByURL200ResponseNutrition,
    "ImageAnalysisByURL200ResponseNutritionCalories": ImageAnalysisByURL200ResponseNutritionCalories_1.ImageAnalysisByURL200ResponseNutritionCalories,
    "ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent": ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent_1.ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent,
    "ImageAnalysisByURL200ResponseRecipesInner": ImageAnalysisByURL200ResponseRecipesInner_1.ImageAnalysisByURL200ResponseRecipesInner,
    "ImageClassificationByURL200Response": ImageClassificationByURL200Response_1.ImageClassificationByURL200Response,
    "IngredientSearch200Response": IngredientSearch200Response_1.IngredientSearch200Response,
    "IngredientSearch200ResponseResultsInner": IngredientSearch200ResponseResultsInner_1.IngredientSearch200ResponseResultsInner,
    "MapIngredientsToGroceryProducts200ResponseInner": MapIngredientsToGroceryProducts200ResponseInner_1.MapIngredientsToGroceryProducts200ResponseInner,
    "MapIngredientsToGroceryProducts200ResponseInnerProductsInner": MapIngredientsToGroceryProducts200ResponseInnerProductsInner_1.MapIngredientsToGroceryProducts200ResponseInnerProductsInner,
    "MapIngredientsToGroceryProductsRequest": MapIngredientsToGroceryProductsRequest_1.MapIngredientsToGroceryProductsRequest,
    "ParseIngredients200ResponseInner": ParseIngredients200ResponseInner_1.ParseIngredients200ResponseInner,
    "ParseIngredients200ResponseInnerEstimatedCost": ParseIngredients200ResponseInnerEstimatedCost_1.ParseIngredients200ResponseInnerEstimatedCost,
    "ParseIngredients200ResponseInnerNutrition": ParseIngredients200ResponseInnerNutrition_1.ParseIngredients200ResponseInnerNutrition,
    "ParseIngredients200ResponseInnerNutritionCaloricBreakdown": ParseIngredients200ResponseInnerNutritionCaloricBreakdown_1.ParseIngredients200ResponseInnerNutritionCaloricBreakdown,
    "ParseIngredients200ResponseInnerNutritionNutrientsInner": ParseIngredients200ResponseInnerNutritionNutrientsInner_1.ParseIngredients200ResponseInnerNutritionNutrientsInner,
    "ParseIngredients200ResponseInnerNutritionPropertiesInner": ParseIngredients200ResponseInnerNutritionPropertiesInner_1.ParseIngredients200ResponseInnerNutritionPropertiesInner,
    "ParseIngredients200ResponseInnerNutritionWeightPerServing": ParseIngredients200ResponseInnerNutritionWeightPerServing_1.ParseIngredients200ResponseInnerNutritionWeightPerServing,
    "QuickAnswer200Response": QuickAnswer200Response_1.QuickAnswer200Response,
    "SearchAllFood200Response": SearchAllFood200Response_1.SearchAllFood200Response,
    "SearchAllFood200ResponseSearchResultsInner": SearchAllFood200ResponseSearchResultsInner_1.SearchAllFood200ResponseSearchResultsInner,
    "SearchAllFood200ResponseSearchResultsInnerResultsInner": SearchAllFood200ResponseSearchResultsInnerResultsInner_1.SearchAllFood200ResponseSearchResultsInnerResultsInner,
    "SearchCustomFoods200Response": SearchCustomFoods200Response_1.SearchCustomFoods200Response,
    "SearchCustomFoods200ResponseCustomFoodsInner": SearchCustomFoods200ResponseCustomFoodsInner_1.SearchCustomFoods200ResponseCustomFoodsInner,
    "SearchFoodVideos200Response": SearchFoodVideos200Response_1.SearchFoodVideos200Response,
    "SearchFoodVideos200ResponseVideosInner": SearchFoodVideos200ResponseVideosInner_1.SearchFoodVideos200ResponseVideosInner,
    "SearchGroceryProducts200Response": SearchGroceryProducts200Response_1.SearchGroceryProducts200Response,
    "SearchGroceryProductsByUPC200Response": SearchGroceryProductsByUPC200Response_1.SearchGroceryProductsByUPC200Response,
    "SearchGroceryProductsByUPC200ResponseIngredientsInner": SearchGroceryProductsByUPC200ResponseIngredientsInner_1.SearchGroceryProductsByUPC200ResponseIngredientsInner,
    "SearchGroceryProductsByUPC200ResponseNutrition": SearchGroceryProductsByUPC200ResponseNutrition_1.SearchGroceryProductsByUPC200ResponseNutrition,
    "SearchGroceryProductsByUPC200ResponseServings": SearchGroceryProductsByUPC200ResponseServings_1.SearchGroceryProductsByUPC200ResponseServings,
    "SearchMenuItems200Response": SearchMenuItems200Response_1.SearchMenuItems200Response,
    "SearchMenuItems200ResponseMenuItemsInner": SearchMenuItems200ResponseMenuItemsInner_1.SearchMenuItems200ResponseMenuItemsInner,
    "SearchRecipes200Response": SearchRecipes200Response_1.SearchRecipes200Response,
    "SearchRecipes200ResponseResultsInner": SearchRecipes200ResponseResultsInner_1.SearchRecipes200ResponseResultsInner,
    "SearchRecipesByIngredients200ResponseInner": SearchRecipesByIngredients200ResponseInner_1.SearchRecipesByIngredients200ResponseInner,
    "SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner": SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner_1.SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner,
    "SearchRecipesByNutrients200ResponseInner": SearchRecipesByNutrients200ResponseInner_1.SearchRecipesByNutrients200ResponseInner,
    "SearchSiteContent200Response": SearchSiteContent200Response_1.SearchSiteContent200Response,
    "SearchSiteContent200ResponseArticlesInner": SearchSiteContent200ResponseArticlesInner_1.SearchSiteContent200ResponseArticlesInner,
    "SearchSiteContent200ResponseGroceryProductsInner": SearchSiteContent200ResponseGroceryProductsInner_1.SearchSiteContent200ResponseGroceryProductsInner,
    "SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner": SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner_1.SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner,
    "SummarizeRecipe200Response": SummarizeRecipe200Response_1.SummarizeRecipe200Response,
    "TalkToChatbot200Response": TalkToChatbot200Response_1.TalkToChatbot200Response,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map