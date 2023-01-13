import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { JWT_SECRET } from '../../utilities/constants'
import { LOGGED_IN_PAGES } from '../../utilities/constants'
import { GET_LOGGED_IN_USER } from '../../lib/gql/queries/user'
import { decodeCachedToken } from '../../utilities/token'
import { setProfile } from '../../lib/redux/slices/user'
import { showBanner } from '../../lib/redux/slices/banner'
import { setTheme } from '../../utilities/theme'
import Nav, { DashboardNav } from '../nav'
import Banner from '../banner'
import Footer from '../footer'
import ScrollToTop from '../scrollToTop'
import { DARK, STORED_THEME_KEY } from '../../utilities/constants'
import { swapTheme } from '../../lib/redux/slices/theme'

const PageWrapper = ({
    children,
    isOnDashboard
}: {
    children: any
    isOnDashboard: boolean
}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { profile } = useSelector((state: any) => state.user)

    const rerouteInvalidUser = () => {
        const basePathname = router.pathname.split('/')[1]
        const redirectToHome = LOGGED_IN_PAGES.includes(basePathname)
        if (redirectToHome) {
            router.push('/')
        }
    }

    const [getLoggedInUser] = useLazyQuery(GET_LOGGED_IN_USER, {
        onCompleted({ getLoggedInUser: data }) {
            localStorage.setItem(JWT_SECRET, data.token)

            const profile = { ...data }
            delete profile.__typename
            delete profile.successType
            delete profile.token
            dispatch(setProfile(profile))
        },
        onError(err: any) {
            dispatch(
                showBanner({
                    type: 'Errors',
                    message: 'Invalid token. Please log in again.'
                })
            )
            rerouteInvalidUser()
        }
    })

    useEffect(() => {
        if (!profile._id) {
            const token = decodeCachedToken()

            if (token?.email) {
                getLoggedInUser()
            } else {
                rerouteInvalidUser()
            }
        }
    }, [router])

    const { mode } = useSelector((state: any) => state.theme)

    useEffect(() => {
        const storedTheme = localStorage.getItem(STORED_THEME_KEY) ?? DARK
        document
            .querySelector('html')
            ?.setAttribute('data-theme', storedTheme ?? DARK)
        if (storedTheme !== mode) {
            dispatch(swapTheme(storedTheme))
        }
    }, [])

    const themeData = setTheme(mode)

    const theme = createTheme({
        palette: {
            mode,
            ...themeData
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <main>
                {isOnDashboard ? <DashboardNav /> : <Nav />}
                <Banner />
                {children}
                <ScrollToTop />
                <Footer />
            </main>
        </ThemeProvider>
    )
}

export default PageWrapper
