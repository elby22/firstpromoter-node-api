import * as request from 'request-promise-native';
import { Options, } from 'request';
import * as model from '../model';

export default class RewardApi {

    constructor(private apiKey: string){}

    /**
     * Create new promoters
     * Probably the most important value from the response is "auth_token", which is a unique key auto-generated on creation and can be used to automatically log in your promoters to their dashboard.
     * @param parameters A map of parameters for creating a new promoter. Email is required
     */
    public async create(parameters: model.RewardCreateParameters): Promise<model.Reward>{
        if(!parameters.amount) throw new Error('amount must be supplied as a parameter to create a new reward.');
        if(!parameters.reward_type) throw new Error('reward_type must be supplied as a parameter to create a new reward.');

        const options: Options = {
            url: 'https://firstpromoter.com/api/v1/rewards/create',
            headers: { 'x-api-key': this.apiKey },
            json: parameters
        };
    
        const response = await request.post(options);
        const data: model.Reward = response;
        return data;
    }
}