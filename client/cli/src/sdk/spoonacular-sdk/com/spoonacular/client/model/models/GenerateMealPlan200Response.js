"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateMealPlan200Response = void 0;
var GenerateMealPlan200Response = (function () {
    function GenerateMealPlan200Response() {
    }
    GenerateMealPlan200Response.getAttributeTypeMap = function () {
        return GenerateMealPlan200Response.attributeTypeMap;
    };
    GenerateMealPlan200Response.discriminator = undefined;
    GenerateMealPlan200Response.attributeTypeMap = [
        {
            "name": "meals",
            "baseName": "meals",
            "type": "Set<GetSimilarRecipes200ResponseInner>",
            "format": ""
        },
        {
            "name": "nutrients",
            "baseName": "nutrients",
            "type": "GenerateMealPlan200ResponseNutrients",
            "format": ""
        }
    ];
    return GenerateMealPlan200Response;
}());
exports.GenerateMealPlan200Response = GenerateMealPlan200Response;
//# sourceMappingURL=GenerateMealPlan200Response.js.map