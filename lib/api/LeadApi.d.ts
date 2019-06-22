import * as model from '../model';
export default class LeadApi {
    private apiKey;
    constructor(apiKey: string);
    /**
     * List leads and customers
     * With this endpoint you can list all the leads and customers assigned to a promotion, promoter, campaign or entire account using the API.
     * @param parameters List all promoters accepted to a specific campaign.
     */
    list(parameters?: model.LeadListParameters): Promise<model.Lead[]>;
    /**
     * Create new leads
     * With this endpoint you can assign a new lead/customer to a promoter using the API. You can find the promoter through its promotion either by ref_id or promotion_id.
     * @param parameters A map of parameters for creating a new promoter. Email is required
     */
    create(parameters: model.LeadCreateParameters): Promise<model.Lead>;
    /**
     * Modify existing lead/customer
     * Use this to update a lead/customer details from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    update(parameters: model.LeadUpdateParameters): Promise<model.Lead>;
    /**
     * Show lead/customer details
     * Show the lead/customer details from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    get(parameters: model.LeadIdentificationParameters): Promise<model.Promoter>;
    /**
     * Delete a lead/customer
     * Remove a lead/customer from FirstPromoter using the API. You can find the lead either by id, uid or email.
     * @param parameters You MUST supply at least id, uid or email.
     */
    delete(parameters: model.LeadIdentificationParameters): Promise<any>;
}
