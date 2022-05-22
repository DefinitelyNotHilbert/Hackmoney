import { getMultiSigTransactions } from "./multisig";
import { getPartRate } from "./participation";
import { getWalletAge } from "./walletage";
import { getPublicGoods } from "./publicgoods";

export async function getSocialScore(address) {
    const time_or_unix = false
    const WalletAge = await getWalletAge(address, time_or_unix)
    const PartRate = await getPartRate(address)
    const MultiSig = await getMultiSigTransactions(address)
    const PubGoods = await getPublicGoods(address)

    const age_base_10 = '1483225200' // 2017-01-01
    const part_base_10 = 10 // 100% participation
    const multi_sig_10 = 10 // min. 10 transactions
    const pubgoods_10 = 1 // wallet is found in past activity

    var age_score = null
    var part_score = null
    var multisig_score = null
    var pubgoods_score = null

    try { var age_score = (Date.now() - WalletAge) / (Date.now() - age_base_10) * 10} catch (e) {console.log(e)};
    try { var part_score = PartRate * 10 } catch (e) { console.log(e)};
    try { var multisig_score = Math.min(MultiSig.count, multi_sig_10) } catch (e) {console.log(e)};
    try { var pubgoods_score = Math.min(PubGoods, pubgoods_10) * 10 } catch (e) {console.log(e)};
    
    const social_score = (age_score + part_score + multisig_score + pubgoods_score) / 4
    
    return {
        'social_score': social_score, 
        'age_score': age_score, 
        'part_score': part_score,
        'multisig_score': multisig_score,
        'pubgoods_score': pubgoods_score
    }
}