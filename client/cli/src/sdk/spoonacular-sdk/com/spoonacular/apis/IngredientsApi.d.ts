import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AutocompleteIngredientSearch200ResponseInner } from '..com/spoonacular/client/model/models/AutocompleteIngredientSearch200ResponseInner';
import { ComputeIngredientAmount200Response } from '..com/spoonacular/client/model/models/ComputeIngredientAmount200Response';
import { GetIngredientInformation200Response } from '..com/spoonacular/client/model/models/GetIngredientInformation200Response';
import { GetIngredientSubstitutes200Response } from '..com/spoonacular/client/model/models/GetIngredientSubstitutes200Response';
import { IngredientSearch200Response } from '..com/spoonacular/client/model/models/IngredientSearch200Response';
import { MapIngredientsToGroceryProducts200ResponseInner } from '..com/spoonacular/client/model/models/MapIngredientsToGroceryProducts200ResponseInner';
import { MapIngredientsToGroceryProductsRequest } from '..com/spoonacular/client/model/models/MapIngredientsToGroceryProductsRequest';
export declare class IngredientsApiRequestFactory extends BaseAPIRequestFactory {
    autocompleteIngredientSearch(query?: string, number?: number, metaInformation?: boolean, intolerances?: string, _options?: Configuration): Promise<RequestContext>;
    computeIngredientAmount(id: number, nutrient: string, target: number, unit?: string, _options?: Configuration): Promise<RequestContext>;
    getIngredientInformation(id: number, amount?: number, unit?: string, _options?: Configuration): Promise<RequestContext>;
    getIngredientSubstitutes(ingredientName: string, _options?: Configuration): Promise<RequestContext>;
    getIngredientSubstitutesByID(id: number, _options?: Configuration): Promise<RequestContext>;
    ingredientSearch(query?: string, addChildren?: boolean, minProteinPercent?: number, maxProteinPercent?: number, minFatPercent?: number, maxFatPercent?: number, minCarbsPercent?: number, maxCarbsPercent?: number, metaInformation?: boolean, intolerances?: string, sort?: string, sortDirection?: string, offset?: number, number?: number, _options?: Configuration): Promise<RequestContext>;
    ingredientsByIDImage(id: number, measure?: 'us' | 'metric', _options?: Configuration): Promise<RequestContext>;
    mapIngredientsToGroceryProducts(mapIngredientsToGroceryProductsRequest: MapIngredientsToGroceryProductsRequest, _options?: Configuration): Promise<RequestContext>;
    visualizeIngredients(contentType?: 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data', language?: 'en' | 'de', accept?: 'application/json' | 'text/html' | 'media/_*', _options?: Configuration): Promise<RequestContext>;
}
export declare class IngredientsApiResponseProcessor {
    autocompleteIngredientSearch(response: ResponseContext): Promise<Set<AutocompleteIngredientSearch200ResponseInner>>;
    computeIngredientAmount(response: ResponseContext): Promise<ComputeIngredientAmount200Response>;
    getIngredientInformation(response: ResponseContext): Promise<GetIngredientInformation200Response>;
    getIngredientSubstitutes(response: ResponseContext): Promise<GetIngredientSubstitutes200Response>;
    getIngredientSubstitutesByID(response: ResponseContext): Promise<GetIngredientSubstitutes200Response>;
    ingredientSearch(response: ResponseContext): Promise<IngredientSearch200Response>;
    ingredientsByIDImage(response: ResponseContext): Promise<any>;
    mapIngredientsToGroceryProducts(response: ResponseContext): Promise<Set<MapIngredientsToGroceryProducts200ResponseInner>>;
    visualizeIngredients(response: ResponseContext): Promise<string>;
}
