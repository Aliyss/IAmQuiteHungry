"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchMenuItems200ResponseMenuItemsInner = void 0;
var SearchMenuItems200ResponseMenuItemsInner = (function () {
    function SearchMenuItems200ResponseMenuItemsInner() {
    }
    SearchMenuItems200ResponseMenuItemsInner.getAttributeTypeMap = function () {
        return SearchMenuItems200ResponseMenuItemsInner.attributeTypeMap;
    };
    SearchMenuItems200ResponseMenuItemsInner.discriminator = undefined;
    SearchMenuItems200ResponseMenuItemsInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "restaurantChain",
            "baseName": "restaurantChain",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageType",
            "baseName": "imageType",
            "type": "string",
            "format": ""
        },
        {
            "name": "servings",
            "baseName": "servings",
            "type": "SearchGroceryProductsByUPC200ResponseServings",
            "format": ""
        }
    ];
    return SearchMenuItems200ResponseMenuItemsInner;
}());
exports.SearchMenuItems200ResponseMenuItemsInner = SearchMenuItems200ResponseMenuItemsInner;
//# sourceMappingURL=SearchMenuItems200ResponseMenuItemsInner.js.map