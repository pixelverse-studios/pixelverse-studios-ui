import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Drawer } from 'antd'

import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakpointSize'
import logo from '../../assets/logo.svg'
import { routes } from './routes'
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
                <ul className={styles.mobileNavContent}>
                    {routes.map(({ path, label }) => (
                        <li
                            key={path}
                            className={
                                router.pathname.includes(path)
                                    ? styles.active
                                    : ''
                            }
                            onClick={() => onItemClick(`${path}`)}>
                            {label}
                        </li>
                    ))}
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

    if (showMobileNav) {
        return (
            <nav className={styles.MobileNav}>
                <MobileNavContent />
            </nav>
        )
    }

    return (
        <nav className={styles.Nav}>
            <div className={styles.navWrapper}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src={logo.src} alt="logo" />
                    </Link>
                </div>
                <ul className={styles.navContent}>
                    {routes.map(({ path, label }) => (
                        <li
                            key={path}
                            className={
                                router.pathname.includes(path)
                                    ? styles.active
                                    : ''
                            }>
                            <Link key={label} href={`/${path}`}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
