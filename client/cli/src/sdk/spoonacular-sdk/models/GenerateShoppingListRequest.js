"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateShoppingListRequest = void 0;
var GenerateShoppingListRequest = (function () {
    function GenerateShoppingListRequest() {
    }
    GenerateShoppingListRequest.getAttributeTypeMap = function () {
        return GenerateShoppingListRequest.attributeTypeMap;
    };
    GenerateShoppingListRequest.discriminator = undefined;
    GenerateShoppingListRequest.attributeTypeMap = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "start-date",
            "type": "string",
            "format": ""
        },
        {
            "name": "endDate",
            "baseName": "end-date",
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
    return GenerateShoppingListRequest;
}());
exports.GenerateShoppingListRequest = GenerateShoppingListRequest;
//# sourceMappingURL=GenerateShoppingListRequest.js.map