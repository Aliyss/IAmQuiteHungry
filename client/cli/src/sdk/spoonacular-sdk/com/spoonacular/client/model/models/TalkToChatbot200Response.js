"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalkToChatbot200Response = void 0;
var TalkToChatbot200Response = (function () {
    function TalkToChatbot200Response() {
    }
    TalkToChatbot200Response.getAttributeTypeMap = function () {
        return TalkToChatbot200Response.attributeTypeMap;
    };
    TalkToChatbot200Response.discriminator = undefined;
    TalkToChatbot200Response.attributeTypeMap = [
        {
            "name": "answerText",
            "baseName": "answerText",
            "type": "string",
            "format": ""
        },
        {
            "name": "media",
            "baseName": "media",
            "type": "Array<any>",
            "format": ""
        }
    ];
    return TalkToChatbot200Response;
}());
exports.TalkToChatbot200Response = TalkToChatbot200Response;
//# sourceMappingURL=TalkToChatbot200Response.js.map