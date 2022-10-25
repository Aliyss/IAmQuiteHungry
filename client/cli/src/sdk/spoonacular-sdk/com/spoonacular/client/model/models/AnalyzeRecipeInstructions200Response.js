"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeRecipeInstructions200Response = void 0;
var AnalyzeRecipeInstructions200Response = (function () {
    function AnalyzeRecipeInstructions200Response() {
    }
    AnalyzeRecipeInstructions200Response.getAttributeTypeMap = function () {
        return AnalyzeRecipeInstructions200Response.attributeTypeMap;
    };
    AnalyzeRecipeInstructions200Response.discriminator = undefined;
    AnalyzeRecipeInstructions200Response.attributeTypeMap = [
        {
            "name": "parsedInstructions",
            "baseName": "parsedInstructions",
            "type": "Set<AnalyzeRecipeInstructions200ResponseParsedInstructionsInner>",
            "format": ""
        },
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Set<AnalyzeRecipeInstructions200ResponseIngredientsInner>",
            "format": ""
        },
        {
            "name": "equipment",
            "baseName": "equipment",
            "type": "Set<AnalyzeRecipeInstructions200ResponseIngredientsInner>",
            "format": ""
        }
    ];
    return AnalyzeRecipeInstructions200Response;
}());
exports.AnalyzeRecipeInstructions200Response = AnalyzeRecipeInstructions200Response;
//# sourceMappingURL=AnalyzeRecipeInstructions200Response.js.map