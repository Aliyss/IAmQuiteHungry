import { ParseIngredients200ResponseInnerNutritionCaloricBreakdown } from './ParseIngredients200ResponseInnerNutritionCaloricBreakdown';
import { ParseIngredients200ResponseInnerNutritionNutrientsInner } from './ParseIngredients200ResponseInnerNutritionNutrientsInner';
export declare class SearchGroceryProductsByUPC200ResponseNutrition {
    'nutrients': Set<ParseIngredients200ResponseInnerNutritionNutrientsInner>;
    'caloricBreakdown': ParseIngredients200ResponseInnerNutritionCaloricBreakdown;
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
