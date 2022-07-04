import type { AppProps } from 'next/app'

import Nav from '../components/nav'
import Footer from '../components/footer'
import 'antd/dist/antd.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Nav />
            <div className="PageContent">
                <Component {...pageProps} />
            </div>
            <Footer />
        </main>
    )
}

export default MyApp
