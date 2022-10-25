"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMealPlanTemplate200Response = void 0;
var GetMealPlanTemplate200Response = (function () {
    function GetMealPlanTemplate200Response() {
    }
    GetMealPlanTemplate200Response.getAttributeTypeMap = function () {
        return GetMealPlanTemplate200Response.attributeTypeMap;
    };
    GetMealPlanTemplate200Response.discriminator = undefined;
    GetMealPlanTemplate200Response.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "days",
            "baseName": "days",
            "type": "Set<GetMealPlanTemplate200ResponseDaysInner>",
            "format": ""
        }
    ];
    return GetMealPlanTemplate200Response;
}());
exports.GetMealPlanTemplate200Response = GetMealPlanTemplate200Response;
//# sourceMappingURL=GetMealPlanTemplate200Response.js.map