import { etherscan_api_key, infura_api_key } from './config'

export async function getBalancesFromContractAddress(address) {
    console.log(address)

    const response = await fetch(`https://api.etherscan.io/api
        ?module=account
        &action=balance
        &address=${address}
        &tag=latest
        &apikey=${etherscan_api_key}`.replace(/\s/g, ''));
    
    const result = (await response.json())

    if (result.message != 'OK') {
        console.log('data of balance.js not ok', result.result)
        return []
    }

    const balances = String(parseFloat(result.result) / 1000000000000000000)

    console.log(balances)
    return balances
}

