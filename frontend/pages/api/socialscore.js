import { getSocialScore } from "../../services/socialscore"

export default async function handler(req, res) {
    const { address } = req.query
    if (!address)
        return res.status(400).json({ error: 'address is required' })

    const score = await getSocialScore(address)
    res.status(200).json({
        data: score
    })
}
