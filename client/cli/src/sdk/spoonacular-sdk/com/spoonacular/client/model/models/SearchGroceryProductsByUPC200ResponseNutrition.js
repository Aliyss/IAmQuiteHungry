"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchGroceryProductsByUPC200ResponseNutrition = void 0;
var SearchGroceryProductsByUPC200ResponseNutrition = (function () {
    function SearchGroceryProductsByUPC200ResponseNutrition() {
    }
    SearchGroceryProductsByUPC200ResponseNutrition.getAttributeTypeMap = function () {
        return SearchGroceryProductsByUPC200ResponseNutrition.attributeTypeMap;
    };
    SearchGroceryProductsByUPC200ResponseNutrition.discriminator = undefined;
    SearchGroceryProductsByUPC200ResponseNutrition.attributeTypeMap = [
        {
            "name": "nutrients",
            "baseName": "nutrients",
            "type": "Set<ParseIngredients200ResponseInnerNutritionNutrientsInner>",
            "format": ""
        },
        {
            "name": "caloricBreakdown",
            "baseName": "caloricBreakdown",
            "type": "ParseIngredients200ResponseInnerNutritionCaloricBreakdown",
            "format": ""
        }
    ];
    return SearchGroceryProductsByUPC200ResponseNutrition;
}());
exports.SearchGroceryProductsByUPC200ResponseNutrition = SearchGroceryProductsByUPC200ResponseNutrition;
//# sourceMappingURL=SearchGroceryProductsByUPC200ResponseNutrition.js.map