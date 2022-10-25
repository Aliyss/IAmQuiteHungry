"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteIngredientSearch200ResponseInner = void 0;
var AutocompleteIngredientSearch200ResponseInner = (function () {
    function AutocompleteIngredientSearch200ResponseInner() {
    }
    AutocompleteIngredientSearch200ResponseInner.getAttributeTypeMap = function () {
        return AutocompleteIngredientSearch200ResponseInner.attributeTypeMap;
    };
    AutocompleteIngredientSearch200ResponseInner.discriminator = undefined;
    AutocompleteIngredientSearch200ResponseInner.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "id",
            "baseName": "id",
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
            "name": "possibleUnits",
            "baseName": "possibleUnits",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return AutocompleteIngredientSearch200ResponseInner;
}());
exports.AutocompleteIngredientSearch200ResponseInner = AutocompleteIngredientSearch200ResponseInner;
//# sourceMappingURL=AutocompleteIngredientSearch200ResponseInner.js.map