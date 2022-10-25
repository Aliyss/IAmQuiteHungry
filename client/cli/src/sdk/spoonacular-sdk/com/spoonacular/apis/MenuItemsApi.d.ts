import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AutocompleteMenuItemSearch200Response } from '..com/spoonacular/client/model/models/AutocompleteMenuItemSearch200Response';
import { GetMenuItemInformation200Response } from '..com/spoonacular/client/model/models/GetMenuItemInformation200Response';
import { SearchMenuItems200Response } from '..com/spoonacular/client/model/models/SearchMenuItems200Response';
export declare class MenuItemsApiRequestFactory extends BaseAPIRequestFactory {
    autocompleteMenuItemSearch(query: string, number?: number, _options?: Configuration): Promise<RequestContext>;
    getMenuItemInformation(id: number, _options?: Configuration): Promise<RequestContext>;
    menuItemNutritionByIDImage(id: number, _options?: Configuration): Promise<RequestContext>;
    menuItemNutritionLabelImage(id: number, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Promise<RequestContext>;
    menuItemNutritionLabelWidget(id: number, defaultCss?: boolean, showOptionalNutrients?: boolean, showZeroValues?: boolean, showIngredients?: boolean, _options?: Configuration): Promise<RequestContext>;
    searchMenuItems(query?: string, minCalories?: number, maxCalories?: number, minCarbs?: number, maxCarbs?: number, minProtein?: number, maxProtein?: number, minFat?: number, maxFat?: number, addMenuItemInformation?: boolean, offset?: number, number?: number, _options?: Configuration): Promise<RequestContext>;
    visualizeMenuItemNutritionByID(id: number, defaultCss?: boolean, accept?: 'application/json' | 'text/html' | 'media/_*', _options?: Configuration): Promise<RequestContext>;
}
export declare class MenuItemsApiResponseProcessor {
    autocompleteMenuItemSearch(response: ResponseContext): Promise<AutocompleteMenuItemSearch200Response>;
    getMenuItemInformation(response: ResponseContext): Promise<GetMenuItemInformation200Response>;
    menuItemNutritionByIDImage(response: ResponseContext): Promise<any>;
    menuItemNutritionLabelImage(response: ResponseContext): Promise<any>;
    menuItemNutritionLabelWidget(response: ResponseContext): Promise<string>;
    searchMenuItems(response: ResponseContext): Promise<SearchMenuItems200Response>;
    visualizeMenuItemNutritionByID(response: ResponseContext): Promise<string>;
}
