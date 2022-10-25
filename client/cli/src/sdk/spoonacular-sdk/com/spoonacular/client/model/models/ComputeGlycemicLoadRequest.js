"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputeGlycemicLoadRequest = void 0;
var ComputeGlycemicLoadRequest = (function () {
    function ComputeGlycemicLoadRequest() {
    }
    ComputeGlycemicLoadRequest.getAttributeTypeMap = function () {
        return ComputeGlycemicLoadRequest.attributeTypeMap;
    };
    ComputeGlycemicLoadRequest.discriminator = undefined;
    ComputeGlycemicLoadRequest.attributeTypeMap = [
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return ComputeGlycemicLoadRequest;
}());
exports.ComputeGlycemicLoadRequest = ComputeGlycemicLoadRequest;
//# sourceMappingURL=ComputeGlycemicLoadRequest.js.map