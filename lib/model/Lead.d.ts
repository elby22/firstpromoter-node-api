import { Promotion, Promoter } from './Promoter';
export interface Lead {
    id: number;
    state: string;
    email: string;
    uid: string;
    customer_since: string;
    plan_name: string;
    suspicion: string;
    promotion: Promotion;
    promoter: Promoter;
}
export interface LeadListParameters {
    promotion_id?: number;
    ref_id?: string;
    promoter_id?: number;
    campaign_id?: number;
}
export interface LeadIdentificationParameters {
    id?: number;
    uid?: string;
    email?: number;
}
export interface LeadCreateParameters extends LeadIdentificationParameters {
    promotion_id?: number;
    ref_id?: string;
    state?: string;
    customer_since?: any;
    plan_name?: string;
}
export interface LeadUpdateParameters extends LeadIdentificationParameters {
    new_uid?: string;
    new_email?: string;
    state?: string;
    customer_since?: any;
    plan_name?: string;
}
