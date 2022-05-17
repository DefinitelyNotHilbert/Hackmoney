export async function getHoldings(address) {
    const response = await fetch(`https://openapi.debank.com/v1/user/total_balance?id=${address}`);
    const result = (await response.json());

    console.log('\n response.json', result)

    // if (result.error_code != 0) {
    //     console.log('data of networth.js not ok', result.error)
    //     return []
    // }

    return result
}