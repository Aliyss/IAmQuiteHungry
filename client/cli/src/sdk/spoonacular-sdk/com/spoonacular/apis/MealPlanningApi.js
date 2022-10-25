"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanningApiResponseProcessor = exports.MealPlanningApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var MealPlanningApiRequestFactory = (function (_super) {
    __extends(MealPlanningApiRequestFactory, _super);
    function MealPlanningApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MealPlanningApiRequestFactory.prototype.addMealPlanTemplate = function (username, hash, addToMealPlanRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addMealPlanTemplate", "username");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addMealPlanTemplate", "hash");
                        }
                        if (addToMealPlanRequest === null || addToMealPlanRequest === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addMealPlanTemplate", "addToMealPlanRequest");
                        }
                        localVarPath = '/mealplanner/{username}/templates'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            ""
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(addToMealPlanRequest, "AddToMealPlanRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.addToMealPlan = function (username, hash, addToMealPlanRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addToMealPlan", "username");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addToMealPlan", "hash");
                        }
                        if (addToMealPlanRequest === null || addToMealPlanRequest === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addToMealPlan", "addToMealPlanRequest");
                        }
                        localVarPath = '/mealplanner/{username}/items'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "",
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(addToMealPlanRequest, "AddToMealPlanRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.addToShoppingList = function (username, hash, addToMealPlanRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addToShoppingList", "username");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addToShoppingList", "hash");
                        }
                        if (addToMealPlanRequest === null || addToMealPlanRequest === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "addToShoppingList", "addToMealPlanRequest");
                        }
                        localVarPath = '/mealplanner/{username}/shopping-list/items'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "",
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(addToMealPlanRequest, "AddToMealPlanRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.clearMealPlanDay = function (username, date, hash, clearMealPlanDayRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "clearMealPlanDay", "username");
                        }
                        if (date === null || date === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "clearMealPlanDay", "date");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "clearMealPlanDay", "hash");
                        }
                        if (clearMealPlanDayRequest === null || clearMealPlanDayRequest === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "clearMealPlanDay", "clearMealPlanDayRequest");
                        }
                        localVarPath = '/mealplanner/{username}/day/{date}'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)))
                            .replace('{' + 'date' + '}', encodeURIComponent(String(date)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            ""
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(clearMealPlanDayRequest, "ClearMealPlanDayRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.connectUser = function (body, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "connectUser", "body");
                        }
                        localVarPath = '/users/connect';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "",
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "any", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.deleteFromMealPlan = function (username, id, hash, deleteFromMealPlanRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteFromMealPlan", "username");
                        }
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteFromMealPlan", "id");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteFromMealPlan", "hash");
                        }
                        if (deleteFromMealPlanRequest === null || deleteFromMealPlanRequest === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteFromMealPlan", "deleteFromMealPlanRequest");
                        }
                        localVarPath = '/mealplanner/{username}/items/{id}'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)))
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            ""
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(deleteFromMealPlanRequest, "DeleteFromMealPlanRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.deleteFromShoppingList = function (username, id, hash, deleteFromMealPlanRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteFromShoppingList", "username");
                        }
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteFromShoppingList", "id");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteFromShoppingList", "hash");
                        }
                        if (deleteFromMealPlanRequest === null || deleteFromMealPlanRequest === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteFromShoppingList", "deleteFromMealPlanRequest");
                        }
                        localVarPath = '/mealplanner/{username}/shopping-list/items/{id}'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)))
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            ""
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(deleteFromMealPlanRequest, "DeleteFromMealPlanRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.deleteMealPlanTemplate = function (username, id, hash, deleteFromMealPlanRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteMealPlanTemplate", "username");
                        }
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteMealPlanTemplate", "id");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteMealPlanTemplate", "hash");
                        }
                        if (deleteFromMealPlanRequest === null || deleteFromMealPlanRequest === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "deleteMealPlanTemplate", "deleteFromMealPlanRequest");
                        }
                        localVarPath = '/mealplanner/{username}/templates/{id}'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)))
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            ""
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(deleteFromMealPlanRequest, "DeleteFromMealPlanRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.generateMealPlan = function (timeFrame, targetCalories, diet, exclude, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/mealplanner/generate';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (timeFrame !== undefined) {
                            requestContext.setQueryParam("timeFrame", ObjectSerializer_1.ObjectSerializer.serialize(timeFrame, "string", ""));
                        }
                        if (targetCalories !== undefined) {
                            requestContext.setQueryParam("targetCalories", ObjectSerializer_1.ObjectSerializer.serialize(targetCalories, "number", ""));
                        }
                        if (diet !== undefined) {
                            requestContext.setQueryParam("diet", ObjectSerializer_1.ObjectSerializer.serialize(diet, "string", ""));
                        }
                        if (exclude !== undefined) {
                            requestContext.setQueryParam("exclude", ObjectSerializer_1.ObjectSerializer.serialize(exclude, "string", ""));
                        }
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.generateShoppingList = function (username, startDate, endDate, hash, generateShoppingListRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "generateShoppingList", "username");
                        }
                        if (startDate === null || startDate === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "generateShoppingList", "startDate");
                        }
                        if (endDate === null || endDate === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "generateShoppingList", "endDate");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "generateShoppingList", "hash");
                        }
                        if (generateShoppingListRequest === null || generateShoppingListRequest === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "generateShoppingList", "generateShoppingListRequest");
                        }
                        localVarPath = '/mealplanner/{username}/shopping-list/{start-date}/{end-date}'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)))
                            .replace('{' + 'start-date' + '}', encodeURIComponent(String(startDate)))
                            .replace('{' + 'end-date' + '}', encodeURIComponent(String(endDate)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            ""
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(generateShoppingListRequest, "GenerateShoppingListRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.getMealPlanTemplate = function (username, id, hash, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getMealPlanTemplate", "username");
                        }
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getMealPlanTemplate", "id");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getMealPlanTemplate", "hash");
                        }
                        localVarPath = '/mealplanner/{username}/templates/{id}'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)))
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.getMealPlanTemplates = function (username, hash, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getMealPlanTemplates", "username");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getMealPlanTemplates", "hash");
                        }
                        localVarPath = '/mealplanner/{username}/templates'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.getMealPlanWeek = function (username, startDate, hash, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getMealPlanWeek", "username");
                        }
                        if (startDate === null || startDate === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getMealPlanWeek", "startDate");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getMealPlanWeek", "hash");
                        }
                        localVarPath = '/mealplanner/{username}/week/{start-date}'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)))
                            .replace('{' + 'start-date' + '}', encodeURIComponent(String(startDate)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    MealPlanningApiRequestFactory.prototype.getShoppingList = function (username, hash, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (username === null || username === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getShoppingList", "username");
                        }
                        if (hash === null || hash === undefined) {
                            throw new baseapi_1.RequiredError("MealPlanningApi", "getShoppingList", "hash");
                        }
                        localVarPath = '/mealplanner/{username}/shopping-list'
                            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (hash !== undefined) {
                            requestContext.setQueryParam("hash", ObjectSerializer_1.ObjectSerializer.serialize(hash, "string", ""));
                        }
                        authMethod = _config.authMethods["apiKeyScheme"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    return MealPlanningApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.MealPlanningApiRequestFactory = MealPlanningApiRequestFactory;
var MealPlanningApiResponseProcessor = (function () {
    function MealPlanningApiResponseProcessor() {
    }
    MealPlanningApiResponseProcessor.prototype.addMealPlanTemplate = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "AddMealPlanTemplate200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "AddMealPlanTemplate200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.addToMealPlan = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.addToShoppingList = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "GenerateShoppingList200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "GenerateShoppingList200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.clearMealPlanDay = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.connectUser = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "ConnectUser200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "ConnectUser200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.deleteFromMealPlan = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.deleteFromShoppingList = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.deleteMealPlanTemplate = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "any", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.generateMealPlan = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "GenerateMealPlan200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "GenerateMealPlan200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.generateShoppingList = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "GenerateShoppingList200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "GenerateShoppingList200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.getMealPlanTemplate = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "GetMealPlanTemplate200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "GetMealPlanTemplate200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.getMealPlanTemplates = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "GetMealPlanTemplates200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "GetMealPlanTemplates200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.getMealPlanWeek = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "GetMealPlanWeek200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "GetMealPlanWeek200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    MealPlanningApiResponseProcessor.prototype.getShoppingList = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_l.sent(), contentType]),
                            "GetShoppingList200Response", ""]);
                        return [2, body];
                    case 2:
                        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", undefined, response.headers);
                        }
                        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_l.sent(), contentType]),
                            "GetShoppingList200Response", ""]);
                        return [2, body];
                    case 4:
                        _j = exception_1.ApiException.bind;
                        _k = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 5: throw new (_j.apply(exception_1.ApiException, _k.concat([_l.sent(), response.headers])))();
                }
            });
        });
    };
    return MealPlanningApiResponseProcessor;
}());
exports.MealPlanningApiResponseProcessor = MealPlanningApiResponseProcessor;
//# sourceMappingURL=MealPlanningApi.js.map