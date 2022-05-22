// from  https://gitcoin.co/grants/v1/api/export_addresses/all.json 
// you need to connect your github account
// hence we downloaded the data on 22.05.2022
const jsonData = require('./gitcoin_addresses.json');

export async function getPublicGoods(address) {
    var found = 0
    try {
        const address_list = jsonData.addresses
        for (let i = 0; i < address_list.length; i++) {
            if (address_list[i][0] === address) {
                var found = 1
            }
        }
        return found
    }
    catch (e) {
        console.log(e)
        return found
    }
}
