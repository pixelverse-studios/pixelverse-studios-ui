import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Nav.module.scss'

const Nav = () => {
    const router = useRouter()

    return (
        <nav className={styles.Nav}>
            <div className={styles.logo}>EZPZ Coding LLC</div>
            <ul>
                <li
                    className={
                        router.pathname.includes('about') ? styles.active : ''
                    }>
                    <Link href="/about">About</Link>
                </li>
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
                        router.pathname.includes('portfolio')
                            ? styles.active
                            : ''
                    }>
                    <Link href="/portfolio">Portfolio</Link>
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
