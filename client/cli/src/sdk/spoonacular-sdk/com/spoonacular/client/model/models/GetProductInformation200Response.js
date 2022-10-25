"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductInformation200Response = void 0;
var GetProductInformation200Response = (function () {
    function GetProductInformation200Response() {
    }
    GetProductInformation200Response.getAttributeTypeMap = function () {
        return GetProductInformation200Response.attributeTypeMap;
    };
    GetProductInformation200Response.discriminator = undefined;
    GetProductInformation200Response.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
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
            "name": "imageType",
            "baseName": "imageType",
            "type": "string",
            "format": ""
        },
        {
            "name": "badges",
            "baseName": "badges",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "importantBadges",
            "baseName": "importantBadges",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "ingredientCount",
            "baseName": "ingredientCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "generatedText",
            "baseName": "generatedText",
            "type": "any",
            "format": ""
        },
        {
            "name": "ingredientList",
            "baseName": "ingredientList",
            "type": "string",
            "format": ""
        },
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Array<GetProductInformation200ResponseIngredientsInner>",
            "format": ""
        },
        {
            "name": "likes",
            "baseName": "likes",
            "type": "number",
            "format": ""
        },
        {
            "name": "aisle",
            "baseName": "aisle",
            "type": "string",
            "format": ""
        },
        {
            "name": "nutrition",
            "baseName": "nutrition",
            "type": "SearchGroceryProductsByUPC200ResponseNutrition",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "servings",
            "baseName": "servings",
            "type": "SearchGroceryProductsByUPC200ResponseServings",
            "format": ""
        },
        {
            "name": "spoonacularScore",
            "baseName": "spoonacularScore",
            "type": "number",
            "format": ""
        }
    ];
    return GetProductInformation200Response;
}());
exports.GetProductInformation200Response = GetProductInformation200Response;
//# sourceMappingURL=GetProductInformation200Response.js.map