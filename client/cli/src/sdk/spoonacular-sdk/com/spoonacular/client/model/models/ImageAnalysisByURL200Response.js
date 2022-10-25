"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageAnalysisByURL200Response = void 0;
var ImageAnalysisByURL200Response = (function () {
    function ImageAnalysisByURL200Response() {
    }
    ImageAnalysisByURL200Response.getAttributeTypeMap = function () {
        return ImageAnalysisByURL200Response.attributeTypeMap;
    };
    ImageAnalysisByURL200Response.discriminator = undefined;
    ImageAnalysisByURL200Response.attributeTypeMap = [
        {
            "name": "nutrition",
            "baseName": "nutrition",
            "type": "ImageAnalysisByURL200ResponseNutrition",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ImageAnalysisByURL200ResponseCategory",
            "format": ""
        },
        {
            "name": "recipes",
            "baseName": "recipes",
            "type": "Set<ImageAnalysisByURL200ResponseRecipesInner>",
            "format": ""
        }
    ];
    return ImageAnalysisByURL200Response;
}());
exports.ImageAnalysisByURL200Response = ImageAnalysisByURL200Response;
//# sourceMappingURL=ImageAnalysisByURL200Response.js.map