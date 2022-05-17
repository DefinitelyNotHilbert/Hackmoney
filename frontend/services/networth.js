export async function getTotalNetworth(address) {
    const response = await fetch(`https://api.debank.com/user/total_balance?addr=${address}`);
    const result = (await response.json());

    // console.log('\n response.json', result)

    if (result.error_code != 0) {
        console.log('data of networth.js not ok', result.error)
        return []
    }

    return result
}

