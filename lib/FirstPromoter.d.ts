import * as api from './api';
export default class Client {
    promoter: api.PromoterApi;
    lead: api.LeadApi;
    constructor(apiKey: string);
}
