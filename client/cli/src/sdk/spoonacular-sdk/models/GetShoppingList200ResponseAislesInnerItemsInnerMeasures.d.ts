import { ParseIngredients200ResponseInnerNutritionWeightPerServing } from './ParseIngredients200ResponseInnerNutritionWeightPerServing';
export declare class GetShoppingList200ResponseAislesInnerItemsInnerMeasures {
    'original': ParseIngredients200ResponseInnerNutritionWeightPerServing;
    'metric': ParseIngredients200ResponseInnerNutritionWeightPerServing;
    'us': ParseIngredients200ResponseInnerNutritionWeightPerServing;
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
