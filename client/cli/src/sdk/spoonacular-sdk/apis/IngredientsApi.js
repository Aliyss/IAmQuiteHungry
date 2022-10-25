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
exports.IngredientsApiResponseProcessor = exports.IngredientsApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var IngredientsApiRequestFactory = (function (_super) {
    __extends(IngredientsApiRequestFactory, _super);
    function IngredientsApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IngredientsApiRequestFactory.prototype.autocompleteIngredientSearch = function (query, number, metaInformation, intolerances, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/food/ingredients/autocomplete';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (query !== undefined) {
                            requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""));
                        }
                        if (number !== undefined) {
                            requestContext.setQueryParam("number", ObjectSerializer_1.ObjectSerializer.serialize(number, "number", ""));
                        }
                        if (metaInformation !== undefined) {
                            requestContext.setQueryParam("metaInformation", ObjectSerializer_1.ObjectSerializer.serialize(metaInformation, "boolean", ""));
                        }
                        if (intolerances !== undefined) {
                            requestContext.setQueryParam("intolerances", ObjectSerializer_1.ObjectSerializer.serialize(intolerances, "string", ""));
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
    IngredientsApiRequestFactory.prototype.computeIngredientAmount = function (id, nutrient, target, unit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("IngredientsApi", "computeIngredientAmount", "id");
                        }
                        if (nutrient === null || nutrient === undefined) {
                            throw new baseapi_1.RequiredError("IngredientsApi", "computeIngredientAmount", "nutrient");
                        }
                        if (target === null || target === undefined) {
                            throw new baseapi_1.RequiredError("IngredientsApi", "computeIngredientAmount", "target");
                        }
                        localVarPath = '/food/ingredients/{id}/amount'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (nutrient !== undefined) {
                            requestContext.setQueryParam("nutrient", ObjectSerializer_1.ObjectSerializer.serialize(nutrient, "string", ""));
                        }
                        if (target !== undefined) {
                            requestContext.setQueryParam("target", ObjectSerializer_1.ObjectSerializer.serialize(target, "number", ""));
                        }
                        if (unit !== undefined) {
                            requestContext.setQueryParam("unit", ObjectSerializer_1.ObjectSerializer.serialize(unit, "string", ""));
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
    IngredientsApiRequestFactory.prototype.getIngredientInformation = function (id, amount, unit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("IngredientsApi", "getIngredientInformation", "id");
                        }
                        localVarPath = '/food/ingredients/{id}/information'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (amount !== undefined) {
                            requestContext.setQueryParam("amount", ObjectSerializer_1.ObjectSerializer.serialize(amount, "number", ""));
                        }
                        if (unit !== undefined) {
                            requestContext.setQueryParam("unit", ObjectSerializer_1.ObjectSerializer.serialize(unit, "string", ""));
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
    IngredientsApiRequestFactory.prototype.getIngredientSubstitutes = function (ingredientName, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (ingredientName === null || ingredientName === undefined) {
                            throw new baseapi_1.RequiredError("IngredientsApi", "getIngredientSubstitutes", "ingredientName");
                        }
                        localVarPath = '/food/ingredients/substitutes';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (ingredientName !== undefined) {
                            requestContext.setQueryParam("ingredientName", ObjectSerializer_1.ObjectSerializer.serialize(ingredientName, "string", ""));
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
    IngredientsApiRequestFactory.prototype.getIngredientSubstitutesByID = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("IngredientsApi", "getIngredientSubstitutesByID", "id");
                        }
                        localVarPath = '/food/ingredients/{id}/substitutes'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
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
    IngredientsApiRequestFactory.prototype.ingredientSearch = function (query, addChildren, minProteinPercent, maxProteinPercent, minFatPercent, maxFatPercent, minCarbsPercent, maxCarbsPercent, metaInformation, intolerances, sort, sortDirection, offset, number, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/food/ingredients/search';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (query !== undefined) {
                            requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""));
                        }
                        if (addChildren !== undefined) {
                            requestContext.setQueryParam("addChildren", ObjectSerializer_1.ObjectSerializer.serialize(addChildren, "boolean", ""));
                        }
                        if (minProteinPercent !== undefined) {
                            requestContext.setQueryParam("minProteinPercent", ObjectSerializer_1.ObjectSerializer.serialize(minProteinPercent, "number", ""));
                        }
                        if (maxProteinPercent !== undefined) {
                            requestContext.setQueryParam("maxProteinPercent", ObjectSerializer_1.ObjectSerializer.serialize(maxProteinPercent, "number", ""));
                        }
                        if (minFatPercent !== undefined) {
                            requestContext.setQueryParam("minFatPercent", ObjectSerializer_1.ObjectSerializer.serialize(minFatPercent, "number", ""));
                        }
                        if (maxFatPercent !== undefined) {
                            requestContext.setQueryParam("maxFatPercent", ObjectSerializer_1.ObjectSerializer.serialize(maxFatPercent, "number", ""));
                        }
                        if (minCarbsPercent !== undefined) {
                            requestContext.setQueryParam("minCarbsPercent", ObjectSerializer_1.ObjectSerializer.serialize(minCarbsPercent, "number", ""));
                        }
                        if (maxCarbsPercent !== undefined) {
                            requestContext.setQueryParam("maxCarbsPercent", ObjectSerializer_1.ObjectSerializer.serialize(maxCarbsPercent, "number", ""));
                        }
                        if (metaInformation !== undefined) {
                            requestContext.setQueryParam("metaInformation", ObjectSerializer_1.ObjectSerializer.serialize(metaInformation, "boolean", ""));
                        }
                        if (intolerances !== undefined) {
                            requestContext.setQueryParam("intolerances", ObjectSerializer_1.ObjectSerializer.serialize(intolerances, "string", ""));
                        }
                        if (sort !== undefined) {
                            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "string", ""));
                        }
                        if (sortDirection !== undefined) {
                            requestContext.setQueryParam("sortDirection", ObjectSerializer_1.ObjectSerializer.serialize(sortDirection, "string", ""));
                        }
                        if (offset !== undefined) {
                            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", ""));
                        }
                        if (number !== undefined) {
                            requestContext.setQueryParam("number", ObjectSerializer_1.ObjectSerializer.serialize(number, "number", ""));
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
    IngredientsApiRequestFactory.prototype.ingredientsByIDImage = function (id, measure, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("IngredientsApi", "ingredientsByIDImage", "id");
                        }
                        localVarPath = '/recipes/{id}/ingredientWidget.png'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (measure !== undefined) {
                            requestContext.setQueryParam("measure", ObjectSerializer_1.ObjectSerializer.serialize(measure, "'us' | 'metric'", ""));
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
    IngredientsApiRequestFactory.prototype.mapIngredientsToGroceryProducts = function (mapIngredientsToGroceryProductsRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (mapIngredientsToGroceryProductsRequest === null || mapIngredientsToGroceryProductsRequest === undefined) {
                            throw new baseapi_1.RequiredError("IngredientsApi", "mapIngredientsToGroceryProducts", "mapIngredientsToGroceryProductsRequest");
                        }
                        localVarPath = '/food/ingredients/map';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(mapIngredientsToGroceryProductsRequest, "MapIngredientsToGroceryProductsRequest", ""), contentType);
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
    IngredientsApiRequestFactory.prototype.visualizeIngredients = function (contentType, language, accept, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/visualizeIngredients';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (language !== undefined) {
                            requestContext.setQueryParam("language", ObjectSerializer_1.ObjectSerializer.serialize(language, "'en' | 'de'", ""));
                        }
                        requestContext.setHeaderParam("Content-Type", ObjectSerializer_1.ObjectSerializer.serialize(contentType, "'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'", ""));
                        requestContext.setHeaderParam("Accept", ObjectSerializer_1.ObjectSerializer.serialize(accept, "'application/json' | 'text/html' | 'media/_*'", ""));
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
    return IngredientsApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.IngredientsApiRequestFactory = IngredientsApiRequestFactory;
var IngredientsApiResponseProcessor = (function () {
    function IngredientsApiResponseProcessor() {
    }
    IngredientsApiResponseProcessor.prototype.autocompleteIngredientSearch = function (response) {
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
                            "Set<AutocompleteIngredientSearch200ResponseInner>", ""]);
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
                            "Set<AutocompleteIngredientSearch200ResponseInner>", ""]);
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
    IngredientsApiResponseProcessor.prototype.computeIngredientAmount = function (response) {
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
                            "ComputeIngredientAmount200Response", ""]);
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
                            "ComputeIngredientAmount200Response", ""]);
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
    IngredientsApiResponseProcessor.prototype.getIngredientInformation = function (response) {
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
                            "GetIngredientInformation200Response", ""]);
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
                            "GetIngredientInformation200Response", ""]);
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
    IngredientsApiResponseProcessor.prototype.getIngredientSubstitutes = function (response) {
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
                            "GetIngredientSubstitutes200Response", ""]);
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
                            "GetIngredientSubstitutes200Response", ""]);
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
    IngredientsApiResponseProcessor.prototype.getIngredientSubstitutesByID = function (response) {
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
                            "GetIngredientSubstitutes200Response", ""]);
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
                            "GetIngredientSubstitutes200Response", ""]);
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
    IngredientsApiResponseProcessor.prototype.ingredientSearch = function (response) {
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
                            "IngredientSearch200Response", ""]);
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
                            "IngredientSearch200Response", ""]);
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
    IngredientsApiResponseProcessor.prototype.ingredientsByIDImage = function (response) {
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
    IngredientsApiResponseProcessor.prototype.mapIngredientsToGroceryProducts = function (response) {
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
                            "Set<MapIngredientsToGroceryProducts200ResponseInner>", ""]);
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
                            "Set<MapIngredientsToGroceryProducts200ResponseInner>", ""]);
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
    IngredientsApiResponseProcessor.prototype.visualizeIngredients = function (response) {
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
                            "string", ""]);
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
                            "string", ""]);
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
    return IngredientsApiResponseProcessor;
}());
exports.IngredientsApiResponseProcessor = IngredientsApiResponseProcessor;
//# sourceMappingURL=IngredientsApi.js.map