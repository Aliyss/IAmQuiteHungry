import { GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner } from './GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner';
export declare class GetMealPlanWeek200ResponseDaysInnerNutritionSummary {
    'nutrients': Set<GetMealPlanWeek200ResponseDaysInnerNutritionSummaryNutrientsInner>;
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
