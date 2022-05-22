import { getWalletAge } from "../../services/walletage"

export default async function handler(req, res) {
    const { address } = req.query
    const time_or_unix = true
    if (!address)
        return res.status(400).json({ error: 'address is required' })
    
    const walletage = await getWalletAge(address, time_or_unix)
    res.status(200).json({
        data: walletage
    })
}
