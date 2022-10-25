"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecipeEquipmentByID200Response = void 0;
var GetRecipeEquipmentByID200Response = (function () {
    function GetRecipeEquipmentByID200Response() {
    }
    GetRecipeEquipmentByID200Response.getAttributeTypeMap = function () {
        return GetRecipeEquipmentByID200Response.attributeTypeMap;
    };
    GetRecipeEquipmentByID200Response.discriminator = undefined;
    GetRecipeEquipmentByID200Response.attributeTypeMap = [
        {
            "name": "equipment",
            "baseName": "equipment",
            "type": "Set<GetRecipeEquipmentByID200ResponseEquipmentInner>",
            "format": ""
        }
    ];
    return GetRecipeEquipmentByID200Response;
}());
exports.GetRecipeEquipmentByID200Response = GetRecipeEquipmentByID200Response;
//# sourceMappingURL=GetRecipeEquipmentByID200Response.js.map