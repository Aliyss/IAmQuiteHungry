"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseIngredients200ResponseInner = void 0;
var ParseIngredients200ResponseInner = (function () {
    function ParseIngredients200ResponseInner() {
    }
    ParseIngredients200ResponseInner.getAttributeTypeMap = function () {
        return ParseIngredients200ResponseInner.attributeTypeMap;
    };
    ParseIngredients200ResponseInner.discriminator = undefined;
    ParseIngredients200ResponseInner.attributeTypeMap = [
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
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nutrition",
            "baseName": "nutrition",
            "type": "ParseIngredients200ResponseInnerNutrition",
            "format": ""
        }
    ];
    return ParseIngredients200ResponseInner;
}());
exports.ParseIngredients200ResponseInner = ParseIngredients200ResponseInner;
//# sourceMappingURL=ParseIngredients200ResponseInner.js.map