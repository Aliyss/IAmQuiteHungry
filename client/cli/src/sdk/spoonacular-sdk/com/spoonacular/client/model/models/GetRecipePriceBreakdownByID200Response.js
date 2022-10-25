"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecipePriceBreakdownByID200Response = void 0;
var GetRecipePriceBreakdownByID200Response = (function () {
    function GetRecipePriceBreakdownByID200Response() {
    }
    GetRecipePriceBreakdownByID200Response.getAttributeTypeMap = function () {
        return GetRecipePriceBreakdownByID200Response.attributeTypeMap;
    };
    GetRecipePriceBreakdownByID200Response.discriminator = undefined;
    GetRecipePriceBreakdownByID200Response.attributeTypeMap = [
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Set<GetRecipePriceBreakdownByID200ResponseIngredientsInner>",
            "format": ""
        },
        {
            "name": "totalCost",
            "baseName": "totalCost",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCostPerServing",
            "baseName": "totalCostPerServing",
            "type": "number",
            "format": ""
        }
    ];
    return GetRecipePriceBreakdownByID200Response;
}());
exports.GetRecipePriceBreakdownByID200Response = GetRecipePriceBreakdownByID200Response;
//# sourceMappingURL=GetRecipePriceBreakdownByID200Response.js.map