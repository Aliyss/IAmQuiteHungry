"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToShoppingListRequest = void 0;
var AddToShoppingListRequest = (function () {
    function AddToShoppingListRequest() {
    }
    AddToShoppingListRequest.getAttributeTypeMap = function () {
        return AddToShoppingListRequest.attributeTypeMap;
    };
    AddToShoppingListRequest.discriminator = undefined;
    AddToShoppingListRequest.attributeTypeMap = [
        {
            "name": "item",
            "baseName": "item",
            "type": "string",
            "format": ""
        },
        {
            "name": "aisle",
            "baseName": "aisle",
            "type": "string",
            "format": ""
        },
        {
            "name": "parse",
            "baseName": "parse",
            "type": "boolean",
            "format": ""
        }
    ];
    return AddToShoppingListRequest;
}());
exports.AddToShoppingListRequest = AddToShoppingListRequest;
//# sourceMappingURL=AddToShoppingListRequest.js.map