import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'
import { useRouter } from 'next/router'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import RouteTransition from '../components/transition'
import PageWrapper from '../components/views/PageWrapper'
import { client } from '../lib/context/apolloProvider'
import 'animate.css'

import '../styles/globals.scss'
import { store } from '../lib/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
            // primary: {
            //     main: '#3f51b5'
            // },
            // secondary: {
            //     main: '#f50057'
            // },
            // text: {
            //     primary: '#e8e8e8'
            // },
            // background: {
            //     default: '#000000',
            //     paper: '#292727'
            // }
        }
    })
    const isOnDashboard = router.asPath.includes('/dashboard')
    return (
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <ThemeProvider theme={darkTheme}>
                    <PageWrapper isOnDashboard={isOnDashboard}>
                        {isOnDashboard ? (
                            <div className="dashboard">
                                <Component {...pageProps} />
                            </div>
                        ) : (
                            <RouteTransition>
                                <Component {...pageProps} />
                            </RouteTransition>
                        )}
                    </PageWrapper>
                </ThemeProvider>
            </ReduxProvider>
        </ApolloProvider>
    )
}

export default MyApp
