import { Configuration } from '../configuration';
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
export interface IngredientsApiAutocompleteIngredientSearchRequest {
    query?: string;
    number?: number;
    metaInformation?: boolean;
    intolerances?: string;
}
export interface IngredientsApiComputeIngredientAmountRequest {
    id: number;
    nutrient: string;
    target: number;
    unit?: string;
}
export interface IngredientsApiGetIngredientInformationRequest {
    id: number;
    amount?: number;
    unit?: string;
}
export interface IngredientsApiGetIngredientSubstitutesRequest {
    ingredientName: string;
}
export interface IngredientsApiGetIngredientSubstitutesByIDRequest {
    id: number;
}
export interface IngredientsApiIngredientSearchRequest {
    query?: string;
    addChildren?: boolean;
    minProteinPercent?: number;
    maxProteinPercent?: number;
    minFatPercent?: number;
    maxFatPercent?: number;
    minCarbsPercent?: number;
    maxCarbsPercent?: number;
    metaInformation?: boolean;
    intolerances?: string;
    sort?: string;
    sortDirection?: string;
    offset?: number;
    number?: number;
}
export interface IngredientsApiIngredientsByIDImageRequest {
    id: number;
    measure?: 'us' | 'metric';
}
export interface IngredientsApiMapIngredientsToGroceryProductsRequest {
    mapIngredientsToGroceryProductsRequest: MapIngredientsToGroceryProductsRequest;
}
export interface IngredientsApiVisualizeIngredientsRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
    language?: 'en' | 'de';
    accept?: 'application/json' | 'text/html' | 'media/_*';
}
export declare class ObjectIngredientsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: IngredientsApiRequestFactory, responseProcessor?: IngredientsApiResponseProcessor);
    autocompleteIngredientSearch(param?: IngredientsApiAutocompleteIngredientSearchRequest, options?: Configuration): Promise<Set<AutocompleteIngredientSearch200ResponseInner>>;
    computeIngredientAmount(param: IngredientsApiComputeIngredientAmountRequest, options?: Configuration): Promise<ComputeIngredientAmount200Response>;
    getIngredientInformation(param: IngredientsApiGetIngredientInformationRequest, options?: Configuration): Promise<GetIngredientInformation200Response>;
    getIngredientSubstitutes(param: IngredientsApiGetIngredientSubstitutesRequest, options?: Configuration): Promise<GetIngredientSubstitutes200Response>;
    getIngredientSubstitutesByID(param: IngredientsApiGetIngredientSubstitutesByIDRequest, options?: Configuration): Promise<GetIngredientSubstitutes200Response>;
    ingredientSearch(param?: IngredientsApiIngredientSearchRequest, options?: Configuration): Promise<IngredientSearch200Response>;
    ingredientsByIDImage(param: IngredientsApiIngredientsByIDImageRequest, options?: Configuration): Promise<any>;
    mapIngredientsToGroceryProducts(param: IngredientsApiMapIngredientsToGroceryProductsRequest, options?: Configuration): Promise<Set<MapIngredientsToGroceryProducts200ResponseInner>>;
    visualizeIngredients(param?: IngredientsApiVisualizeIngredientsRequest, options?: Configuration): Promise<string>;
}
import { MealPlanningApiRequestFactory, MealPlanningApiResponseProcessor } from "../apis/MealPlanningApi";
export interface MealPlanningApiAddMealPlanTemplateRequest {
    username: string;
    hash: string;
    addToMealPlanRequest: AddToMealPlanRequest;
}
export interface MealPlanningApiAddToMealPlanRequest {
    username: string;
    hash: string;
    addToMealPlanRequest: AddToMealPlanRequest;
}
export interface MealPlanningApiAddToShoppingListRequest {
    username: string;
    hash: string;
    addToMealPlanRequest: AddToMealPlanRequest;
}
export interface MealPlanningApiClearMealPlanDayRequest {
    username: string;
    date: string;
    hash: string;
    clearMealPlanDayRequest: ClearMealPlanDayRequest;
}
export interface MealPlanningApiConnectUserRequest {
    body: any;
}
export interface MealPlanningApiDeleteFromMealPlanRequest {
    username: string;
    id: number;
    hash: string;
    deleteFromMealPlanRequest: DeleteFromMealPlanRequest;
}
export interface MealPlanningApiDeleteFromShoppingListRequest {
    username: string;
    id: number;
    hash: string;
    deleteFromMealPlanRequest: DeleteFromMealPlanRequest;
}
export interface MealPlanningApiDeleteMealPlanTemplateRequest {
    username: string;
    id: number;
    hash: string;
    deleteFromMealPlanRequest: DeleteFromMealPlanRequest;
}
export interface MealPlanningApiGenerateMealPlanRequest {
    timeFrame?: string;
    targetCalories?: number;
    diet?: string;
    exclude?: string;
}
export interface MealPlanningApiGenerateShoppingListRequest {
    username: string;
    startDate: string;
    endDate: string;
    hash: string;
    generateShoppingListRequest: GenerateShoppingListRequest;
}
export interface MealPlanningApiGetMealPlanTemplateRequest {
    username: string;
    id: number;
    hash: string;
}
export interface MealPlanningApiGetMealPlanTemplatesRequest {
    username: string;
    hash: string;
}
export interface MealPlanningApiGetMealPlanWeekRequest {
    username: string;
    startDate: string;
    hash: string;
}
export interface MealPlanningApiGetShoppingListRequest {
    username: string;
    hash: string;
}
export declare class ObjectMealPlanningApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MealPlanningApiRequestFactory, responseProcessor?: MealPlanningApiResponseProcessor);
    addMealPlanTemplate(param: MealPlanningApiAddMealPlanTemplateRequest, options?: Configuration): Promise<AddMealPlanTemplate200Response>;
    addToMealPlan(param: MealPlanningApiAddToMealPlanRequest, options?: Configuration): Promise<any>;
    addToShoppingList(param: MealPlanningApiAddToShoppingListRequest, options?: Configuration): Promise<GenerateShoppingList200Response>;
    clearMealPlanDay(param: MealPlanningApiClearMealPlanDayRequest, options?: Configuration): Promise<any>;
    connectUser(param: MealPlanningApiConnectUserRequest, options?: Configuration): Promise<ConnectUser200Response>;
    deleteFromMealPlan(param: MealPlanningApiDeleteFromMealPlanRequest, options?: Configuration): Promise<any>;
    deleteFromShoppingList(param: MealPlanningApiDeleteFromShoppingListRequest, options?: Configuration): Promise<any>;
    deleteMealPlanTemplate(param: MealPlanningApiDeleteMealPlanTemplateRequest, options?: Configuration): Promise<any>;
    generateMealPlan(param?: MealPlanningApiGenerateMealPlanRequest, options?: Configuration): Promise<GenerateMealPlan200Response>;
    generateShoppingList(param: MealPlanningApiGenerateShoppingListRequest, options?: Configuration): Promise<GenerateShoppingList200Response>;
    getMealPlanTemplate(param: MealPlanningApiGetMealPlanTemplateRequest, options?: Configuration): Promise<GetMealPlanTemplate200Response>;
    getMealPlanTemplates(param: MealPlanningApiGetMealPlanTemplatesRequest, options?: Configuration): Promise<GetMealPlanTemplates200Response>;
    getMealPlanWeek(param: MealPlanningApiGetMealPlanWeekRequest, options?: Configuration): Promise<GetMealPlanWeek200Response>;
    getShoppingList(param: MealPlanningApiGetShoppingListRequest, options?: Configuration): Promise<GetShoppingList200Response>;
}
import { MenuItemsApiRequestFactory, MenuItemsApiResponseProcessor } from "../apis/MenuItemsApi";
export interface MenuItemsApiAutocompleteMenuItemSearchRequest {
    query: string;
    number?: number;
}
export interface MenuItemsApiGetMenuItemInformationRequest {
    id: number;
}
export interface MenuItemsApiMenuItemNutritionByIDImageRequest {
    id: number;
}
export interface MenuItemsApiMenuItemNutritionLabelImageRequest {
    id: number;
    showOptionalNutrients?: boolean;
    showZeroValues?: boolean;
    showIngredients?: boolean;
}
export interface MenuItemsApiMenuItemNutritionLabelWidgetRequest {
    id: number;
    defaultCss?: boolean;
    showOptionalNutrients?: boolean;
    showZeroValues?: boolean;
    showIngredients?: boolean;
}
export interface MenuItemsApiSearchMenuItemsRequest {
    query?: string;
    minCalories?: number;
    maxCalories?: number;
    minCarbs?: number;
    maxCarbs?: number;
    minProtein?: number;
    maxProtein?: number;
    minFat?: number;
    maxFat?: number;
    addMenuItemInformation?: boolean;
    offset?: number;
    number?: number;
}
export interface MenuItemsApiVisualizeMenuItemNutritionByIDRequest {
    id: number;
    defaultCss?: boolean;
    accept?: 'application/json' | 'text/html' | 'media/_*';
}
export declare class ObjectMenuItemsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MenuItemsApiRequestFactory, responseProcessor?: MenuItemsApiResponseProcessor);
    autocompleteMenuItemSearch(param: MenuItemsApiAutocompleteMenuItemSearchRequest, options?: Configuration): Promise<AutocompleteMenuItemSearch200Response>;
    getMenuItemInformation(param: MenuItemsApiGetMenuItemInformationRequest, options?: Configuration): Promise<GetMenuItemInformation200Response>;
    menuItemNutritionByIDImage(param: MenuItemsApiMenuItemNutritionByIDImageRequest, options?: Configuration): Promise<any>;
    menuItemNutritionLabelImage(param: MenuItemsApiMenuItemNutritionLabelImageRequest, options?: Configuration): Promise<any>;
    menuItemNutritionLabelWidget(param: MenuItemsApiMenuItemNutritionLabelWidgetRequest, options?: Configuration): Promise<string>;
    searchMenuItems(param?: MenuItemsApiSearchMenuItemsRequest, options?: Configuration): Promise<SearchMenuItems200Response>;
    visualizeMenuItemNutritionByID(param: MenuItemsApiVisualizeMenuItemNutritionByIDRequest, options?: Configuration): Promise<string>;
}
import { MiscApiRequestFactory, MiscApiResponseProcessor } from "../apis/MiscApi";
export interface MiscApiDetectFoodInTextRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
}
export interface MiscApiGetARandomFoodJokeRequest {
}
export interface MiscApiGetConversationSuggestsRequest {
    query: string;
    number?: number;
}
export interface MiscApiGetRandomFoodTriviaRequest {
}
export interface MiscApiImageAnalysisByURLRequest {
    imageUrl: string;
}
export interface MiscApiImageClassificationByURLRequest {
    imageUrl: string;
}
export interface MiscApiSearchAllFoodRequest {
    query: string;
    offset?: number;
    number?: number;
}
export interface MiscApiSearchCustomFoodsRequest {
    username: string;
    hash: string;
    query?: string;
    offset?: number;
    number?: number;
}
export interface MiscApiSearchFoodVideosRequest {
    query?: string;
    type?: string;
    cuisine?: string;
    diet?: string;
    includeIngredients?: string;
    excludeIngredients?: string;
    minLength?: number;
    maxLength?: number;
    offset?: number;
    number?: number;
}
export interface MiscApiSearchSiteContentRequest {
    query: string;
}
export interface MiscApiTalkToChatbotRequest {
    text: string;
    contextId?: string;
}
export declare class ObjectMiscApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MiscApiRequestFactory, responseProcessor?: MiscApiResponseProcessor);
    detectFoodInText(param?: MiscApiDetectFoodInTextRequest, options?: Configuration): Promise<DetectFoodInText200Response>;
    getARandomFoodJoke(param?: MiscApiGetARandomFoodJokeRequest, options?: Configuration): Promise<GetARandomFoodJoke200Response>;
    getConversationSuggests(param: MiscApiGetConversationSuggestsRequest, options?: Configuration): Promise<GetConversationSuggests200Response>;
    getRandomFoodTrivia(param?: MiscApiGetRandomFoodTriviaRequest, options?: Configuration): Promise<GetRandomFoodTrivia200Response>;
    imageAnalysisByURL(param: MiscApiImageAnalysisByURLRequest, options?: Configuration): Promise<ImageAnalysisByURL200Response>;
    imageClassificationByURL(param: MiscApiImageClassificationByURLRequest, options?: Configuration): Promise<ImageClassificationByURL200Response>;
    searchAllFood(param: MiscApiSearchAllFoodRequest, options?: Configuration): Promise<SearchAllFood200Response>;
    searchCustomFoods(param: MiscApiSearchCustomFoodsRequest, options?: Configuration): Promise<SearchCustomFoods200Response>;
    searchFoodVideos(param?: MiscApiSearchFoodVideosRequest, options?: Configuration): Promise<SearchFoodVideos200Response>;
    searchSiteContent(param: MiscApiSearchSiteContentRequest, options?: Configuration): Promise<SearchSiteContent200Response>;
    talkToChatbot(param: MiscApiTalkToChatbotRequest, options?: Configuration): Promise<TalkToChatbot200Response>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export interface ProductsApiAutocompleteProductSearchRequest {
    query: string;
    number?: number;
}
export interface ProductsApiClassifyGroceryProductRequest {
    classifyGroceryProductRequest: ClassifyGroceryProductRequest;
    locale?: 'en_US' | 'en_GB';
}
export interface ProductsApiClassifyGroceryProductBulkRequest {
    classifyGroceryProductBulkRequestInner: Set<ClassifyGroceryProductBulkRequestInner>;
    locale?: string;
}
export interface ProductsApiGetComparableProductsRequest {
    upc: number;
}
export interface ProductsApiGetProductInformationRequest {
    id: number;
}
export interface ProductsApiProductNutritionByIDImageRequest {
    id: number;
}
export interface ProductsApiProductNutritionLabelImageRequest {
    id: number;
    showOptionalNutrients?: boolean;
    showZeroValues?: boolean;
    showIngredients?: boolean;
}
export interface ProductsApiProductNutritionLabelWidgetRequest {
    id: number;
    defaultCss?: boolean;
    showOptionalNutrients?: boolean;
    showZeroValues?: boolean;
    showIngredients?: boolean;
}
export interface ProductsApiSearchGroceryProductsRequest {
    query?: string;
    minCalories?: number;
    maxCalories?: number;
    minCarbs?: number;
    maxCarbs?: number;
    minProtein?: number;
    maxProtein?: number;
    minFat?: number;
    maxFat?: number;
    addProductInformation?: boolean;
    offset?: number;
    number?: number;
}
export interface ProductsApiSearchGroceryProductsByUPCRequest {
    upc: number;
}
export interface ProductsApiVisualizeProductNutritionByIDRequest {
    id: number;
    defaultCss?: boolean;
    accept?: 'application/json' | 'text/html' | 'media/_*';
}
export declare class ObjectProductsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    autocompleteProductSearch(param: ProductsApiAutocompleteProductSearchRequest, options?: Configuration): Promise<AutocompleteProductSearch200Response>;
    classifyGroceryProduct(param: ProductsApiClassifyGroceryProductRequest, options?: Configuration): Promise<ClassifyGroceryProduct200Response>;
    classifyGroceryProductBulk(param: ProductsApiClassifyGroceryProductBulkRequest, options?: Configuration): Promise<Set<ClassifyGroceryProductBulk200ResponseInner>>;
    getComparableProducts(param: ProductsApiGetComparableProductsRequest, options?: Configuration): Promise<GetComparableProducts200Response>;
    getProductInformation(param: ProductsApiGetProductInformationRequest, options?: Configuration): Promise<GetProductInformation200Response>;
    productNutritionByIDImage(param: ProductsApiProductNutritionByIDImageRequest, options?: Configuration): Promise<any>;
    productNutritionLabelImage(param: ProductsApiProductNutritionLabelImageRequest, options?: Configuration): Promise<any>;
    productNutritionLabelWidget(param: ProductsApiProductNutritionLabelWidgetRequest, options?: Configuration): Promise<string>;
    searchGroceryProducts(param?: ProductsApiSearchGroceryProductsRequest, options?: Configuration): Promise<SearchGroceryProducts200Response>;
    searchGroceryProductsByUPC(param: ProductsApiSearchGroceryProductsByUPCRequest, options?: Configuration): Promise<SearchGroceryProductsByUPC200Response>;
    visualizeProductNutritionByID(param: ProductsApiVisualizeProductNutritionByIDRequest, options?: Configuration): Promise<string>;
}
import { RecipesApiRequestFactory, RecipesApiResponseProcessor } from "../apis/RecipesApi";
export interface RecipesApiAnalyzeARecipeSearchQueryRequest {
    q: string;
}
export interface RecipesApiAnalyzeRecipeInstructionsRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
}
export interface RecipesApiAutocompleteRecipeSearchRequest {
    query?: string;
    number?: number;
}
export interface RecipesApiClassifyCuisineRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
}
export interface RecipesApiComputeGlycemicLoadRequest {
    computeGlycemicLoadRequest: ComputeGlycemicLoadRequest;
    language?: 'en' | 'de';
}
export interface RecipesApiConvertAmountsRequest {
    ingredientName: string;
    sourceAmount: number;
    sourceUnit: string;
    targetUnit: string;
}
export interface RecipesApiCreateRecipeCardRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
}
export interface RecipesApiEquipmentByIDImageRequest {
    id: number;
}
export interface RecipesApiExtractRecipeFromWebsiteRequest {
    url: string;
    forceExtraction?: boolean;
    analyze?: boolean;
    includeNutrition?: boolean;
    includeTaste?: boolean;
}
export interface RecipesApiGetAnalyzedRecipeInstructionsRequest {
    id: number;
    stepBreakdown?: boolean;
}
export interface RecipesApiGetRandomRecipesRequest {
    limitLicense?: boolean;
    tags?: string;
    number?: number;
}
export interface RecipesApiGetRecipeEquipmentByIDRequest {
    id: number;
}
export interface RecipesApiGetRecipeInformationRequest {
    id: number;
    includeNutrition?: boolean;
}
export interface RecipesApiGetRecipeInformationBulkRequest {
    ids: string;
    includeNutrition?: boolean;
}
export interface RecipesApiGetRecipeIngredientsByIDRequest {
    id: number;
}
export interface RecipesApiGetRecipeNutritionWidgetByIDRequest {
    id: number;
}
export interface RecipesApiGetRecipePriceBreakdownByIDRequest {
    id: number;
}
export interface RecipesApiGetRecipeTasteByIDRequest {
    id: number;
    normalize?: boolean;
}
export interface RecipesApiGetSimilarRecipesRequest {
    id: number;
    number?: number;
    limitLicense?: boolean;
}
export interface RecipesApiGuessNutritionByDishNameRequest {
    title: string;
}
export interface RecipesApiIngredientsByIDImageRequest {
    id: number;
    measure?: 'us' | 'metric';
}
export interface RecipesApiParseIngredientsRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
    language?: 'en' | 'de';
}
export interface RecipesApiPriceBreakdownByIDImageRequest {
    id: number;
}
export interface RecipesApiQuickAnswerRequest {
    q: string;
}
export interface RecipesApiRecipeNutritionByIDImageRequest {
    id: number;
}
export interface RecipesApiRecipeNutritionLabelImageRequest {
    id: number;
    showOptionalNutrients?: boolean;
    showZeroValues?: boolean;
    showIngredients?: boolean;
}
export interface RecipesApiRecipeNutritionLabelWidgetRequest {
    id: number;
    defaultCss?: boolean;
    showOptionalNutrients?: boolean;
    showZeroValues?: boolean;
    showIngredients?: boolean;
}
export interface RecipesApiRecipeTasteByIDImageRequest {
    id: number;
    normalize?: boolean;
    rgb?: string;
}
export interface RecipesApiSearchRecipesRequest {
    query?: string;
    cuisine?: string;
    excludeCuisine?: string;
    diet?: string;
    intolerances?: string;
    equipment?: string;
    includeIngredients?: string;
    excludeIngredients?: string;
    type?: string;
    instructionsRequired?: boolean;
    fillIngredients?: boolean;
    addRecipeInformation?: boolean;
    addRecipeNutrition?: boolean;
    author?: string;
    tags?: string;
    recipeBoxId?: number;
    titleMatch?: string;
    maxReadyTime?: number;
    ignorePantry?: boolean;
    sort?: string;
    sortDirection?: string;
    minCarbs?: number;
    maxCarbs?: number;
    minProtein?: number;
    maxProtein?: number;
    minCalories?: number;
    maxCalories?: number;
    minFat?: number;
    maxFat?: number;
    minAlcohol?: number;
    maxAlcohol?: number;
    minCaffeine?: number;
    maxCaffeine?: number;
    minCopper?: number;
    maxCopper?: number;
    minCalcium?: number;
    maxCalcium?: number;
    minCholine?: number;
    maxCholine?: number;
    minCholesterol?: number;
    maxCholesterol?: number;
    minFluoride?: number;
    maxFluoride?: number;
    minSaturatedFat?: number;
    maxSaturatedFat?: number;
    minVitaminA?: number;
    maxVitaminA?: number;
    minVitaminC?: number;
    maxVitaminC?: number;
    minVitaminD?: number;
    maxVitaminD?: number;
    minVitaminE?: number;
    maxVitaminE?: number;
    minVitaminK?: number;
    maxVitaminK?: number;
    minVitaminB1?: number;
    maxVitaminB1?: number;
    minVitaminB2?: number;
    maxVitaminB2?: number;
    minVitaminB5?: number;
    maxVitaminB5?: number;
    minVitaminB3?: number;
    maxVitaminB3?: number;
    minVitaminB6?: number;
    maxVitaminB6?: number;
    minVitaminB12?: number;
    maxVitaminB12?: number;
    minFiber?: number;
    maxFiber?: number;
    minFolate?: number;
    maxFolate?: number;
    minFolicAcid?: number;
    maxFolicAcid?: number;
    minIodine?: number;
    maxIodine?: number;
    minIron?: number;
    maxIron?: number;
    minMagnesium?: number;
    maxMagnesium?: number;
    minManganese?: number;
    maxManganese?: number;
    minPhosphorus?: number;
    maxPhosphorus?: number;
    minPotassium?: number;
    maxPotassium?: number;
    minSelenium?: number;
    maxSelenium?: number;
    minSodium?: number;
    maxSodium?: number;
    minSugar?: number;
    maxSugar?: number;
    minZinc?: number;
    maxZinc?: number;
    offset?: number;
    number?: number;
    limitLicense?: boolean;
}
export interface RecipesApiSearchRecipesByIngredientsRequest {
    ingredients?: string;
    number?: number;
    limitLicense?: boolean;
    ranking?: number;
    ignorePantry?: boolean;
}
export interface RecipesApiSearchRecipesByNutrientsRequest {
    minCarbs?: number;
    maxCarbs?: number;
    minProtein?: number;
    maxProtein?: number;
    minCalories?: number;
    maxCalories?: number;
    minFat?: number;
    maxFat?: number;
    minAlcohol?: number;
    maxAlcohol?: number;
    minCaffeine?: number;
    maxCaffeine?: number;
    minCopper?: number;
    maxCopper?: number;
    minCalcium?: number;
    maxCalcium?: number;
    minCholine?: number;
    maxCholine?: number;
    minCholesterol?: number;
    maxCholesterol?: number;
    minFluoride?: number;
    maxFluoride?: number;
    minSaturatedFat?: number;
    maxSaturatedFat?: number;
    minVitaminA?: number;
    maxVitaminA?: number;
    minVitaminC?: number;
    maxVitaminC?: number;
    minVitaminD?: number;
    maxVitaminD?: number;
    minVitaminE?: number;
    maxVitaminE?: number;
    minVitaminK?: number;
    maxVitaminK?: number;
    minVitaminB1?: number;
    maxVitaminB1?: number;
    minVitaminB2?: number;
    maxVitaminB2?: number;
    minVitaminB5?: number;
    maxVitaminB5?: number;
    minVitaminB3?: number;
    maxVitaminB3?: number;
    minVitaminB6?: number;
    maxVitaminB6?: number;
    minVitaminB12?: number;
    maxVitaminB12?: number;
    minFiber?: number;
    maxFiber?: number;
    minFolate?: number;
    maxFolate?: number;
    minFolicAcid?: number;
    maxFolicAcid?: number;
    minIodine?: number;
    maxIodine?: number;
    minIron?: number;
    maxIron?: number;
    minMagnesium?: number;
    maxMagnesium?: number;
    minManganese?: number;
    maxManganese?: number;
    minPhosphorus?: number;
    maxPhosphorus?: number;
    minPotassium?: number;
    maxPotassium?: number;
    minSelenium?: number;
    maxSelenium?: number;
    minSodium?: number;
    maxSodium?: number;
    minSugar?: number;
    maxSugar?: number;
    minZinc?: number;
    maxZinc?: number;
    offset?: number;
    number?: number;
    random?: boolean;
    limitLicense?: boolean;
}
export interface RecipesApiSummarizeRecipeRequest {
    id: number;
}
export interface RecipesApiVisualizeEquipmentRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
    accept?: 'application/json' | 'text/html' | 'media/_*';
}
export interface RecipesApiVisualizePriceBreakdownRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
    accept?: 'application/json' | 'text/html' | 'media/_*';
    language?: 'en' | 'de';
}
export interface RecipesApiVisualizeRecipeEquipmentByIDRequest {
    id: number;
    defaultCss?: boolean;
}
export interface RecipesApiVisualizeRecipeIngredientsByIDRequest {
    id: number;
    defaultCss?: boolean;
    measure?: 'us' | 'metric';
}
export interface RecipesApiVisualizeRecipeNutritionRequest {
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
    accept?: 'application/json' | 'text/html' | 'media/_*';
    language?: 'en' | 'de';
}
export interface RecipesApiVisualizeRecipeNutritionByIDRequest {
    id: number;
    defaultCss?: boolean;
    accept?: 'application/json' | 'text/html' | 'media/_*';
}
export interface RecipesApiVisualizeRecipePriceBreakdownByIDRequest {
    id: number;
    defaultCss?: boolean;
}
export interface RecipesApiVisualizeRecipeTasteRequest {
    language?: 'en' | 'de';
    contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data';
    accept?: 'application/json' | 'text/html' | 'media/_*';
    normalize?: boolean;
    rgb?: string;
}
export interface RecipesApiVisualizeRecipeTasteByIDRequest {
    id: number;
    normalize?: boolean;
    rgb?: string;
}
export declare class ObjectRecipesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RecipesApiRequestFactory, responseProcessor?: RecipesApiResponseProcessor);
    analyzeARecipeSearchQuery(param: RecipesApiAnalyzeARecipeSearchQueryRequest, options?: Configuration): Promise<AnalyzeARecipeSearchQuery200Response>;
    analyzeRecipeInstructions(param?: RecipesApiAnalyzeRecipeInstructionsRequest, options?: Configuration): Promise<AnalyzeRecipeInstructions200Response>;
    autocompleteRecipeSearch(param?: RecipesApiAutocompleteRecipeSearchRequest, options?: Configuration): Promise<Set<AutocompleteRecipeSearch200ResponseInner>>;
    classifyCuisine(param?: RecipesApiClassifyCuisineRequest, options?: Configuration): Promise<ClassifyCuisine200Response>;
    computeGlycemicLoad(param: RecipesApiComputeGlycemicLoadRequest, options?: Configuration): Promise<ComputeGlycemicLoad200Response>;
    convertAmounts(param: RecipesApiConvertAmountsRequest, options?: Configuration): Promise<ConvertAmounts200Response>;
    createRecipeCard(param?: RecipesApiCreateRecipeCardRequest, options?: Configuration): Promise<CreateRecipeCard200Response>;
    equipmentByIDImage(param: RecipesApiEquipmentByIDImageRequest, options?: Configuration): Promise<any>;
    extractRecipeFromWebsite(param: RecipesApiExtractRecipeFromWebsiteRequest, options?: Configuration): Promise<GetRecipeInformation200Response>;
    getAnalyzedRecipeInstructions(param: RecipesApiGetAnalyzedRecipeInstructionsRequest, options?: Configuration): Promise<GetAnalyzedRecipeInstructions200Response>;
    getRandomRecipes(param?: RecipesApiGetRandomRecipesRequest, options?: Configuration): Promise<GetRandomRecipes200Response>;
    getRecipeEquipmentByID(param: RecipesApiGetRecipeEquipmentByIDRequest, options?: Configuration): Promise<GetRecipeEquipmentByID200Response>;
    getRecipeInformation(param: RecipesApiGetRecipeInformationRequest, options?: Configuration): Promise<GetRecipeInformation200Response>;
    getRecipeInformationBulk(param: RecipesApiGetRecipeInformationBulkRequest, options?: Configuration): Promise<Set<GetRecipeInformationBulk200ResponseInner>>;
    getRecipeIngredientsByID(param: RecipesApiGetRecipeIngredientsByIDRequest, options?: Configuration): Promise<GetRecipeIngredientsByID200Response>;
    getRecipeNutritionWidgetByID(param: RecipesApiGetRecipeNutritionWidgetByIDRequest, options?: Configuration): Promise<GetRecipeNutritionWidgetByID200Response>;
    getRecipePriceBreakdownByID(param: RecipesApiGetRecipePriceBreakdownByIDRequest, options?: Configuration): Promise<GetRecipePriceBreakdownByID200Response>;
    getRecipeTasteByID(param: RecipesApiGetRecipeTasteByIDRequest, options?: Configuration): Promise<GetRecipeTasteByID200Response>;
    getSimilarRecipes(param: RecipesApiGetSimilarRecipesRequest, options?: Configuration): Promise<Set<GetSimilarRecipes200ResponseInner>>;
    guessNutritionByDishName(param: RecipesApiGuessNutritionByDishNameRequest, options?: Configuration): Promise<GuessNutritionByDishName200Response>;
    ingredientsByIDImage(param: RecipesApiIngredientsByIDImageRequest, options?: Configuration): Promise<any>;
    parseIngredients(param?: RecipesApiParseIngredientsRequest, options?: Configuration): Promise<Set<ParseIngredients200ResponseInner>>;
    priceBreakdownByIDImage(param: RecipesApiPriceBreakdownByIDImageRequest, options?: Configuration): Promise<any>;
    quickAnswer(param: RecipesApiQuickAnswerRequest, options?: Configuration): Promise<QuickAnswer200Response>;
    recipeNutritionByIDImage(param: RecipesApiRecipeNutritionByIDImageRequest, options?: Configuration): Promise<any>;
    recipeNutritionLabelImage(param: RecipesApiRecipeNutritionLabelImageRequest, options?: Configuration): Promise<any>;
    recipeNutritionLabelWidget(param: RecipesApiRecipeNutritionLabelWidgetRequest, options?: Configuration): Promise<string>;
    recipeTasteByIDImage(param: RecipesApiRecipeTasteByIDImageRequest, options?: Configuration): Promise<any>;
    searchRecipes(param?: RecipesApiSearchRecipesRequest, options?: Configuration): Promise<SearchRecipes200Response>;
    searchRecipesByIngredients(param?: RecipesApiSearchRecipesByIngredientsRequest, options?: Configuration): Promise<Set<SearchRecipesByIngredients200ResponseInner>>;
    searchRecipesByNutrients(param?: RecipesApiSearchRecipesByNutrientsRequest, options?: Configuration): Promise<Set<SearchRecipesByNutrients200ResponseInner>>;
    summarizeRecipe(param: RecipesApiSummarizeRecipeRequest, options?: Configuration): Promise<SummarizeRecipe200Response>;
    visualizeEquipment(param?: RecipesApiVisualizeEquipmentRequest, options?: Configuration): Promise<string>;
    visualizePriceBreakdown(param?: RecipesApiVisualizePriceBreakdownRequest, options?: Configuration): Promise<string>;
    visualizeRecipeEquipmentByID(param: RecipesApiVisualizeRecipeEquipmentByIDRequest, options?: Configuration): Promise<string>;
    visualizeRecipeIngredientsByID(param: RecipesApiVisualizeRecipeIngredientsByIDRequest, options?: Configuration): Promise<string>;
    visualizeRecipeNutrition(param?: RecipesApiVisualizeRecipeNutritionRequest, options?: Configuration): Promise<string>;
    visualizeRecipeNutritionByID(param: RecipesApiVisualizeRecipeNutritionByIDRequest, options?: Configuration): Promise<string>;
    visualizeRecipePriceBreakdownByID(param: RecipesApiVisualizeRecipePriceBreakdownByIDRequest, options?: Configuration): Promise<string>;
    visualizeRecipeTaste(param?: RecipesApiVisualizeRecipeTasteRequest, options?: Configuration): Promise<string>;
    visualizeRecipeTasteByID(param: RecipesApiVisualizeRecipeTasteByIDRequest, options?: Configuration): Promise<string>;
}
import { WineApiRequestFactory, WineApiResponseProcessor } from "../apis/WineApi";
export interface WineApiGetDishPairingForWineRequest {
    wine: string;
}
export interface WineApiGetWineDescriptionRequest {
    wine: string;
}
export interface WineApiGetWinePairingRequest {
    food: string;
    maxPrice?: number;
}
export interface WineApiGetWineRecommendationRequest {
    wine: string;
    maxPrice?: number;
    minRating?: number;
    number?: number;
}
export declare class ObjectWineApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WineApiRequestFactory, responseProcessor?: WineApiResponseProcessor);
    getDishPairingForWine(param: WineApiGetDishPairingForWineRequest, options?: Configuration): Promise<GetDishPairingForWine200Response>;
    getWineDescription(param: WineApiGetWineDescriptionRequest, options?: Configuration): Promise<GetWineDescription200Response>;
    getWinePairing(param: WineApiGetWinePairingRequest, options?: Configuration): Promise<GetWinePairing200Response>;
    getWineRecommendation(param: WineApiGetWineRecommendationRequest, options?: Configuration): Promise<GetWineRecommendation200Response>;
}
