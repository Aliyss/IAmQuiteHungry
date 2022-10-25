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
exports.RecipesApiResponseProcessor = exports.RecipesApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var RecipesApiRequestFactory = (function (_super) {
    __extends(RecipesApiRequestFactory, _super);
    function RecipesApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecipesApiRequestFactory.prototype.analyzeARecipeSearchQuery = function (q, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (q === null || q === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "analyzeARecipeSearchQuery", "q");
                        }
                        localVarPath = '/recipes/queries/analyze';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (q !== undefined) {
                            requestContext.setQueryParam("q", ObjectSerializer_1.ObjectSerializer.serialize(q, "string", ""));
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
    RecipesApiRequestFactory.prototype.analyzeRecipeInstructions = function (contentType, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/analyzeInstructions';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHeaderParam("Content-Type", ObjectSerializer_1.ObjectSerializer.serialize(contentType, "'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'", ""));
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
    RecipesApiRequestFactory.prototype.autocompleteRecipeSearch = function (query, number, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/autocomplete';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (query !== undefined) {
                            requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""));
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
    RecipesApiRequestFactory.prototype.classifyCuisine = function (contentType, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/cuisine';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHeaderParam("Content-Type", ObjectSerializer_1.ObjectSerializer.serialize(contentType, "'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'", ""));
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
    RecipesApiRequestFactory.prototype.computeGlycemicLoad = function (computeGlycemicLoadRequest, language, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (computeGlycemicLoadRequest === null || computeGlycemicLoadRequest === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "computeGlycemicLoad", "computeGlycemicLoadRequest");
                        }
                        localVarPath = '/food/ingredients/glycemicLoad';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (language !== undefined) {
                            requestContext.setQueryParam("language", ObjectSerializer_1.ObjectSerializer.serialize(language, "'en' | 'de'", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(computeGlycemicLoadRequest, "ComputeGlycemicLoadRequest", ""), contentType);
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
    RecipesApiRequestFactory.prototype.convertAmounts = function (ingredientName, sourceAmount, sourceUnit, targetUnit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (ingredientName === null || ingredientName === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "convertAmounts", "ingredientName");
                        }
                        if (sourceAmount === null || sourceAmount === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "convertAmounts", "sourceAmount");
                        }
                        if (sourceUnit === null || sourceUnit === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "convertAmounts", "sourceUnit");
                        }
                        if (targetUnit === null || targetUnit === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "convertAmounts", "targetUnit");
                        }
                        localVarPath = '/recipes/convert';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (ingredientName !== undefined) {
                            requestContext.setQueryParam("ingredientName", ObjectSerializer_1.ObjectSerializer.serialize(ingredientName, "string", ""));
                        }
                        if (sourceAmount !== undefined) {
                            requestContext.setQueryParam("sourceAmount", ObjectSerializer_1.ObjectSerializer.serialize(sourceAmount, "number", ""));
                        }
                        if (sourceUnit !== undefined) {
                            requestContext.setQueryParam("sourceUnit", ObjectSerializer_1.ObjectSerializer.serialize(sourceUnit, "string", ""));
                        }
                        if (targetUnit !== undefined) {
                            requestContext.setQueryParam("targetUnit", ObjectSerializer_1.ObjectSerializer.serialize(targetUnit, "string", ""));
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
    RecipesApiRequestFactory.prototype.createRecipeCard = function (contentType, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/visualizeRecipe';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHeaderParam("Content-Type", ObjectSerializer_1.ObjectSerializer.serialize(contentType, "'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'", ""));
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
    RecipesApiRequestFactory.prototype.equipmentByIDImage = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "equipmentByIDImage", "id");
                        }
                        localVarPath = '/recipes/{id}/equipmentWidget.png'
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
    RecipesApiRequestFactory.prototype.extractRecipeFromWebsite = function (url, forceExtraction, analyze, includeNutrition, includeTaste, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (url === null || url === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "extractRecipeFromWebsite", "url");
                        }
                        localVarPath = '/recipes/extract';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (url !== undefined) {
                            requestContext.setQueryParam("url", ObjectSerializer_1.ObjectSerializer.serialize(url, "string", ""));
                        }
                        if (forceExtraction !== undefined) {
                            requestContext.setQueryParam("forceExtraction", ObjectSerializer_1.ObjectSerializer.serialize(forceExtraction, "boolean", ""));
                        }
                        if (analyze !== undefined) {
                            requestContext.setQueryParam("analyze", ObjectSerializer_1.ObjectSerializer.serialize(analyze, "boolean", ""));
                        }
                        if (includeNutrition !== undefined) {
                            requestContext.setQueryParam("includeNutrition", ObjectSerializer_1.ObjectSerializer.serialize(includeNutrition, "boolean", ""));
                        }
                        if (includeTaste !== undefined) {
                            requestContext.setQueryParam("includeTaste", ObjectSerializer_1.ObjectSerializer.serialize(includeTaste, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.getAnalyzedRecipeInstructions = function (id, stepBreakdown, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getAnalyzedRecipeInstructions", "id");
                        }
                        localVarPath = '/recipes/{id}/analyzedInstructions'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (stepBreakdown !== undefined) {
                            requestContext.setQueryParam("stepBreakdown", ObjectSerializer_1.ObjectSerializer.serialize(stepBreakdown, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.getRandomRecipes = function (limitLicense, tags, number, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/random';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (limitLicense !== undefined) {
                            requestContext.setQueryParam("limitLicense", ObjectSerializer_1.ObjectSerializer.serialize(limitLicense, "boolean", ""));
                        }
                        if (tags !== undefined) {
                            requestContext.setQueryParam("tags", ObjectSerializer_1.ObjectSerializer.serialize(tags, "string", ""));
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
    RecipesApiRequestFactory.prototype.getRecipeEquipmentByID = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getRecipeEquipmentByID", "id");
                        }
                        localVarPath = '/recipes/{id}/equipmentWidget.json'
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
    RecipesApiRequestFactory.prototype.getRecipeInformation = function (id, includeNutrition, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getRecipeInformation", "id");
                        }
                        localVarPath = '/recipes/{id}/information'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (includeNutrition !== undefined) {
                            requestContext.setQueryParam("includeNutrition", ObjectSerializer_1.ObjectSerializer.serialize(includeNutrition, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.getRecipeInformationBulk = function (ids, includeNutrition, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (ids === null || ids === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getRecipeInformationBulk", "ids");
                        }
                        localVarPath = '/recipes/informationBulk';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (ids !== undefined) {
                            requestContext.setQueryParam("ids", ObjectSerializer_1.ObjectSerializer.serialize(ids, "string", ""));
                        }
                        if (includeNutrition !== undefined) {
                            requestContext.setQueryParam("includeNutrition", ObjectSerializer_1.ObjectSerializer.serialize(includeNutrition, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.getRecipeIngredientsByID = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getRecipeIngredientsByID", "id");
                        }
                        localVarPath = '/recipes/{id}/ingredientWidget.json'
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
    RecipesApiRequestFactory.prototype.getRecipeNutritionWidgetByID = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getRecipeNutritionWidgetByID", "id");
                        }
                        localVarPath = '/recipes/{id}/nutritionWidget.json'
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
    RecipesApiRequestFactory.prototype.getRecipePriceBreakdownByID = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getRecipePriceBreakdownByID", "id");
                        }
                        localVarPath = '/recipes/{id}/priceBreakdownWidget.json'
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
    RecipesApiRequestFactory.prototype.getRecipeTasteByID = function (id, normalize, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getRecipeTasteByID", "id");
                        }
                        localVarPath = '/recipes/{id}/tasteWidget.json'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (normalize !== undefined) {
                            requestContext.setQueryParam("normalize", ObjectSerializer_1.ObjectSerializer.serialize(normalize, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.getSimilarRecipes = function (id, number, limitLicense, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "getSimilarRecipes", "id");
                        }
                        localVarPath = '/recipes/{id}/similar'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (number !== undefined) {
                            requestContext.setQueryParam("number", ObjectSerializer_1.ObjectSerializer.serialize(number, "number", ""));
                        }
                        if (limitLicense !== undefined) {
                            requestContext.setQueryParam("limitLicense", ObjectSerializer_1.ObjectSerializer.serialize(limitLicense, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.guessNutritionByDishName = function (title, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (title === null || title === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "guessNutritionByDishName", "title");
                        }
                        localVarPath = '/recipes/guessNutrition';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (title !== undefined) {
                            requestContext.setQueryParam("title", ObjectSerializer_1.ObjectSerializer.serialize(title, "string", ""));
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
    RecipesApiRequestFactory.prototype.ingredientsByIDImage = function (id, measure, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "ingredientsByIDImage", "id");
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
    RecipesApiRequestFactory.prototype.parseIngredients = function (contentType, language, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/parseIngredients';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (language !== undefined) {
                            requestContext.setQueryParam("language", ObjectSerializer_1.ObjectSerializer.serialize(language, "'en' | 'de'", ""));
                        }
                        requestContext.setHeaderParam("Content-Type", ObjectSerializer_1.ObjectSerializer.serialize(contentType, "'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'", ""));
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
    RecipesApiRequestFactory.prototype.priceBreakdownByIDImage = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "priceBreakdownByIDImage", "id");
                        }
                        localVarPath = '/recipes/{id}/priceBreakdownWidget.png'
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
    RecipesApiRequestFactory.prototype.quickAnswer = function (q, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (q === null || q === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "quickAnswer", "q");
                        }
                        localVarPath = '/recipes/quickAnswer';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (q !== undefined) {
                            requestContext.setQueryParam("q", ObjectSerializer_1.ObjectSerializer.serialize(q, "string", ""));
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
    RecipesApiRequestFactory.prototype.recipeNutritionByIDImage = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "recipeNutritionByIDImage", "id");
                        }
                        localVarPath = '/recipes/{id}/nutritionWidget.png'
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
    RecipesApiRequestFactory.prototype.recipeNutritionLabelImage = function (id, showOptionalNutrients, showZeroValues, showIngredients, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "recipeNutritionLabelImage", "id");
                        }
                        localVarPath = '/recipes/{id}/nutritionLabel.png'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (showOptionalNutrients !== undefined) {
                            requestContext.setQueryParam("showOptionalNutrients", ObjectSerializer_1.ObjectSerializer.serialize(showOptionalNutrients, "boolean", ""));
                        }
                        if (showZeroValues !== undefined) {
                            requestContext.setQueryParam("showZeroValues", ObjectSerializer_1.ObjectSerializer.serialize(showZeroValues, "boolean", ""));
                        }
                        if (showIngredients !== undefined) {
                            requestContext.setQueryParam("showIngredients", ObjectSerializer_1.ObjectSerializer.serialize(showIngredients, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.recipeNutritionLabelWidget = function (id, defaultCss, showOptionalNutrients, showZeroValues, showIngredients, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "recipeNutritionLabelWidget", "id");
                        }
                        localVarPath = '/recipes/{id}/nutritionLabel'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (defaultCss !== undefined) {
                            requestContext.setQueryParam("defaultCss", ObjectSerializer_1.ObjectSerializer.serialize(defaultCss, "boolean", ""));
                        }
                        if (showOptionalNutrients !== undefined) {
                            requestContext.setQueryParam("showOptionalNutrients", ObjectSerializer_1.ObjectSerializer.serialize(showOptionalNutrients, "boolean", ""));
                        }
                        if (showZeroValues !== undefined) {
                            requestContext.setQueryParam("showZeroValues", ObjectSerializer_1.ObjectSerializer.serialize(showZeroValues, "boolean", ""));
                        }
                        if (showIngredients !== undefined) {
                            requestContext.setQueryParam("showIngredients", ObjectSerializer_1.ObjectSerializer.serialize(showIngredients, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.recipeTasteByIDImage = function (id, normalize, rgb, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "recipeTasteByIDImage", "id");
                        }
                        localVarPath = '/recipes/{id}/tasteWidget.png'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (normalize !== undefined) {
                            requestContext.setQueryParam("normalize", ObjectSerializer_1.ObjectSerializer.serialize(normalize, "boolean", ""));
                        }
                        if (rgb !== undefined) {
                            requestContext.setQueryParam("rgb", ObjectSerializer_1.ObjectSerializer.serialize(rgb, "string", ""));
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
    RecipesApiRequestFactory.prototype.searchRecipes = function (query, cuisine, excludeCuisine, diet, intolerances, equipment, includeIngredients, excludeIngredients, type, instructionsRequired, fillIngredients, addRecipeInformation, addRecipeNutrition, author, tags, recipeBoxId, titleMatch, maxReadyTime, ignorePantry, sort, sortDirection, minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories, minFat, maxFat, minAlcohol, maxAlcohol, minCaffeine, maxCaffeine, minCopper, maxCopper, minCalcium, maxCalcium, minCholine, maxCholine, minCholesterol, maxCholesterol, minFluoride, maxFluoride, minSaturatedFat, maxSaturatedFat, minVitaminA, maxVitaminA, minVitaminC, maxVitaminC, minVitaminD, maxVitaminD, minVitaminE, maxVitaminE, minVitaminK, maxVitaminK, minVitaminB1, maxVitaminB1, minVitaminB2, maxVitaminB2, minVitaminB5, maxVitaminB5, minVitaminB3, maxVitaminB3, minVitaminB6, maxVitaminB6, minVitaminB12, maxVitaminB12, minFiber, maxFiber, minFolate, maxFolate, minFolicAcid, maxFolicAcid, minIodine, maxIodine, minIron, maxIron, minMagnesium, maxMagnesium, minManganese, maxManganese, minPhosphorus, maxPhosphorus, minPotassium, maxPotassium, minSelenium, maxSelenium, minSodium, maxSodium, minSugar, maxSugar, minZinc, maxZinc, offset, number, limitLicense, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/complexSearch';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (query !== undefined) {
                            requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""));
                        }
                        if (cuisine !== undefined) {
                            requestContext.setQueryParam("cuisine", ObjectSerializer_1.ObjectSerializer.serialize(cuisine, "string", ""));
                        }
                        if (excludeCuisine !== undefined) {
                            requestContext.setQueryParam("excludeCuisine", ObjectSerializer_1.ObjectSerializer.serialize(excludeCuisine, "string", ""));
                        }
                        if (diet !== undefined) {
                            requestContext.setQueryParam("diet", ObjectSerializer_1.ObjectSerializer.serialize(diet, "string", ""));
                        }
                        if (intolerances !== undefined) {
                            requestContext.setQueryParam("intolerances", ObjectSerializer_1.ObjectSerializer.serialize(intolerances, "string", ""));
                        }
                        if (equipment !== undefined) {
                            requestContext.setQueryParam("equipment", ObjectSerializer_1.ObjectSerializer.serialize(equipment, "string", ""));
                        }
                        if (includeIngredients !== undefined) {
                            requestContext.setQueryParam("includeIngredients", ObjectSerializer_1.ObjectSerializer.serialize(includeIngredients, "string", ""));
                        }
                        if (excludeIngredients !== undefined) {
                            requestContext.setQueryParam("excludeIngredients", ObjectSerializer_1.ObjectSerializer.serialize(excludeIngredients, "string", ""));
                        }
                        if (type !== undefined) {
                            requestContext.setQueryParam("type", ObjectSerializer_1.ObjectSerializer.serialize(type, "string", ""));
                        }
                        if (instructionsRequired !== undefined) {
                            requestContext.setQueryParam("instructionsRequired", ObjectSerializer_1.ObjectSerializer.serialize(instructionsRequired, "boolean", ""));
                        }
                        if (fillIngredients !== undefined) {
                            requestContext.setQueryParam("fillIngredients", ObjectSerializer_1.ObjectSerializer.serialize(fillIngredients, "boolean", ""));
                        }
                        if (addRecipeInformation !== undefined) {
                            requestContext.setQueryParam("addRecipeInformation", ObjectSerializer_1.ObjectSerializer.serialize(addRecipeInformation, "boolean", ""));
                        }
                        if (addRecipeNutrition !== undefined) {
                            requestContext.setQueryParam("addRecipeNutrition", ObjectSerializer_1.ObjectSerializer.serialize(addRecipeNutrition, "boolean", ""));
                        }
                        if (author !== undefined) {
                            requestContext.setQueryParam("author", ObjectSerializer_1.ObjectSerializer.serialize(author, "string", ""));
                        }
                        if (tags !== undefined) {
                            requestContext.setQueryParam("tags", ObjectSerializer_1.ObjectSerializer.serialize(tags, "string", ""));
                        }
                        if (recipeBoxId !== undefined) {
                            requestContext.setQueryParam("recipeBoxId", ObjectSerializer_1.ObjectSerializer.serialize(recipeBoxId, "number", ""));
                        }
                        if (titleMatch !== undefined) {
                            requestContext.setQueryParam("titleMatch", ObjectSerializer_1.ObjectSerializer.serialize(titleMatch, "string", ""));
                        }
                        if (maxReadyTime !== undefined) {
                            requestContext.setQueryParam("maxReadyTime", ObjectSerializer_1.ObjectSerializer.serialize(maxReadyTime, "number", ""));
                        }
                        if (ignorePantry !== undefined) {
                            requestContext.setQueryParam("ignorePantry", ObjectSerializer_1.ObjectSerializer.serialize(ignorePantry, "boolean", ""));
                        }
                        if (sort !== undefined) {
                            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "string", ""));
                        }
                        if (sortDirection !== undefined) {
                            requestContext.setQueryParam("sortDirection", ObjectSerializer_1.ObjectSerializer.serialize(sortDirection, "string", ""));
                        }
                        if (minCarbs !== undefined) {
                            requestContext.setQueryParam("minCarbs", ObjectSerializer_1.ObjectSerializer.serialize(minCarbs, "number", ""));
                        }
                        if (maxCarbs !== undefined) {
                            requestContext.setQueryParam("maxCarbs", ObjectSerializer_1.ObjectSerializer.serialize(maxCarbs, "number", ""));
                        }
                        if (minProtein !== undefined) {
                            requestContext.setQueryParam("minProtein", ObjectSerializer_1.ObjectSerializer.serialize(minProtein, "number", ""));
                        }
                        if (maxProtein !== undefined) {
                            requestContext.setQueryParam("maxProtein", ObjectSerializer_1.ObjectSerializer.serialize(maxProtein, "number", ""));
                        }
                        if (minCalories !== undefined) {
                            requestContext.setQueryParam("minCalories", ObjectSerializer_1.ObjectSerializer.serialize(minCalories, "number", ""));
                        }
                        if (maxCalories !== undefined) {
                            requestContext.setQueryParam("maxCalories", ObjectSerializer_1.ObjectSerializer.serialize(maxCalories, "number", ""));
                        }
                        if (minFat !== undefined) {
                            requestContext.setQueryParam("minFat", ObjectSerializer_1.ObjectSerializer.serialize(minFat, "number", ""));
                        }
                        if (maxFat !== undefined) {
                            requestContext.setQueryParam("maxFat", ObjectSerializer_1.ObjectSerializer.serialize(maxFat, "number", ""));
                        }
                        if (minAlcohol !== undefined) {
                            requestContext.setQueryParam("minAlcohol", ObjectSerializer_1.ObjectSerializer.serialize(minAlcohol, "number", ""));
                        }
                        if (maxAlcohol !== undefined) {
                            requestContext.setQueryParam("maxAlcohol", ObjectSerializer_1.ObjectSerializer.serialize(maxAlcohol, "number", ""));
                        }
                        if (minCaffeine !== undefined) {
                            requestContext.setQueryParam("minCaffeine", ObjectSerializer_1.ObjectSerializer.serialize(minCaffeine, "number", ""));
                        }
                        if (maxCaffeine !== undefined) {
                            requestContext.setQueryParam("maxCaffeine", ObjectSerializer_1.ObjectSerializer.serialize(maxCaffeine, "number", ""));
                        }
                        if (minCopper !== undefined) {
                            requestContext.setQueryParam("minCopper", ObjectSerializer_1.ObjectSerializer.serialize(minCopper, "number", ""));
                        }
                        if (maxCopper !== undefined) {
                            requestContext.setQueryParam("maxCopper", ObjectSerializer_1.ObjectSerializer.serialize(maxCopper, "number", ""));
                        }
                        if (minCalcium !== undefined) {
                            requestContext.setQueryParam("minCalcium", ObjectSerializer_1.ObjectSerializer.serialize(minCalcium, "number", ""));
                        }
                        if (maxCalcium !== undefined) {
                            requestContext.setQueryParam("maxCalcium", ObjectSerializer_1.ObjectSerializer.serialize(maxCalcium, "number", ""));
                        }
                        if (minCholine !== undefined) {
                            requestContext.setQueryParam("minCholine", ObjectSerializer_1.ObjectSerializer.serialize(minCholine, "number", ""));
                        }
                        if (maxCholine !== undefined) {
                            requestContext.setQueryParam("maxCholine", ObjectSerializer_1.ObjectSerializer.serialize(maxCholine, "number", ""));
                        }
                        if (minCholesterol !== undefined) {
                            requestContext.setQueryParam("minCholesterol", ObjectSerializer_1.ObjectSerializer.serialize(minCholesterol, "number", ""));
                        }
                        if (maxCholesterol !== undefined) {
                            requestContext.setQueryParam("maxCholesterol", ObjectSerializer_1.ObjectSerializer.serialize(maxCholesterol, "number", ""));
                        }
                        if (minFluoride !== undefined) {
                            requestContext.setQueryParam("minFluoride", ObjectSerializer_1.ObjectSerializer.serialize(minFluoride, "number", ""));
                        }
                        if (maxFluoride !== undefined) {
                            requestContext.setQueryParam("maxFluoride", ObjectSerializer_1.ObjectSerializer.serialize(maxFluoride, "number", ""));
                        }
                        if (minSaturatedFat !== undefined) {
                            requestContext.setQueryParam("minSaturatedFat", ObjectSerializer_1.ObjectSerializer.serialize(minSaturatedFat, "number", ""));
                        }
                        if (maxSaturatedFat !== undefined) {
                            requestContext.setQueryParam("maxSaturatedFat", ObjectSerializer_1.ObjectSerializer.serialize(maxSaturatedFat, "number", ""));
                        }
                        if (minVitaminA !== undefined) {
                            requestContext.setQueryParam("minVitaminA", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminA, "number", ""));
                        }
                        if (maxVitaminA !== undefined) {
                            requestContext.setQueryParam("maxVitaminA", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminA, "number", ""));
                        }
                        if (minVitaminC !== undefined) {
                            requestContext.setQueryParam("minVitaminC", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminC, "number", ""));
                        }
                        if (maxVitaminC !== undefined) {
                            requestContext.setQueryParam("maxVitaminC", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminC, "number", ""));
                        }
                        if (minVitaminD !== undefined) {
                            requestContext.setQueryParam("minVitaminD", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminD, "number", ""));
                        }
                        if (maxVitaminD !== undefined) {
                            requestContext.setQueryParam("maxVitaminD", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminD, "number", ""));
                        }
                        if (minVitaminE !== undefined) {
                            requestContext.setQueryParam("minVitaminE", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminE, "number", ""));
                        }
                        if (maxVitaminE !== undefined) {
                            requestContext.setQueryParam("maxVitaminE", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminE, "number", ""));
                        }
                        if (minVitaminK !== undefined) {
                            requestContext.setQueryParam("minVitaminK", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminK, "number", ""));
                        }
                        if (maxVitaminK !== undefined) {
                            requestContext.setQueryParam("maxVitaminK", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminK, "number", ""));
                        }
                        if (minVitaminB1 !== undefined) {
                            requestContext.setQueryParam("minVitaminB1", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB1, "number", ""));
                        }
                        if (maxVitaminB1 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB1", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB1, "number", ""));
                        }
                        if (minVitaminB2 !== undefined) {
                            requestContext.setQueryParam("minVitaminB2", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB2, "number", ""));
                        }
                        if (maxVitaminB2 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB2", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB2, "number", ""));
                        }
                        if (minVitaminB5 !== undefined) {
                            requestContext.setQueryParam("minVitaminB5", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB5, "number", ""));
                        }
                        if (maxVitaminB5 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB5", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB5, "number", ""));
                        }
                        if (minVitaminB3 !== undefined) {
                            requestContext.setQueryParam("minVitaminB3", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB3, "number", ""));
                        }
                        if (maxVitaminB3 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB3", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB3, "number", ""));
                        }
                        if (minVitaminB6 !== undefined) {
                            requestContext.setQueryParam("minVitaminB6", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB6, "number", ""));
                        }
                        if (maxVitaminB6 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB6", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB6, "number", ""));
                        }
                        if (minVitaminB12 !== undefined) {
                            requestContext.setQueryParam("minVitaminB12", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB12, "number", ""));
                        }
                        if (maxVitaminB12 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB12", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB12, "number", ""));
                        }
                        if (minFiber !== undefined) {
                            requestContext.setQueryParam("minFiber", ObjectSerializer_1.ObjectSerializer.serialize(minFiber, "number", ""));
                        }
                        if (maxFiber !== undefined) {
                            requestContext.setQueryParam("maxFiber", ObjectSerializer_1.ObjectSerializer.serialize(maxFiber, "number", ""));
                        }
                        if (minFolate !== undefined) {
                            requestContext.setQueryParam("minFolate", ObjectSerializer_1.ObjectSerializer.serialize(minFolate, "number", ""));
                        }
                        if (maxFolate !== undefined) {
                            requestContext.setQueryParam("maxFolate", ObjectSerializer_1.ObjectSerializer.serialize(maxFolate, "number", ""));
                        }
                        if (minFolicAcid !== undefined) {
                            requestContext.setQueryParam("minFolicAcid", ObjectSerializer_1.ObjectSerializer.serialize(minFolicAcid, "number", ""));
                        }
                        if (maxFolicAcid !== undefined) {
                            requestContext.setQueryParam("maxFolicAcid", ObjectSerializer_1.ObjectSerializer.serialize(maxFolicAcid, "number", ""));
                        }
                        if (minIodine !== undefined) {
                            requestContext.setQueryParam("minIodine", ObjectSerializer_1.ObjectSerializer.serialize(minIodine, "number", ""));
                        }
                        if (maxIodine !== undefined) {
                            requestContext.setQueryParam("maxIodine", ObjectSerializer_1.ObjectSerializer.serialize(maxIodine, "number", ""));
                        }
                        if (minIron !== undefined) {
                            requestContext.setQueryParam("minIron", ObjectSerializer_1.ObjectSerializer.serialize(minIron, "number", ""));
                        }
                        if (maxIron !== undefined) {
                            requestContext.setQueryParam("maxIron", ObjectSerializer_1.ObjectSerializer.serialize(maxIron, "number", ""));
                        }
                        if (minMagnesium !== undefined) {
                            requestContext.setQueryParam("minMagnesium", ObjectSerializer_1.ObjectSerializer.serialize(minMagnesium, "number", ""));
                        }
                        if (maxMagnesium !== undefined) {
                            requestContext.setQueryParam("maxMagnesium", ObjectSerializer_1.ObjectSerializer.serialize(maxMagnesium, "number", ""));
                        }
                        if (minManganese !== undefined) {
                            requestContext.setQueryParam("minManganese", ObjectSerializer_1.ObjectSerializer.serialize(minManganese, "number", ""));
                        }
                        if (maxManganese !== undefined) {
                            requestContext.setQueryParam("maxManganese", ObjectSerializer_1.ObjectSerializer.serialize(maxManganese, "number", ""));
                        }
                        if (minPhosphorus !== undefined) {
                            requestContext.setQueryParam("minPhosphorus", ObjectSerializer_1.ObjectSerializer.serialize(minPhosphorus, "number", ""));
                        }
                        if (maxPhosphorus !== undefined) {
                            requestContext.setQueryParam("maxPhosphorus", ObjectSerializer_1.ObjectSerializer.serialize(maxPhosphorus, "number", ""));
                        }
                        if (minPotassium !== undefined) {
                            requestContext.setQueryParam("minPotassium", ObjectSerializer_1.ObjectSerializer.serialize(minPotassium, "number", ""));
                        }
                        if (maxPotassium !== undefined) {
                            requestContext.setQueryParam("maxPotassium", ObjectSerializer_1.ObjectSerializer.serialize(maxPotassium, "number", ""));
                        }
                        if (minSelenium !== undefined) {
                            requestContext.setQueryParam("minSelenium", ObjectSerializer_1.ObjectSerializer.serialize(minSelenium, "number", ""));
                        }
                        if (maxSelenium !== undefined) {
                            requestContext.setQueryParam("maxSelenium", ObjectSerializer_1.ObjectSerializer.serialize(maxSelenium, "number", ""));
                        }
                        if (minSodium !== undefined) {
                            requestContext.setQueryParam("minSodium", ObjectSerializer_1.ObjectSerializer.serialize(minSodium, "number", ""));
                        }
                        if (maxSodium !== undefined) {
                            requestContext.setQueryParam("maxSodium", ObjectSerializer_1.ObjectSerializer.serialize(maxSodium, "number", ""));
                        }
                        if (minSugar !== undefined) {
                            requestContext.setQueryParam("minSugar", ObjectSerializer_1.ObjectSerializer.serialize(minSugar, "number", ""));
                        }
                        if (maxSugar !== undefined) {
                            requestContext.setQueryParam("maxSugar", ObjectSerializer_1.ObjectSerializer.serialize(maxSugar, "number", ""));
                        }
                        if (minZinc !== undefined) {
                            requestContext.setQueryParam("minZinc", ObjectSerializer_1.ObjectSerializer.serialize(minZinc, "number", ""));
                        }
                        if (maxZinc !== undefined) {
                            requestContext.setQueryParam("maxZinc", ObjectSerializer_1.ObjectSerializer.serialize(maxZinc, "number", ""));
                        }
                        if (offset !== undefined) {
                            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", ""));
                        }
                        if (number !== undefined) {
                            requestContext.setQueryParam("number", ObjectSerializer_1.ObjectSerializer.serialize(number, "number", ""));
                        }
                        if (limitLicense !== undefined) {
                            requestContext.setQueryParam("limitLicense", ObjectSerializer_1.ObjectSerializer.serialize(limitLicense, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.searchRecipesByIngredients = function (ingredients, number, limitLicense, ranking, ignorePantry, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/findByIngredients';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (ingredients !== undefined) {
                            requestContext.setQueryParam("ingredients", ObjectSerializer_1.ObjectSerializer.serialize(ingredients, "string", ""));
                        }
                        if (number !== undefined) {
                            requestContext.setQueryParam("number", ObjectSerializer_1.ObjectSerializer.serialize(number, "number", ""));
                        }
                        if (limitLicense !== undefined) {
                            requestContext.setQueryParam("limitLicense", ObjectSerializer_1.ObjectSerializer.serialize(limitLicense, "boolean", ""));
                        }
                        if (ranking !== undefined) {
                            requestContext.setQueryParam("ranking", ObjectSerializer_1.ObjectSerializer.serialize(ranking, "number", ""));
                        }
                        if (ignorePantry !== undefined) {
                            requestContext.setQueryParam("ignorePantry", ObjectSerializer_1.ObjectSerializer.serialize(ignorePantry, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.searchRecipesByNutrients = function (minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories, minFat, maxFat, minAlcohol, maxAlcohol, minCaffeine, maxCaffeine, minCopper, maxCopper, minCalcium, maxCalcium, minCholine, maxCholine, minCholesterol, maxCholesterol, minFluoride, maxFluoride, minSaturatedFat, maxSaturatedFat, minVitaminA, maxVitaminA, minVitaminC, maxVitaminC, minVitaminD, maxVitaminD, minVitaminE, maxVitaminE, minVitaminK, maxVitaminK, minVitaminB1, maxVitaminB1, minVitaminB2, maxVitaminB2, minVitaminB5, maxVitaminB5, minVitaminB3, maxVitaminB3, minVitaminB6, maxVitaminB6, minVitaminB12, maxVitaminB12, minFiber, maxFiber, minFolate, maxFolate, minFolicAcid, maxFolicAcid, minIodine, maxIodine, minIron, maxIron, minMagnesium, maxMagnesium, minManganese, maxManganese, minPhosphorus, maxPhosphorus, minPotassium, maxPotassium, minSelenium, maxSelenium, minSodium, maxSodium, minSugar, maxSugar, minZinc, maxZinc, offset, number, random, limitLicense, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/findByNutrients';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (minCarbs !== undefined) {
                            requestContext.setQueryParam("minCarbs", ObjectSerializer_1.ObjectSerializer.serialize(minCarbs, "number", ""));
                        }
                        if (maxCarbs !== undefined) {
                            requestContext.setQueryParam("maxCarbs", ObjectSerializer_1.ObjectSerializer.serialize(maxCarbs, "number", ""));
                        }
                        if (minProtein !== undefined) {
                            requestContext.setQueryParam("minProtein", ObjectSerializer_1.ObjectSerializer.serialize(minProtein, "number", ""));
                        }
                        if (maxProtein !== undefined) {
                            requestContext.setQueryParam("maxProtein", ObjectSerializer_1.ObjectSerializer.serialize(maxProtein, "number", ""));
                        }
                        if (minCalories !== undefined) {
                            requestContext.setQueryParam("minCalories", ObjectSerializer_1.ObjectSerializer.serialize(minCalories, "number", ""));
                        }
                        if (maxCalories !== undefined) {
                            requestContext.setQueryParam("maxCalories", ObjectSerializer_1.ObjectSerializer.serialize(maxCalories, "number", ""));
                        }
                        if (minFat !== undefined) {
                            requestContext.setQueryParam("minFat", ObjectSerializer_1.ObjectSerializer.serialize(minFat, "number", ""));
                        }
                        if (maxFat !== undefined) {
                            requestContext.setQueryParam("maxFat", ObjectSerializer_1.ObjectSerializer.serialize(maxFat, "number", ""));
                        }
                        if (minAlcohol !== undefined) {
                            requestContext.setQueryParam("minAlcohol", ObjectSerializer_1.ObjectSerializer.serialize(minAlcohol, "number", ""));
                        }
                        if (maxAlcohol !== undefined) {
                            requestContext.setQueryParam("maxAlcohol", ObjectSerializer_1.ObjectSerializer.serialize(maxAlcohol, "number", ""));
                        }
                        if (minCaffeine !== undefined) {
                            requestContext.setQueryParam("minCaffeine", ObjectSerializer_1.ObjectSerializer.serialize(minCaffeine, "number", ""));
                        }
                        if (maxCaffeine !== undefined) {
                            requestContext.setQueryParam("maxCaffeine", ObjectSerializer_1.ObjectSerializer.serialize(maxCaffeine, "number", ""));
                        }
                        if (minCopper !== undefined) {
                            requestContext.setQueryParam("minCopper", ObjectSerializer_1.ObjectSerializer.serialize(minCopper, "number", ""));
                        }
                        if (maxCopper !== undefined) {
                            requestContext.setQueryParam("maxCopper", ObjectSerializer_1.ObjectSerializer.serialize(maxCopper, "number", ""));
                        }
                        if (minCalcium !== undefined) {
                            requestContext.setQueryParam("minCalcium", ObjectSerializer_1.ObjectSerializer.serialize(minCalcium, "number", ""));
                        }
                        if (maxCalcium !== undefined) {
                            requestContext.setQueryParam("maxCalcium", ObjectSerializer_1.ObjectSerializer.serialize(maxCalcium, "number", ""));
                        }
                        if (minCholine !== undefined) {
                            requestContext.setQueryParam("minCholine", ObjectSerializer_1.ObjectSerializer.serialize(minCholine, "number", ""));
                        }
                        if (maxCholine !== undefined) {
                            requestContext.setQueryParam("maxCholine", ObjectSerializer_1.ObjectSerializer.serialize(maxCholine, "number", ""));
                        }
                        if (minCholesterol !== undefined) {
                            requestContext.setQueryParam("minCholesterol", ObjectSerializer_1.ObjectSerializer.serialize(minCholesterol, "number", ""));
                        }
                        if (maxCholesterol !== undefined) {
                            requestContext.setQueryParam("maxCholesterol", ObjectSerializer_1.ObjectSerializer.serialize(maxCholesterol, "number", ""));
                        }
                        if (minFluoride !== undefined) {
                            requestContext.setQueryParam("minFluoride", ObjectSerializer_1.ObjectSerializer.serialize(minFluoride, "number", ""));
                        }
                        if (maxFluoride !== undefined) {
                            requestContext.setQueryParam("maxFluoride", ObjectSerializer_1.ObjectSerializer.serialize(maxFluoride, "number", ""));
                        }
                        if (minSaturatedFat !== undefined) {
                            requestContext.setQueryParam("minSaturatedFat", ObjectSerializer_1.ObjectSerializer.serialize(minSaturatedFat, "number", ""));
                        }
                        if (maxSaturatedFat !== undefined) {
                            requestContext.setQueryParam("maxSaturatedFat", ObjectSerializer_1.ObjectSerializer.serialize(maxSaturatedFat, "number", ""));
                        }
                        if (minVitaminA !== undefined) {
                            requestContext.setQueryParam("minVitaminA", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminA, "number", ""));
                        }
                        if (maxVitaminA !== undefined) {
                            requestContext.setQueryParam("maxVitaminA", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminA, "number", ""));
                        }
                        if (minVitaminC !== undefined) {
                            requestContext.setQueryParam("minVitaminC", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminC, "number", ""));
                        }
                        if (maxVitaminC !== undefined) {
                            requestContext.setQueryParam("maxVitaminC", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminC, "number", ""));
                        }
                        if (minVitaminD !== undefined) {
                            requestContext.setQueryParam("minVitaminD", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminD, "number", ""));
                        }
                        if (maxVitaminD !== undefined) {
                            requestContext.setQueryParam("maxVitaminD", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminD, "number", ""));
                        }
                        if (minVitaminE !== undefined) {
                            requestContext.setQueryParam("minVitaminE", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminE, "number", ""));
                        }
                        if (maxVitaminE !== undefined) {
                            requestContext.setQueryParam("maxVitaminE", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminE, "number", ""));
                        }
                        if (minVitaminK !== undefined) {
                            requestContext.setQueryParam("minVitaminK", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminK, "number", ""));
                        }
                        if (maxVitaminK !== undefined) {
                            requestContext.setQueryParam("maxVitaminK", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminK, "number", ""));
                        }
                        if (minVitaminB1 !== undefined) {
                            requestContext.setQueryParam("minVitaminB1", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB1, "number", ""));
                        }
                        if (maxVitaminB1 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB1", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB1, "number", ""));
                        }
                        if (minVitaminB2 !== undefined) {
                            requestContext.setQueryParam("minVitaminB2", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB2, "number", ""));
                        }
                        if (maxVitaminB2 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB2", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB2, "number", ""));
                        }
                        if (minVitaminB5 !== undefined) {
                            requestContext.setQueryParam("minVitaminB5", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB5, "number", ""));
                        }
                        if (maxVitaminB5 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB5", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB5, "number", ""));
                        }
                        if (minVitaminB3 !== undefined) {
                            requestContext.setQueryParam("minVitaminB3", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB3, "number", ""));
                        }
                        if (maxVitaminB3 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB3", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB3, "number", ""));
                        }
                        if (minVitaminB6 !== undefined) {
                            requestContext.setQueryParam("minVitaminB6", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB6, "number", ""));
                        }
                        if (maxVitaminB6 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB6", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB6, "number", ""));
                        }
                        if (minVitaminB12 !== undefined) {
                            requestContext.setQueryParam("minVitaminB12", ObjectSerializer_1.ObjectSerializer.serialize(minVitaminB12, "number", ""));
                        }
                        if (maxVitaminB12 !== undefined) {
                            requestContext.setQueryParam("maxVitaminB12", ObjectSerializer_1.ObjectSerializer.serialize(maxVitaminB12, "number", ""));
                        }
                        if (minFiber !== undefined) {
                            requestContext.setQueryParam("minFiber", ObjectSerializer_1.ObjectSerializer.serialize(minFiber, "number", ""));
                        }
                        if (maxFiber !== undefined) {
                            requestContext.setQueryParam("maxFiber", ObjectSerializer_1.ObjectSerializer.serialize(maxFiber, "number", ""));
                        }
                        if (minFolate !== undefined) {
                            requestContext.setQueryParam("minFolate", ObjectSerializer_1.ObjectSerializer.serialize(minFolate, "number", ""));
                        }
                        if (maxFolate !== undefined) {
                            requestContext.setQueryParam("maxFolate", ObjectSerializer_1.ObjectSerializer.serialize(maxFolate, "number", ""));
                        }
                        if (minFolicAcid !== undefined) {
                            requestContext.setQueryParam("minFolicAcid", ObjectSerializer_1.ObjectSerializer.serialize(minFolicAcid, "number", ""));
                        }
                        if (maxFolicAcid !== undefined) {
                            requestContext.setQueryParam("maxFolicAcid", ObjectSerializer_1.ObjectSerializer.serialize(maxFolicAcid, "number", ""));
                        }
                        if (minIodine !== undefined) {
                            requestContext.setQueryParam("minIodine", ObjectSerializer_1.ObjectSerializer.serialize(minIodine, "number", ""));
                        }
                        if (maxIodine !== undefined) {
                            requestContext.setQueryParam("maxIodine", ObjectSerializer_1.ObjectSerializer.serialize(maxIodine, "number", ""));
                        }
                        if (minIron !== undefined) {
                            requestContext.setQueryParam("minIron", ObjectSerializer_1.ObjectSerializer.serialize(minIron, "number", ""));
                        }
                        if (maxIron !== undefined) {
                            requestContext.setQueryParam("maxIron", ObjectSerializer_1.ObjectSerializer.serialize(maxIron, "number", ""));
                        }
                        if (minMagnesium !== undefined) {
                            requestContext.setQueryParam("minMagnesium", ObjectSerializer_1.ObjectSerializer.serialize(minMagnesium, "number", ""));
                        }
                        if (maxMagnesium !== undefined) {
                            requestContext.setQueryParam("maxMagnesium", ObjectSerializer_1.ObjectSerializer.serialize(maxMagnesium, "number", ""));
                        }
                        if (minManganese !== undefined) {
                            requestContext.setQueryParam("minManganese", ObjectSerializer_1.ObjectSerializer.serialize(minManganese, "number", ""));
                        }
                        if (maxManganese !== undefined) {
                            requestContext.setQueryParam("maxManganese", ObjectSerializer_1.ObjectSerializer.serialize(maxManganese, "number", ""));
                        }
                        if (minPhosphorus !== undefined) {
                            requestContext.setQueryParam("minPhosphorus", ObjectSerializer_1.ObjectSerializer.serialize(minPhosphorus, "number", ""));
                        }
                        if (maxPhosphorus !== undefined) {
                            requestContext.setQueryParam("maxPhosphorus", ObjectSerializer_1.ObjectSerializer.serialize(maxPhosphorus, "number", ""));
                        }
                        if (minPotassium !== undefined) {
                            requestContext.setQueryParam("minPotassium", ObjectSerializer_1.ObjectSerializer.serialize(minPotassium, "number", ""));
                        }
                        if (maxPotassium !== undefined) {
                            requestContext.setQueryParam("maxPotassium", ObjectSerializer_1.ObjectSerializer.serialize(maxPotassium, "number", ""));
                        }
                        if (minSelenium !== undefined) {
                            requestContext.setQueryParam("minSelenium", ObjectSerializer_1.ObjectSerializer.serialize(minSelenium, "number", ""));
                        }
                        if (maxSelenium !== undefined) {
                            requestContext.setQueryParam("maxSelenium", ObjectSerializer_1.ObjectSerializer.serialize(maxSelenium, "number", ""));
                        }
                        if (minSodium !== undefined) {
                            requestContext.setQueryParam("minSodium", ObjectSerializer_1.ObjectSerializer.serialize(minSodium, "number", ""));
                        }
                        if (maxSodium !== undefined) {
                            requestContext.setQueryParam("maxSodium", ObjectSerializer_1.ObjectSerializer.serialize(maxSodium, "number", ""));
                        }
                        if (minSugar !== undefined) {
                            requestContext.setQueryParam("minSugar", ObjectSerializer_1.ObjectSerializer.serialize(minSugar, "number", ""));
                        }
                        if (maxSugar !== undefined) {
                            requestContext.setQueryParam("maxSugar", ObjectSerializer_1.ObjectSerializer.serialize(maxSugar, "number", ""));
                        }
                        if (minZinc !== undefined) {
                            requestContext.setQueryParam("minZinc", ObjectSerializer_1.ObjectSerializer.serialize(minZinc, "number", ""));
                        }
                        if (maxZinc !== undefined) {
                            requestContext.setQueryParam("maxZinc", ObjectSerializer_1.ObjectSerializer.serialize(maxZinc, "number", ""));
                        }
                        if (offset !== undefined) {
                            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", ""));
                        }
                        if (number !== undefined) {
                            requestContext.setQueryParam("number", ObjectSerializer_1.ObjectSerializer.serialize(number, "number", ""));
                        }
                        if (random !== undefined) {
                            requestContext.setQueryParam("random", ObjectSerializer_1.ObjectSerializer.serialize(random, "boolean", ""));
                        }
                        if (limitLicense !== undefined) {
                            requestContext.setQueryParam("limitLicense", ObjectSerializer_1.ObjectSerializer.serialize(limitLicense, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.summarizeRecipe = function (id, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "summarizeRecipe", "id");
                        }
                        localVarPath = '/recipes/{id}/summary'
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
    RecipesApiRequestFactory.prototype.visualizeEquipment = function (contentType, accept, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/visualizeEquipment';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
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
    RecipesApiRequestFactory.prototype.visualizePriceBreakdown = function (contentType, accept, language, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/visualizePriceEstimator';
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
    RecipesApiRequestFactory.prototype.visualizeRecipeEquipmentByID = function (id, defaultCss, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "visualizeRecipeEquipmentByID", "id");
                        }
                        localVarPath = '/recipes/{id}/equipmentWidget'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (defaultCss !== undefined) {
                            requestContext.setQueryParam("defaultCss", ObjectSerializer_1.ObjectSerializer.serialize(defaultCss, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.visualizeRecipeIngredientsByID = function (id, defaultCss, measure, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "visualizeRecipeIngredientsByID", "id");
                        }
                        localVarPath = '/recipes/{id}/ingredientWidget'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (defaultCss !== undefined) {
                            requestContext.setQueryParam("defaultCss", ObjectSerializer_1.ObjectSerializer.serialize(defaultCss, "boolean", ""));
                        }
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
    RecipesApiRequestFactory.prototype.visualizeRecipeNutrition = function (contentType, accept, language, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/visualizeNutrition';
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
    RecipesApiRequestFactory.prototype.visualizeRecipeNutritionByID = function (id, defaultCss, accept, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "visualizeRecipeNutritionByID", "id");
                        }
                        localVarPath = '/recipes/{id}/nutritionWidget'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (defaultCss !== undefined) {
                            requestContext.setQueryParam("defaultCss", ObjectSerializer_1.ObjectSerializer.serialize(defaultCss, "boolean", ""));
                        }
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
    RecipesApiRequestFactory.prototype.visualizeRecipePriceBreakdownByID = function (id, defaultCss, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "visualizeRecipePriceBreakdownByID", "id");
                        }
                        localVarPath = '/recipes/{id}/priceBreakdownWidget'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (defaultCss !== undefined) {
                            requestContext.setQueryParam("defaultCss", ObjectSerializer_1.ObjectSerializer.serialize(defaultCss, "boolean", ""));
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
    RecipesApiRequestFactory.prototype.visualizeRecipeTaste = function (language, contentType, accept, normalize, rgb, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/recipes/visualizeTaste';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (language !== undefined) {
                            requestContext.setQueryParam("language", ObjectSerializer_1.ObjectSerializer.serialize(language, "'en' | 'de'", ""));
                        }
                        if (normalize !== undefined) {
                            requestContext.setQueryParam("normalize", ObjectSerializer_1.ObjectSerializer.serialize(normalize, "boolean", ""));
                        }
                        if (rgb !== undefined) {
                            requestContext.setQueryParam("rgb", ObjectSerializer_1.ObjectSerializer.serialize(rgb, "string", ""));
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
    RecipesApiRequestFactory.prototype.visualizeRecipeTasteByID = function (id, normalize, rgb, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (id === null || id === undefined) {
                            throw new baseapi_1.RequiredError("RecipesApi", "visualizeRecipeTasteByID", "id");
                        }
                        localVarPath = '/recipes/{id}/tasteWidget'
                            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (normalize !== undefined) {
                            requestContext.setQueryParam("normalize", ObjectSerializer_1.ObjectSerializer.serialize(normalize, "boolean", ""));
                        }
                        if (rgb !== undefined) {
                            requestContext.setQueryParam("rgb", ObjectSerializer_1.ObjectSerializer.serialize(rgb, "string", ""));
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
    return RecipesApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.RecipesApiRequestFactory = RecipesApiRequestFactory;
var RecipesApiResponseProcessor = (function () {
    function RecipesApiResponseProcessor() {
    }
    RecipesApiResponseProcessor.prototype.analyzeARecipeSearchQuery = function (response) {
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
                            "AnalyzeARecipeSearchQuery200Response", ""]);
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
                            "AnalyzeARecipeSearchQuery200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.analyzeRecipeInstructions = function (response) {
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
                            "AnalyzeRecipeInstructions200Response", ""]);
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
                            "AnalyzeRecipeInstructions200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.autocompleteRecipeSearch = function (response) {
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
                            "Set<AutocompleteRecipeSearch200ResponseInner>", ""]);
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
                            "Set<AutocompleteRecipeSearch200ResponseInner>", ""]);
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
    RecipesApiResponseProcessor.prototype.classifyCuisine = function (response) {
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
                            "ClassifyCuisine200Response", ""]);
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
                            "ClassifyCuisine200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.computeGlycemicLoad = function (response) {
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
                            "ComputeGlycemicLoad200Response", ""]);
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
                            "ComputeGlycemicLoad200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.convertAmounts = function (response) {
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
                            "ConvertAmounts200Response", ""]);
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
                            "ConvertAmounts200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.createRecipeCard = function (response) {
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
                            "CreateRecipeCard200Response", ""]);
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
                            "CreateRecipeCard200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.equipmentByIDImage = function (response) {
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
    RecipesApiResponseProcessor.prototype.extractRecipeFromWebsite = function (response) {
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
                            "GetRecipeInformation200Response", ""]);
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
                            "GetRecipeInformation200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getAnalyzedRecipeInstructions = function (response) {
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
                            "GetAnalyzedRecipeInstructions200Response", ""]);
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
                            "GetAnalyzedRecipeInstructions200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getRandomRecipes = function (response) {
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
                            "GetRandomRecipes200Response", ""]);
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
                            "GetRandomRecipes200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getRecipeEquipmentByID = function (response) {
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
                            "GetRecipeEquipmentByID200Response", ""]);
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
                            "GetRecipeEquipmentByID200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getRecipeInformation = function (response) {
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
                            "GetRecipeInformation200Response", ""]);
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
                            "GetRecipeInformation200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getRecipeInformationBulk = function (response) {
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
                            "Set<GetRecipeInformationBulk200ResponseInner>", ""]);
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
                            "Set<GetRecipeInformationBulk200ResponseInner>", ""]);
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
    RecipesApiResponseProcessor.prototype.getRecipeIngredientsByID = function (response) {
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
                            "GetRecipeIngredientsByID200Response", ""]);
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
                            "GetRecipeIngredientsByID200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getRecipeNutritionWidgetByID = function (response) {
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
                            "GetRecipeNutritionWidgetByID200Response", ""]);
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
                            "GetRecipeNutritionWidgetByID200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getRecipePriceBreakdownByID = function (response) {
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
                            "GetRecipePriceBreakdownByID200Response", ""]);
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
                            "GetRecipePriceBreakdownByID200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getRecipeTasteByID = function (response) {
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
                            "GetRecipeTasteByID200Response", ""]);
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
                            "GetRecipeTasteByID200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.getSimilarRecipes = function (response) {
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
                            "Set<GetSimilarRecipes200ResponseInner>", ""]);
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
                            "Set<GetSimilarRecipes200ResponseInner>", ""]);
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
    RecipesApiResponseProcessor.prototype.guessNutritionByDishName = function (response) {
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
                            "GuessNutritionByDishName200Response", ""]);
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
                            "GuessNutritionByDishName200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.ingredientsByIDImage = function (response) {
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
    RecipesApiResponseProcessor.prototype.parseIngredients = function (response) {
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
                            "Set<ParseIngredients200ResponseInner>", ""]);
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
                            "Set<ParseIngredients200ResponseInner>", ""]);
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
    RecipesApiResponseProcessor.prototype.priceBreakdownByIDImage = function (response) {
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
    RecipesApiResponseProcessor.prototype.quickAnswer = function (response) {
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
                            "QuickAnswer200Response", ""]);
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
                            "QuickAnswer200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.recipeNutritionByIDImage = function (response) {
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
    RecipesApiResponseProcessor.prototype.recipeNutritionLabelImage = function (response) {
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
    RecipesApiResponseProcessor.prototype.recipeNutritionLabelWidget = function (response) {
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
    RecipesApiResponseProcessor.prototype.recipeTasteByIDImage = function (response) {
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
    RecipesApiResponseProcessor.prototype.searchRecipes = function (response) {
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
                            "SearchRecipes200Response", ""]);
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
                            "SearchRecipes200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.searchRecipesByIngredients = function (response) {
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
                            "Set<SearchRecipesByIngredients200ResponseInner>", ""]);
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
                            "Set<SearchRecipesByIngredients200ResponseInner>", ""]);
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
    RecipesApiResponseProcessor.prototype.searchRecipesByNutrients = function (response) {
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
                            "Set<SearchRecipesByNutrients200ResponseInner>", ""]);
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
                            "Set<SearchRecipesByNutrients200ResponseInner>", ""]);
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
    RecipesApiResponseProcessor.prototype.summarizeRecipe = function (response) {
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
                            "SummarizeRecipe200Response", ""]);
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
                            "SummarizeRecipe200Response", ""]);
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
    RecipesApiResponseProcessor.prototype.visualizeEquipment = function (response) {
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
    RecipesApiResponseProcessor.prototype.visualizePriceBreakdown = function (response) {
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
    RecipesApiResponseProcessor.prototype.visualizeRecipeEquipmentByID = function (response) {
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
    RecipesApiResponseProcessor.prototype.visualizeRecipeIngredientsByID = function (response) {
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
    RecipesApiResponseProcessor.prototype.visualizeRecipeNutrition = function (response) {
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
    RecipesApiResponseProcessor.prototype.visualizeRecipeNutritionByID = function (response) {
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
    RecipesApiResponseProcessor.prototype.visualizeRecipePriceBreakdownByID = function (response) {
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
    RecipesApiResponseProcessor.prototype.visualizeRecipeTaste = function (response) {
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
    RecipesApiResponseProcessor.prototype.visualizeRecipeTasteByID = function (response) {
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
    return RecipesApiResponseProcessor;
}());
exports.RecipesApiResponseProcessor = RecipesApiResponseProcessor;
//# sourceMappingURL=RecipesApi.js.map