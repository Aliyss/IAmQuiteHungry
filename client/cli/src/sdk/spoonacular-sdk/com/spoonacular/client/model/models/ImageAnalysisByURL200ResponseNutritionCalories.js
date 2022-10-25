"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageAnalysisByURL200ResponseNutritionCalories = void 0;
var ImageAnalysisByURL200ResponseNutritionCalories = (function () {
    function ImageAnalysisByURL200ResponseNutritionCalories() {
    }
    ImageAnalysisByURL200ResponseNutritionCalories.getAttributeTypeMap = function () {
        return ImageAnalysisByURL200ResponseNutritionCalories.attributeTypeMap;
    };
    ImageAnalysisByURL200ResponseNutritionCalories.discriminator = undefined;
    ImageAnalysisByURL200ResponseNutritionCalories.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "confidenceRange95Percent",
            "baseName": "confidenceRange95Percent",
            "type": "ImageAnalysisByURL200ResponseNutritionCaloriesConfidenceRange95Percent",
            "format": ""
        },
        {
            "name": "standardDeviation",
            "baseName": "standardDeviation",
            "type": "number",
            "format": ""
        }
    ];
    return ImageAnalysisByURL200ResponseNutritionCalories;
}());
exports.ImageAnalysisByURL200ResponseNutritionCalories = ImageAnalysisByURL200ResponseNutritionCalories;
//# sourceMappingURL=ImageAnalysisByURL200ResponseNutritionCalories.js.map