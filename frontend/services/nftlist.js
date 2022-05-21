// import { debank_api_key } from './config';

// export async function getNftList(address) {
//     const response = await fetch(`https://pro-openapi.debank.com/v1/user/all_nft_list?id=${address}&is_all=false`, {
//         method: 'GET',
//         headers: {
//             "AccessKey": debank_api_key
//         }
//     });
//     const result = (await response.json());
//     return result
// }

export async function getNftList(address) {
    const response = await fetch(`https://openapi.debank.com/v1/user/nft_list?id=${address}&?chain_id=eth&?is_all=false`);
    const result = (await response.json());
    // console.log(result)
    return result
}