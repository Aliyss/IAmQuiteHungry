"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMealPlanWeek200ResponseDaysInner = void 0;
var GetMealPlanWeek200ResponseDaysInner = (function () {
    function GetMealPlanWeek200ResponseDaysInner() {
    }
    GetMealPlanWeek200ResponseDaysInner.getAttributeTypeMap = function () {
        return GetMealPlanWeek200ResponseDaysInner.attributeTypeMap;
    };
    GetMealPlanWeek200ResponseDaysInner.discriminator = undefined;
    GetMealPlanWeek200ResponseDaysInner.attributeTypeMap = [
        {
            "name": "nutritionSummary",
            "baseName": "nutritionSummary",
            "type": "GetMealPlanWeek200ResponseDaysInnerNutritionSummary",
            "format": ""
        },
        {
            "name": "nutritionSummaryBreakfast",
            "baseName": "nutritionSummaryBreakfast",
            "type": "GetMealPlanWeek200ResponseDaysInnerNutritionSummary",
            "format": ""
        },
        {
            "name": "nutritionSummaryLunch",
            "baseName": "nutritionSummaryLunch",
            "type": "GetMealPlanWeek200ResponseDaysInnerNutritionSummary",
            "format": ""
        },
        {
            "name": "nutritionSummaryDinner",
            "baseName": "nutritionSummaryDinner",
            "type": "GetMealPlanWeek200ResponseDaysInnerNutritionSummary",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "number",
            "format": ""
        },
        {
            "name": "day",
            "baseName": "day",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Set<GetMealPlanWeek200ResponseDaysInnerItemsInner>",
            "format": ""
        }
    ];
    return GetMealPlanWeek200ResponseDaysInner;
}());
exports.GetMealPlanWeek200ResponseDaysInner = GetMealPlanWeek200ResponseDaysInner;
//# sourceMappingURL=GetMealPlanWeek200ResponseDaysInner.js.map