"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchGroceryProducts200Response = void 0;
var SearchGroceryProducts200Response = (function () {
    function SearchGroceryProducts200Response() {
    }
    SearchGroceryProducts200Response.getAttributeTypeMap = function () {
        return SearchGroceryProducts200Response.attributeTypeMap;
    };
    SearchGroceryProducts200Response.discriminator = undefined;
    SearchGroceryProducts200Response.attributeTypeMap = [
        {
            "name": "products",
            "baseName": "products",
            "type": "Set<AutocompleteRecipeSearch200ResponseInner>",
            "format": ""
        },
        {
            "name": "totalProducts",
            "baseName": "totalProducts",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
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
        }
    ];
    return SearchGroceryProducts200Response;
}());
exports.SearchGroceryProducts200Response = SearchGroceryProducts200Response;
//# sourceMappingURL=SearchGroceryProducts200Response.js.map