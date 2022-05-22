import { getPartRate } from "./participation";
import { getWalletAge } from "./walletage";

export async function getSocialScore(address) {
    const WalletAge = getWalletAge(address)
    const PartRate = getPartRate(address)
    
}