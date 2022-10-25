"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSiteContent200Response = void 0;
var SearchSiteContent200Response = (function () {
    function SearchSiteContent200Response() {
    }
    SearchSiteContent200Response.getAttributeTypeMap = function () {
        return SearchSiteContent200Response.attributeTypeMap;
    };
    SearchSiteContent200Response.discriminator = undefined;
    SearchSiteContent200Response.attributeTypeMap = [
        {
            "name": "articles",
            "baseName": "Articles",
            "type": "Set<SearchSiteContent200ResponseArticlesInner>",
            "format": ""
        },
        {
            "name": "groceryProducts",
            "baseName": "Grocery Products",
            "type": "Set<SearchSiteContent200ResponseGroceryProductsInner>",
            "format": ""
        },
        {
            "name": "menuItems",
            "baseName": "Menu Items",
            "type": "Set<SearchSiteContent200ResponseGroceryProductsInner>",
            "format": ""
        },
        {
            "name": "recipes",
            "baseName": "Recipes",
            "type": "Set<SearchSiteContent200ResponseGroceryProductsInner>",
            "format": ""
        }
    ];
    return SearchSiteContent200Response;
}());
exports.SearchSiteContent200Response = SearchSiteContent200Response;
//# sourceMappingURL=SearchSiteContent200Response.js.map