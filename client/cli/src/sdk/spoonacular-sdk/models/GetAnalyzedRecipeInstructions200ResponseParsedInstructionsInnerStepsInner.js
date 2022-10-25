"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner = void 0;
var GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner = (function () {
    function GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner() {
    }
    GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.getAttributeTypeMap = function () {
        return GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.attributeTypeMap;
    };
    GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.discriminator = undefined;
    GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.attributeTypeMap = [
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": ""
        },
        {
            "name": "step",
            "baseName": "step",
            "type": "string",
            "format": ""
        },
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Set<GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>",
            "format": ""
        },
        {
            "name": "equipment",
            "baseName": "equipment",
            "type": "Set<GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>",
            "format": ""
        }
    ];
    return GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner;
}());
exports.GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner = GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner;
//# sourceMappingURL=GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.js.map