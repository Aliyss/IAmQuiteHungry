"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIngredientInformation200ResponseNutrition = void 0;
var GetIngredientInformation200ResponseNutrition = (function () {
    function GetIngredientInformation200ResponseNutrition() {
    }
    GetIngredientInformation200ResponseNutrition.getAttributeTypeMap = function () {
        return GetIngredientInformation200ResponseNutrition.attributeTypeMap;
    };
    GetIngredientInformation200ResponseNutrition.discriminator = undefined;
    GetIngredientInformation200ResponseNutrition.attributeTypeMap = [
        {
            "name": "nutrients",
            "baseName": "nutrients",
            "type": "Set<ParseIngredients200ResponseInnerNutritionNutrientsInner>",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Set<ParseIngredients200ResponseInnerNutritionPropertiesInner>",
            "format": ""
        },
        {
            "name": "caloricBreakdown",
            "baseName": "caloricBreakdown",
            "type": "ParseIngredients200ResponseInnerNutritionCaloricBreakdown",
            "format": ""
        },
        {
            "name": "weightPerServing",
            "baseName": "weightPerServing",
            "type": "ParseIngredients200ResponseInnerNutritionWeightPerServing",
            "format": ""
        }
    ];
    return GetIngredientInformation200ResponseNutrition;
}());
exports.GetIngredientInformation200ResponseNutrition = GetIngredientInformation200ResponseNutrition;
//# sourceMappingURL=GetIngredientInformation200ResponseNutrition.js.map