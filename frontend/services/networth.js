export async function getTotalNetworth(address) {
    const response = await fetch(`https://api.debank.com/v1/user/total_balance?addr=${address}` {
        method: 'GET', 
        headers: {
            "X-Auth-Token": 'a20b3b73e0106574cec913550b2e921b6f9eedd3'
        }
    });
    const result = (await response.json());

    console.log('\n networth response.json:', result)

    if (result.error_code != 0) {
        console.log('data of networth.js not ok', result.error_msg)
        return []
    }

    return result
}


// https://api.debank.com/v1/user/total_balance?id=0x5B5ECfc8122bA166b21d6Ea26268Ef97e09B2E9F
// https://api.debank.com/v1/user/total_balance?addr=0x5B5ECfc8122bA166b21d6Ea26268Ef97e09B2E9F

