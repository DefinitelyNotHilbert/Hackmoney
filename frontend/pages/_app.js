import '../styles/globals.css'
import {WagmiProvider} from 'wagmi'
import { Wallet } from './components/wallet'

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider client={Wallet()}>
      <Component {...pageProps} />
    </WagmiProvider>
  )
}

export default MyApp
