"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMealPlanTemplate200ResponseDaysInner = void 0;
var GetMealPlanTemplate200ResponseDaysInner = (function () {
    function GetMealPlanTemplate200ResponseDaysInner() {
    }
    GetMealPlanTemplate200ResponseDaysInner.getAttributeTypeMap = function () {
        return GetMealPlanTemplate200ResponseDaysInner.attributeTypeMap;
    };
    GetMealPlanTemplate200ResponseDaysInner.discriminator = undefined;
    GetMealPlanTemplate200ResponseDaysInner.attributeTypeMap = [
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
            "name": "day",
            "baseName": "day",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Set<GetMealPlanTemplate200ResponseDaysInnerItemsInner>",
            "format": ""
        }
    ];
    return GetMealPlanTemplate200ResponseDaysInner;
}());
exports.GetMealPlanTemplate200ResponseDaysInner = GetMealPlanTemplate200ResponseDaysInner;
//# sourceMappingURL=GetMealPlanTemplate200ResponseDaysInner.js.map