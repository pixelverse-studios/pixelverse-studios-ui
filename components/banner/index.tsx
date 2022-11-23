import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiBadgeCheck, BiX, BiErrorCircle } from 'react-icons/bi'

import { hideBanner } from '../../lib/redux/slices/banner'
import styles from './Banner.module.scss'

const ANIMATE_OUT_TIME = 1000
const TIMEOUT = 6000
const ANIMATE_IN_CLASS = 'animate__bounceInUp'
const ANIMATE_OUT_CLASS = 'animate__bounceOutDown'

const Banner = () => {
    const dispatch = useDispatch()
    const banner = useSelector((state: any) => state.banner)

    const [animationClass, setAnimationClass] = useState(ANIMATE_IN_CLASS)

    useEffect(() => {
        if (banner.show) {
            setTimeout(() => {
                setAnimationClass(ANIMATE_OUT_CLASS)
            }, TIMEOUT - ANIMATE_OUT_TIME)
            setTimeout(() => {
                dispatch(hideBanner())
                setAnimationClass(ANIMATE_IN_CLASS)
            }, TIMEOUT)
        }
    }, [banner])

    const onCloseClick = () => dispatch(hideBanner())

    const renderIcon = () => {
        switch (banner.type) {
            case 'Errors':
                return <BiErrorCircle className={styles.statusIcon} />
            case 'UserSuccess':
                return <BiBadgeCheck className={styles.statusIcon} />
            default:
                return null
        }
    }

    if (banner.show) {
        return (
            <div
                className={`${styles.Banner} ${
                    styles[banner.type]
                } animate__animated ${animationClass}`}>
                <div className={styles.bannerContent}>
                    {renderIcon()}
                    {banner.message}
                    <BiX className={styles.closeIcon} onClick={onCloseClick} />
                </div>
            </div>
        )
    }

    return null
}

export default Banner
