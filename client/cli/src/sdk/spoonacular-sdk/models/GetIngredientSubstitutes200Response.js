"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIngredientSubstitutes200Response = void 0;
var GetIngredientSubstitutes200Response = (function () {
    function GetIngredientSubstitutes200Response() {
    }
    GetIngredientSubstitutes200Response.getAttributeTypeMap = function () {
        return GetIngredientSubstitutes200Response.attributeTypeMap;
    };
    GetIngredientSubstitutes200Response.discriminator = undefined;
    GetIngredientSubstitutes200Response.attributeTypeMap = [
        {
            "name": "ingredient",
            "baseName": "ingredient",
            "type": "string",
            "format": ""
        },
        {
            "name": "substitutes",
            "baseName": "substitutes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }
    ];
    return GetIngredientSubstitutes200Response;
}());
exports.GetIngredientSubstitutes200Response = GetIngredientSubstitutes200Response;
//# sourceMappingURL=GetIngredientSubstitutes200Response.js.map