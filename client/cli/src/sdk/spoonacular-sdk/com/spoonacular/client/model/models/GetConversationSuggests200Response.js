"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConversationSuggests200Response = void 0;
var GetConversationSuggests200Response = (function () {
    function GetConversationSuggests200Response() {
    }
    GetConversationSuggests200Response.getAttributeTypeMap = function () {
        return GetConversationSuggests200Response.attributeTypeMap;
    };
    GetConversationSuggests200Response.discriminator = undefined;
    GetConversationSuggests200Response.attributeTypeMap = [
        {
            "name": "suggests",
            "baseName": "suggests",
            "type": "GetConversationSuggests200ResponseSuggests",
            "format": ""
        },
        {
            "name": "words",
            "baseName": "words",
            "type": "Array<any>",
            "format": ""
        }
    ];
    return GetConversationSuggests200Response;
}());
exports.GetConversationSuggests200Response = GetConversationSuggests200Response;
//# sourceMappingURL=GetConversationSuggests200Response.js.map