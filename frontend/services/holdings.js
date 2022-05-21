// import { debank_api_key } from './config';

// export async function getHoldings(address) {
//     const response = await fetch(`https://pro-openapi.debank.com/v1/user/total_balance?id=${address}`, {
//         method: 'GET',
//         headers: {
//             "AccessKey": debank_api_key
//         }
//     });
//     const result = (await response.json());

//     // console.log('\n holdings response.json:', result)

//     return result.chain_list
// }

export async function getHoldings(address) {
    const response = await fetch(`https://openapi.debank.com/v1/user/total_balance?id=${address}`);
    const result = (await response.json());
    
    // if (typeof result.chain_list === 'undefined') {
    //     console.log('data of holdings.js not ok', result)
    //     return []
    // }

    return result
}

