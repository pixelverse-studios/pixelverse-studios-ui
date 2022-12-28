import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'
import { useRouter } from 'next/router'

import RouteTransition from '../components/transition'
import PageWrapper from '../components/views/PageWrapper'
import { client } from '../lib/context/apolloProvider'
import 'animate.css'
// import 'antd/dist/antd.css'
import 'antd/dist/reset.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'

import '../styles/globals.scss'
import { store } from '../lib/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    const isOnDashboard = router.asPath.includes('/dashboard')

    return (
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <PageWrapper>
                    {isOnDashboard ? (
                        <div>
                            <Component {...pageProps} />
                        </div>
                    ) : (
                        <RouteTransition>
                            <Component {...pageProps} />
                        </RouteTransition>
                    )}
                </PageWrapper>
            </ReduxProvider>
        </ApolloProvider>
    )
}

export default MyApp
