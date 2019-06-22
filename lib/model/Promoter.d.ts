export interface Promoter {
    id: number;
    cust_id: string;
    email: string;
    temp_password: string;
    default_promotion_id: number;
    default_ref_id: string;
    earnings_balance: number;
    current_balance: number;
    paid_balance: number;
    note: string;
    auth_token: string;
    profile: Profile;
    promotions: Promotion[];
}
export interface Profile {
    id: number;
    first_name: string;
    last_name: string;
    website: string;
    paypal_email: string;
    avatar_url: string;
    social_accounts: any;
}
export interface Promotion {
    id: number;
    status: string;
    ref_id: string;
    promo_code: string;
    target_reached_at: any;
    promoter_id: number;
    campaign_id: number;
    referral_link: string;
    current_referral_reward: any;
    current_promotion_reward: any;
    current_target_reward: any;
    visitors_count: number;
    leads_count: number;
    customers_count: number;
    refunds_count: number;
    cancellations_count: number;
    sales_count: number;
    sales_total: number;
    refunds_total: number;
}
export interface PromoterCreateParameters {
    email: string;
    first_name?: string;
    last_name?: string;
    cust_id?: string;
    ref_id?: string;
    promo_code?: string;
    campaign_id?: string;
    temp_password?: string;
    landing_url?: string;
    url_tracking?: string;
    website?: string;
    paypal_email?: string;
    avatar_url?: string;
    note?: string;
    skip_email_notification?: boolean;
}
export interface PromoterModifyParameters {
    id?: number;
    cust_id?: string;
    ref_id?: string;
    auth_token?: string;
    new_cust_id?: string;
    new_ref_id?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    promo_code?: string;
    temp_password?: string;
    landing_url?: string;
    url_tracking?: string;
    website?: string;
    paypal_email?: string;
    avatar_url?: string;
    note?: string;
}
export interface PromoterGetParameters {
    id?: number;
    cust_id?: string;
    ref_id?: string;
    auth_token?: string;
}
export interface PromoterRefreshTokenParameters {
    id?: number;
    cust_id?: string;
    auth_token?: string;
}
export interface PromoterDeleteParameters {
    id?: number;
    cust_id?: string;
    ref_id?: string;
    auth_token?: string;
}
