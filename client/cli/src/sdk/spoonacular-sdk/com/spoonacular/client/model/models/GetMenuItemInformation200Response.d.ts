import { SearchGroceryProductsByUPC200ResponseNutrition } from './SearchGroceryProductsByUPC200ResponseNutrition';
import { SearchGroceryProductsByUPC200ResponseServings } from './SearchGroceryProductsByUPC200ResponseServings';
export declare class GetMenuItemInformation200Response {
    'id': number;
    'title': string;
    'restaurantChain': string;
    'nutrition': SearchGroceryProductsByUPC200ResponseNutrition;
    'badges': Array<string>;
    'breadcrumbs': Array<string>;
    'generatedText'?: string;
    'imageType': string;
    'likes': number;
    'servings': SearchGroceryProductsByUPC200ResponseServings;
    'price'?: number;
    'spoonacularScore'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
