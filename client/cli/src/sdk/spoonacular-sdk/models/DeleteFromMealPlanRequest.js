"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFromMealPlanRequest = void 0;
var DeleteFromMealPlanRequest = (function () {
    function DeleteFromMealPlanRequest() {
    }
    DeleteFromMealPlanRequest.getAttributeTypeMap = function () {
        return DeleteFromMealPlanRequest.attributeTypeMap;
    };
    DeleteFromMealPlanRequest.discriminator = undefined;
    DeleteFromMealPlanRequest.attributeTypeMap = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        }
    ];
    return DeleteFromMealPlanRequest;
}());
exports.DeleteFromMealPlanRequest = DeleteFromMealPlanRequest;
//# sourceMappingURL=DeleteFromMealPlanRequest.js.map