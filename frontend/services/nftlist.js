export async function getNftList(address) {
    const response = await fetch(`https://openapi.debank.com/v1/user/nft_list?id=${address}&?chain_id=eth&?is_all=false`);
    const result = (await response.json());
    // console.log(result)
    return result
}