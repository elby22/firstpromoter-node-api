"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var request = require("request-promise-native");
var PromoterApi = /** @class */ (function () {
    function PromoterApi(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * List all promoters in the system
     * @param [campaign_id] List all promoters accepted to a specific campaign.
     */
    PromoterApi.prototype.list = function (campaign_id) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            url: 'https://firstpromoter.com/api/v1/promoters/list',
                            headers: { 'x-api-key': this.apiKey },
                            qs: { campaign_id: campaign_id }
                        };
                        return [4 /*yield*/, request.get(options)];
                    case 1:
                        response = _a.sent();
                        data = JSON.parse(response);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Create new promoters
     * Probably the most important value from the response is "auth_token", which is a unique key auto-generated on creation and can be used to automatically log in your promoters to their dashboard.
     * @param parameters A map of parameters for creating a new promoter. Email is required
     */
    PromoterApi.prototype.create = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!parameters.email)
                            throw new Error('Email must be supplied as a parameter to create a new promoter.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/promoters/create',
                            headers: { 'x-api-key': this.apiKey },
                            json: parameters
                        };
                        return [4 /*yield*/, request.post(options)];
                    case 1:
                        response = _a.sent();
                        data = response;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Modify existing promoter
     * You can identify promoters by: id, cust_id, auth_token or ref_id(referral id). You need to pass at least one of these parameters
     * @param parameters You MUST supply at least id, cust_id, auth_token or ref_id.
     */
    PromoterApi.prototype.update = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parameters.id || parameters.cust_id || parameters.auth_token || parameters.ref_id))
                            throw new Error('id, cust_id, auth_token or ref_id must be supplied to identify promoter.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/promoters/update',
                            headers: { 'x-api-key': this.apiKey },
                            json: parameters
                        };
                        return [4 /*yield*/, request.put(options)];
                    case 1:
                        response = _a.sent();
                        data = response;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Modify existing promoter
     * You can identify promoters by: id, cust_id, auth_token or ref_id(referral id). You need to pass at least one of these parameters
     * @param parameters You MUST supply at least id, cust_id, auth_token or ref_id.
     */
    PromoterApi.prototype.get = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parameters.id || parameters.cust_id || parameters.auth_token || parameters.ref_id))
                            throw new Error('id, cust_id, auth_token or ref_id must be supplied to identify promoter.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/promoters/show',
                            headers: { 'x-api-key': this.apiKey },
                            qs: parameters
                        };
                        return [4 /*yield*/, request.get(options)];
                    case 1:
                        response = _a.sent();
                        data = JSON.parse(response);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Reset promoter's authentication token
     * Resetting authentication token(auth_token) which is used to automatically sign in your promoters(if you use this feature) is not required, but can be used to enhance the security of the promoter dashboard. You can set up a cron job to call the API endpoint and store the new "auth_token" from the response.
     * @param parameters You MUST supply at least id, cust_id, or auth_token.
     */
    PromoterApi.prototype.refreshToken = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parameters.id || parameters.cust_id || parameters.auth_token))
                            throw new Error('id, cust_id or auth_token must be supplied to identify promoter.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/promoters/refresh_token',
                            headers: { 'x-api-key': this.apiKey },
                            json: parameters
                        };
                        return [4 /*yield*/, request.put(options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
 * Reset promoter's authentication token
 * Resetting authentication token(auth_token) which is used to automatically sign in your promoters(if you use this feature) is not required, but can be used to enhance the security of the promoter dashboard. You can set up a cron job to call the API endpoint and store the new "auth_token" from the response.
 * @param parameters You MUST supply at least id, cust_id, or auth_token.
 */
    PromoterApi.prototype.delete = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parameters.id || parameters.cust_id || parameters.auth_token))
                            throw new Error('id, cust_id or auth_token must be supplied to identify promoter.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/promoters/delete',
                            headers: { 'x-api-key': this.apiKey },
                            json: parameters
                        };
                        return [4 /*yield*/, request.delete(options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return PromoterApi;
}());
exports.default = PromoterApi;
