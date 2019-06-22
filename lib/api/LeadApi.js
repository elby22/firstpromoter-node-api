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
var LeadApi = /** @class */ (function () {
    function LeadApi(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * List leads and customers
     * With this endpoint you can list all the leads and customers assigned to a promotion, promoter, campaign or entire account using the API.
     * @param parameters List all promoters accepted to a specific campaign.
     */
    LeadApi.prototype.list = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            url: 'https://firstpromoter.com/api/v1/leads/list',
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
     * Create new leads
     * With this endpoint you can assign a new lead/customer to a promoter using the API. You can find the promoter through its promotion either by ref_id or promotion_id.
     * @param parameters A map of parameters for creating a new promoter. Email is required
     */
    LeadApi.prototype.create = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parameters.email || parameters.uid))
                            throw new Error('Email or uid must be supplied as a parameter to create a new lead.');
                        if (!(parameters.promotion_id || parameters.ref_id))
                            throw new Error('promotion_id or ref_id must be supplied as a parameter to create a new lead.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/leads/create',
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
     * Modify existing lead/customer
     * Use this to update a lead/customer details from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    LeadApi.prototype.update = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parameters.id || parameters.uid || parameters.email))
                            throw new Error('id, uid, or email must be supplied to identify lead.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/leads/update',
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
     * Show lead/customer details
     * Show the lead/customer details from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    LeadApi.prototype.get = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parameters.id || parameters.uid || parameters.email))
                            throw new Error('id, uid or email must be supplied to identify lead.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/lead/show',
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
     * Delete a lead/customer
     * Remove a lead/customer from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    LeadApi.prototype.delete = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(parameters.id || parameters.uid || parameters.email))
                            throw new Error('id, uid or email must be supplied to identify lead.');
                        options = {
                            url: 'https://firstpromoter.com/api/v1/lead/delete',
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
    return LeadApi;
}());
exports.default = LeadApi;
