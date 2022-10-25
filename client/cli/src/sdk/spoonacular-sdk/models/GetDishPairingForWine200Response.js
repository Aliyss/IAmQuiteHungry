"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDishPairingForWine200Response = void 0;
var GetDishPairingForWine200Response = (function () {
    function GetDishPairingForWine200Response() {
    }
    GetDishPairingForWine200Response.getAttributeTypeMap = function () {
        return GetDishPairingForWine200Response.attributeTypeMap;
    };
    GetDishPairingForWine200Response.discriminator = undefined;
    GetDishPairingForWine200Response.attributeTypeMap = [
        {
            "name": "pairings",
            "baseName": "pairings",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        }
    ];
    return GetDishPairingForWine200Response;
}());
exports.GetDishPairingForWine200Response = GetDishPairingForWine200Response;
//# sourceMappingURL=GetDishPairingForWine200Response.js.map