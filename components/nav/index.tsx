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

const NavContent = () => {
    const router = useRouter()

    return (
        <ul>
            <li
                className={
                    router.pathname.includes('services') ? styles.active : ''
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
    )
}

const MobileNavContent = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

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
                <NavContent />
            </Drawer>
        </>
    )
}

const mobileBreakpoint = 1000
const Nav = () => {
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
            {showMobileNav ? <MobileNavContent /> : <NavContent />}
        </nav>
    )
}

export default Nav
