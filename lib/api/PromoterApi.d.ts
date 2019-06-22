import * as model from '../model';
export default class PromoterApi {
    private apiKey;
    constructor(apiKey: string);
    /**
     * List all promoters in the system
     * @param [campaign_id] List all promoters accepted to a specific campaign.
     */
    list(campaign_id?: number): Promise<model.Promoter[]>;
    /**
     * Create new promoters
     * Probably the most important value from the response is "auth_token", which is a unique key auto-generated on creation and can be used to automatically log in your promoters to their dashboard.
     * @param parameters A map of parameters for creating a new promoter. Email is required
     */
    create(parameters: model.PromoterCreateParameters): Promise<model.Promoter>;
    /**
     * Modify existing promoter
     * You can identify promoters by: id, cust_id, auth_token or ref_id(referral id). You need to pass at least one of these parameters
     * @param parameters You MUST supply at least id, cust_id, auth_token or ref_id.
     */
    update(parameters: model.PromoterModifyParameters): Promise<model.Promoter>;
    /**
     * Modify existing promoter
     * You can identify promoters by: id, cust_id, auth_token or ref_id(referral id). You need to pass at least one of these parameters
     * @param parameters You MUST supply at least id, cust_id, auth_token or ref_id.
     */
    get(parameters: model.PromoterGetParameters): Promise<model.Promoter>;
    /**
     * Reset promoter's authentication token
     * Resetting authentication token(auth_token) which is used to automatically sign in your promoters(if you use this feature) is not required, but can be used to enhance the security of the promoter dashboard. You can set up a cron job to call the API endpoint and store the new "auth_token" from the response.
     * @param parameters You MUST supply at least id, cust_id, or auth_token.
     */
    refreshToken(parameters: model.PromoterRefreshTokenParameters): Promise<any>;
    /**
 * Reset promoter's authentication token
 * Resetting authentication token(auth_token) which is used to automatically sign in your promoters(if you use this feature) is not required, but can be used to enhance the security of the promoter dashboard. You can set up a cron job to call the API endpoint and store the new "auth_token" from the response.
 * @param parameters You MUST supply at least id, cust_id, or auth_token.
 */
    delete(parameters: model.PromoterDeleteParameters): Promise<any>;
}
