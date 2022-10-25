import { ImageAnalysisByURL200ResponseCategory } from './ImageAnalysisByURL200ResponseCategory';
import { ImageAnalysisByURL200ResponseNutrition } from './ImageAnalysisByURL200ResponseNutrition';
import { ImageAnalysisByURL200ResponseRecipesInner } from './ImageAnalysisByURL200ResponseRecipesInner';
export declare class ImageAnalysisByURL200Response {
    'nutrition': ImageAnalysisByURL200ResponseNutrition;
    'category': ImageAnalysisByURL200ResponseCategory;
    'recipes': Set<ImageAnalysisByURL200ResponseRecipesInner>;
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
