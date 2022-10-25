import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AutocompleteProductSearch200Response } from '../models/AutocompleteProductSearch200Response';
import { ClassifyGroceryProduct200Response } from '../models/ClassifyGroceryProduct200Response';
import { ClassifyGroceryProductBulk200ResponseInner } from '../models/ClassifyGroceryProductBulk200ResponseInner';
import { ClassifyGroceryProductBulkRequestInner } from '../models/ClassifyGroceryProductBulkRequestInner';
import { ClassifyGroceryProductRequest } from '../models/ClassifyGroceryProductRequest';
import { GetComparableProducts200Response } from '../models/GetComparableProducts200Response';
import { GetProductInformation200Response } from '../models/GetProductInformation200Response';
import { SearchGroceryProducts200Response } from '../models/SearchGroceryProducts200Response';
import { SearchGroceryProductsByUPC200Response } from '../models/SearchGroceryProductsByUPC200Response';
export declare class ProductsApiRequestFactory extends BaseAPIRequestFactory {
    autocompleteProductSearch(query: string, number?: number, _options?: Configuration): Promise<RequestContext>;
    classifyGroceryProduct(classifyGroceryProductRequest: ClassifyGroceryProductRequest, locale?: 'en_US' | 'en_GB', _options?: Configuration): Promise<RequestContext>;
    classifyGroceryProductBulk(classifyGroceryProductBulkRequestInner: Set<ClassifyGroceryProductBulkRequestInner>, locale?: string, _options?: Configuration): Promise<RequestContext>;
    getComparableProducts(upc: number, _options?: Configuration): Promise<RequestContext>;
    getProductInformation(id: number, _options?: Configuration): Promise<RequestContext>;
    productNutritionByIDImage(id: number, _options?: Configuration): Promise<RequestContext>;
    productNutritionLabelImage(id: number, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Promise<RequestContext>;
    productNutritionLabelWidget(id: number, defaultCss?: boolean, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Promise<RequestContext>;
    searchGroceryProducts(query?: string, minCalories?: number, maxCalories?: number, minCarbs?: number, maxCarbs?: number, minProtein?: number, maxProtein?: number, minFat?: number, maxFat?: number, addProductInformation?: boolean, offset?: number, number?: number, _options?: Configuration): Promise<RequestContext>;
    searchGroceryProductsByUPC(upc: number, _options?: Configuration): Promise<RequestContext>;
    visualizeProductNutritionByID(id: number, defaultCss?: boolean, accept?: 'application/json' | 'text/html' | 'media/_*', _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductsApiResponseProcessor {
    autocompleteProductSearch(response: ResponseContext): Promise<AutocompleteProductSearch200Response>;
    classifyGroceryProduct(response: ResponseContext): Promise<ClassifyGroceryProduct200Response>;
    classifyGroceryProductBulk(response: ResponseContext): Promise<Set<ClassifyGroceryProductBulk200ResponseInner>>;
    getComparableProducts(response: ResponseContext): Promise<GetComparableProducts200Response>;
    getProductInformation(response: ResponseContext): Promise<GetProductInformation200Response>;
    productNutritionByIDImage(response: ResponseContext): Promise<any>;
    productNutritionLabelImage(response: ResponseContext): Promise<any>;
    productNutritionLabelWidget(response: ResponseContext): Promise<string>;
    searchGroceryProducts(response: ResponseContext): Promise<SearchGroceryProducts200Response>;
    searchGroceryProductsByUPC(response: ResponseContext): Promise<SearchGroceryProductsByUPC200Response>;
    visualizeProductNutritionByID(response: ResponseContext): Promise<string>;
}
