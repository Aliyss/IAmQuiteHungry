"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputeGlycemicLoad200Response = void 0;
var ComputeGlycemicLoad200Response = (function () {
    function ComputeGlycemicLoad200Response() {
    }
    ComputeGlycemicLoad200Response.getAttributeTypeMap = function () {
        return ComputeGlycemicLoad200Response.attributeTypeMap;
    };
    ComputeGlycemicLoad200Response.discriminator = undefined;
    ComputeGlycemicLoad200Response.attributeTypeMap = [
        {
            "name": "totalGlycemicLoad",
            "baseName": "totalGlycemicLoad",
            "type": "number",
            "format": ""
        },
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Set<ComputeGlycemicLoad200ResponseIngredientsInner>",
            "format": ""
        }
    ];
    return ComputeGlycemicLoad200Response;
}());
exports.ComputeGlycemicLoad200Response = ComputeGlycemicLoad200Response;
//# sourceMappingURL=ComputeGlycemicLoad200Response.js.map