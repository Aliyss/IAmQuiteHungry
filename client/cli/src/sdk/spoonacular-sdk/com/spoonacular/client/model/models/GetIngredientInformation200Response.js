"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIngredientInformation200Response = void 0;
var GetIngredientInformation200Response = (function () {
    function GetIngredientInformation200Response() {
    }
    GetIngredientInformation200Response.getAttributeTypeMap = function () {
        return GetIngredientInformation200Response.attributeTypeMap;
    };
    GetIngredientInformation200Response.discriminator = undefined;
    GetIngredientInformation200Response.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "original",
            "baseName": "original",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalName",
            "baseName": "originalName",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nameClean",
            "baseName": "nameClean",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
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
            "name": "unitShort",
            "baseName": "unitShort",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitLong",
            "baseName": "unitLong",
            "type": "string",
            "format": ""
        },
        {
            "name": "possibleUnits",
            "baseName": "possibleUnits",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "estimatedCost",
            "baseName": "estimatedCost",
            "type": "ParseIngredients200ResponseInnerEstimatedCost",
            "format": ""
        },
        {
            "name": "consistency",
            "baseName": "consistency",
            "type": "string",
            "format": ""
        },
        {
            "name": "shoppingListUnits",
            "baseName": "shoppingListUnits",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "aisle",
            "baseName": "aisle",
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
            "name": "meta",
            "baseName": "meta",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "nutrition",
            "baseName": "nutrition",
            "type": "GetIngredientInformation200ResponseNutrition",
            "format": ""
        },
        {
            "name": "categoryPath",
            "baseName": "categoryPath",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return GetIngredientInformation200Response;
}());
exports.GetIngredientInformation200Response = GetIngredientInformation200Response;
//# sourceMappingURL=GetIngredientInformation200Response.js.map