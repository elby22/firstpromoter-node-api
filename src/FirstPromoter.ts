import * as api from './api';
export default class Client {
    public promoter: api.PromoterApi;

    constructor(apiKey: string){
        if(!apiKey) throw new Error('Must provide a valid API key');
        this.promoter = new api.PromoterApi(apiKey);
    }
}