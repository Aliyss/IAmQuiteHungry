import { GuessNutritionByDishName200ResponseCalories } from './GuessNutritionByDishName200ResponseCalories';
export declare class GuessNutritionByDishName200Response {
    'calories': GuessNutritionByDishName200ResponseCalories;
    'carbs': GuessNutritionByDishName200ResponseCalories;
    'fat': GuessNutritionByDishName200ResponseCalories;
    'protein': GuessNutritionByDishName200ResponseCalories;
    'recipesUsed': number;
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
