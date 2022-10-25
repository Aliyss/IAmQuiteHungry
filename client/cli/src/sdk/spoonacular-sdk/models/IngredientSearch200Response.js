"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientSearch200Response = void 0;
var IngredientSearch200Response = (function () {
    function IngredientSearch200Response() {
    }
    IngredientSearch200Response.getAttributeTypeMap = function () {
        return IngredientSearch200Response.attributeTypeMap;
    };
    IngredientSearch200Response.discriminator = undefined;
    IngredientSearch200Response.attributeTypeMap = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Set<IngredientSearch200ResponseResultsInner>",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalResults",
            "baseName": "totalResults",
            "type": "number",
            "format": ""
        }
    ];
    return IngredientSearch200Response;
}());
exports.IngredientSearch200Response = IngredientSearch200Response;
//# sourceMappingURL=IngredientSearch200Response.js.map