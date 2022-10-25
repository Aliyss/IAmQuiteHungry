"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRecipes200Response = void 0;
var SearchRecipes200Response = (function () {
    function SearchRecipes200Response() {
    }
    SearchRecipes200Response.getAttributeTypeMap = function () {
        return SearchRecipes200Response.attributeTypeMap;
    };
    SearchRecipes200Response.discriminator = undefined;
    SearchRecipes200Response.attributeTypeMap = [
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Set<SearchRecipes200ResponseResultsInner>",
            "format": ""
        },
        {
            "name": "totalResults",
            "baseName": "totalResults",
            "type": "number",
            "format": ""
        }
    ];
    return SearchRecipes200Response;
}());
exports.SearchRecipes200Response = SearchRecipes200Response;
//# sourceMappingURL=SearchRecipes200Response.js.map