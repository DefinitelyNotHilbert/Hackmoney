import { getTotalNetworth } from "../../services/networth"

export default async function handler(req, res) {
    const { address } = req.query
    if (!address)
        return res.status(400).json({ error: 'address is required' })

    const networth = await getTotalNetworth(address)
    res.status(200).json({
        data: networth
    })
}
