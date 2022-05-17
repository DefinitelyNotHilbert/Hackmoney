import { listBreweries } from "../../services/beer"

export default async function handler(req, res) {
    const { city } = req.query
    if (!city)
        return res.status(400).json({ error: 'city is required' })

    const breweries = await listBreweries(city)
    res.status(200).json({
        data: breweries
    })
}


