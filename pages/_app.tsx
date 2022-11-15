import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'

import RouteTransition from '../components/transition'
import Nav from '../components/nav'
import Footer from '../components/footer'
import ScrollToTop from '../components/scrollToTop'
import { client } from '../lib/context/apolloProvider'
import 'animate.css'
import 'antd/dist/antd.css'
import '../styles/globals.scss'
import { store } from '../lib/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <main>
                    <Nav />
                    <RouteTransition>
                        <Component {...pageProps} />
                    </RouteTransition>
                    <ScrollToTop />
                    <Footer />
                </main>
            </ReduxProvider>
        </ApolloProvider>
    )
}

export default MyApp
