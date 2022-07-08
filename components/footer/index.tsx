import { format } from 'date-fns'
import { FcLike } from 'react-icons/fc'

import styles from './Footer.module.scss'

const Footer = () => {
    const today = format(new Date(), 'yyyy')

    return (
        <footer className={styles.Footer}>
            <span className={styles.footerText}>Created by EZPZ Coders</span>
            <span className={styles.copyright}>&copy;{today}</span>
        </footer>
    )
}

export default Footer
