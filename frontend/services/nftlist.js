import { debank_api_key } from './config';

export async function getNftList(address) {
    const response = await fetch(`https://pro-openapi.debank.com/v1/user/all_nft_list?id=${address}&is_all=false`, {
        method: 'GET',
        headers: {
            "AccessKey": debank_api_key
        }
    });
    const result = (await response.json());

    // console.log('\n nftlist response.json:', result)

    return result
}