"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageClassificationByURL200Response = void 0;
var ImageClassificationByURL200Response = (function () {
    function ImageClassificationByURL200Response() {
    }
    ImageClassificationByURL200Response.getAttributeTypeMap = function () {
        return ImageClassificationByURL200Response.attributeTypeMap;
    };
    ImageClassificationByURL200Response.discriminator = undefined;
    ImageClassificationByURL200Response.attributeTypeMap = [
        {
            "name": "category",
            "baseName": "category",
            "type": "string",
            "format": ""
        },
        {
            "name": "probability",
            "baseName": "probability",
            "type": "number",
            "format": ""
        }
    ];
    return ImageClassificationByURL200Response;
}());
exports.ImageClassificationByURL200Response = ImageClassificationByURL200Response;
//# sourceMappingURL=ImageClassificationByURL200Response.js.map