"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShoppingList200ResponseAislesInner = void 0;
var GetShoppingList200ResponseAislesInner = (function () {
    function GetShoppingList200ResponseAislesInner() {
    }
    GetShoppingList200ResponseAislesInner.getAttributeTypeMap = function () {
        return GetShoppingList200ResponseAislesInner.attributeTypeMap;
    };
    GetShoppingList200ResponseAislesInner.discriminator = undefined;
    GetShoppingList200ResponseAislesInner.attributeTypeMap = [
        {
            "name": "aisle",
            "baseName": "aisle",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Set<GetShoppingList200ResponseAislesInnerItemsInner>",
            "format": ""
        }
    ];
    return GetShoppingList200ResponseAislesInner;
}());
exports.GetShoppingList200ResponseAislesInner = GetShoppingList200ResponseAislesInner;
//# sourceMappingURL=GetShoppingList200ResponseAislesInner.js.map