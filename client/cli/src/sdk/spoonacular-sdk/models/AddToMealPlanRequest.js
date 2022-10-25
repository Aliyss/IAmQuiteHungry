"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToMealPlanRequest = void 0;
var AddToMealPlanRequest = (function () {
    function AddToMealPlanRequest() {
    }
    AddToMealPlanRequest.getAttributeTypeMap = function () {
        return AddToMealPlanRequest.attributeTypeMap;
    };
    AddToMealPlanRequest.discriminator = undefined;
    AddToMealPlanRequest.attributeTypeMap = [
        {
            "name": "username",
            "baseName": "username",
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
    return AddToMealPlanRequest;
}());
exports.AddToMealPlanRequest = AddToMealPlanRequest;
//# sourceMappingURL=AddToMealPlanRequest.js.map