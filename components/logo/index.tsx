import Link from 'next/link'

import styles from './Logo.module.scss'

const Logo = ({ useLink }: { useLink: boolean }) => {
    if (useLink) {
        return (
            <Link href="/">
                <div className={styles.PvsLogo}>
                    <p>
                        <span>P</span>ixel<span>V</span>erse Studios
                    </p>
                </div>
            </Link>
        )
    }
    return (
        <div className={styles.PvsLogo}>
            <p>
                <span>P</span>ixel<span>V</span>erse Studios
            </p>
        </div>
    )
}

export default Logo
