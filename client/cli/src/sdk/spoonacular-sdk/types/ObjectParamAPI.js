"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWineApi = exports.ObjectRecipesApi = exports.ObjectProductsApi = exports.ObjectMiscApi = exports.ObjectMenuItemsApi = exports.ObjectMealPlanningApi = exports.ObjectIngredientsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectIngredientsApi = (function () {
    function ObjectIngredientsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableIngredientsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectIngredientsApi.prototype.autocompleteIngredientSearch = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.autocompleteIngredientSearch(param.query, param.number, param.metaInformation, param.intolerances, options).toPromise();
    };
    ObjectIngredientsApi.prototype.computeIngredientAmount = function (param, options) {
        return this.api.computeIngredientAmount(param.id, param.nutrient, param.target, param.unit, options).toPromise();
    };
    ObjectIngredientsApi.prototype.getIngredientInformation = function (param, options) {
        return this.api.getIngredientInformation(param.id, param.amount, param.unit, options).toPromise();
    };
    ObjectIngredientsApi.prototype.getIngredientSubstitutes = function (param, options) {
        return this.api.getIngredientSubstitutes(param.ingredientName, options).toPromise();
    };
    ObjectIngredientsApi.prototype.getIngredientSubstitutesByID = function (param, options) {
        return this.api.getIngredientSubstitutesByID(param.id, options).toPromise();
    };
    ObjectIngredientsApi.prototype.ingredientSearch = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.ingredientSearch(param.query, param.addChildren, param.minProteinPercent, param.maxProteinPercent, param.minFatPercent, param.maxFatPercent, param.minCarbsPercent, param.maxCarbsPercent, param.metaInformation, param.intolerances, param.sort, param.sortDirection, param.offset, param.number, options).toPromise();
    };
    ObjectIngredientsApi.prototype.ingredientsByIDImage = function (param, options) {
        return this.api.ingredientsByIDImage(param.id, param.measure, options).toPromise();
    };
    ObjectIngredientsApi.prototype.mapIngredientsToGroceryProducts = function (param, options) {
        return this.api.mapIngredientsToGroceryProducts(param.mapIngredientsToGroceryProductsRequest, options).toPromise();
    };
    ObjectIngredientsApi.prototype.visualizeIngredients = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.visualizeIngredients(param.contentType, param.language, param.accept, options).toPromise();
    };
    return ObjectIngredientsApi;
}());
exports.ObjectIngredientsApi = ObjectIngredientsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectMealPlanningApi = (function () {
    function ObjectMealPlanningApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableMealPlanningApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMealPlanningApi.prototype.addMealPlanTemplate = function (param, options) {
        return this.api.addMealPlanTemplate(param.username, param.hash, param.addToMealPlanRequest, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.addToMealPlan = function (param, options) {
        return this.api.addToMealPlan(param.username, param.hash, param.addToMealPlanRequest, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.addToShoppingList = function (param, options) {
        return this.api.addToShoppingList(param.username, param.hash, param.addToMealPlanRequest, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.clearMealPlanDay = function (param, options) {
        return this.api.clearMealPlanDay(param.username, param.date, param.hash, param.clearMealPlanDayRequest, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.connectUser = function (param, options) {
        return this.api.connectUser(param.body, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.deleteFromMealPlan = function (param, options) {
        return this.api.deleteFromMealPlan(param.username, param.id, param.hash, param.deleteFromMealPlanRequest, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.deleteFromShoppingList = function (param, options) {
        return this.api.deleteFromShoppingList(param.username, param.id, param.hash, param.deleteFromMealPlanRequest, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.deleteMealPlanTemplate = function (param, options) {
        return this.api.deleteMealPlanTemplate(param.username, param.id, param.hash, param.deleteFromMealPlanRequest, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.generateMealPlan = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.generateMealPlan(param.timeFrame, param.targetCalories, param.diet, param.exclude, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.generateShoppingList = function (param, options) {
        return this.api.generateShoppingList(param.username, param.startDate, param.endDate, param.hash, param.generateShoppingListRequest, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.getMealPlanTemplate = function (param, options) {
        return this.api.getMealPlanTemplate(param.username, param.id, param.hash, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.getMealPlanTemplates = function (param, options) {
        return this.api.getMealPlanTemplates(param.username, param.hash, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.getMealPlanWeek = function (param, options) {
        return this.api.getMealPlanWeek(param.username, param.startDate, param.hash, options).toPromise();
    };
    ObjectMealPlanningApi.prototype.getShoppingList = function (param, options) {
        return this.api.getShoppingList(param.username, param.hash, options).toPromise();
    };
    return ObjectMealPlanningApi;
}());
exports.ObjectMealPlanningApi = ObjectMealPlanningApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectMenuItemsApi = (function () {
    function ObjectMenuItemsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableMenuItemsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMenuItemsApi.prototype.autocompleteMenuItemSearch = function (param, options) {
        return this.api.autocompleteMenuItemSearch(param.query, param.number, options).toPromise();
    };
    ObjectMenuItemsApi.prototype.getMenuItemInformation = function (param, options) {
        return this.api.getMenuItemInformation(param.id, options).toPromise();
    };
    ObjectMenuItemsApi.prototype.menuItemNutritionByIDImage = function (param, options) {
        return this.api.menuItemNutritionByIDImage(param.id, options).toPromise();
    };
    ObjectMenuItemsApi.prototype.menuItemNutritionLabelImage = function (param, options) {
        return this.api.menuItemNutritionLabelImage(param.id, param.showOptionalNutrients, param.showZeroValues, param.showIngredients, options).toPromise();
    };
    ObjectMenuItemsApi.prototype.menuItemNutritionLabelWidget = function (param, options) {
        return this.api.menuItemNutritionLabelWidget(param.id, param.defaultCss, param.showOptionalNutrients, param.showZeroValues, param.showIngredients, options).toPromise();
    };
    ObjectMenuItemsApi.prototype.searchMenuItems = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchMenuItems(param.query, param.minCalories, param.maxCalories, param.minCarbs, param.maxCarbs, param.minProtein, param.maxProtein, param.minFat, param.maxFat, param.addMenuItemInformation, param.offset, param.number, options).toPromise();
    };
    ObjectMenuItemsApi.prototype.visualizeMenuItemNutritionByID = function (param, options) {
        return this.api.visualizeMenuItemNutritionByID(param.id, param.defaultCss, param.accept, options).toPromise();
    };
    return ObjectMenuItemsApi;
}());
exports.ObjectMenuItemsApi = ObjectMenuItemsApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectMiscApi = (function () {
    function ObjectMiscApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableMiscApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMiscApi.prototype.detectFoodInText = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.detectFoodInText(param.contentType, options).toPromise();
    };
    ObjectMiscApi.prototype.getARandomFoodJoke = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getARandomFoodJoke(options).toPromise();
    };
    ObjectMiscApi.prototype.getConversationSuggests = function (param, options) {
        return this.api.getConversationSuggests(param.query, param.number, options).toPromise();
    };
    ObjectMiscApi.prototype.getRandomFoodTrivia = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getRandomFoodTrivia(options).toPromise();
    };
    ObjectMiscApi.prototype.imageAnalysisByURL = function (param, options) {
        return this.api.imageAnalysisByURL(param.imageUrl, options).toPromise();
    };
    ObjectMiscApi.prototype.imageClassificationByURL = function (param, options) {
        return this.api.imageClassificationByURL(param.imageUrl, options).toPromise();
    };
    ObjectMiscApi.prototype.searchAllFood = function (param, options) {
        return this.api.searchAllFood(param.query, param.offset, param.number, options).toPromise();
    };
    ObjectMiscApi.prototype.searchCustomFoods = function (param, options) {
        return this.api.searchCustomFoods(param.username, param.hash, param.query, param.offset, param.number, options).toPromise();
    };
    ObjectMiscApi.prototype.searchFoodVideos = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchFoodVideos(param.query, param.type, param.cuisine, param.diet, param.includeIngredients, param.excludeIngredients, param.minLength, param.maxLength, param.offset, param.number, options).toPromise();
    };
    ObjectMiscApi.prototype.searchSiteContent = function (param, options) {
        return this.api.searchSiteContent(param.query, options).toPromise();
    };
    ObjectMiscApi.prototype.talkToChatbot = function (param, options) {
        return this.api.talkToChatbot(param.text, param.contextId, options).toPromise();
    };
    return ObjectMiscApi;
}());
exports.ObjectMiscApi = ObjectMiscApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectProductsApi = (function () {
    function ObjectProductsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectProductsApi.prototype.autocompleteProductSearch = function (param, options) {
        return this.api.autocompleteProductSearch(param.query, param.number, options).toPromise();
    };
    ObjectProductsApi.prototype.classifyGroceryProduct = function (param, options) {
        return this.api.classifyGroceryProduct(param.classifyGroceryProductRequest, param.locale, options).toPromise();
    };
    ObjectProductsApi.prototype.classifyGroceryProductBulk = function (param, options) {
        return this.api.classifyGroceryProductBulk(param.classifyGroceryProductBulkRequestInner, param.locale, options).toPromise();
    };
    ObjectProductsApi.prototype.getComparableProducts = function (param, options) {
        return this.api.getComparableProducts(param.upc, options).toPromise();
    };
    ObjectProductsApi.prototype.getProductInformation = function (param, options) {
        return this.api.getProductInformation(param.id, options).toPromise();
    };
    ObjectProductsApi.prototype.productNutritionByIDImage = function (param, options) {
        return this.api.productNutritionByIDImage(param.id, options).toPromise();
    };
    ObjectProductsApi.prototype.productNutritionLabelImage = function (param, options) {
        return this.api.productNutritionLabelImage(param.id, param.showOptionalNutrients, param.showZeroValues, param.showIngredients, options).toPromise();
    };
    ObjectProductsApi.prototype.productNutritionLabelWidget = function (param, options) {
        return this.api.productNutritionLabelWidget(param.id, param.defaultCss, param.showOptionalNutrients, param.showZeroValues, param.showIngredients, options).toPromise();
    };
    ObjectProductsApi.prototype.searchGroceryProducts = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchGroceryProducts(param.query, param.minCalories, param.maxCalories, param.minCarbs, param.maxCarbs, param.minProtein, param.maxProtein, param.minFat, param.maxFat, param.addProductInformation, param.offset, param.number, options).toPromise();
    };
    ObjectProductsApi.prototype.searchGroceryProductsByUPC = function (param, options) {
        return this.api.searchGroceryProductsByUPC(param.upc, options).toPromise();
    };
    ObjectProductsApi.prototype.visualizeProductNutritionByID = function (param, options) {
        return this.api.visualizeProductNutritionByID(param.id, param.defaultCss, param.accept, options).toPromise();
    };
    return ObjectProductsApi;
}());
exports.ObjectProductsApi = ObjectProductsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectRecipesApi = (function () {
    function ObjectRecipesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableRecipesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectRecipesApi.prototype.analyzeARecipeSearchQuery = function (param, options) {
        return this.api.analyzeARecipeSearchQuery(param.q, options).toPromise();
    };
    ObjectRecipesApi.prototype.analyzeRecipeInstructions = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.analyzeRecipeInstructions(param.contentType, options).toPromise();
    };
    ObjectRecipesApi.prototype.autocompleteRecipeSearch = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.autocompleteRecipeSearch(param.query, param.number, options).toPromise();
    };
    ObjectRecipesApi.prototype.classifyCuisine = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.classifyCuisine(param.contentType, options).toPromise();
    };
    ObjectRecipesApi.prototype.computeGlycemicLoad = function (param, options) {
        return this.api.computeGlycemicLoad(param.computeGlycemicLoadRequest, param.language, options).toPromise();
    };
    ObjectRecipesApi.prototype.convertAmounts = function (param, options) {
        return this.api.convertAmounts(param.ingredientName, param.sourceAmount, param.sourceUnit, param.targetUnit, options).toPromise();
    };
    ObjectRecipesApi.prototype.createRecipeCard = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createRecipeCard(param.contentType, options).toPromise();
    };
    ObjectRecipesApi.prototype.equipmentByIDImage = function (param, options) {
        return this.api.equipmentByIDImage(param.id, options).toPromise();
    };
    ObjectRecipesApi.prototype.extractRecipeFromWebsite = function (param, options) {
        return this.api.extractRecipeFromWebsite(param.url, param.forceExtraction, param.analyze, param.includeNutrition, param.includeTaste, options).toPromise();
    };
    ObjectRecipesApi.prototype.getAnalyzedRecipeInstructions = function (param, options) {
        return this.api.getAnalyzedRecipeInstructions(param.id, param.stepBreakdown, options).toPromise();
    };
    ObjectRecipesApi.prototype.getRandomRecipes = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getRandomRecipes(param.limitLicense, param.tags, param.number, options).toPromise();
    };
    ObjectRecipesApi.prototype.getRecipeEquipmentByID = function (param, options) {
        return this.api.getRecipeEquipmentByID(param.id, options).toPromise();
    };
    ObjectRecipesApi.prototype.getRecipeInformation = function (param, options) {
        return this.api.getRecipeInformation(param.id, param.includeNutrition, options).toPromise();
    };
    ObjectRecipesApi.prototype.getRecipeInformationBulk = function (param, options) {
        return this.api.getRecipeInformationBulk(param.ids, param.includeNutrition, options).toPromise();
    };
    ObjectRecipesApi.prototype.getRecipeIngredientsByID = function (param, options) {
        return this.api.getRecipeIngredientsByID(param.id, options).toPromise();
    };
    ObjectRecipesApi.prototype.getRecipeNutritionWidgetByID = function (param, options) {
        return this.api.getRecipeNutritionWidgetByID(param.id, options).toPromise();
    };
    ObjectRecipesApi.prototype.getRecipePriceBreakdownByID = function (param, options) {
        return this.api.getRecipePriceBreakdownByID(param.id, options).toPromise();
    };
    ObjectRecipesApi.prototype.getRecipeTasteByID = function (param, options) {
        return this.api.getRecipeTasteByID(param.id, param.normalize, options).toPromise();
    };
    ObjectRecipesApi.prototype.getSimilarRecipes = function (param, options) {
        return this.api.getSimilarRecipes(param.id, param.number, param.limitLicense, options).toPromise();
    };
    ObjectRecipesApi.prototype.guessNutritionByDishName = function (param, options) {
        return this.api.guessNutritionByDishName(param.title, options).toPromise();
    };
    ObjectRecipesApi.prototype.ingredientsByIDImage = function (param, options) {
        return this.api.ingredientsByIDImage(param.id, param.measure, options).toPromise();
    };
    ObjectRecipesApi.prototype.parseIngredients = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.parseIngredients(param.contentType, param.language, options).toPromise();
    };
    ObjectRecipesApi.prototype.priceBreakdownByIDImage = function (param, options) {
        return this.api.priceBreakdownByIDImage(param.id, options).toPromise();
    };
    ObjectRecipesApi.prototype.quickAnswer = function (param, options) {
        return this.api.quickAnswer(param.q, options).toPromise();
    };
    ObjectRecipesApi.prototype.recipeNutritionByIDImage = function (param, options) {
        return this.api.recipeNutritionByIDImage(param.id, options).toPromise();
    };
    ObjectRecipesApi.prototype.recipeNutritionLabelImage = function (param, options) {
        return this.api.recipeNutritionLabelImage(param.id, param.showOptionalNutrients, param.showZeroValues, param.showIngredients, options).toPromise();
    };
    ObjectRecipesApi.prototype.recipeNutritionLabelWidget = function (param, options) {
        return this.api.recipeNutritionLabelWidget(param.id, param.defaultCss, param.showOptionalNutrients, param.showZeroValues, param.showIngredients, options).toPromise();
    };
    ObjectRecipesApi.prototype.recipeTasteByIDImage = function (param, options) {
        return this.api.recipeTasteByIDImage(param.id, param.normalize, param.rgb, options).toPromise();
    };
    ObjectRecipesApi.prototype.searchRecipes = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchRecipes(param.query, param.cuisine, param.excludeCuisine, param.diet, param.intolerances, param.equipment, param.includeIngredients, param.excludeIngredients, param.type, param.instructionsRequired, param.fillIngredients, param.addRecipeInformation, param.addRecipeNutrition, param.author, param.tags, param.recipeBoxId, param.titleMatch, param.maxReadyTime, param.ignorePantry, param.sort, param.sortDirection, param.minCarbs, param.maxCarbs, param.minProtein, param.maxProtein, param.minCalories, param.maxCalories, param.minFat, param.maxFat, param.minAlcohol, param.maxAlcohol, param.minCaffeine, param.maxCaffeine, param.minCopper, param.maxCopper, param.minCalcium, param.maxCalcium, param.minCholine, param.maxCholine, param.minCholesterol, param.maxCholesterol, param.minFluoride, param.maxFluoride, param.minSaturatedFat, param.maxSaturatedFat, param.minVitaminA, param.maxVitaminA, param.minVitaminC, param.maxVitaminC, param.minVitaminD, param.maxVitaminD, param.minVitaminE, param.maxVitaminE, param.minVitaminK, param.maxVitaminK, param.minVitaminB1, param.maxVitaminB1, param.minVitaminB2, param.maxVitaminB2, param.minVitaminB5, param.maxVitaminB5, param.minVitaminB3, param.maxVitaminB3, param.minVitaminB6, param.maxVitaminB6, param.minVitaminB12, param.maxVitaminB12, param.minFiber, param.maxFiber, param.minFolate, param.maxFolate, param.minFolicAcid, param.maxFolicAcid, param.minIodine, param.maxIodine, param.minIron, param.maxIron, param.minMagnesium, param.maxMagnesium, param.minManganese, param.maxManganese, param.minPhosphorus, param.maxPhosphorus, param.minPotassium, param.maxPotassium, param.minSelenium, param.maxSelenium, param.minSodium, param.maxSodium, param.minSugar, param.maxSugar, param.minZinc, param.maxZinc, param.offset, param.number, param.limitLicense, options).toPromise();
    };
    ObjectRecipesApi.prototype.searchRecipesByIngredients = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchRecipesByIngredients(param.ingredients, param.number, param.limitLicense, param.ranking, param.ignorePantry, options).toPromise();
    };
    ObjectRecipesApi.prototype.searchRecipesByNutrients = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchRecipesByNutrients(param.minCarbs, param.maxCarbs, param.minProtein, param.maxProtein, param.minCalories, param.maxCalories, param.minFat, param.maxFat, param.minAlcohol, param.maxAlcohol, param.minCaffeine, param.maxCaffeine, param.minCopper, param.maxCopper, param.minCalcium, param.maxCalcium, param.minCholine, param.maxCholine, param.minCholesterol, param.maxCholesterol, param.minFluoride, param.maxFluoride, param.minSaturatedFat, param.maxSaturatedFat, param.minVitaminA, param.maxVitaminA, param.minVitaminC, param.maxVitaminC, param.minVitaminD, param.maxVitaminD, param.minVitaminE, param.maxVitaminE, param.minVitaminK, param.maxVitaminK, param.minVitaminB1, param.maxVitaminB1, param.minVitaminB2, param.maxVitaminB2, param.minVitaminB5, param.maxVitaminB5, param.minVitaminB3, param.maxVitaminB3, param.minVitaminB6, param.maxVitaminB6, param.minVitaminB12, param.maxVitaminB12, param.minFiber, param.maxFiber, param.minFolate, param.maxFolate, param.minFolicAcid, param.maxFolicAcid, param.minIodine, param.maxIodine, param.minIron, param.maxIron, param.minMagnesium, param.maxMagnesium, param.minManganese, param.maxManganese, param.minPhosphorus, param.maxPhosphorus, param.minPotassium, param.maxPotassium, param.minSelenium, param.maxSelenium, param.minSodium, param.maxSodium, param.minSugar, param.maxSugar, param.minZinc, param.maxZinc, param.offset, param.number, param.random, param.limitLicense, options).toPromise();
    };
    ObjectRecipesApi.prototype.summarizeRecipe = function (param, options) {
        return this.api.summarizeRecipe(param.id, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizeEquipment = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.visualizeEquipment(param.contentType, param.accept, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizePriceBreakdown = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.visualizePriceBreakdown(param.contentType, param.accept, param.language, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizeRecipeEquipmentByID = function (param, options) {
        return this.api.visualizeRecipeEquipmentByID(param.id, param.defaultCss, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizeRecipeIngredientsByID = function (param, options) {
        return this.api.visualizeRecipeIngredientsByID(param.id, param.defaultCss, param.measure, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizeRecipeNutrition = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.visualizeRecipeNutrition(param.contentType, param.accept, param.language, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizeRecipeNutritionByID = function (param, options) {
        return this.api.visualizeRecipeNutritionByID(param.id, param.defaultCss, param.accept, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizeRecipePriceBreakdownByID = function (param, options) {
        return this.api.visualizeRecipePriceBreakdownByID(param.id, param.defaultCss, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizeRecipeTaste = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.visualizeRecipeTaste(param.language, param.contentType, param.accept, param.normalize, param.rgb, options).toPromise();
    };
    ObjectRecipesApi.prototype.visualizeRecipeTasteByID = function (param, options) {
        return this.api.visualizeRecipeTasteByID(param.id, param.normalize, param.rgb, options).toPromise();
    };
    return ObjectRecipesApi;
}());
exports.ObjectRecipesApi = ObjectRecipesApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectWineApi = (function () {
    function ObjectWineApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableWineApi(configuration, requestFactory, responseProcessor);
    }
    ObjectWineApi.prototype.getDishPairingForWine = function (param, options) {
        return this.api.getDishPairingForWine(param.wine, options).toPromise();
    };
    ObjectWineApi.prototype.getWineDescription = function (param, options) {
        return this.api.getWineDescription(param.wine, options).toPromise();
    };
    ObjectWineApi.prototype.getWinePairing = function (param, options) {
        return this.api.getWinePairing(param.food, param.maxPrice, options).toPromise();
    };
    ObjectWineApi.prototype.getWineRecommendation = function (param, options) {
        return this.api.getWineRecommendation(param.wine, param.maxPrice, param.minRating, param.number, options).toPromise();
    };
    return ObjectWineApi;
}());
exports.ObjectWineApi = ObjectWineApi;
//# sourceMappingURL=ObjectParamAPI.js.map