"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectFoodInText200Response = void 0;
var DetectFoodInText200Response = (function () {
    function DetectFoodInText200Response() {
    }
    DetectFoodInText200Response.getAttributeTypeMap = function () {
        return DetectFoodInText200Response.attributeTypeMap;
    };
    DetectFoodInText200Response.discriminator = undefined;
    DetectFoodInText200Response.attributeTypeMap = [
        {
            "name": "annotations",
            "baseName": "annotations",
            "type": "Set<DetectFoodInText200ResponseAnnotationsInner>",
            "format": ""
        }
    ];
    return DetectFoodInText200Response;
}());
exports.DetectFoodInText200Response = DetectFoodInText200Response;
//# sourceMappingURL=DetectFoodInText200Response.js.map