"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMealPlanWeek200Response = void 0;
var GetMealPlanWeek200Response = (function () {
    function GetMealPlanWeek200Response() {
    }
    GetMealPlanWeek200Response.getAttributeTypeMap = function () {
        return GetMealPlanWeek200Response.attributeTypeMap;
    };
    GetMealPlanWeek200Response.discriminator = undefined;
    GetMealPlanWeek200Response.attributeTypeMap = [
        {
            "name": "days",
            "baseName": "days",
            "type": "Set<GetMealPlanWeek200ResponseDaysInner>",
            "format": ""
        }
    ];
    return GetMealPlanWeek200Response;
}());
exports.GetMealPlanWeek200Response = GetMealPlanWeek200Response;
//# sourceMappingURL=GetMealPlanWeek200Response.js.map