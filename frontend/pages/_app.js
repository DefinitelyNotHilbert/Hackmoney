import '../styles/globals.css'
import {WagmiProvider} from 'wagmi'

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider>
      <Component {...pageProps} />
    </WagmiProvider>
  )
}

export default MyApp
