import { etherscan_api_key } from './config'

export async function getAllNFTTransfersOfHolder(address) {

    const data = await fetch(`https://api.etherscan.io/api
            ?module=account
            &action=tokennfttx
            &address=${address}
            &startblock=0
            &sort=asc
            &apikey=${etherscan_api_key}`.replace(/\s/g, ''));

    const response = (await data.json())
    if (response.message != 'OK') {
        console.log('data not ok', response)
        return []
    }
    const transfers = response.result


    return transfers
}

export async function getNFTHoldingsFromAddress(address, sort) {
    const data = await getAllNFTTransfersOfHolder(address)
    return data.reduce((result, transfer) => {
        result[transfer.contractAddress] = {
            count: (result[transfer.contractAddress]?.count ?? 0) + (transfer.from == address ? -1 : 1)
        }
        return result
    }, {})
}