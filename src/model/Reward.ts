import { Promoter, Promotion } from './Promoter';

export interface Reward {
    id:        number;
    status:    string;
    amount:    number;
    unit:      string;
    promoter:  Promoter;
    promotion: Promotion;
}

export interface RewardCreateParameters{
    lead_id?: number; // lead's id who generated the reward
    email?: string; // lead's email who generated the reward
    uid?: string; // lead's uid who generated the reward
    promotion_id?: number; // promotion id of the promoter who owns the reward
    ref_id?: string; // promotion referral id of the who owns the reward
    reward_type: string; //	can be: cash(monetary commission), points, credits, free_months, discount_per(percentage discount), discount_mon(monetary fixed discount)
    amount: number; //	amount of the reward. For reward_type cash(monetary commission) the amount is in cents
    status?: string; // can be approved(default if this param is ommited), pending or denied
    skip_email_notification?: boolean; // Set this to "true" to skip email notifications. Default is "false".
}