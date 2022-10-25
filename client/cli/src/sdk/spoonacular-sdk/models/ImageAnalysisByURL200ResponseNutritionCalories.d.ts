import { ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent } from './ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent';
export declare class ImageAnalysisByURL200ResponseNutritionCalories {
    'value': number;
    'unit': string;
    'confidenceRange95Percent': ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent;
    'standardDeviation': number;
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
