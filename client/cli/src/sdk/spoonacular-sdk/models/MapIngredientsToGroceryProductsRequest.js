"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapIngredientsToGroceryProductsRequest = void 0;
var MapIngredientsToGroceryProductsRequest = (function () {
    function MapIngredientsToGroceryProductsRequest() {
    }
    MapIngredientsToGroceryProductsRequest.getAttributeTypeMap = function () {
        return MapIngredientsToGroceryProductsRequest.attributeTypeMap;
    };
    MapIngredientsToGroceryProductsRequest.discriminator = undefined;
    MapIngredientsToGroceryProductsRequest.attributeTypeMap = [
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "servings",
            "baseName": "servings",
            "type": "number",
            "format": ""
        }
    ];
    return MapIngredientsToGroceryProductsRequest;
}());
exports.MapIngredientsToGroceryProductsRequest = MapIngredientsToGroceryProductsRequest;
//# sourceMappingURL=MapIngredientsToGroceryProductsRequest.js.map