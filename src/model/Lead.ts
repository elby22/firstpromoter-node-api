import { Promotion, Promoter } from './Promoter';

export interface Lead {
    id:             number;
    state:          string;
    email:          string;
    uid:            string;
    customer_since: string;
    plan_name:      string;
    suspicion:      string;
    promotion:      Promotion;
    promoter:       Promoter;
}

export interface LeadListParameters {
    promotion_id?: number; // list all leads and customer assigned to a promotion
    ref_id?: string; // list all leads and customer assigned to a promotion - find promotion by ref_id
    promoter_id?: number; // list all leads and customers assigned to a promoter
    campaign_id?: number; // list all leads and customers available to a campaign
}

export interface LeadIdentificationParameters {
    id?: number;
    uid?: string; 
    email?: number; 
}

export interface LeadCreateParameters extends LeadIdentificationParameters{
    promotion_id?: number; // promotion id to assign the lead. ONLY necessary if ref_id is null
    ref_id?: string; // referral id of the promotion to assign the lead. ONLY necessary if promotion_id is null
    state?: string; // lead's state. Can be 'subscribed', 'signup', 'active' or 'cancelled'
    customer_since?: any; // time-date when lead converter to a customer
    plan_name?: string; // id of the plan the customer was assigned to. Needs to match with the plans set on FirstPromoter
}

export interface LeadUpdateParameters extends LeadIdentificationParameters{
    new_uid?: string; // the new uid
    new_email?: string// the new email
    state?: string; // lead's state. Can be subscribed,signup,active or cancelled
    customer_since?: any; // time-date when lead converter to a customer
    plan_name?: string; // id of the plan the customer was assigned to. Needs to match with the plans set on FirstPromoter    
}

