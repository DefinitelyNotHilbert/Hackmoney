import { etherscan_api_key } from './config';

export async function getEthBalances(address) {
    console.log('inputted address', address)

    const response = await fetch(`https://api.etherscan.io/api
        ?module=account
        &action=balance
        &address=${address}
        &tag=latest
        &apikey=${etherscan_api_key}`.replace(/\s/g, ''));
    
    const result = (await response.json())

    // console.log('balances json', result)

    if (result.message != 'OK') {
        console.log('data of balance.js not ok', result.result)
        return []
    }
    
    const balances = String(parseFloat(result.result) / 1000000000000000000)
    
    return balances
}


