import type { AppProps } from 'next/app'

import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'
import 'antd/dist/antd.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Nav />
            <Component {...pageProps} />
            <ScrollToTop />
            <Footer />
        </main>
    )
}

export default MyApp
