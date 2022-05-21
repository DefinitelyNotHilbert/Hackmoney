import { debank_api_key } from './config'

export async function getTotalNetworth(address) {
    const response = await fetch(`https://pro-openapi.debank.com/v1/user/total_balance?id=${address}` {
        method: 'GET',
        headers: {
            "AccessKey": debank_api_key
        }
    });
    const result = (await response.json());

    console.log('\n networth response.json:', result)

    if (result.error_code != 0) {
        console.log('data of networth.js not ok', result.error_msg)
        return []
    }

    return result.total_usd_value
}

// old request
// https://api.debank.com/v1/user/total_balance?id=0x5B5ECfc8122bA166b21d6Ea26268Ef97e09B2E9F
// https://api.debank.com/v1/user/total_balance?addr=0x5B5ECfc8122bA166b21d6Ea26268Ef97e09B2E9F

