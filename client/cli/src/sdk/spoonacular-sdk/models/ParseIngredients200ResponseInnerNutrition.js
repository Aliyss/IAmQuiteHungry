"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseIngredients200ResponseInnerNutrition = void 0;
var ParseIngredients200ResponseInnerNutrition = (function () {
    function ParseIngredients200ResponseInnerNutrition() {
    }
    ParseIngredients200ResponseInnerNutrition.getAttributeTypeMap = function () {
        return ParseIngredients200ResponseInnerNutrition.attributeTypeMap;
    };
    ParseIngredients200ResponseInnerNutrition.discriminator = undefined;
    ParseIngredients200ResponseInnerNutrition.attributeTypeMap = [
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
            "name": "flavonoids",
            "baseName": "flavonoids",
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
    return ParseIngredients200ResponseInnerNutrition;
}());
exports.ParseIngredients200ResponseInnerNutrition = ParseIngredients200ResponseInnerNutrition;
//# sourceMappingURL=ParseIngredients200ResponseInnerNutrition.js.map