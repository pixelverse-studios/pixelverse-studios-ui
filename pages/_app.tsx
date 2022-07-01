import type { AppProps } from 'next/app'

import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </main>
    )
}

export default MyApp
