import { debank_api_key } from './config';

export async function getHoldings(address) {
    const response = await fetch(`https://pro-openapi.debank.com/v1/user/total_balance?id=${address}`, {
        method: 'GET',
        headers: {
            "AccessKey": debank_api_key
        }
    });
    const result = (await response.json());

    // console.log('\n holdings response.json:', result)

    return result.chain_list
}

// old request
// https://api.debank.com/v1/user/total_balance?id=0x5B5ECfc8122bA166b21d6Ea26268Ef97e09B2E9F
// https://api.debank.com/v1/user/total_balance?addr=0x5B5ECfc8122bA166b21d6Ea26268Ef97e09B2E9F

