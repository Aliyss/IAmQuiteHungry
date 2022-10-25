import { GetProductInformation200ResponseIngredientsInner } from './GetProductInformation200ResponseIngredientsInner';
import { SearchGroceryProductsByUPC200ResponseNutrition } from './SearchGroceryProductsByUPC200ResponseNutrition';
import { SearchGroceryProductsByUPC200ResponseServings } from './SearchGroceryProductsByUPC200ResponseServings';
export declare class GetProductInformation200Response {
    'id': number;
    'title': string;
    'breadcrumbs': Array<string>;
    'imageType': string;
    'badges': Array<string>;
    'importantBadges': Array<string>;
    'ingredientCount': number;
    'generatedText'?: any;
    'ingredientList': string;
    'ingredients': Array<GetProductInformation200ResponseIngredientsInner>;
    'likes': number;
    'aisle': string;
    'nutrition': SearchGroceryProductsByUPC200ResponseNutrition;
    'price': number;
    'servings': SearchGroceryProductsByUPC200ResponseServings;
    'spoonacularScore': number;
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
