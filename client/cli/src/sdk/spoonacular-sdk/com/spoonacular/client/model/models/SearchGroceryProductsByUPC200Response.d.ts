import { SearchGroceryProductsByUPC200ResponseIngredientsInner } from './SearchGroceryProductsByUPC200ResponseIngredientsInner';
import { SearchGroceryProductsByUPC200ResponseNutrition } from './SearchGroceryProductsByUPC200ResponseNutrition';
import { SearchGroceryProductsByUPC200ResponseServings } from './SearchGroceryProductsByUPC200ResponseServings';
export declare class SearchGroceryProductsByUPC200Response {
    'id': number;
    'title': string;
    'badges': Array<string>;
    'importantBadges': Array<string>;
    'breadcrumbs': Array<string>;
    'generatedText': string;
    'imageType': string;
    'ingredientCount'?: number;
    'ingredientList': string;
    'ingredients': Set<SearchGroceryProductsByUPC200ResponseIngredientsInner>;
    'likes': number;
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
