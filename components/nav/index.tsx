import Link from 'next/link'
import { useRouter } from 'next/router'

import logo from '../../assets/logo.svg'
import styles from './Nav.module.scss'

const Nav = () => {
    const router = useRouter()

    return (
        <nav className={styles.Nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src={logo.src} alt="logo" />
                </Link>
            </div>
            <ul>
                <li
                    className={
                        router.pathname.includes('services')
                            ? styles.active
                            : ''
                    }>
                    <Link href="/services">Services</Link>
                </li>
                <li
                    className={
                        router.pathname.includes('works') ? styles.active : ''
                    }>
                    <Link href="/works">Works</Link>
                </li>
                <li
                    className={
                        router.pathname.includes('contact') ? styles.active : ''
                    }>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
