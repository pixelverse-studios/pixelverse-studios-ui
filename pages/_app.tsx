import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'

import RouteTransition from '../components/transition'
import PageWrapper from '../components/views/PageWrapper'
import { client } from '../lib/context/apolloProvider'
import 'animate.css'
import 'antd/dist/antd.css'
import '../styles/globals.scss'
import { store } from '../lib/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <PageWrapper>
                    <RouteTransition>
                        <Component {...pageProps} />
                    </RouteTransition>
                </PageWrapper>
            </ReduxProvider>
        </ApolloProvider>
    )
}

export default MyApp
