import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Drawer } from 'antd'
import { FaBars } from 'react-icons/fa'

import logo from '../../assets/logo.svg'
import styles from './Nav.module.scss'

const Hamburger = ({ onClick, open }: { open: boolean; onClick: any }) => {
    const onHamburgerClick = () => {
        onClick(!open)
    }

    return (
        <div
            className={`${styles.Hamburger} ${open ? styles.open : ''}`}
            onClick={onHamburgerClick}>
            <span />
            <span />
            <span />
        </div>
    )
}

const MobileNavContent = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const onItemClick = (route: string) => {
        setOpen(false)
        setTimeout(() => {
            router.push(route)
        }, 500)
    }

    return (
        <>
            <Hamburger onClick={setOpen} open={open} />
            <Drawer
                maskClosable={false}
                placement="bottom"
                visible={open}
                onClose={() => setOpen(false)}
                className="mobileNavDrawer"
                closable={false}>
                <ul className={`${styles.mobileNav} ${styles.navContent}`}>
                    <li
                        className={
                            router.pathname.includes('services')
                                ? styles.active
                                : ''
                        }
                        onClick={() => onItemClick('/services')}>
                        <span>Services</span>
                    </li>
                    <li
                        className={
                            router.pathname.includes('works')
                                ? styles.active
                                : ''
                        }
                        onClick={() => onItemClick('/works')}>
                        <span>Works</span>
                    </li>
                    <li
                        className={
                            router.pathname.includes('contact')
                                ? styles.active
                                : ''
                        }
                        onClick={() => onItemClick('/contact')}>
                        <span>Contact</span>
                    </li>
                </ul>
            </Drawer>
        </>
    )
}

const mobileBreakpoint = 1000
const Nav = () => {
    const router = useRouter()

    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        const onWindowResize = () => {
            if (window.innerWidth <= mobileBreakpoint) {
                return setShowMobileNav(true)
            }

            return setShowMobileNav(false)
        }

        if (window.innerWidth <= mobileBreakpoint) {
            setShowMobileNav(true)
        }
        window.addEventListener('resize', onWindowResize)

        return () => window.removeEventListener('resize', onWindowResize)
    }, [])

    return (
        <nav className={styles.Nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src={logo.src} alt="logo" />
                </Link>
            </div>
            {showMobileNav ? (
                <MobileNavContent />
            ) : (
                <ul className={styles.navContent}>
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
                            router.pathname.includes('works')
                                ? styles.active
                                : ''
                        }>
                        <Link href="/works">Works</Link>
                    </li>
                    <li
                        className={
                            router.pathname.includes('contact')
                                ? styles.active
                                : ''
                        }>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Nav
