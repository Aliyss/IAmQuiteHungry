import { ImageAnalysisByURL200ResponseNutritionCalories } from './ImageAnalysisByURL200ResponseNutritionCalories';
export declare class ImageAnalysisByURL200ResponseNutrition {
    'recipesUsed': number;
    'calories': ImageAnalysisByURL200ResponseNutritionCalories;
    'fat': ImageAnalysisByURL200ResponseNutritionCalories;
    'protein': ImageAnalysisByURL200ResponseNutritionCalories;
    'carbs': ImageAnalysisByURL200ResponseNutritionCalories;
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
