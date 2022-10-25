import { GetRecipeNutritionWidgetByID200ResponseBadInner } from './GetRecipeNutritionWidgetByID200ResponseBadInner';
import { GetRecipeNutritionWidgetByID200ResponseGoodInner } from './GetRecipeNutritionWidgetByID200ResponseGoodInner';
export declare class GetRecipeNutritionWidgetByID200Response {
    'calories': string;
    'carbs': string;
    'fat': string;
    'protein': string;
    'bad': Set<GetRecipeNutritionWidgetByID200ResponseBadInner>;
    'good': Set<GetRecipeNutritionWidgetByID200ResponseGoodInner>;
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
