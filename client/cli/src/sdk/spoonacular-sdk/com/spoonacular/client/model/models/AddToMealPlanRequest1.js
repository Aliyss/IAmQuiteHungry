"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToMealPlanRequest1 = void 0;
var AddToMealPlanRequest1 = (function () {
    function AddToMealPlanRequest1() {
    }
    AddToMealPlanRequest1.getAttributeTypeMap = function () {
        return AddToMealPlanRequest1.attributeTypeMap;
    };
    AddToMealPlanRequest1.discriminator = undefined;
    AddToMealPlanRequest1.attributeTypeMap = [
        {
            "name": "date",
            "baseName": "date",
            "type": "number",
            "format": ""
        },
        {
            "name": "slot",
            "baseName": "slot",
            "type": "number",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "AddToMealPlanRequest1Value",
            "format": ""
        }
    ];
    return AddToMealPlanRequest1;
}());
exports.AddToMealPlanRequest1 = AddToMealPlanRequest1;
//# sourceMappingURL=AddToMealPlanRequest1.js.map