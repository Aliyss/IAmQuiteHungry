"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuessNutritionByDishName200ResponseCalories = void 0;
var GuessNutritionByDishName200ResponseCalories = (function () {
    function GuessNutritionByDishName200ResponseCalories() {
    }
    GuessNutritionByDishName200ResponseCalories.getAttributeTypeMap = function () {
        return GuessNutritionByDishName200ResponseCalories.attributeTypeMap;
    };
    GuessNutritionByDishName200ResponseCalories.discriminator = undefined;
    GuessNutritionByDishName200ResponseCalories.attributeTypeMap = [
        {
            "name": "confidenceRange95Percent",
            "baseName": "confidenceRange95Percent",
            "type": "GuessNutritionByDishName200ResponseCaloriesConfidenceRange95Percent",
            "format": ""
        },
        {
            "name": "standardDeviation",
            "baseName": "standardDeviation",
            "type": "number",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        }
    ];
    return GuessNutritionByDishName200ResponseCalories;
}());
exports.GuessNutritionByDishName200ResponseCalories = GuessNutritionByDishName200ResponseCalories;
//# sourceMappingURL=GuessNutritionByDishName200ResponseCalories.js.map