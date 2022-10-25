"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShoppingList200ResponseAislesInnerItemsInner = void 0;
var GetShoppingList200ResponseAislesInnerItemsInner = (function () {
    function GetShoppingList200ResponseAislesInnerItemsInner() {
    }
    GetShoppingList200ResponseAislesInnerItemsInner.getAttributeTypeMap = function () {
        return GetShoppingList200ResponseAislesInnerItemsInner.attributeTypeMap;
    };
    GetShoppingList200ResponseAislesInnerItemsInner.discriminator = undefined;
    GetShoppingList200ResponseAislesInnerItemsInner.attributeTypeMap = [
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
            "name": "measures",
            "baseName": "measures",
            "type": "GetShoppingList200ResponseAislesInnerItemsInnerMeasures",
            "format": ""
        },
        {
            "name": "pantryItem",
            "baseName": "pantryItem",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "aisle",
            "baseName": "aisle",
            "type": "string",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "ingredientId",
            "baseName": "ingredientId",
            "type": "number",
            "format": ""
        }
    ];
    return GetShoppingList200ResponseAislesInnerItemsInner;
}());
exports.GetShoppingList200ResponseAislesInnerItemsInner = GetShoppingList200ResponseAislesInnerItemsInner;
//# sourceMappingURL=GetShoppingList200ResponseAislesInnerItemsInner.js.map