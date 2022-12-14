import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { AddMealPlanTemplate200Response } from '../models/AddMealPlanTemplate200Response';
import { AddToMealPlanRequest } from '../models/AddToMealPlanRequest';
import { AnalyzeARecipeSearchQuery200Response } from '../models/AnalyzeARecipeSearchQuery200Response';
import { AnalyzeRecipeInstructions200Response } from '../models/AnalyzeRecipeInstructions200Response';
import { AutocompleteIngredientSearch200ResponseInner } from '../models/AutocompleteIngredientSearch200ResponseInner';
import { AutocompleteMenuItemSearch200Response } from '../models/AutocompleteMenuItemSearch200Response';
import { AutocompleteProductSearch200Response } from '../models/AutocompleteProductSearch200Response';
import { AutocompleteRecipeSearch200ResponseInner } from '../models/AutocompleteRecipeSearch200ResponseInner';
import { ClassifyCuisine200Response } from '../models/ClassifyCuisine200Response';
import { ClassifyGroceryProduct200Response } from '../models/ClassifyGroceryProduct200Response';
import { ClassifyGroceryProductBulk200ResponseInner } from '../models/ClassifyGroceryProductBulk200ResponseInner';
import { ClassifyGroceryProductBulkRequestInner } from '../models/ClassifyGroceryProductBulkRequestInner';
import { ClassifyGroceryProductRequest } from '../models/ClassifyGroceryProductRequest';
import { ClearMealPlanDayRequest } from '../models/ClearMealPlanDayRequest';
import { ComputeGlycemicLoad200Response } from '../models/ComputeGlycemicLoad200Response';
import { ComputeGlycemicLoadRequest } from '../models/ComputeGlycemicLoadRequest';
import { ComputeIngredientAmount200Response } from '../models/ComputeIngredientAmount200Response';
import { ConnectUser200Response } from '../models/ConnectUser200Response';
import { ConvertAmounts200Response } from '../models/ConvertAmounts200Response';
import { CreateRecipeCard200Response } from '../models/CreateRecipeCard200Response';
import { DeleteFromMealPlanRequest } from '../models/DeleteFromMealPlanRequest';
import { DetectFoodInText200Response } from '../models/DetectFoodInText200Response';
import { GenerateMealPlan200Response } from '../models/GenerateMealPlan200Response';
import { GenerateShoppingList200Response } from '../models/GenerateShoppingList200Response';
import { GenerateShoppingListRequest } from '../models/GenerateShoppingListRequest';
import { GetARandomFoodJoke200Response } from '../models/GetARandomFoodJoke200Response';
import { GetAnalyzedRecipeInstructions200Response } from '../models/GetAnalyzedRecipeInstructions200Response';
import { GetComparableProducts200Response } from '../models/GetComparableProducts200Response';
import { GetConversationSuggests200Response } from '../models/GetConversationSuggests200Response';
import { GetDishPairingForWine200Response } from '../models/GetDishPairingForWine200Response';
import { GetIngredientInformation200Response } from '../models/GetIngredientInformation200Response';
import { GetIngredientSubstitutes200Response } from '../models/GetIngredientSubstitutes200Response';
import { GetMealPlanTemplate200Response } from '../models/GetMealPlanTemplate200Response';
import { GetMealPlanTemplates200Response } from '../models/GetMealPlanTemplates200Response';
import { GetMealPlanWeek200Response } from '../models/GetMealPlanWeek200Response';
import { GetMenuItemInformation200Response } from '../models/GetMenuItemInformation200Response';
import { GetProductInformation200Response } from '../models/GetProductInformation200Response';
import { GetRandomFoodTrivia200Response } from '../models/GetRandomFoodTrivia200Response';
import { GetRandomRecipes200Response } from '../models/GetRandomRecipes200Response';
import { GetRecipeEquipmentByID200Response } from '../models/GetRecipeEquipmentByID200Response';
import { GetRecipeInformation200Response } from '../models/GetRecipeInformation200Response';
import { GetRecipeInformationBulk200ResponseInner } from '../models/GetRecipeInformationBulk200ResponseInner';
import { GetRecipeIngredientsByID200Response } from '../models/GetRecipeIngredientsByID200Response';
import { GetRecipeNutritionWidgetByID200Response } from '../models/GetRecipeNutritionWidgetByID200Response';
import { GetRecipePriceBreakdownByID200Response } from '../models/GetRecipePriceBreakdownByID200Response';
import { GetRecipeTasteByID200Response } from '../models/GetRecipeTasteByID200Response';
import { GetShoppingList200Response } from '../models/GetShoppingList200Response';
import { GetSimilarRecipes200ResponseInner } from '../models/GetSimilarRecipes200ResponseInner';
import { GetWineDescription200Response } from '../models/GetWineDescription200Response';
import { GetWinePairing200Response } from '../models/GetWinePairing200Response';
import { GetWineRecommendation200Response } from '../models/GetWineRecommendation200Response';
import { GuessNutritionByDishName200Response } from '../models/GuessNutritionByDishName200Response';
import { ImageAnalysisByURL200Response } from '../models/ImageAnalysisByURL200Response';
import { ImageClassificationByURL200Response } from '../models/ImageClassificationByURL200Response';
import { IngredientSearch200Response } from '../models/IngredientSearch200Response';
import { MapIngredientsToGroceryProducts200ResponseInner } from '../models/MapIngredientsToGroceryProducts200ResponseInner';
import { MapIngredientsToGroceryProductsRequest } from '../models/MapIngredientsToGroceryProductsRequest';
import { ParseIngredients200ResponseInner } from '../models/ParseIngredients200ResponseInner';
import { QuickAnswer200Response } from '../models/QuickAnswer200Response';
import { SearchAllFood200Response } from '../models/SearchAllFood200Response';
import { SearchCustomFoods200Response } from '../models/SearchCustomFoods200Response';
import { SearchFoodVideos200Response } from '../models/SearchFoodVideos200Response';
import { SearchGroceryProducts200Response } from '../models/SearchGroceryProducts200Response';
import { SearchGroceryProductsByUPC200Response } from '../models/SearchGroceryProductsByUPC200Response';
import { SearchMenuItems200Response } from '../models/SearchMenuItems200Response';
import { SearchRecipes200Response } from '../models/SearchRecipes200Response';
import { SearchRecipesByIngredients200ResponseInner } from '../models/SearchRecipesByIngredients200ResponseInner';
import { SearchRecipesByNutrients200ResponseInner } from '../models/SearchRecipesByNutrients200ResponseInner';
import { SearchSiteContent200Response } from '../models/SearchSiteContent200Response';
import { SummarizeRecipe200Response } from '../models/SummarizeRecipe200Response';
import { TalkToChatbot200Response } from '../models/TalkToChatbot200Response';
import { IngredientsApiRequestFactory, IngredientsApiResponseProcessor } from "../apis/IngredientsApi";
export declare class ObservableIngredientsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IngredientsApiRequestFactory, responseProcessor?: IngredientsApiResponseProcessor);
    autocompleteIngredientSearch(query?: string, number?: number, metaInformation?: boolean, intolerances?: string, _options?: Configuration): Observable<Set<AutocompleteIngredientSearch200ResponseInner>>;
    computeIngredientAmount(id: number, nutrient: string, target: number, unit?: string, _options?: Configuration): Observable<ComputeIngredientAmount200Response>;
    getIngredientInformation(id: number, amount?: number, unit?: string, _options?: Configuration): Observable<GetIngredientInformation200Response>;
    getIngredientSubstitutes(ingredientName: string, _options?: Configuration): Observable<GetIngredientSubstitutes200Response>;
    getIngredientSubstitutesByID(id: number, _options?: Configuration): Observable<GetIngredientSubstitutes200Response>;
    ingredientSearch(query?: string, addChildren?: boolean, minProteinPercent?: number, maxProteinPercent?: number, minFatPercent?: number, maxFatPercent?: number, minCarbsPercent?: number, maxCarbsPercent?: number, metaInformation?: boolean, intolerances?: string, sort?: string, sortDirection?: string, offset?: number, number?: number, _options?: Configuration): Observable<IngredientSearch200Response>;
    ingredientsByIDImage(id: number, measure?: 'us' | 'metric', _options?: Configuration): Observable<any>;
    mapIngredientsToGroceryProducts(mapIngredientsToGroceryProductsRequest: MapIngredientsToGroceryProductsRequest, _options?: Configuration): Observable<Set<MapIngredientsToGroceryProducts200ResponseInner>>;
    visualizeIngredients(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', language?: 'en' | 'de', accept?: 'application/json' | 'text/html' | 'media/_*', _options?: Configuration): Observable<string>;
}
import { MealPlanningApiRequestFactory, MealPlanningApiResponseProcessor } from "../apis/MealPlanningApi";
export declare class ObservableMealPlanningApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MealPlanningApiRequestFactory, responseProcessor?: MealPlanningApiResponseProcessor);
    addMealPlanTemplate(username: string, hash: string, addToMealPlanRequest: AddToMealPlanRequest, _options?: Configuration): Observable<AddMealPlanTemplate200Response>;
    addToMealPlan(username: string, hash: string, addToMealPlanRequest: AddToMealPlanRequest, _options?: Configuration): Observable<any>;
    addToShoppingList(username: string, hash: string, addToMealPlanRequest: AddToMealPlanRequest, _options?: Configuration): Observable<GenerateShoppingList200Response>;
    clearMealPlanDay(username: string, date: string, hash: string, clearMealPlanDayRequest: ClearMealPlanDayRequest, _options?: Configuration): Observable<any>;
    connectUser(body: any, _options?: Configuration): Observable<ConnectUser200Response>;
    deleteFromMealPlan(username: string, id: number, hash: string, deleteFromMealPlanRequest: DeleteFromMealPlanRequest, _options?: Configuration): Observable<any>;
    deleteFromShoppingList(username: string, id: number, hash: string, deleteFromMealPlanRequest: DeleteFromMealPlanRequest, _options?: Configuration): Observable<any>;
    deleteMealPlanTemplate(username: string, id: number, hash: string, deleteFromMealPlanRequest: DeleteFromMealPlanRequest, _options?: Configuration): Observable<any>;
    generateMealPlan(timeFrame?: string, targetCalories?: number, diet?: string, exclude?: string, _options?: Configuration): Observable<GenerateMealPlan200Response>;
    generateShoppingList(username: string, startDate: string, endDate: string, hash: string, generateShoppingListRequest: GenerateShoppingListRequest, _options?: Configuration): Observable<GenerateShoppingList200Response>;
    getMealPlanTemplate(username: string, id: number, hash: string, _options?: Configuration): Observable<GetMealPlanTemplate200Response>;
    getMealPlanTemplates(username: string, hash: string, _options?: Configuration): Observable<GetMealPlanTemplates200Response>;
    getMealPlanWeek(username: string, startDate: string, hash: string, _options?: Configuration): Observable<GetMealPlanWeek200Response>;
    getShoppingList(username: string, hash: string, _options?: Configuration): Observable<GetShoppingList200Response>;
}
import { MenuItemsApiRequestFactory, MenuItemsApiResponseProcessor } from "../apis/MenuItemsApi";
export declare class ObservableMenuItemsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MenuItemsApiRequestFactory, responseProcessor?: MenuItemsApiResponseProcessor);
    autocompleteMenuItemSearch(query: string, number?: number, _options?: Configuration): Observable<AutocompleteMenuItemSearch200Response>;
    getMenuItemInformation(id: number, _options?: Configuration): Observable<GetMenuItemInformation200Response>;
    menuItemNutritionByIDImage(id: number, _options?: Configuration): Observable<any>;
    menuItemNutritionLabelImage(id: number, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Observable<any>;
    menuItemNutritionLabelWidget(id: number, defaultCss?: boolean, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Observable<string>;
    searchMenuItems(query?: string, minCalories?: number, maxCalories?: number, minCarbs?: number, maxCarbs?: number, minProtein?: number, maxProtein?: number, minFat?: number, maxFat?: number, addMenuItemInformation?: boolean, offset?: number, number?: number, _options?: Configuration): Observable<SearchMenuItems200Response>;
    visualizeMenuItemNutritionByID(id: number, defaultCss?: boolean, accept?: 'application/json' | 'text/html' | 'media/_*', _options?: Configuration): Observable<string>;
}
import { MiscApiRequestFactory, MiscApiResponseProcessor } from "../apis/MiscApi";
export declare class ObservableMiscApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MiscApiRequestFactory, responseProcessor?: MiscApiResponseProcessor);
    detectFoodInText(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', _options?: Configuration): Observable<DetectFoodInText200Response>;
    getARandomFoodJoke(_options?: Configuration): Observable<GetARandomFoodJoke200Response>;
    getConversationSuggests(query: string, number?: number, _options?: Configuration): Observable<GetConversationSuggests200Response>;
    getRandomFoodTrivia(_options?: Configuration): Observable<GetRandomFoodTrivia200Response>;
    imageAnalysisByURL(imageUrl: string, _options?: Configuration): Observable<ImageAnalysisByURL200Response>;
    imageClassificationByURL(imageUrl: string, _options?: Configuration): Observable<ImageClassificationByURL200Response>;
    searchAllFood(query: string, offset?: number, number?: number, _options?: Configuration): Observable<SearchAllFood200Response>;
    searchCustomFoods(username: string, hash: string, query?: string, offset?: number, number?: number, _options?: Configuration): Observable<SearchCustomFoods200Response>;
    searchFoodVideos(query?: string, type?: string, cuisine?: string, diet?: string, includeIngredients?: string, excludeIngredients?: string, minLength?: number, maxLength?: number, offset?: number, number?: number, _options?: Configuration): Observable<SearchFoodVideos200Response>;
    searchSiteContent(query: string, _options?: Configuration): Observable<SearchSiteContent200Response>;
    talkToChatbot(text: string, contextId?: string, _options?: Configuration): Observable<TalkToChatbot200Response>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class ObservableProductsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    autocompleteProductSearch(query: string, number?: number, _options?: Configuration): Observable<AutocompleteProductSearch200Response>;
    classifyGroceryProduct(classifyGroceryProductRequest: ClassifyGroceryProductRequest, locale?: 'en_US' | 'en_GB', _options?: Configuration): Observable<ClassifyGroceryProduct200Response>;
    classifyGroceryProductBulk(classifyGroceryProductBulkRequestInner: Set<ClassifyGroceryProductBulkRequestInner>, locale?: string, _options?: Configuration): Observable<Set<ClassifyGroceryProductBulk200ResponseInner>>;
    getComparableProducts(upc: number, _options?: Configuration): Observable<GetComparableProducts200Response>;
    getProductInformation(id: number, _options?: Configuration): Observable<GetProductInformation200Response>;
    productNutritionByIDImage(id: number, _options?: Configuration): Observable<any>;
    productNutritionLabelImage(id: number, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Observable<any>;
    productNutritionLabelWidget(id: number, defaultCss?: boolean, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Observable<string>;
    searchGroceryProducts(query?: string, minCalories?: number, maxCalories?: number, minCarbs?: number, maxCarbs?: number, minProtein?: number, maxProtein?: number, minFat?: number, maxFat?: number, addProductInformation?: boolean, offset?: number, number?: number, _options?: Configuration): Observable<SearchGroceryProducts200Response>;
    searchGroceryProductsByUPC(upc: number, _options?: Configuration): Observable<SearchGroceryProductsByUPC200Response>;
    visualizeProductNutritionByID(id: number, defaultCss?: boolean, accept?: 'application/json' | 'text/html' | 'media/_*', _options?: Configuration): Observable<string>;
}
import { RecipesApiRequestFactory, RecipesApiResponseProcessor } from "../apis/RecipesApi";
export declare class ObservableRecipesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RecipesApiRequestFactory, responseProcessor?: RecipesApiResponseProcessor);
    analyzeARecipeSearchQuery(q: string, _options?: Configuration): Observable<AnalyzeARecipeSearchQuery200Response>;
    analyzeRecipeInstructions(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', _options?: Configuration): Observable<AnalyzeRecipeInstructions200Response>;
    autocompleteRecipeSearch(query?: string, number?: number, _options?: Configuration): Observable<Set<AutocompleteRecipeSearch200ResponseInner>>;
    classifyCuisine(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', _options?: Configuration): Observable<ClassifyCuisine200Response>;
    computeGlycemicLoad(computeGlycemicLoadRequest: ComputeGlycemicLoadRequest, language?: 'en' | 'de', _options?: Configuration): Observable<ComputeGlycemicLoad200Response>;
    convertAmounts(ingredientName: string, sourceAmount: number, sourceUnit: string, targetUnit: string, _options?: Configuration): Observable<ConvertAmounts200Response>;
    createRecipeCard(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', _options?: Configuration): Observable<CreateRecipeCard200Response>;
    equipmentByIDImage(id: number, _options?: Configuration): Observable<any>;
    extractRecipeFromWebsite(url: string, forceExtraction?: boolean, analyze?: boolean, includeNutrition?: boolean, includeTaste?: boolean, _options?: Configuration): Observable<GetRecipeInformation200Response>;
    getAnalyzedRecipeInstructions(id: number, stepBreakdown?: boolean, _options?: Configuration): Observable<GetAnalyzedRecipeInstructions200Response>;
    getRandomRecipes(limitLicense?: boolean, tags?: string, number?: number, _options?: Configuration): Observable<GetRandomRecipes200Response>;
    getRecipeEquipmentByID(id: number, _options?: Configuration): Observable<GetRecipeEquipmentByID200Response>;
    getRecipeInformation(id: number, includeNutrition?: boolean, _options?: Configuration): Observable<GetRecipeInformation200Response>;
    getRecipeInformationBulk(ids: string, includeNutrition?: boolean, _options?: Configuration): Observable<Set<GetRecipeInformationBulk200ResponseInner>>;
    getRecipeIngredientsByID(id: number, _options?: Configuration): Observable<GetRecipeIngredientsByID200Response>;
    getRecipeNutritionWidgetByID(id: number, _options?: Configuration): Observable<GetRecipeNutritionWidgetByID200Response>;
    getRecipePriceBreakdownByID(id: number, _options?: Configuration): Observable<GetRecipePriceBreakdownByID200Response>;
    getRecipeTasteByID(id: number, normalize?: boolean, _options?: Configuration): Observable<GetRecipeTasteByID200Response>;
    getSimilarRecipes(id: number, number?: number, limitLicense?: boolean, _options?: Configuration): Observable<Set<GetSimilarRecipes200ResponseInner>>;
    guessNutritionByDishName(title: string, _options?: Configuration): Observable<GuessNutritionByDishName200Response>;
    ingredientsByIDImage(id: number, measure?: 'us' | 'metric', _options?: Configuration): Observable<any>;
    parseIngredients(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', language?: 'en' | 'de', _options?: Configuration): Observable<Set<ParseIngredients200ResponseInner>>;
    priceBreakdownByIDImage(id: number, _options?: Configuration): Observable<any>;
    quickAnswer(q: string, _options?: Configuration): Observable<QuickAnswer200Response>;
    recipeNutritionByIDImage(id: number, _options?: Configuration): Observable<any>;
    recipeNutritionLabelImage(id: number, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Observable<any>;
    recipeNutritionLabelWidget(id: number, defaultCss?: boolean, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Observable<string>;
    recipeTasteByIDImage(id: number, normalize?: boolean, rgb?: string, _options?: Configuration): Observable<any>;
    searchRecipes(query?: string, cuisine?: string, excludeCuisine?: string, diet?: string, intolerances?: string, equipment?: string, includeIngredients?: string, excludeIngredients?: string, type?: string, instructionsRequired?: boolean, fillIngredients?: boolean, addRecipeInformation?: boolean, addRecipeNutrition?: boolean, author?: string, tags?: string, recipeBoxId?: number, titleMatch?: string, maxReadyTime?: number, ignorePantry?: boolean, sort?: string, sortDirection?: string, minCarbs?: number, maxCarbs?: number, minProtein?: number, maxProtein?: number, minCalories?: number, maxCalories?: number, minFat?: number, maxFat?: number, minAlcohol?: number, maxAlcohol?: number, minCaffeine?: number, maxCaffeine?: number, minCopper?: number, maxCopper?: number, minCalcium?: number, maxCalcium?: number, minCholine?: number, maxCholine?: number, minCholesterol?: number, maxCholesterol?: number, minFluoride?: number, maxFluoride?: number, minSaturatedFat?: number, maxSaturatedFat?: number, minVitaminA?: number, maxVitaminA?: number, minVitaminC?: number, maxVitaminC?: number, minVitaminD?: number, maxVitaminD?: number, minVitaminE?: number, maxVitaminE?: number, minVitaminK?: number, maxVitaminK?: number, minVitaminB1?: number, maxVitaminB1?: number, minVitaminB2?: number, maxVitaminB2?: number, minVitaminB5?: number, maxVitaminB5?: number, minVitaminB3?: number, maxVitaminB3?: number, minVitaminB6?: number, maxVitaminB6?: number, minVitaminB12?: number, maxVitaminB12?: number, minFiber?: number, maxFiber?: number, minFolate?: number, maxFolate?: number, minFolicAcid?: number, maxFolicAcid?: number, minIodine?: number, maxIodine?: number, minIron?: number, maxIron?: number, minMagnesium?: number, maxMagnesium?: number, minManganese?: number, maxManganese?: number, minPhosphorus?: number, maxPhosphorus?: number, minPotassium?: number, maxPotassium?: number, minSelenium?: number, maxSelenium?: number, minSodium?: number, maxSodium?: number, minSugar?: number, maxSugar?: number, minZinc?: number, maxZinc?: number, offset?: number, number?: number, limitLicense?: boolean, _options?: Configuration): Observable<SearchRecipes200Response>;
    searchRecipesByIngredients(ingredients?: string, number?: number, limitLicense?: boolean, ranking?: number, ignorePantry?: boolean, _options?: Configuration): Observable<Set<SearchRecipesByIngredients200ResponseInner>>;
    searchRecipesByNutrients(minCarbs?: number, maxCarbs?: number, minProtein?: number, maxProtein?: number, minCalories?: number, maxCalories?: number, minFat?: number, maxFat?: number, minAlcohol?: number, maxAlcohol?: number, minCaffeine?: number, maxCaffeine?: number, minCopper?: number, maxCopper?: number, minCalcium?: number, maxCalcium?: number, minCholine?: number, maxCholine?: number, minCholesterol?: number, maxCholesterol?: number, minFluoride?: number, maxFluoride?: number, minSaturatedFat?: number, maxSaturatedFat?: number, minVitaminA?: number, maxVitaminA?: number, minVitaminC?: number, maxVitaminC?: number, minVitaminD?: number, maxVitaminD?: number, minVitaminE?: number, maxVitaminE?: number, minVitaminK?: number, maxVitaminK?: number, minVitaminB1?: number, maxVitaminB1?: number, minVitaminB2?: number, maxVitaminB2?: number, minVitaminB5?: number, maxVitaminB5?: number, minVitaminB3?: number, maxVitaminB3?: number, minVitaminB6?: number, maxVitaminB6?: number, minVitaminB12?: number, maxVitaminB12?: number, minFiber?: number, maxFiber?: number, minFolate?: number, maxFolate?: number, minFolicAcid?: number, maxFolicAcid?: number, minIodine?: number, maxIodine?: number, minIron?: number, maxIron?: number, minMagnesium?: number, maxMagnesium?: number, minManganese?: number, maxManganese?: number, minPhosphorus?: number, maxPhosphorus?: number, minPotassium?: number, maxPotassium?: number, minSelenium?: number, maxSelenium?: number, minSodium?: number, maxSodium?: number, minSugar?: number, maxSugar?: number, minZinc?: number, maxZinc?: number, offset?: number, number?: number, random?: boolean, limitLicense?: boolean, _options?: Configuration): Observable<Set<SearchRecipesByNutrients200ResponseInner>>;
    summarizeRecipe(id: number, _options?: Configuration): Observable<SummarizeRecipe200Response>;
    visualizeEquipment(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', accept?: 'application/json' | 'text/html' | 'media/_*', _options?: Configuration): Observable<string>;
    visualizePriceBreakdown(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', accept?: 'application/json' | 'text/html' | 'media/_*', language?: 'en' | 'de', _options?: Configuration): Observable<string>;
    visualizeRecipeEquipmentByID(id: number, defaultCss?: boolean, _options?: Configuration): Observable<string>;
    visualizeRecipeIngredientsByID(id: number, defaultCss?: boolean, measure?: 'us' | 'metric', _options?: Configuration): Observable<string>;
    visualizeRecipeNutrition(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', accept?: 'application/json' | 'text/html' | 'media/_*', language?: 'en' | 'de', _options?: Configuration): Observable<string>;
    visualizeRecipeNutritionByID(id: number, defaultCss?: boolean, accept?: 'application/json' | 'text/html' | 'media/_*', _options?: Configuration): Observable<string>;
    visualizeRecipePriceBreakdownByID(id: number, defaultCss?: boolean, _options?: Configuration): Observable<string>;
    visualizeRecipeTaste(language?: 'en' | 'de', contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', accept?: 'application/json' | 'text/html' | 'media/_*', normalize?: boolean, rgb?: string, _options?: Configuration): Observable<string>;
    visualizeRecipeTasteByID(id: number, normalize?: boolean, rgb?: string, _options?: Configuration): Observable<string>;
}
import { WineApiRequestFactory, WineApiResponseProcessor } from "../apis/WineApi";
export declare class ObservableWineApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WineApiRequestFactory, responseProcessor?: WineApiResponseProcessor);
    getDishPairingForWine(wine: string, _options?: Configuration): Observable<GetDishPairingForWine200Response>;
    getWineDescription(wine: string, _options?: Configuration): Observable<GetWineDescription200Response>;
    getWinePairing(food: string, maxPrice?: number, _options?: Configuration): Observable<GetWinePairing200Response>;
    getWineRecommendation(wine: string, maxPrice?: number, minRating?: number, number?: number, _options?: Configuration): Observable<GetWineRecommendation200Response>;
}
