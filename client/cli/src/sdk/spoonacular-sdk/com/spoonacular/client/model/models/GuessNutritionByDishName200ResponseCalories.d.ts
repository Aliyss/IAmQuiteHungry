import { GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent } from './GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent';
export declare class GuessNutritionByDishName200ResponseCalories {
    'confidenceRange95Percent': GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent;
    'standardDeviation': number;
    'unit': string;
    'value': number;
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
