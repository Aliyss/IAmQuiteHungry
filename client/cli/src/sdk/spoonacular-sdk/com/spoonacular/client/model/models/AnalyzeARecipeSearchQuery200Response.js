"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeARecipeSearchQuery200Response = void 0;
var AnalyzeARecipeSearchQuery200Response = (function () {
    function AnalyzeARecipeSearchQuery200Response() {
    }
    AnalyzeARecipeSearchQuery200Response.getAttributeTypeMap = function () {
        return AnalyzeARecipeSearchQuery200Response.attributeTypeMap;
    };
    AnalyzeARecipeSearchQuery200Response.discriminator = undefined;
    AnalyzeARecipeSearchQuery200Response.attributeTypeMap = [
        {
            "name": "dishes",
            "baseName": "dishes",
            "type": "Set<AnalyzeARecipeSearchQuery200ResponseDishesInner>",
            "format": ""
        },
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Set<AnalyzeARecipeSearchQuery200ResponseIngredientsInner>",
            "format": ""
        },
        {
            "name": "cuisines",
            "baseName": "cuisines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "modifiers",
            "baseName": "modifiers",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return AnalyzeARecipeSearchQuery200Response;
}());
exports.AnalyzeARecipeSearchQuery200Response = AnalyzeARecipeSearchQuery200Response;
//# sourceMappingURL=AnalyzeARecipeSearchQuery200Response.js.map