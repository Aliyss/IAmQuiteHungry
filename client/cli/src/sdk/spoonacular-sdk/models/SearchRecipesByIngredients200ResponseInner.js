"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRecipesByIngredients200ResponseInner = void 0;
var SearchRecipesByIngredients200ResponseInner = (function () {
    function SearchRecipesByIngredients200ResponseInner() {
    }
    SearchRecipesByIngredients200ResponseInner.getAttributeTypeMap = function () {
        return SearchRecipesByIngredients200ResponseInner.attributeTypeMap;
    };
    SearchRecipesByIngredients200ResponseInner.discriminator = undefined;
    SearchRecipesByIngredients200ResponseInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
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
            "name": "missedIngredientCount",
            "baseName": "missedIngredientCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "missedIngredients",
            "baseName": "missedIngredients",
            "type": "Set<SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner>",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "unusedIngredients",
            "baseName": "unusedIngredients",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "usedIngredientCount",
            "baseName": "usedIngredientCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "usedIngredients",
            "baseName": "usedIngredients",
            "type": "Set<SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner>",
            "format": ""
        }
    ];
    return SearchRecipesByIngredients200ResponseInner;
}());
exports.SearchRecipesByIngredients200ResponseInner = SearchRecipesByIngredients200ResponseInner;
//# sourceMappingURL=SearchRecipesByIngredients200ResponseInner.js.map