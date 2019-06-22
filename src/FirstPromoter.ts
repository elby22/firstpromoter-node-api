import * as api from './api';
export default class Client {
    public promoter: api.PromoterApi;
    public lead: api.LeadApi;
    constructor(apiKey: string){
        if(!apiKey) throw new Error('Must provide a valid API key');

        this.promoter = new api.PromoterApi(apiKey);
        this.lead = new api.LeadApi(apiKey);
    }
}