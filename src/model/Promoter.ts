export interface Promoter {
    id:                   number;
    cust_id:              string;
    email:                string;
    temp_password:        string;
    default_promotion_id: number;
    default_ref_id:       string;
    earnings_balance:     any;
    current_balance:      any;
    paid_balance:         any;
    note:                 string;
    auth_token:           string;
    profile:              Profile;
    promotions:           Promotion[];
}

export interface Profile {
    id:              number;
    first_name:      string;
    last_name:       string;
    website:         string;
    paypal_email:    string;
    avatar_url:      string;
    social_accounts: any;
}

export interface Promotion {
    id:                       number;
    status:                   string;
    ref_id:                   string;
    promo_code:               string;
    target_reached_at:        any;
    promoter_id:              number;
    campaign_id:              number;
    referral_link:            string;
    current_referral_reward:  any;
    current_promotion_reward: any;
    current_target_reward:    any;
    visitors_count:           number;
    leads_count:              number;
    customers_count:          number;
    refunds_count:            number;
    cancellations_count:      number;
    sales_count:              number;
    sales_total:              number;
    refunds_total:            number;
}

export interface PromoterCreateParameters{
    email: string; //promoter's email
    first_name?: string; //promoter's first name
    last_name?: string; //promoter's last name
    cust_id?: string; //customer/user ID inside your application. It will be used in webhooks to identify the promoter in your system.
    ref_id?: string; //referral ID. If this is blank an ID is assigned based on the first*name. Can be only lower-case letters, numbers, "-" and "_"
    promo_code?: string; //unique promo code from your billing provider to assign to this affiliate for coupon tracking
    campaign_id?: string; //the ID of the campaign to assign the promoter to. On the campaigns sections you can see the id as "camp_id" query parameter on "Promoter Sign Up page URL". If there is no "camp_id" it means the campaign is the default campaign and this parameter is not required.
    temp_password?: string; //a temporary password promoters can use to log in to their dashboard if you don't use authentication tokens(auth_token) to sign promoters in automatically.
    landing_url?: string; //you can set up a custom landing page url for this promoter. The referral id will be appended to it, unless the "url_tracking" parameter(below) is used.
    url_tracking?: string; //Set "true" to enable direct url tracking feature. FirstPromoter will do the tracking based on "landing_url"(above) without requiring the referral id to be appended to the url. The "landing_url" needs to be unique for each promoter. Default is "false".
    website?: string; //promoter's website
    paypal_email?: string; //promoter's Paypal Email address
    avatar_url?: string; //URL of the profile picture promoters can see on their dashboard
    note?: string; //A note/description of promoter
    skip_email_notification?: boolean; //Set this to "true" to skip email notifications. Default is "false".
}

export interface PromoterModifyParameters{
    id?: number; //promoter's ID inside FirstPromoter
    cust_id?: string; //assigned customer/user ID
    ref_id?: string; //referral ID
    auth_token?: string; //authetication token generated when the promoter was created
    new_cust_id?: string; //the new customer/user ID
    new_ref_id?: string; //the new referral ID. Can be only lower-case letters, numbers, "-" and "_"
    email?: string; //promoter's email
    first_name?: string; //promoter's first name
    last_name?: string; //promoter's last name
    promo_code?: string; //unique promo code from your billing provider to assign to this affiliate for coupon tracking
    temp_password?: string; //a temporary password promoters can use to log in to their dashboard if you don't use authentication tokens(auth_token) to sign promoters in automatically.
    landing_url?: string; //you can set up a custom landing page url for this promoter. The referral id will be appended to it, unless the "url_tracking" parameter(below) is used.
    url_tracking?: string; //enable direct url tracking feature. FirstPromoter will do the tracking based on "landing_url"(above) without requiring the referral id to be appended to the url. The "landing_url" needs to be unique for each promoter.
    website?: string; //promoter's website
    paypal_email?: string; //promoter's Paypal Email address
    avatar_url?: string; //URL of the profile picture promoters can see on their dashboard
    note?: string; //A note/description of promoter
}

export interface PromoterGetParameters{
    id?: number; //promoter's ID inside FirstPromoter
    cust_id?: string; //assigned customer/user ID
    ref_id?: string; //referral ID
    auth_token?: string; //authetication token generated when the promoter was created
}

export interface PromoterRefreshTokenParameters{
    id?: number; //promoter's ID inside FirstPromoter
    cust_id?: string; //assigned customer/user ID
    auth_token?: string; //authetication token generated when the promoter was created
}

export interface PromoterDeleteParameters{
    id?: number; //promoter's ID inside FirstPromoter
    cust_id?: string; //assigned customer/user ID
    ref_id?: string; //referral ID
    auth_token?: string; //authetication token generated when the promoter was created
}

