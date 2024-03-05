import { format } from 'date-fns'

import styles from './Footer.module.scss'

const Footer = () => {
    const today = format(new Date(), 'yyyy')

    return (
        <footer className={styles.Footer}>
            <span className={styles.footerText}>Created in the PixelVerse</span>
            <br />
            <span className={styles.copyright}>&copy;{today}</span>
        </footer>
    )
}

export default Footer
