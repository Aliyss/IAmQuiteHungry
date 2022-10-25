"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMenuItemInformation200Response = void 0;
var GetMenuItemInformation200Response = (function () {
    function GetMenuItemInformation200Response() {
    }
    GetMenuItemInformation200Response.getAttributeTypeMap = function () {
        return GetMenuItemInformation200Response.attributeTypeMap;
    };
    GetMenuItemInformation200Response.discriminator = undefined;
    GetMenuItemInformation200Response.attributeTypeMap = [
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
            "name": "restaurantChain",
            "baseName": "restaurantChain",
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
            "name": "badges",
            "baseName": "badges",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "breadcrumbs",
            "baseName": "breadcrumbs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "generatedText",
            "baseName": "generatedText",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageType",
            "baseName": "imageType",
            "type": "string",
            "format": ""
        },
        {
            "name": "likes",
            "baseName": "likes",
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
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "spoonacularScore",
            "baseName": "spoonacularScore",
            "type": "number",
            "format": ""
        }
    ];
    return GetMenuItemInformation200Response;
}());
exports.GetMenuItemInformation200Response = GetMenuItemInformation200Response;
//# sourceMappingURL=GetMenuItemInformation200Response.js.map