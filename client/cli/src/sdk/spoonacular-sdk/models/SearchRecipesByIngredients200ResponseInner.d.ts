import { SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner } from './SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner';
export declare class SearchRecipesByIngredients200ResponseInner {
    'id': number;
    'image': string;
    'imageType': string;
    'likes': number;
    'missedIngredientCount': number;
    'missedIngredients': Set<SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner>;
    'title': string;
    'unusedIngredients': Array<any>;
    'usedIngredientCount': number;
    'usedIngredients': Set<SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner>;
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
