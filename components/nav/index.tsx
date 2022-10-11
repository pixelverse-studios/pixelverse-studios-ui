import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Drawer } from 'antd'

import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakpointSize'
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
            <div className={styles.logo}>
                <img
                    src={logo.src}
                    alt="logo"
                    onClick={() => onItemClick('/')}
                />
            </div>
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

const Nav = () => {
    const router = useRouter()
    const breakpoint = useBreakpointSize()

    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        setShowMobileNav(breakpoint === MOBILE_BREAKPOINT)
    }, [breakpoint])

    return (
        <nav className={styles.Nav}>
            {showMobileNav ? (
                <MobileNavContent />
            ) : (
                <>
                    <div className={styles.logo}>
                        <Link href="/">
                            <img src={logo.src} alt="logo" />
                        </Link>
                    </div>
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
                </>
            )}
        </nav>
    )
}

export default Nav
