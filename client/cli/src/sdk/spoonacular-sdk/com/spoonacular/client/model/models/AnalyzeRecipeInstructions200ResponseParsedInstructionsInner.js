"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeRecipeInstructions200ResponseParsedInstructionsInner = void 0;
var AnalyzeRecipeInstructions200ResponseParsedInstructionsInner = (function () {
    function AnalyzeRecipeInstructions200ResponseParsedInstructionsInner() {
    }
    AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.getAttributeTypeMap = function () {
        return AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.attributeTypeMap;
    };
    AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.discriminator = undefined;
    AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "Set<AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner>",
            "format": ""
        }
    ];
    return AnalyzeRecipeInstructions200ResponseParsedInstructionsInner;
}());
exports.AnalyzeRecipeInstructions200ResponseParsedInstructionsInner = AnalyzeRecipeInstructions200ResponseParsedInstructionsInner;
//# sourceMappingURL=AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.js.map