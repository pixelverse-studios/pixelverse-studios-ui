import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'

import { JWT_SECRET } from '../../utilities/constants'
import { LOGGED_IN_PAGES } from '../../utilities/constants'
import { GET_LOGGED_IN_USER } from '../../lib/gql/queries/user'
import { decodeCachedToken } from '../../utilities/token'
import { setProfile } from '../../lib/redux/slices/user'
import { showBanner } from '../../lib/redux/slices/banner'
import Nav from '../nav'
import Banner from '../banner'
import Footer from '../footer'
import ScrollToTop from '../scrollToTop'

const PageWrapper = ({ children }: { children: any }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user)

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
        }
    })

    useEffect(() => {
        if (!user._id) {
            const token = decodeCachedToken()
            if (token?.email) {
                getLoggedInUser()
            } else {
                const basePathname = router.pathname.split('/')[1]
                const redirectToHome = LOGGED_IN_PAGES.includes(basePathname)
                if (redirectToHome) {
                    router.push('/')
                }
            }
        }
    }, [router])

    return (
        <main>
            <Nav />
            <Banner />
            {children}
            <ScrollToTop />
            <Footer />
        </main>
    )
}

export default PageWrapper
