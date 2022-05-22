import { etherscan_api_key } from './config';

export async function getTransactions(address) {

    const response = await fetch(`https://api.etherscan.io/api
        ?module=account
        &action=txlist
        &address=${address}
        &startblock=0
        &endblock=99999999
        &page=1
        &offset=10
        &sort=asc
        &apikey=${etherscan_api_key}`.replace(/\s/g, ''));

    const result = (await response.json())
    return result
}


// function to extract date from unix timestamp
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    // var hour = a.getHours();
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year //+ ' ' + hour + ':' + min + ':' + sec;
    return time;
}

export async function getWalletAge(address) {
    const result = await getTransactions(address)
    
    if (result.message != 'OK') {
        console.log('data of walletage.js not ok', result.result)
        return []
    }   

    // get first value from the transaction block which is limited to 1000
    const transactions = result.result;
    const unix_timestamp = transactions[0].timeStamp;
    const time = timeConverter(unix_timestamp)
    return time
}

