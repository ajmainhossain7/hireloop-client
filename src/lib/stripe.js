import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1ThmYh2KZ1N98f5MEQqHKOAt',
    'seeker_premium': 'price_1ThmZV2KZ1N98f5MJhCcM7IN',
    'recruiter_growth': 'price_1ThmbO2KZ1N98f5MUTiUh1x6',
    'recruiter_enterprise': 'price_1ThmcH2KZ1N98f5MBl7MBQA5'
}