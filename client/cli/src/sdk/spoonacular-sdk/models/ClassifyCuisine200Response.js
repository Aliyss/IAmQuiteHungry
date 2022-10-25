"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassifyCuisine200Response = void 0;
var ClassifyCuisine200Response = (function () {
    function ClassifyCuisine200Response() {
    }
    ClassifyCuisine200Response.getAttributeTypeMap = function () {
        return ClassifyCuisine200Response.attributeTypeMap;
    };
    ClassifyCuisine200Response.discriminator = undefined;
    ClassifyCuisine200Response.attributeTypeMap = [
        {
            "name": "cuisine",
            "baseName": "cuisine",
            "type": "string",
            "format": ""
        },
        {
            "name": "cuisines",
            "baseName": "cuisines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "confidence",
            "baseName": "confidence",
            "type": "number",
            "format": ""
        }
    ];
    return ClassifyCuisine200Response;
}());
exports.ClassifyCuisine200Response = ClassifyCuisine200Response;
//# sourceMappingURL=ClassifyCuisine200Response.js.map