"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassifyGroceryProductBulkRequestInner = void 0;
var ClassifyGroceryProductBulkRequestInner = (function () {
    function ClassifyGroceryProductBulkRequestInner() {
    }
    ClassifyGroceryProductBulkRequestInner.getAttributeTypeMap = function () {
        return ClassifyGroceryProductBulkRequestInner.attributeTypeMap;
    };
    ClassifyGroceryProductBulkRequestInner.discriminator = undefined;
    ClassifyGroceryProductBulkRequestInner.attributeTypeMap = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "upc",
            "baseName": "upc",
            "type": "string",
            "format": ""
        },
        {
            "name": "pluCode",
            "baseName": "plu_code",
            "type": "string",
            "format": ""
        }
    ];
    return ClassifyGroceryProductBulkRequestInner;
}());
exports.ClassifyGroceryProductBulkRequestInner = ClassifyGroceryProductBulkRequestInner;
//# sourceMappingURL=ClassifyGroceryProductBulkRequestInner.js.map