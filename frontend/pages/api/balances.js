import { getBalancesFromContractAddress } from '../../services/balances'

export default async function handler(req, res) {
  const { address } = req.query
  if (!address)
    return res.status(400).json({ error: 'address is required' })

  const balances = await getBalancesFromContractAddress(address)
  res.status(200).json({
    data: balances
  })
}
