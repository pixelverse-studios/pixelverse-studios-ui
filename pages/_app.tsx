import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import RouteTransition from '../components/transition'
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'
import { client } from '../lib/context/apolloProvider'
import 'animate.css'
import 'antd/dist/antd.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <main>
                <Nav />
                <RouteTransition>
                    <Component {...pageProps} />
                </RouteTransition>
                <ScrollToTop />
                <Footer />
            </main>
        </ApolloProvider>
    )
}

export default MyApp
