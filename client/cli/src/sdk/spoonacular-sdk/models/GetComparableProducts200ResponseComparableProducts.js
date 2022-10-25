"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComparableProducts200ResponseComparableProducts = void 0;
var GetComparableProducts200ResponseComparableProducts = (function () {
    function GetComparableProducts200ResponseComparableProducts() {
    }
    GetComparableProducts200ResponseComparableProducts.getAttributeTypeMap = function () {
        return GetComparableProducts200ResponseComparableProducts.attributeTypeMap;
    };
    GetComparableProducts200ResponseComparableProducts.discriminator = undefined;
    GetComparableProducts200ResponseComparableProducts.attributeTypeMap = [
        {
            "name": "calories",
            "baseName": "calories",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "likes",
            "baseName": "likes",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "protein",
            "baseName": "protein",
            "type": "Set<GetComparableProducts200ResponseComparableProductsProteinInner>",
            "format": ""
        },
        {
            "name": "spoonacularScore",
            "baseName": "spoonacularScore",
            "type": "Set<GetComparableProducts200ResponseComparableProductsProteinInner>",
            "format": ""
        },
        {
            "name": "sugar",
            "baseName": "sugar",
            "type": "Array<any>",
            "format": ""
        }
    ];
    return GetComparableProducts200ResponseComparableProducts;
}());
exports.GetComparableProducts200ResponseComparableProducts = GetComparableProducts200ResponseComparableProducts;
//# sourceMappingURL=GetComparableProducts200ResponseComparableProducts.js.map