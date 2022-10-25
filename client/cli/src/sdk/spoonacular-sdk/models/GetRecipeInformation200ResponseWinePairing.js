"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecipeInformation200ResponseWinePairing = void 0;
var GetRecipeInformation200ResponseWinePairing = (function () {
    function GetRecipeInformation200ResponseWinePairing() {
    }
    GetRecipeInformation200ResponseWinePairing.getAttributeTypeMap = function () {
        return GetRecipeInformation200ResponseWinePairing.attributeTypeMap;
    };
    GetRecipeInformation200ResponseWinePairing.discriminator = undefined;
    GetRecipeInformation200ResponseWinePairing.attributeTypeMap = [
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
            "type": "Set<GetRecipeInformation200ResponseWinePairingProductMatchesInner>",
            "format": ""
        }
    ];
    return GetRecipeInformation200ResponseWinePairing;
}());
exports.GetRecipeInformation200ResponseWinePairing = GetRecipeInformation200ResponseWinePairing;
//# sourceMappingURL=GetRecipeInformation200ResponseWinePairing.js.map