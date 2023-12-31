import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  
  return (
  <>   
    <Component {...pageProps} />   
  </>
  )
}

export default MyApp


