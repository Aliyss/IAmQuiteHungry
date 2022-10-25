"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToMealPlanRequest1Value = void 0;
var AddToMealPlanRequest1Value = (function () {
    function AddToMealPlanRequest1Value() {
    }
    AddToMealPlanRequest1Value.getAttributeTypeMap = function () {
        return AddToMealPlanRequest1Value.attributeTypeMap;
    };
    AddToMealPlanRequest1Value.discriminator = undefined;
    AddToMealPlanRequest1Value.attributeTypeMap = [
        {
            "name": "ingredients",
            "baseName": "ingredients",
            "type": "Set<AddToMealPlanRequest1ValueIngredientsInner>",
            "format": ""
        }
    ];
    return AddToMealPlanRequest1Value;
}());
exports.AddToMealPlanRequest1Value = AddToMealPlanRequest1Value;
//# sourceMappingURL=AddToMealPlanRequest1Value.js.map