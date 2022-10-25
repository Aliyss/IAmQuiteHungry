"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMealPlanTemplate200ResponseItemsInner = void 0;
var AddMealPlanTemplate200ResponseItemsInner = (function () {
    function AddMealPlanTemplate200ResponseItemsInner() {
    }
    AddMealPlanTemplate200ResponseItemsInner.getAttributeTypeMap = function () {
        return AddMealPlanTemplate200ResponseItemsInner.attributeTypeMap;
    };
    AddMealPlanTemplate200ResponseItemsInner.discriminator = undefined;
    AddMealPlanTemplate200ResponseItemsInner.attributeTypeMap = [
        {
            "name": "day",
            "baseName": "day",
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
            "type": "AddMealPlanTemplate200ResponseItemsInnerValue",
            "format": ""
        }
    ];
    return AddMealPlanTemplate200ResponseItemsInner;
}());
exports.AddMealPlanTemplate200ResponseItemsInner = AddMealPlanTemplate200ResponseItemsInner;
//# sourceMappingURL=AddMealPlanTemplate200ResponseItemsInner.js.map