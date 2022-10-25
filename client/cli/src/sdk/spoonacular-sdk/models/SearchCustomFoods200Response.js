"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCustomFoods200Response = void 0;
var SearchCustomFoods200Response = (function () {
    function SearchCustomFoods200Response() {
    }
    SearchCustomFoods200Response.getAttributeTypeMap = function () {
        return SearchCustomFoods200Response.attributeTypeMap;
    };
    SearchCustomFoods200Response.discriminator = undefined;
    SearchCustomFoods200Response.attributeTypeMap = [
        {
            "name": "customFoods",
            "baseName": "customFoods",
            "type": "Set<SearchCustomFoods200ResponseCustomFoodsInner>",
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
    return SearchCustomFoods200Response;
}());
exports.SearchCustomFoods200Response = SearchCustomFoods200Response;
//# sourceMappingURL=SearchCustomFoods200Response.js.map