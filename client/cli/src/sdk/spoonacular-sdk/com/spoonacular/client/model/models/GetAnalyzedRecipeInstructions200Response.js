"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnalyzedRecipeInstructions200Response = void 0;
var GetAnalyzedRecipeInstructions200Response = (function () {
    function GetAnalyzedRecipeInstructions200Response() {
    }
    GetAnalyzedRecipeInstructions200Response.getAttributeTypeMap = function () {
        return GetAnalyzedRecipeInstructions200Response.attributeTypeMap;
    };
    GetAnalyzedRecipeInstructions200Response.discriminator = undefined;
    GetAnalyzedRecipeInstructions200Response.attributeTypeMap = [
        {
            "name": "parsedInstructions",
            "baseName": "parsedInstructions",
            "type": "Set<GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner>",
            "format": ""
        },
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Set<GetAnalyzedRecipeInstructions200ResponseIngredientsInner>",
            "format": ""
        },
        {
            "name": "equipment",
            "baseName": "equipment",
            "type": "Set<GetAnalyzedRecipeInstructions200ResponseIngredientsInner>",
            "format": ""
        }
    ];
    return GetAnalyzedRecipeInstructions200Response;
}());
exports.GetAnalyzedRecipeInstructions200Response = GetAnalyzedRecipeInstructions200Response;
//# sourceMappingURL=GetAnalyzedRecipeInstructions200Response.js.map