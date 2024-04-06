import { Jost } from '@next/font/google'

import '../styles/global.css'

const jost = Jost({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={jost.className}>
      <Component {...pageProps} />
    </div>
  )
}
