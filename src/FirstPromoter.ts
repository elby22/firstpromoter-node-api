import * as api from './api';
export default class Client {
    public promoter: api.PromoterApi;
    public lead: api.LeadApi;
    public reward: api.RewardApi;
    constructor(apiKey: string){
        if(!apiKey) throw new Error('Must provide a valid API key');

        this.promoter = new api.PromoterApi(apiKey);
        this.lead = new api.LeadApi(apiKey);
        this.reward = new api.RewardApi(apiKey);
    }
}