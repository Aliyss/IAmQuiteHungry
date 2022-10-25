"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMealPlanTemplates200Response = void 0;
var GetMealPlanTemplates200Response = (function () {
    function GetMealPlanTemplates200Response() {
    }
    GetMealPlanTemplates200Response.getAttributeTypeMap = function () {
        return GetMealPlanTemplates200Response.attributeTypeMap;
    };
    GetMealPlanTemplates200Response.discriminator = undefined;
    GetMealPlanTemplates200Response.attributeTypeMap = [
        {
            "name": "templates",
            "baseName": "templates",
            "type": "Set<GetAnalyzedRecipeInstructions200ResponseIngredientsInner>",
            "format": ""
        }
    ];
    return GetMealPlanTemplates200Response;
}());
exports.GetMealPlanTemplates200Response = GetMealPlanTemplates200Response;
//# sourceMappingURL=GetMealPlanTemplates200Response.js.map