"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectUserRequest = void 0;
var ConnectUserRequest = (function () {
    function ConnectUserRequest() {
    }
    ConnectUserRequest.getAttributeTypeMap = function () {
        return ConnectUserRequest.attributeTypeMap;
    };
    ConnectUserRequest.discriminator = undefined;
    ConnectUserRequest.attributeTypeMap = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }
    ];
    return ConnectUserRequest;
}());
exports.ConnectUserRequest = ConnectUserRequest;
//# sourceMappingURL=ConnectUserRequest.js.map