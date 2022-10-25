"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShoppingList200Response = void 0;
var GetShoppingList200Response = (function () {
    function GetShoppingList200Response() {
    }
    GetShoppingList200Response.getAttributeTypeMap = function () {
        return GetShoppingList200Response.attributeTypeMap;
    };
    GetShoppingList200Response.discriminator = undefined;
    GetShoppingList200Response.attributeTypeMap = [
        {
            "name": "aisles",
            "baseName": "aisles",
            "type": "Set<GetShoppingList200ResponseAislesInner>",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "number",
            "format": ""
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "number",
            "format": ""
        }
    ];
    return GetShoppingList200Response;
}());
exports.GetShoppingList200Response = GetShoppingList200Response;
//# sourceMappingURL=GetShoppingList200Response.js.map