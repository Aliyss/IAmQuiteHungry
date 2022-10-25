"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearMealPlanDayRequest = void 0;
var ClearMealPlanDayRequest = (function () {
    function ClearMealPlanDayRequest() {
    }
    ClearMealPlanDayRequest.getAttributeTypeMap = function () {
        return ClearMealPlanDayRequest.attributeTypeMap;
    };
    ClearMealPlanDayRequest.discriminator = undefined;
    ClearMealPlanDayRequest.attributeTypeMap = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": ""
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        }
    ];
    return ClearMealPlanDayRequest;
}());
exports.ClearMealPlanDayRequest = ClearMealPlanDayRequest;
//# sourceMappingURL=ClearMealPlanDayRequest.js.map