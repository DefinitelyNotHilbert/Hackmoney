export async function getMultiSigTransactions(address) {
    const response = await fetch(`https://safe-transaction.gnosis.io/api/v1/safes/${address}/transfers/`);
    const result = (await response.json());
    return result
}
