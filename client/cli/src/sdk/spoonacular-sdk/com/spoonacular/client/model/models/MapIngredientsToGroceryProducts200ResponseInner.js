"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapIngredientsToGroceryProducts200ResponseInner = void 0;
var MapIngredientsToGroceryProducts200ResponseInner = (function () {
    function MapIngredientsToGroceryProducts200ResponseInner() {
    }
    MapIngredientsToGroceryProducts200ResponseInner.getAttributeTypeMap = function () {
        return MapIngredientsToGroceryProducts200ResponseInner.attributeTypeMap;
    };
    MapIngredientsToGroceryProducts200ResponseInner.discriminator = undefined;
    MapIngredientsToGroceryProducts200ResponseInner.attributeTypeMap = [
        {
            "name": "original",
            "baseName": "original",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalName",
            "baseName": "originalName",
            "type": "string",
            "format": ""
        },
        {
            "name": "ingredientImage",
            "baseName": "ingredientImage",
            "type": "string",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Set<MapIngredientsToGroceryProducts200ResponseInnerProductsInner>",
            "format": ""
        }
    ];
    return MapIngredientsToGroceryProducts200ResponseInner;
}());
exports.MapIngredientsToGroceryProducts200ResponseInner = MapIngredientsToGroceryProducts200ResponseInner;
//# sourceMappingURL=MapIngredientsToGroceryProducts200ResponseInner.js.map