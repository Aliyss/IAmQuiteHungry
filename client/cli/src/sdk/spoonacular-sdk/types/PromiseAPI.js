"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseWineApi = exports.PromiseRecipesApi = exports.PromiseProductsApi = exports.PromiseMiscApi = exports.PromiseMenuItemsApi = exports.PromiseMealPlanningApi = exports.PromiseIngredientsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseIngredientsApi = (function () {
    function PromiseIngredientsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableIngredientsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseIngredientsApi.prototype.autocompleteIngredientSearch = function (query, number, metaInformation, intolerances, _options) {
        var result = this.api.autocompleteIngredientSearch(query, number, metaInformation, intolerances, _options);
        return result.toPromise();
    };
    PromiseIngredientsApi.prototype.computeIngredientAmount = function (id, nutrient, target, unit, _options) {
        var result = this.api.computeIngredientAmount(id, nutrient, target, unit, _options);
        return result.toPromise();
    };
    PromiseIngredientsApi.prototype.getIngredientInformation = function (id, amount, unit, _options) {
        var result = this.api.getIngredientInformation(id, amount, unit, _options);
        return result.toPromise();
    };
    PromiseIngredientsApi.prototype.getIngredientSubstitutes = function (ingredientName, _options) {
        var result = this.api.getIngredientSubstitutes(ingredientName, _options);
        return result.toPromise();
    };
    PromiseIngredientsApi.prototype.getIngredientSubstitutesByID = function (id, _options) {
        var result = this.api.getIngredientSubstitutesByID(id, _options);
        return result.toPromise();
    };
    PromiseIngredientsApi.prototype.ingredientSearch = function (query, addChildren, minProteinPercent, maxProteinPercent, minFatPercent, maxFatPercent, minCarbsPercent, maxCarbsPercent, metaInformation, intolerances, sort, sortDirection, offset, number, _options) {
        var result = this.api.ingredientSearch(query, addChildren, minProteinPercent, maxProteinPercent, minFatPercent, maxFatPercent, minCarbsPercent, maxCarbsPercent, metaInformation, intolerances, sort, sortDirection, offset, number, _options);
        return result.toPromise();
    };
    PromiseIngredientsApi.prototype.ingredientsByIDImage = function (id, measure, _options) {
        var result = this.api.ingredientsByIDImage(id, measure, _options);
        return result.toPromise();
    };
    PromiseIngredientsApi.prototype.mapIngredientsToGroceryProducts = function (mapIngredientsToGroceryProductsRequest, _options) {
        var result = this.api.mapIngredientsToGroceryProducts(mapIngredientsToGroceryProductsRequest, _options);
        return result.toPromise();
    };
    PromiseIngredientsApi.prototype.visualizeIngredients = function (contentType, language, accept, _options) {
        var result = this.api.visualizeIngredients(contentType, language, accept, _options);
        return result.toPromise();
    };
    return PromiseIngredientsApi;
}());
exports.PromiseIngredientsApi = PromiseIngredientsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseMealPlanningApi = (function () {
    function PromiseMealPlanningApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableMealPlanningApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMealPlanningApi.prototype.addMealPlanTemplate = function (username, hash, addToMealPlanRequest, _options) {
        var result = this.api.addMealPlanTemplate(username, hash, addToMealPlanRequest, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.addToMealPlan = function (username, hash, addToMealPlanRequest, _options) {
        var result = this.api.addToMealPlan(username, hash, addToMealPlanRequest, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.addToShoppingList = function (username, hash, addToMealPlanRequest, _options) {
        var result = this.api.addToShoppingList(username, hash, addToMealPlanRequest, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.clearMealPlanDay = function (username, date, hash, clearMealPlanDayRequest, _options) {
        var result = this.api.clearMealPlanDay(username, date, hash, clearMealPlanDayRequest, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.connectUser = function (body, _options) {
        var result = this.api.connectUser(body, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.deleteFromMealPlan = function (username, id, hash, deleteFromMealPlanRequest, _options) {
        var result = this.api.deleteFromMealPlan(username, id, hash, deleteFromMealPlanRequest, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.deleteFromShoppingList = function (username, id, hash, deleteFromMealPlanRequest, _options) {
        var result = this.api.deleteFromShoppingList(username, id, hash, deleteFromMealPlanRequest, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.deleteMealPlanTemplate = function (username, id, hash, deleteFromMealPlanRequest, _options) {
        var result = this.api.deleteMealPlanTemplate(username, id, hash, deleteFromMealPlanRequest, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.generateMealPlan = function (timeFrame, targetCalories, diet, exclude, _options) {
        var result = this.api.generateMealPlan(timeFrame, targetCalories, diet, exclude, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.generateShoppingList = function (username, startDate, endDate, hash, generateShoppingListRequest, _options) {
        var result = this.api.generateShoppingList(username, startDate, endDate, hash, generateShoppingListRequest, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.getMealPlanTemplate = function (username, id, hash, _options) {
        var result = this.api.getMealPlanTemplate(username, id, hash, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.getMealPlanTemplates = function (username, hash, _options) {
        var result = this.api.getMealPlanTemplates(username, hash, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.getMealPlanWeek = function (username, startDate, hash, _options) {
        var result = this.api.getMealPlanWeek(username, startDate, hash, _options);
        return result.toPromise();
    };
    PromiseMealPlanningApi.prototype.getShoppingList = function (username, hash, _options) {
        var result = this.api.getShoppingList(username, hash, _options);
        return result.toPromise();
    };
    return PromiseMealPlanningApi;
}());
exports.PromiseMealPlanningApi = PromiseMealPlanningApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseMenuItemsApi = (function () {
    function PromiseMenuItemsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableMenuItemsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMenuItemsApi.prototype.autocompleteMenuItemSearch = function (query, number, _options) {
        var result = this.api.autocompleteMenuItemSearch(query, number, _options);
        return result.toPromise();
    };
    PromiseMenuItemsApi.prototype.getMenuItemInformation = function (id, _options) {
        var result = this.api.getMenuItemInformation(id, _options);
        return result.toPromise();
    };
    PromiseMenuItemsApi.prototype.menuItemNutritionByIDImage = function (id, _options) {
        var result = this.api.menuItemNutritionByIDImage(id, _options);
        return result.toPromise();
    };
    PromiseMenuItemsApi.prototype.menuItemNutritionLabelImage = function (id, showOptionalNutrients, showZeroValues, showIngredients, _options) {
        var result = this.api.menuItemNutritionLabelImage(id, showOptionalNutrients, showZeroValues, showIngredients, _options);
        return result.toPromise();
    };
    PromiseMenuItemsApi.prototype.menuItemNutritionLabelWidget = function (id, defaultCss, showOptionalNutrients, showZeroValues, showIngredients, _options) {
        var result = this.api.menuItemNutritionLabelWidget(id, defaultCss, showOptionalNutrients, showZeroValues, showIngredients, _options);
        return result.toPromise();
    };
    PromiseMenuItemsApi.prototype.searchMenuItems = function (query, minCalories, maxCalories, minCarbs, maxCarbs, minProtein, maxProtein, minFat, maxFat, addMenuItemInformation, offset, number, _options) {
        var result = this.api.searchMenuItems(query, minCalories, maxCalories, minCarbs, maxCarbs, minProtein, maxProtein, minFat, maxFat, addMenuItemInformation, offset, number, _options);
        return result.toPromise();
    };
    PromiseMenuItemsApi.prototype.visualizeMenuItemNutritionByID = function (id, defaultCss, accept, _options) {
        var result = this.api.visualizeMenuItemNutritionByID(id, defaultCss, accept, _options);
        return result.toPromise();
    };
    return PromiseMenuItemsApi;
}());
exports.PromiseMenuItemsApi = PromiseMenuItemsApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseMiscApi = (function () {
    function PromiseMiscApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableMiscApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMiscApi.prototype.detectFoodInText = function (contentType, _options) {
        var result = this.api.detectFoodInText(contentType, _options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.getARandomFoodJoke = function (_options) {
        var result = this.api.getARandomFoodJoke(_options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.getConversationSuggests = function (query, number, _options) {
        var result = this.api.getConversationSuggests(query, number, _options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.getRandomFoodTrivia = function (_options) {
        var result = this.api.getRandomFoodTrivia(_options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.imageAnalysisByURL = function (imageUrl, _options) {
        var result = this.api.imageAnalysisByURL(imageUrl, _options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.imageClassificationByURL = function (imageUrl, _options) {
        var result = this.api.imageClassificationByURL(imageUrl, _options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.searchAllFood = function (query, offset, number, _options) {
        var result = this.api.searchAllFood(query, offset, number, _options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.searchCustomFoods = function (username, hash, query, offset, number, _options) {
        var result = this.api.searchCustomFoods(username, hash, query, offset, number, _options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.searchFoodVideos = function (query, type, cuisine, diet, includeIngredients, excludeIngredients, minLength, maxLength, offset, number, _options) {
        var result = this.api.searchFoodVideos(query, type, cuisine, diet, includeIngredients, excludeIngredients, minLength, maxLength, offset, number, _options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.searchSiteContent = function (query, _options) {
        var result = this.api.searchSiteContent(query, _options);
        return result.toPromise();
    };
    PromiseMiscApi.prototype.talkToChatbot = function (text, contextId, _options) {
        var result = this.api.talkToChatbot(text, contextId, _options);
        return result.toPromise();
    };
    return PromiseMiscApi;
}());
exports.PromiseMiscApi = PromiseMiscApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseProductsApi = (function () {
    function PromiseProductsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseProductsApi.prototype.autocompleteProductSearch = function (query, number, _options) {
        var result = this.api.autocompleteProductSearch(query, number, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.classifyGroceryProduct = function (classifyGroceryProductRequest, locale, _options) {
        var result = this.api.classifyGroceryProduct(classifyGroceryProductRequest, locale, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.classifyGroceryProductBulk = function (classifyGroceryProductBulkRequestInner, locale, _options) {
        var result = this.api.classifyGroceryProductBulk(classifyGroceryProductBulkRequestInner, locale, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.getComparableProducts = function (upc, _options) {
        var result = this.api.getComparableProducts(upc, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.getProductInformation = function (id, _options) {
        var result = this.api.getProductInformation(id, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.productNutritionByIDImage = function (id, _options) {
        var result = this.api.productNutritionByIDImage(id, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.productNutritionLabelImage = function (id, showOptionalNutrients, showZeroValues, showIngredients, _options) {
        var result = this.api.productNutritionLabelImage(id, showOptionalNutrients, showZeroValues, showIngredients, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.productNutritionLabelWidget = function (id, defaultCss, showOptionalNutrients, showZeroValues, showIngredients, _options) {
        var result = this.api.productNutritionLabelWidget(id, defaultCss, showOptionalNutrients, showZeroValues, showIngredients, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.searchGroceryProducts = function (query, minCalories, maxCalories, minCarbs, maxCarbs, minProtein, maxProtein, minFat, maxFat, addProductInformation, offset, number, _options) {
        var result = this.api.searchGroceryProducts(query, minCalories, maxCalories, minCarbs, maxCarbs, minProtein, maxProtein, minFat, maxFat, addProductInformation, offset, number, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.searchGroceryProductsByUPC = function (upc, _options) {
        var result = this.api.searchGroceryProductsByUPC(upc, _options);
        return result.toPromise();
    };
    PromiseProductsApi.prototype.visualizeProductNutritionByID = function (id, defaultCss, accept, _options) {
        var result = this.api.visualizeProductNutritionByID(id, defaultCss, accept, _options);
        return result.toPromise();
    };
    return PromiseProductsApi;
}());
exports.PromiseProductsApi = PromiseProductsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseRecipesApi = (function () {
    function PromiseRecipesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableRecipesApi(configuration, requestFactory, responseProcessor);
    }
    PromiseRecipesApi.prototype.analyzeARecipeSearchQuery = function (q, _options) {
        var result = this.api.analyzeARecipeSearchQuery(q, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.analyzeRecipeInstructions = function (contentType, _options) {
        var result = this.api.analyzeRecipeInstructions(contentType, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.autocompleteRecipeSearch = function (query, number, _options) {
        var result = this.api.autocompleteRecipeSearch(query, number, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.classifyCuisine = function (contentType, _options) {
        var result = this.api.classifyCuisine(contentType, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.computeGlycemicLoad = function (computeGlycemicLoadRequest, language, _options) {
        var result = this.api.computeGlycemicLoad(computeGlycemicLoadRequest, language, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.convertAmounts = function (ingredientName, sourceAmount, sourceUnit, targetUnit, _options) {
        var result = this.api.convertAmounts(ingredientName, sourceAmount, sourceUnit, targetUnit, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.createRecipeCard = function (contentType, _options) {
        var result = this.api.createRecipeCard(contentType, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.equipmentByIDImage = function (id, _options) {
        var result = this.api.equipmentByIDImage(id, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.extractRecipeFromWebsite = function (url, forceExtraction, analyze, includeNutrition, includeTaste, _options) {
        var result = this.api.extractRecipeFromWebsite(url, forceExtraction, analyze, includeNutrition, includeTaste, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getAnalyzedRecipeInstructions = function (id, stepBreakdown, _options) {
        var result = this.api.getAnalyzedRecipeInstructions(id, stepBreakdown, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getRandomRecipes = function (limitLicense, tags, number, _options) {
        var result = this.api.getRandomRecipes(limitLicense, tags, number, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getRecipeEquipmentByID = function (id, _options) {
        var result = this.api.getRecipeEquipmentByID(id, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getRecipeInformation = function (id, includeNutrition, _options) {
        var result = this.api.getRecipeInformation(id, includeNutrition, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getRecipeInformationBulk = function (ids, includeNutrition, _options) {
        var result = this.api.getRecipeInformationBulk(ids, includeNutrition, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getRecipeIngredientsByID = function (id, _options) {
        var result = this.api.getRecipeIngredientsByID(id, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getRecipeNutritionWidgetByID = function (id, _options) {
        var result = this.api.getRecipeNutritionWidgetByID(id, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getRecipePriceBreakdownByID = function (id, _options) {
        var result = this.api.getRecipePriceBreakdownByID(id, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getRecipeTasteByID = function (id, normalize, _options) {
        var result = this.api.getRecipeTasteByID(id, normalize, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.getSimilarRecipes = function (id, number, limitLicense, _options) {
        var result = this.api.getSimilarRecipes(id, number, limitLicense, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.guessNutritionByDishName = function (title, _options) {
        var result = this.api.guessNutritionByDishName(title, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.ingredientsByIDImage = function (id, measure, _options) {
        var result = this.api.ingredientsByIDImage(id, measure, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.parseIngredients = function (contentType, language, _options) {
        var result = this.api.parseIngredients(contentType, language, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.priceBreakdownByIDImage = function (id, _options) {
        var result = this.api.priceBreakdownByIDImage(id, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.quickAnswer = function (q, _options) {
        var result = this.api.quickAnswer(q, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.recipeNutritionByIDImage = function (id, _options) {
        var result = this.api.recipeNutritionByIDImage(id, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.recipeNutritionLabelImage = function (id, showOptionalNutrients, showZeroValues, showIngredients, _options) {
        var result = this.api.recipeNutritionLabelImage(id, showOptionalNutrients, showZeroValues, showIngredients, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.recipeNutritionLabelWidget = function (id, defaultCss, showOptionalNutrients, showZeroValues, showIngredients, _options) {
        var result = this.api.recipeNutritionLabelWidget(id, defaultCss, showOptionalNutrients, showZeroValues, showIngredients, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.recipeTasteByIDImage = function (id, normalize, rgb, _options) {
        var result = this.api.recipeTasteByIDImage(id, normalize, rgb, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.searchRecipes = function (query, cuisine, excludeCuisine, diet, intolerances, equipment, includeIngredients, excludeIngredients, type, instructionsRequired, fillIngredients, addRecipeInformation, addRecipeNutrition, author, tags, recipeBoxId, titleMatch, maxReadyTime, ignorePantry, sort, sortDirection, minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories, minFat, maxFat, minAlcohol, maxAlcohol, minCaffeine, maxCaffeine, minCopper, maxCopper, minCalcium, maxCalcium, minCholine, maxCholine, minCholesterol, maxCholesterol, minFluoride, maxFluoride, minSaturatedFat, maxSaturatedFat, minVitaminA, maxVitaminA, minVitaminC, maxVitaminC, minVitaminD, maxVitaminD, minVitaminE, maxVitaminE, minVitaminK, maxVitaminK, minVitaminB1, maxVitaminB1, minVitaminB2, maxVitaminB2, minVitaminB5, maxVitaminB5, minVitaminB3, maxVitaminB3, minVitaminB6, maxVitaminB6, minVitaminB12, maxVitaminB12, minFiber, maxFiber, minFolate, maxFolate, minFolicAcid, maxFolicAcid, minIodine, maxIodine, minIron, maxIron, minMagnesium, maxMagnesium, minManganese, maxManganese, minPhosphorus, maxPhosphorus, minPotassium, maxPotassium, minSelenium, maxSelenium, minSodium, maxSodium, minSugar, maxSugar, minZinc, maxZinc, offset, number, limitLicense, _options) {
        var result = this.api.searchRecipes(query, cuisine, excludeCuisine, diet, intolerances, equipment, includeIngredients, excludeIngredients, type, instructionsRequired, fillIngredients, addRecipeInformation, addRecipeNutrition, author, tags, recipeBoxId, titleMatch, maxReadyTime, ignorePantry, sort, sortDirection, minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories, minFat, maxFat, minAlcohol, maxAlcohol, minCaffeine, maxCaffeine, minCopper, maxCopper, minCalcium, maxCalcium, minCholine, maxCholine, minCholesterol, maxCholesterol, minFluoride, maxFluoride, minSaturatedFat, maxSaturatedFat, minVitaminA, maxVitaminA, minVitaminC, maxVitaminC, minVitaminD, maxVitaminD, minVitaminE, maxVitaminE, minVitaminK, maxVitaminK, minVitaminB1, maxVitaminB1, minVitaminB2, maxVitaminB2, minVitaminB5, maxVitaminB5, minVitaminB3, maxVitaminB3, minVitaminB6, maxVitaminB6, minVitaminB12, maxVitaminB12, minFiber, maxFiber, minFolate, maxFolate, minFolicAcid, maxFolicAcid, minIodine, maxIodine, minIron, maxIron, minMagnesium, maxMagnesium, minManganese, maxManganese, minPhosphorus, maxPhosphorus, minPotassium, maxPotassium, minSelenium, maxSelenium, minSodium, maxSodium, minSugar, maxSugar, minZinc, maxZinc, offset, number, limitLicense, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.searchRecipesByIngredients = function (ingredients, number, limitLicense, ranking, ignorePantry, _options) {
        var result = this.api.searchRecipesByIngredients(ingredients, number, limitLicense, ranking, ignorePantry, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.searchRecipesByNutrients = function (minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories, minFat, maxFat, minAlcohol, maxAlcohol, minCaffeine, maxCaffeine, minCopper, maxCopper, minCalcium, maxCalcium, minCholine, maxCholine, minCholesterol, maxCholesterol, minFluoride, maxFluoride, minSaturatedFat, maxSaturatedFat, minVitaminA, maxVitaminA, minVitaminC, maxVitaminC, minVitaminD, maxVitaminD, minVitaminE, maxVitaminE, minVitaminK, maxVitaminK, minVitaminB1, maxVitaminB1, minVitaminB2, maxVitaminB2, minVitaminB5, maxVitaminB5, minVitaminB3, maxVitaminB3, minVitaminB6, maxVitaminB6, minVitaminB12, maxVitaminB12, minFiber, maxFiber, minFolate, maxFolate, minFolicAcid, maxFolicAcid, minIodine, maxIodine, minIron, maxIron, minMagnesium, maxMagnesium, minManganese, maxManganese, minPhosphorus, maxPhosphorus, minPotassium, maxPotassium, minSelenium, maxSelenium, minSodium, maxSodium, minSugar, maxSugar, minZinc, maxZinc, offset, number, random, limitLicense, _options) {
        var result = this.api.searchRecipesByNutrients(minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories, minFat, maxFat, minAlcohol, maxAlcohol, minCaffeine, maxCaffeine, minCopper, maxCopper, minCalcium, maxCalcium, minCholine, maxCholine, minCholesterol, maxCholesterol, minFluoride, maxFluoride, minSaturatedFat, maxSaturatedFat, minVitaminA, maxVitaminA, minVitaminC, maxVitaminC, minVitaminD, maxVitaminD, minVitaminE, maxVitaminE, minVitaminK, maxVitaminK, minVitaminB1, maxVitaminB1, minVitaminB2, maxVitaminB2, minVitaminB5, maxVitaminB5, minVitaminB3, maxVitaminB3, minVitaminB6, maxVitaminB6, minVitaminB12, maxVitaminB12, minFiber, maxFiber, minFolate, maxFolate, minFolicAcid, maxFolicAcid, minIodine, maxIodine, minIron, maxIron, minMagnesium, maxMagnesium, minManganese, maxManganese, minPhosphorus, maxPhosphorus, minPotassium, maxPotassium, minSelenium, maxSelenium, minSodium, maxSodium, minSugar, maxSugar, minZinc, maxZinc, offset, number, random, limitLicense, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.summarizeRecipe = function (id, _options) {
        var result = this.api.summarizeRecipe(id, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizeEquipment = function (contentType, accept, _options) {
        var result = this.api.visualizeEquipment(contentType, accept, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizePriceBreakdown = function (contentType, accept, language, _options) {
        var result = this.api.visualizePriceBreakdown(contentType, accept, language, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizeRecipeEquipmentByID = function (id, defaultCss, _options) {
        var result = this.api.visualizeRecipeEquipmentByID(id, defaultCss, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizeRecipeIngredientsByID = function (id, defaultCss, measure, _options) {
        var result = this.api.visualizeRecipeIngredientsByID(id, defaultCss, measure, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizeRecipeNutrition = function (contentType, accept, language, _options) {
        var result = this.api.visualizeRecipeNutrition(contentType, accept, language, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizeRecipeNutritionByID = function (id, defaultCss, accept, _options) {
        var result = this.api.visualizeRecipeNutritionByID(id, defaultCss, accept, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizeRecipePriceBreakdownByID = function (id, defaultCss, _options) {
        var result = this.api.visualizeRecipePriceBreakdownByID(id, defaultCss, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizeRecipeTaste = function (language, contentType, accept, normalize, rgb, _options) {
        var result = this.api.visualizeRecipeTaste(language, contentType, accept, normalize, rgb, _options);
        return result.toPromise();
    };
    PromiseRecipesApi.prototype.visualizeRecipeTasteByID = function (id, normalize, rgb, _options) {
        var result = this.api.visualizeRecipeTasteByID(id, normalize, rgb, _options);
        return result.toPromise();
    };
    return PromiseRecipesApi;
}());
exports.PromiseRecipesApi = PromiseRecipesApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseWineApi = (function () {
    function PromiseWineApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableWineApi(configuration, requestFactory, responseProcessor);
    }
    PromiseWineApi.prototype.getDishPairingForWine = function (wine, _options) {
        var result = this.api.getDishPairingForWine(wine, _options);
        return result.toPromise();
    };
    PromiseWineApi.prototype.getWineDescription = function (wine, _options) {
        var result = this.api.getWineDescription(wine, _options);
        return result.toPromise();
    };
    PromiseWineApi.prototype.getWinePairing = function (food, maxPrice, _options) {
        var result = this.api.getWinePairing(food, maxPrice, _options);
        return result.toPromise();
    };
    PromiseWineApi.prototype.getWineRecommendation = function (wine, maxPrice, minRating, number, _options) {
        var result = this.api.getWineRecommendation(wine, maxPrice, minRating, number, _options);
        return result.toPromise();
    };
    return PromiseWineApi;
}());
exports.PromiseWineApi = PromiseWineApi;
//# sourceMappingURL=PromiseAPI.js.map