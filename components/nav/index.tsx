import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { IconButton, Menu, MenuItem, AppBar, Toolbar } from '@mui/material'
import { Dashboard, Logout, MoreVert } from '@mui/icons-material'

import Logo from '../logo'
import ThemeSwitch from '../themeSwitch'
import { Drawer } from '../../components/elements'
import { logout } from '../../lib/redux/slices/user'
import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakpointSize'
import logo from '../../assets/logo.svg'
import logo_black from '../../assets/logo_black.svg'
import { routes, dashboardRoutes } from './routes'
import styles from './Nav.module.scss'
import { ProfileProps } from '../../utilities/types/userTypes'
import { DARK, STORED_THEME_KEY } from '../../utilities/constants'

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
    { path: 'dashboard', icon: <Dashboard /> },
    { path: 'logout', icon: <Logout /> }
]

export const DashboardNav = () => {
    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const { mode } = useSelector((state: any) => state.theme)

    const handleMenuClick = (event: any) => {
        if (open) {
            return setAnchorEl(null)
        }

        return setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => setAnchorEl(null)
    const onRouteClick = (path: string) => {
        setAnchorEl(null)
        return router.push(path)
    }

    return (
        <AppBar position="static">
            <Toolbar className={styles.DashboardNav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img
                            src={mode === 'dark' ? logo.src : logo_black.src}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div>
                    <ThemeSwitch />
                    <IconButton
                        className={styles.dashboardMenuIcon}
                        id="dashboard-menu"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleMenuClick}>
                        <MoreVert />
                    </IconButton>
                    <Menu
                        id="dashboard-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}>
                        {dashboardRoutes.map(
                            ({
                                path,
                                label
                            }: {
                                path: string
                                label: string
                            }) => (
                                <MenuItem
                                    key={label}
                                    onClick={() => onRouteClick(path)}>
                                    {label}
                                </MenuItem>
                            )
                        )}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}

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
                anchor="bottom"
                className={styles.MobileNavDrawer}
                open={open}
                onClose={() => setOpen(false)}>
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

    const onLogoutClick = () => {
        localStorage.setItem(STORED_THEME_KEY, DARK)
        logout(dispatch, router)
    }

    if (showMobileNav) {
        return (
            <nav className={styles.MobileNav}>
                <MobileNavContent
                    profile={profile}
                    onLogoutClick={onLogoutClick}
                />
                <ul>
                    {protectedRoutes.map(({ path, icon }) => {
                        if (path === 'logout') {
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
                    })}
                </ul>
            </nav>
        )
    }

    return (
        <nav className={styles.Nav}>
            <div className={styles.navWrapper}>
                <Logo />
                {/* <div className={styles.logo}>
                    <Link href="/">
                        <img src={logo.src} alt="logo" />
                    </Link>
                </div> */}
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
                              if (path === 'logout') {
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
