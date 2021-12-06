import Stripe from 'stripe'
import {version} from '../package.json'


export const stripe = new Stripe('sk_test_51JfA7GHvPtWhJQ2zwQGxQMkEV06PJRf6LHt3UF5fr0bYddfTnCt5MpbxNQf2WCQEaZlS7SbBXHg8wmKifHIGRveN007UrrS1Ht', 
{
    apiVersion: '2020-08-27',
    appInfo: {
        name: 'Ignews',
        version
    }
}
)

