"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecipeIngredientsByID200Response = void 0;
var GetRecipeIngredientsByID200Response = (function () {
    function GetRecipeIngredientsByID200Response() {
    }
    GetRecipeIngredientsByID200Response.getAttributeTypeMap = function () {
        return GetRecipeIngredientsByID200Response.attributeTypeMap;
    };
    GetRecipeIngredientsByID200Response.discriminator = undefined;
    GetRecipeIngredientsByID200Response.attributeTypeMap = [
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Set<GetRecipeIngredientsByID200ResponseIngredientsInner>",
            "format": ""
        }
    ];
    return GetRecipeIngredientsByID200Response;
}());
exports.GetRecipeIngredientsByID200Response = GetRecipeIngredientsByID200Response;
//# sourceMappingURL=GetRecipeIngredientsByID200Response.js.map