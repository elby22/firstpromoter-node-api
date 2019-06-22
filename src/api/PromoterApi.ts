import * as request from 'request-promise-native';
import { Options, Response } from 'request';
import * as model from '../model';

export default class PromoterApi {

    constructor(private apiKey: string){}

    /**
     * List all promoters in the system
     * @param [campaign_id] List all promoters accepted to a specific campaign.
     */
    public async list(campaign_id?: number): Promise<model.Promoter[]>{
        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/promoters/list',
            headers: { 'x-api-key': this.apiKey },
            qs: {campaign_id}
        };
    
        const response = await request.get(options);
        const data: model.Promoter[] = JSON.parse(response);
        return data;
    }

    /**
     * Create new promoters
     * Probably the most important value from the response is "auth_token", which is a unique key auto-generated on creation and can be used to automatically log in your promoters to their dashboard.
     * @param parameters A map of parameters for creating a new promoter. Email is required
     */
    public async create(parameters: model.PromoterCreateParameters): Promise<model.Promoter>{
        if(!parameters.email) throw new Error('Email must be supplied as a parameter to create a new promoter.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/promoters/create',
            headers: { 'x-api-key': this.apiKey },
            json: parameters
        };
    
        const response = await request.post(options);
        const data: model.Promoter = response;
        return data;
    }

    /**
     * Modify existing promoter
     * You can identify promoters by: id, cust_id, auth_token or ref_id(referral id). You need to pass at least one of these parameters
     * @param parameters You MUST supply at least id, cust_id, auth_token or ref_id.
     */
    public async update(parameters: model.PromoterModifyParameters): Promise<model.Promoter>{
        if( ! (parameters.id || parameters.cust_id || parameters.auth_token || parameters.ref_id)) 
            throw new Error('id, cust_id, auth_token or ref_id must be supplied to identify promoter.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/promoters/update',
            headers: { 'x-api-key': this.apiKey },
            json: parameters
        };
    
        const response = await request.put(options);
        const data: model.Promoter = response;
        return data;
    }

    /**
     * Modify existing promoter
     * You can identify promoters by: id, cust_id, auth_token or ref_id(referral id). You need to pass at least one of these parameters
     * @param parameters You MUST supply at least id, cust_id, auth_token or ref_id.
     */
    public async get(parameters: model.PromoterGetParameters): Promise<model.Promoter>{
        if( ! (parameters.id || parameters.cust_id || parameters.auth_token || parameters.ref_id)) 
            throw new Error('id, cust_id, auth_token or ref_id must be supplied to identify promoter.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/promoters/show',
            headers: { 'x-api-key': this.apiKey },
            qs: parameters
        };

        const response = await request.get(options);
        const data: model.Promoter = JSON.parse(response);
        return data;
    }

    /**
     * Reset promoter's authentication token
     * Resetting authentication token(auth_token) which is used to automatically sign in your promoters(if you use this feature) is not required, but can be used to enhance the security of the promoter dashboard. You can set up a cron job to call the API endpoint and store the new "auth_token" from the response.
     * @param parameters You MUST supply at least id, cust_id, or auth_token.
     */
    public async refreshToken(parameters: model.PromoterRefreshTokenParameters): Promise<any>{
        if( ! (parameters.id || parameters.cust_id || parameters.auth_token)) 
            throw new Error('id, cust_id or auth_token must be supplied to identify promoter.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/promoters/refresh_token',
            headers: { 'x-api-key': this.apiKey },
            json: parameters
        };

        const response = await request.put(options);
        return response;
    }

        /**
     * Reset promoter's authentication token
     * Resetting authentication token(auth_token) which is used to automatically sign in your promoters(if you use this feature) is not required, but can be used to enhance the security of the promoter dashboard. You can set up a cron job to call the API endpoint and store the new "auth_token" from the response.
     * @param parameters You MUST supply at least id, cust_id, or auth_token.
     */
    public async delete(parameters: model.PromoterDeleteParameters): Promise<any>{
        if( ! (parameters.id || parameters.cust_id || parameters.auth_token)) 
            throw new Error('id, cust_id or auth_token must be supplied to identify promoter.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/promoters/delete',
            headers: { 'x-api-key': this.apiKey },
            json: parameters
        };

        const response = await request.delete(options);
        return response;
    }
}