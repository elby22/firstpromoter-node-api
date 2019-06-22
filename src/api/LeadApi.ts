import * as request from 'request-promise-native';
import { Options } from 'request-promise-native';
import * as model from '../model';

export default class LeadApi {

    constructor(private apiKey: string){}

    /**
     * List leads and customers
     * With this endpoint you can list all the leads and customers assigned to a promotion, promoter, campaign or entire account using the API.
     * @param parameters List all promoters accepted to a specific campaign.
     */
    public async list(parameters?: model.LeadListParameters): Promise<model.Lead[]>{
        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/leads/list',
            headers: { 'x-api-key': this.apiKey },
            qs: parameters
        };
    
        const response = await request.get(options);
        const data: model.Lead[] = JSON.parse(response);
        return data;
    }

    /**
     * Create new leads
     * With this endpoint you can assign a new lead/customer to a promoter using the API. You can find the promoter through its promotion either by ref_id or promotion_id.
     * @param parameters A map of parameters for creating a new promoter. Email is required
     */
    public async create(parameters: model.LeadCreateParameters): Promise<model.Lead>{
        if(!(parameters.email || parameters.uid)) 
            throw new Error('Email or uid must be supplied as a parameter to create a new lead.');

        if(!(parameters.promotion_id || parameters.ref_id))
            throw new Error('promotion_id or ref_id must be supplied as a parameter to create a new lead.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/leads/create',
            headers: { 'x-api-key': this.apiKey },
            json: parameters
        };
    
        const response = await request.post(options);
        const data: model.Lead = response;
        return data;
    }

    /**
     * Modify existing lead/customer
     * Use this to update a lead/customer details from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    public async update(parameters: model.LeadUpdateParameters): Promise<model.Lead>{
        if( ! (parameters.id || parameters.uid || parameters.email)) 
            throw new Error('id, uid, or email must be supplied to identify lead.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/leads/update',
            headers: { 'x-api-key': this.apiKey },
            json: parameters
        };
    
        const response = await request.put(options);
        const data: model.Lead = response;
        return data;
    }

    /**
     * Show lead/customer details
     * Show the lead/customer details from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    public async get(parameters: model.LeadIdentificationParameters): Promise<model.Promoter>{
        if( ! (parameters.id || parameters.uid || parameters.email)) 
            throw new Error('id, uid or email must be supplied to identify lead.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/lead/show',
            headers: { 'x-api-key': this.apiKey },
            qs: parameters
        };

        const response = await request.get(options);
        const data: model.Promoter = JSON.parse(response);
        return data;
    }

    /**
     * Delete a lead/customer
     * Remove a lead/customer from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    public async delete(parameters: model.LeadIdentificationParameters): Promise<any>{
        if( ! (parameters.id || parameters.uid || parameters.email)) 
            throw new Error('id, uid or email must be supplied to identify lead.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/lead/delete',
            headers: { 'x-api-key': this.apiKey },
            json: parameters
        };

        const response = await request.delete(options);
        return response;
    }
}