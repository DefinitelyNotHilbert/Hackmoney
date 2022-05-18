import { Provider, chain, createClient, defaultChains } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'


export function Wallet() {
    // WAGMI.SH 
    // API key for Ethereum node
    const infuraID = process.env.INFURA_API_KEY
    const chains = defaultChains
    const defaultChain = chain.mainnet

    // Set up connectors
    const client = createClient({
        autoConnect: true,
        connectors({ chainId }) {
            const chain = chains.find((x) => x.id === chainId) ?? defaultChain
            const rpcUrl = chain.rpcUrls.infura
                ? `${chain.rpcUrls.infura}/${infuraID}`
                : chain.rpcUrls.default
            return [
                new MetaMaskConnector({ chains }),
                new CoinbaseWalletConnector({
                    chains,
                    options: {
                        appName: 'wagmi',
                        chainId: chain.id,
                        jsonRpcUrl: rpcUrl,
                    },
                }),
                new WalletConnectConnector({
                    chains,
                    options: {
                        qrcode: true,
                        rpc: { [chain.id]: rpcUrl },
                    },
                })
            ]
        },
    })

    return client
}