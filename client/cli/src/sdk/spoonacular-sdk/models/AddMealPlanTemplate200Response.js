"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMealPlanTemplate200Response = void 0;
var AddMealPlanTemplate200Response = (function () {
    function AddMealPlanTemplate200Response() {
    }
    AddMealPlanTemplate200Response.getAttributeTypeMap = function () {
        return AddMealPlanTemplate200Response.attributeTypeMap;
    };
    AddMealPlanTemplate200Response.discriminator = undefined;
    AddMealPlanTemplate200Response.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Set<AddMealPlanTemplate200ResponseItemsInner>",
            "format": ""
        },
        {
            "name": "publishAsPublic",
            "baseName": "publishAsPublic",
            "type": "boolean",
            "format": ""
        }
    ];
    return AddMealPlanTemplate200Response;
}());
exports.AddMealPlanTemplate200Response = AddMealPlanTemplate200Response;
//# sourceMappingURL=AddMealPlanTemplate200Response.js.map