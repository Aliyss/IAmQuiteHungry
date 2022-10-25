import { GetMealPlanTemplate200ResponseDaysInnerItemsInner } from './GetMealPlanTemplate200ResponseDaysInnerItemsInner';
import { GetMealPlanWeek200ResponseDaysInnerNutritionSummary } from './GetMealPlanWeek200ResponseDaysInnerNutritionSummary';
export declare class GetMealPlanTemplate200ResponseDaysInner {
    'nutritionSummary'?: GetMealPlanWeek200ResponseDaysInnerNutritionSummary;
    'nutritionSummaryBreakfast'?: GetMealPlanWeek200ResponseDaysInnerNutritionSummary;
    'nutritionSummaryLunch'?: GetMealPlanWeek200ResponseDaysInnerNutritionSummary;
    'nutritionSummaryDinner'?: GetMealPlanWeek200ResponseDaysInnerNutritionSummary;
    'day': string;
    'items'?: Set<GetMealPlanTemplate200ResponseDaysInnerItemsInner>;
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
