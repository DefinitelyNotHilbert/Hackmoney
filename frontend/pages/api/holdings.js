import { getHoldings } from "../../services/holdings"

export default async function handler(req, res) {
    const { address } = req.query
    if (!address)
        return res.status(400).json({ error: 'address is required' })

    const holdings = await getHoldings(address)
    res.status(200).json({
        data: holdings
    })
}
