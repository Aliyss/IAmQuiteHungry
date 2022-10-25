"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.ApiKeySchemeAuthentication = void 0;
var ApiKeySchemeAuthentication = (function () {
    function ApiKeySchemeAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    ApiKeySchemeAuthentication.prototype.getName = function () {
        return "apiKeyScheme";
    };
    ApiKeySchemeAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("x-api-key", this.apiKey);
    };
    return ApiKeySchemeAuthentication;
}());
exports.ApiKeySchemeAuthentication = ApiKeySchemeAuthentication;
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["apiKeyScheme"]) {
        authMethods["apiKeyScheme"] = new ApiKeySchemeAuthentication(config["apiKeyScheme"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map