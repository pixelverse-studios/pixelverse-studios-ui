import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'
import { client } from '../lib/context/apolloProvider'
import 'antd/dist/antd.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <main>
                <Nav />
                <Component {...pageProps} />
                <ScrollToTop />
                <Footer />
            </main>
        </ApolloProvider>
    )
}

export default MyApp
