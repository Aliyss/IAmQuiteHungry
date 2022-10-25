"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchMenuItems200Response = void 0;
var SearchMenuItems200Response = (function () {
    function SearchMenuItems200Response() {
    }
    SearchMenuItems200Response.getAttributeTypeMap = function () {
        return SearchMenuItems200Response.attributeTypeMap;
    };
    SearchMenuItems200Response.discriminator = undefined;
    SearchMenuItems200Response.attributeTypeMap = [
        {
            "name": "menuItems",
            "baseName": "menuItems",
            "type": "Set<SearchMenuItems200ResponseMenuItemsInner>",
            "format": ""
        },
        {
            "name": "totalMenuItems",
            "baseName": "totalMenuItems",
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
    return SearchMenuItems200Response;
}());
exports.SearchMenuItems200Response = SearchMenuItems200Response;
//# sourceMappingURL=SearchMenuItems200Response.js.map