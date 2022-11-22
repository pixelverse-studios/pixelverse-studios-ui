import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { hideBanner } from '../../lib/redux/slices/banner'
import styles from './Banner.module.scss'

const TIMEOUT = 5000

const Banner = () => {
    const dispatch = useDispatch()
    const banner = useSelector((state: any) => state.banner)

    useEffect(() => {
        if (banner.show) {
            setTimeout(() => {
                dispatch(hideBanner())
            }, TIMEOUT)
        }
    }, [])

    // add icons to CSS
    // add some sort of not awful transition IN AND OUT

    if (banner.show) {
        return <div className={styles[banner.type]}>{banner.message}</div>
    }

    return null
}

export default Banner
