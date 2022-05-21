import { debank_api_key } from './config'

export async function getNftList(address) {
    const response = await fetch(`https://pro-openapi.debank.com/v1/user/all_nft_list?id=${address}&is_all=false` {
        method: 'GET',
        headers: {
            "AccessKey": debank_api_key
        }
    });
    const result = (await response.json());

    console.log('\n networth response.json:', result)

    if (result.error_code != 0) {
        console.log('data of nftlist.js not ok', result.error_msg)
        return []
    }

    return result
}