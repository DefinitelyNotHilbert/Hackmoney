import { getWalletAge } from "../../services/walletage"

export default async function handler(req, res) {
    const { address } = req.query
    if (!address)
        return res.status(400).json({ error: 'address is required' })

    const walletage = await getWalletAge(address)
    res.status(200).json({
        data: walletage
    })
}
