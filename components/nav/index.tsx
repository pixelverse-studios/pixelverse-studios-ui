import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Drawer } from 'antd'
import { MdDashboard, MdLogout } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { logout } from '../../lib/redux/slices/user'
import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakpointSize'
import logo from '../../assets/logo.svg'
import { routes } from './routes'
import styles from './Nav.module.scss'
import { ProfileProps } from '../../utilities/types/userTypes'

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

const protectedRoutes = [
    { path: 'dashboard', icon: <MdDashboard /> },
    { path: 'logout', icon: <MdLogout /> }
]

const MobileNavContent = ({
    onLogoutClick,
    profile
}: {
    onLogoutClick: Function
    profile: ProfileProps
}) => {
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
                            onClick={() => onItemClick(path)}>
                            {label}
                        </li>
                    ))}
                    {profile?.email
                        ? protectedRoutes.map(({ path, icon }) => {
                              return (
                                  <li
                                      className={
                                          router.pathname.includes(path)
                                              ? styles.active
                                              : ''
                                      }
                                      key={path}
                                      onClick={() =>
                                          path === 'login'
                                              ? onLogoutClick()
                                              : onItemClick(path)
                                      }>
                                      {icon}
                                  </li>
                              )
                          })
                        : null}
                </ul>
            </Drawer>
        </>
    )
}

const Nav = () => {
    const router = useRouter()
    const breakpoint = useBreakpointSize()
    const profile = useSelector((state: any) => state.user.profile)
    const dispatch = useDispatch()

    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        setShowMobileNav(breakpoint === MOBILE_BREAKPOINT)
    }, [breakpoint])

    const onLogoutClick = () => logout(dispatch, router)

    if (showMobileNav) {
        return (
            <nav className={styles.MobileNav}>
                <MobileNavContent
                    profile={profile}
                    onLogoutClick={onLogoutClick}
                />
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
                    {profile?.email
                        ? protectedRoutes.map(({ path, icon }) => {
                              if (path === 'login') {
                                  return (
                                      <li
                                          className={
                                              router.pathname.includes(path)
                                                  ? styles.active
                                                  : ''
                                          }
                                          key={path}
                                          onClick={onLogoutClick}>
                                          {icon}
                                      </li>
                                  )
                              }
                              return (
                                  <li
                                      key={path}
                                      className={
                                          router.pathname.includes(path)
                                              ? styles.active
                                              : ''
                                      }>
                                      <Link key={path} href={`/${path}`}>
                                          {icon}
                                      </Link>
                                  </li>
                              )
                          })
                        : null}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
