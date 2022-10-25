"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageAnalysisByURL200ResponseNutrition = void 0;
var ImageAnalysisByURL200ResponseNutrition = (function () {
    function ImageAnalysisByURL200ResponseNutrition() {
    }
    ImageAnalysisByURL200ResponseNutrition.getAttributeTypeMap = function () {
        return ImageAnalysisByURL200ResponseNutrition.attributeTypeMap;
    };
    ImageAnalysisByURL200ResponseNutrition.discriminator = undefined;
    ImageAnalysisByURL200ResponseNutrition.attributeTypeMap = [
        {
            "name": "recipesUsed",
            "baseName": "recipesUsed",
            "type": "number",
            "format": ""
        },
        {
            "name": "calories",
            "baseName": "calories",
            "type": "ImageAnalysisByURL200ResponseNutritionCalories",
            "format": ""
        },
        {
            "name": "fat",
            "baseName": "fat",
            "type": "ImageAnalysisByURL200ResponseNutritionCalories",
            "format": ""
        },
        {
            "name": "protein",
            "baseName": "protein",
            "type": "ImageAnalysisByURL200ResponseNutritionCalories",
            "format": ""
        },
        {
            "name": "carbs",
            "baseName": "carbs",
            "type": "ImageAnalysisByURL200ResponseNutritionCalories",
            "format": ""
        }
    ];
    return ImageAnalysisByURL200ResponseNutrition;
}());
exports.ImageAnalysisByURL200ResponseNutrition = ImageAnalysisByURL200ResponseNutrition;
//# sourceMappingURL=ImageAnalysisByURL200ResponseNutrition.js.map