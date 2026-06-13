import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'prod_UhAuTPMSFdTRp9',
    'seeker_premium': 'prod_UhAvmc1uvvCjTw',
    'recruiter_growth': 'prod_UhAx3cs9X9sxlD',
    'recruiter_enterprise': 'prod_UhAyHDc3T2s6tj'
}