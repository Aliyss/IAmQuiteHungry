"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRandomRecipes200Response = void 0;
var GetRandomRecipes200Response = (function () {
    function GetRandomRecipes200Response() {
    }
    GetRandomRecipes200Response.getAttributeTypeMap = function () {
        return GetRandomRecipes200Response.attributeTypeMap;
    };
    GetRandomRecipes200Response.discriminator = undefined;
    GetRandomRecipes200Response.attributeTypeMap = [
        {
            "name": "recipes",
            "baseName": "recipes",
            "type": "Set<GetRandomRecipes200ResponseRecipesInner>",
            "format": ""
        }
    ];
    return GetRandomRecipes200Response;
}());
exports.GetRandomRecipes200Response = GetRandomRecipes200Response;
//# sourceMappingURL=GetRandomRecipes200Response.js.map