import { ParseIngredients200ResponseInnerNutritionCaloricBreakdown } from './ParseIngredients200ResponseInnerNutritionCaloricBreakdown';
import { ParseIngredients200ResponseInnerNutritionNutrientsInner } from './ParseIngredients200ResponseInnerNutritionNutrientsInner';
import { ParseIngredients200ResponseInnerNutritionPropertiesInner } from './ParseIngredients200ResponseInnerNutritionPropertiesInner';
import { ParseIngredients200ResponseInnerNutritionWeightPerServing } from './ParseIngredients200ResponseInnerNutritionWeightPerServing';
export declare class ParseIngredients200ResponseInnerNutrition {
    'nutrients': Set<ParseIngredients200ResponseInnerNutritionNutrientsInner>;
    'properties': Set<ParseIngredients200ResponseInnerNutritionPropertiesInner>;
    'flavonoids': Set<ParseIngredients200ResponseInnerNutritionPropertiesInner>;
    'caloricBreakdown': ParseIngredients200ResponseInnerNutritionCaloricBreakdown;
    'weightPerServing': ParseIngredients200ResponseInnerNutritionWeightPerServing;
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
