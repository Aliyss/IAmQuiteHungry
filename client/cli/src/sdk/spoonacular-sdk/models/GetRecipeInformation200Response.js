"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecipeInformation200Response = void 0;
var GetRecipeInformation200Response = (function () {
    function GetRecipeInformation200Response() {
    }
    GetRecipeInformation200Response.getAttributeTypeMap = function () {
        return GetRecipeInformation200Response.attributeTypeMap;
    };
    GetRecipeInformation200Response.discriminator = undefined;
    GetRecipeInformation200Response.attributeTypeMap = [
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
            "name": "servings",
            "baseName": "servings",
            "type": "number",
            "format": ""
        },
        {
            "name": "readyInMinutes",
            "baseName": "readyInMinutes",
            "type": "number",
            "format": ""
        },
        {
            "name": "license",
            "baseName": "license",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceName",
            "baseName": "sourceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceUrl",
            "baseName": "sourceUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "spoonacularSourceUrl",
            "baseName": "spoonacularSourceUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "aggregateLikes",
            "baseName": "aggregateLikes",
            "type": "number",
            "format": ""
        },
        {
            "name": "healthScore",
            "baseName": "healthScore",
            "type": "number",
            "format": ""
        },
        {
            "name": "spoonacularScore",
            "baseName": "spoonacularScore",
            "type": "number",
            "format": ""
        },
        {
            "name": "pricePerServing",
            "baseName": "pricePerServing",
            "type": "number",
            "format": ""
        },
        {
            "name": "analyzedInstructions",
            "baseName": "analyzedInstructions",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "cheap",
            "baseName": "cheap",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "creditsText",
            "baseName": "creditsText",
            "type": "string",
            "format": ""
        },
        {
            "name": "cuisines",
            "baseName": "cuisines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "dairyFree",
            "baseName": "dairyFree",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "diets",
            "baseName": "diets",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "gaps",
            "baseName": "gaps",
            "type": "string",
            "format": ""
        },
        {
            "name": "glutenFree",
            "baseName": "glutenFree",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "instructions",
            "baseName": "instructions",
            "type": "string",
            "format": ""
        },
        {
            "name": "ketogenic",
            "baseName": "ketogenic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lowFodmap",
            "baseName": "lowFodmap",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "occasions",
            "baseName": "occasions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sustainable",
            "baseName": "sustainable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "vegan",
            "baseName": "vegan",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "vegetarian",
            "baseName": "vegetarian",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "veryHealthy",
            "baseName": "veryHealthy",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "veryPopular",
            "baseName": "veryPopular",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "whole30",
            "baseName": "whole30",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "weightWatcherSmartPoints",
            "baseName": "weightWatcherSmartPoints",
            "type": "number",
            "format": ""
        },
        {
            "name": "dishTypes",
            "baseName": "dishTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "extendedIngredients",
            "baseName": "extendedIngredients",
            "type": "Set<GetRecipeInformation200ResponseExtendedIngredientsInner>",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "winePairing",
            "baseName": "winePairing",
            "type": "GetRecipeInformation200ResponseWinePairing",
            "format": ""
        }
    ];
    return GetRecipeInformation200Response;
}());
exports.GetRecipeInformation200Response = GetRecipeInformation200Response;
//# sourceMappingURL=GetRecipeInformation200Response.js.map