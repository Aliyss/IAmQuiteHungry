"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner = void 0;
var GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner = (function () {
    function GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner() {
    }
    GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.getAttributeTypeMap = function () {
        return GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.attributeTypeMap;
    };
    GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.discriminator = undefined;
    GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "Set<GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner>",
            "format": ""
        }
    ];
    return GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner;
}());
exports.GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner = GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner;
//# sourceMappingURL=GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.js.map