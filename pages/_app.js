import { PT_Sans } from '@next/font/google'

import '../styles/global.css'

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans'
})

export default function App({ Component, pageProps }) {
  return (
    <div className={ptSans.className}>
      <Component {...pageProps} />
    </div>
  )
}
