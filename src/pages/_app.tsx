import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <Header />
      <Component {...pageProps} />
      {!router.pathname.startsWith('/works') && <Footer />}
    </div>
  )
}
