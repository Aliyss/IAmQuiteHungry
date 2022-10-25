"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassifyGroceryProduct200Response = void 0;
var ClassifyGroceryProduct200Response = (function () {
    function ClassifyGroceryProduct200Response() {
    }
    ClassifyGroceryProduct200Response.getAttributeTypeMap = function () {
        return ClassifyGroceryProduct200Response.attributeTypeMap;
    };
    ClassifyGroceryProduct200Response.discriminator = undefined;
    ClassifyGroceryProduct200Response.attributeTypeMap = [
        {
            "name": "cleanTitle",
            "baseName": "cleanTitle",
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
            "name": "category",
            "baseName": "category",
            "type": "string",
            "format": ""
        },
        {
            "name": "breadcrumbs",
            "baseName": "breadcrumbs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "usdaCode",
            "baseName": "usdaCode",
            "type": "number",
            "format": ""
        }
    ];
    return ClassifyGroceryProduct200Response;
}());
exports.ClassifyGroceryProduct200Response = ClassifyGroceryProduct200Response;
//# sourceMappingURL=ClassifyGroceryProduct200Response.js.map