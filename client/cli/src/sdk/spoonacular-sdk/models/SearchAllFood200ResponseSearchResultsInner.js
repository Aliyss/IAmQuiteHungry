"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAllFood200ResponseSearchResultsInner = void 0;
var SearchAllFood200ResponseSearchResultsInner = (function () {
    function SearchAllFood200ResponseSearchResultsInner() {
    }
    SearchAllFood200ResponseSearchResultsInner.getAttributeTypeMap = function () {
        return SearchAllFood200ResponseSearchResultsInner.attributeTypeMap;
    };
    SearchAllFood200ResponseSearchResultsInner.discriminator = undefined;
    SearchAllFood200ResponseSearchResultsInner.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "results",
            "baseName": "results",
            "type": "Set<SearchAllFood200ResponseSearchResultsInnerResultsInner>",
            "format": ""
        }
    ];
    return SearchAllFood200ResponseSearchResultsInner;
}());
exports.SearchAllFood200ResponseSearchResultsInner = SearchAllFood200ResponseSearchResultsInner;
//# sourceMappingURL=SearchAllFood200ResponseSearchResultsInner.js.map