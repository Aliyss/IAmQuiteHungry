"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner = void 0;
var AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner = (function () {
    function AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner() {
    }
    AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.getAttributeTypeMap = function () {
        return AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.attributeTypeMap;
    };
    AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.discriminator = undefined;
    AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.attributeTypeMap = [
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
            "type": "Set<AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>",
            "format": ""
        },
        {
            "name": "equipment",
            "baseName": "equipment",
            "type": "Set<AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner>",
            "format": ""
        }
    ];
    return AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner;
}());
exports.AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner = AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner;
//# sourceMappingURL=AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.js.map