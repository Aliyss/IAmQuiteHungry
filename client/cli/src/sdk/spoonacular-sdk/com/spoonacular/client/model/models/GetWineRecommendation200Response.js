"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWineRecommendation200Response = void 0;
var GetWineRecommendation200Response = (function () {
    function GetWineRecommendation200Response() {
    }
    GetWineRecommendation200Response.getAttributeTypeMap = function () {
        return GetWineRecommendation200Response.attributeTypeMap;
    };
    GetWineRecommendation200Response.discriminator = undefined;
    GetWineRecommendation200Response.attributeTypeMap = [
        {
            "name": "recommendedWines",
            "baseName": "recommendedWines",
            "type": "Set<GetWineRecommendation200ResponseRecommendedWinesInner>",
            "format": ""
        },
        {
            "name": "totalFound",
            "baseName": "totalFound",
            "type": "number",
            "format": ""
        }
    ];
    return GetWineRecommendation200Response;
}());
exports.GetWineRecommendation200Response = GetWineRecommendation200Response;
//# sourceMappingURL=GetWineRecommendation200Response.js.map