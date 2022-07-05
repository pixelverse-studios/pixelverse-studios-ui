import { useEffect, useState } from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { Tooltip } from 'antd'

import styles from './ScrollToTop.module.scss'

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 75) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!showButton) {
        return null
    }

    return (
        <div className={styles.ScrollToTop}>
            <Tooltip placement="left" title="Take me up!">
                <FaArrowAltCircleUp onClick={goToTop} />
            </Tooltip>
        </div>
    )
}

export default ScrollToTop
