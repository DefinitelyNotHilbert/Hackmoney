import { getEthBalances } from "../../services/balances"

export default async function handler(req, res) {
  const { address } = req.query
  if (!address)
    return res.status(400).json({ error: 'address is required' })

  const balances = await getEthBalances(address)
  res.status(200).json({
    data: balances
  })
}
