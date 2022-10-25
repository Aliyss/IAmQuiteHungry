"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertAmounts200Response = void 0;
var ConvertAmounts200Response = (function () {
    function ConvertAmounts200Response() {
    }
    ConvertAmounts200Response.getAttributeTypeMap = function () {
        return ConvertAmounts200Response.attributeTypeMap;
    };
    ConvertAmounts200Response.discriminator = undefined;
    ConvertAmounts200Response.attributeTypeMap = [
        {
            "name": "sourceAmount",
            "baseName": "sourceAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "sourceUnit",
            "baseName": "sourceUnit",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetAmount",
            "baseName": "targetAmount",
            "type": "number",
            "format": ""
        },
        {
            "name": "targetUnit",
            "baseName": "targetUnit",
            "type": "string",
            "format": ""
        },
        {
            "name": "answer",
            "baseName": "answer",
            "type": "string",
            "format": ""
        }
    ];
    return ConvertAmounts200Response;
}());
exports.ConvertAmounts200Response = ConvertAmounts200Response;
//# sourceMappingURL=ConvertAmounts200Response.js.map