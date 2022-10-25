"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWinePairing200Response = void 0;
var GetWinePairing200Response = (function () {
    function GetWinePairing200Response() {
    }
    GetWinePairing200Response.getAttributeTypeMap = function () {
        return GetWinePairing200Response.attributeTypeMap;
    };
    GetWinePairing200Response.discriminator = undefined;
    GetWinePairing200Response.attributeTypeMap = [
        {
            "name": "pairedWines",
            "baseName": "pairedWines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "pairingText",
            "baseName": "pairingText",
            "type": "string",
            "format": ""
        },
        {
            "name": "productMatches",
            "baseName": "productMatches",
            "type": "Set<GetWinePairing200ResponseProductMatchesInner>",
            "format": ""
        }
    ];
    return GetWinePairing200Response;
}());
exports.GetWinePairing200Response = GetWinePairing200Response;
//# sourceMappingURL=GetWinePairing200Response.js.map