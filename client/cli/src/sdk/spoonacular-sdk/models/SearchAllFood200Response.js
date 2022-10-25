"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAllFood200Response = void 0;
var SearchAllFood200Response = (function () {
    function SearchAllFood200Response() {
    }
    SearchAllFood200Response.getAttributeTypeMap = function () {
        return SearchAllFood200Response.attributeTypeMap;
    };
    SearchAllFood200Response.discriminator = undefined;
    SearchAllFood200Response.attributeTypeMap = [
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalResults",
            "baseName": "totalResults",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "searchResults",
            "baseName": "searchResults",
            "type": "Set<SearchAllFood200ResponseSearchResultsInner>",
            "format": ""
        }
    ];
    return SearchAllFood200Response;
}());
exports.SearchAllFood200Response = SearchAllFood200Response;
//# sourceMappingURL=SearchAllFood200Response.js.map