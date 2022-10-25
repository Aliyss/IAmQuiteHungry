import { AnalyzeARecipeSearchQuery200ResponseDishesInner } from './AnalyzeARecipeSearchQuery200ResponseDishesInner';
import { AnalyzeARecipeSearchQuery200ResponseIngredientsInner } from './AnalyzeARecipeSearchQuery200ResponseIngredientsInner';
export declare class AnalyzeARecipeSearchQuery200Response {
    'dishes': Set<AnalyzeARecipeSearchQuery200ResponseDishesInner>;
    'ingredients': Set<AnalyzeARecipeSearchQuery200ResponseIngredientsInner>;
    'cuisines': Array<string>;
    'modifiers': Array<string>;
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
