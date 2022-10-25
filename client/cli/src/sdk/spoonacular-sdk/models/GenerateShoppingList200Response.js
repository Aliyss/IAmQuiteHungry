"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateShoppingList200Response = void 0;
var GenerateShoppingList200Response = (function () {
    function GenerateShoppingList200Response() {
    }
    GenerateShoppingList200Response.getAttributeTypeMap = function () {
        return GenerateShoppingList200Response.attributeTypeMap;
    };
    GenerateShoppingList200Response.discriminator = undefined;
    GenerateShoppingList200Response.attributeTypeMap = [
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
    return GenerateShoppingList200Response;
}());
exports.GenerateShoppingList200Response = GenerateShoppingList200Response;
//# sourceMappingURL=GenerateShoppingList200Response.js.map