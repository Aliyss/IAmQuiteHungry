"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassifyGroceryProductRequest = void 0;
var ClassifyGroceryProductRequest = (function () {
    function ClassifyGroceryProductRequest() {
    }
    ClassifyGroceryProductRequest.getAttributeTypeMap = function () {
        return ClassifyGroceryProductRequest.attributeTypeMap;
    };
    ClassifyGroceryProductRequest.discriminator = undefined;
    ClassifyGroceryProductRequest.attributeTypeMap = [
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
    return ClassifyGroceryProductRequest;
}());
exports.ClassifyGroceryProductRequest = ClassifyGroceryProductRequest;
//# sourceMappingURL=ClassifyGroceryProductRequest.js.map