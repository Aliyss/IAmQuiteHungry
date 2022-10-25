"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSiteContent200ResponseGroceryProductsInner = void 0;
var SearchSiteContent200ResponseGroceryProductsInner = (function () {
    function SearchSiteContent200ResponseGroceryProductsInner() {
    }
    SearchSiteContent200ResponseGroceryProductsInner.getAttributeTypeMap = function () {
        return SearchSiteContent200ResponseGroceryProductsInner.attributeTypeMap;
    };
    SearchSiteContent200ResponseGroceryProductsInner.discriminator = undefined;
    SearchSiteContent200ResponseGroceryProductsInner.attributeTypeMap = [
        {
            "name": "dataPoints",
            "baseName": "dataPoints",
            "type": "Set<SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner>",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return SearchSiteContent200ResponseGroceryProductsInner;
}());
exports.SearchSiteContent200ResponseGroceryProductsInner = SearchSiteContent200ResponseGroceryProductsInner;
//# sourceMappingURL=SearchSiteContent200ResponseGroceryProductsInner.js.map