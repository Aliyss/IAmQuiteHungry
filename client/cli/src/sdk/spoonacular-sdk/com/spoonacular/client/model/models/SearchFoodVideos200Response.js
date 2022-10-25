"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFoodVideos200Response = void 0;
var SearchFoodVideos200Response = (function () {
    function SearchFoodVideos200Response() {
    }
    SearchFoodVideos200Response.getAttributeTypeMap = function () {
        return SearchFoodVideos200Response.attributeTypeMap;
    };
    SearchFoodVideos200Response.discriminator = undefined;
    SearchFoodVideos200Response.attributeTypeMap = [
        {
            "name": "videos",
            "baseName": "videos",
            "type": "Set<SearchFoodVideos200ResponseVideosInner>",
            "format": ""
        },
        {
            "name": "totalResults",
            "baseName": "totalResults",
            "type": "number",
            "format": ""
        }
    ];
    return SearchFoodVideos200Response;
}());
exports.SearchFoodVideos200Response = SearchFoodVideos200Response;
//# sourceMappingURL=SearchFoodVideos200Response.js.map