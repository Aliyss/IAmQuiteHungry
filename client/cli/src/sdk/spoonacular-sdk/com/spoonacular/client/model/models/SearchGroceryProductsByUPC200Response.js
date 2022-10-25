"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchGroceryProductsByUPC200Response = void 0;
var SearchGroceryProductsByUPC200Response = (function () {
    function SearchGroceryProductsByUPC200Response() {
    }
    SearchGroceryProductsByUPC200Response.getAttributeTypeMap = function () {
        return SearchGroceryProductsByUPC200Response.attributeTypeMap;
    };
    SearchGroceryProductsByUPC200Response.discriminator = undefined;
    SearchGroceryProductsByUPC200Response.attributeTypeMap = [
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
            "name": "ingredientCount",
            "baseName": "ingredientCount",
            "type": "number",
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
            "type": "Set<SearchGroceryProductsByUPC200ResponseIngredientsInner>",
            "format": ""
        },
        {
            "name": "likes",
            "baseName": "likes",
            "type": "number",
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
    return SearchGroceryProductsByUPC200Response;
}());
exports.SearchGroceryProductsByUPC200Response = SearchGroceryProductsByUPC200Response;
//# sourceMappingURL=SearchGroceryProductsByUPC200Response.js.map