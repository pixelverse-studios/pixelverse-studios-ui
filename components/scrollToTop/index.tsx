import { useEffect, useState } from 'react'
import { ArrowCircleUp } from '@mui/icons-material'
import { Tooltip } from '@mui/material'

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
        <Tooltip arrow placement="left" title="Take me up!">
            <div className={styles.ScrollToTop}>
                <ArrowCircleUp onClick={goToTop} />
            </div>
        </Tooltip>
    )
}

export default ScrollToTop
