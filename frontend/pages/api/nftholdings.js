import { getNFTHoldingsFromAddress } from "../../services/nftholdings"

export default async function handler(req, res) {
    const { address } = req.query
    if (!address)
        return res.status(400).json({ error: 'address is required' })

    const nftholdings = await getNFTHoldingsFromAddress(address)
    res.status(200).json({
        data: nftholdings
    })
}
