"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuessNutritionByDishName200Response = void 0;
var GuessNutritionByDishName200Response = (function () {
    function GuessNutritionByDishName200Response() {
    }
    GuessNutritionByDishName200Response.getAttributeTypeMap = function () {
        return GuessNutritionByDishName200Response.attributeTypeMap;
    };
    GuessNutritionByDishName200Response.discriminator = undefined;
    GuessNutritionByDishName200Response.attributeTypeMap = [
        {
            "name": "calories",
            "baseName": "calories",
            "type": "GuessNutritionByDishName200ResponseCalories",
            "format": ""
        },
        {
            "name": "carbs",
            "baseName": "carbs",
            "type": "GuessNutritionByDishName200ResponseCalories",
            "format": ""
        },
        {
            "name": "fat",
            "baseName": "fat",
            "type": "GuessNutritionByDishName200ResponseCalories",
            "format": ""
        },
        {
            "name": "protein",
            "baseName": "protein",
            "type": "GuessNutritionByDishName200ResponseCalories",
            "format": ""
        },
        {
            "name": "recipesUsed",
            "baseName": "recipesUsed",
            "type": "number",
            "format": ""
        }
    ];
    return GuessNutritionByDishName200Response;
}());
exports.GuessNutritionByDishName200Response = GuessNutritionByDishName200Response;
//# sourceMappingURL=GuessNutritionByDishName200Response.js.map