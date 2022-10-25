"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecipeNutritionWidgetByID200Response = void 0;
var GetRecipeNutritionWidgetByID200Response = (function () {
    function GetRecipeNutritionWidgetByID200Response() {
    }
    GetRecipeNutritionWidgetByID200Response.getAttributeTypeMap = function () {
        return GetRecipeNutritionWidgetByID200Response.attributeTypeMap;
    };
    GetRecipeNutritionWidgetByID200Response.discriminator = undefined;
    GetRecipeNutritionWidgetByID200Response.attributeTypeMap = [
        {
            "name": "calories",
            "baseName": "calories",
            "type": "string",
            "format": ""
        },
        {
            "name": "carbs",
            "baseName": "carbs",
            "type": "string",
            "format": ""
        },
        {
            "name": "fat",
            "baseName": "fat",
            "type": "string",
            "format": ""
        },
        {
            "name": "protein",
            "baseName": "protein",
            "type": "string",
            "format": ""
        },
        {
            "name": "bad",
            "baseName": "bad",
            "type": "Set<GetRecipeNutritionWidgetByID200ResponseBadInner>",
            "format": ""
        },
        {
            "name": "good",
            "baseName": "good",
            "type": "Set<GetRecipeNutritionWidgetByID200ResponseGoodInner>",
            "format": ""
        }
    ];
    return GetRecipeNutritionWidgetByID200Response;
}());
exports.GetRecipeNutritionWidgetByID200Response = GetRecipeNutritionWidgetByID200Response;
//# sourceMappingURL=GetRecipeNutritionWidgetByID200Response.js.map