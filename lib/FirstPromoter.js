"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = require("./api");
var Client = /** @class */ (function () {
    function Client(apiKey) {
        if (!apiKey)
            throw new Error('Must provide a valid API key');
        this.promoter = new api.PromoterApi(apiKey);
        this.lead = new api.LeadApi(apiKey);
    }
    return Client;
}());
exports.default = Client;
