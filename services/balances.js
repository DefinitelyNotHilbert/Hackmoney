import { etherscan_api_key, infura_api_key } from './config'
// import { read, write } from './storage' // this is for a DB

export async function getBalancesFromContractAddress(address) {
    // const tableName = 'nftTransfers'
    // const cache = await read(tableName, address)
    // if (cache) return cache

    //&address=0x6975be450864c02b4613023c2152ee0743572325
    //&endblock=27025780
    const response = await fetch(`https://api.etherscan.io/api
        ?module=account
        &action=balance
        &address=${address}
        &tag=latest
        &apikey=${etherscan_api_key}`.replace(/\s/g, ''));
    
    const result = (await response.json())

    if (result.message != 'OK') {
        console.log('data of balance.js not ok', result.error)
        return []
    }

    const balances = String(parseFloat(result.result) / 1000000000000000000)

    // await write(tableName, address, transfers)

    return balances
}

