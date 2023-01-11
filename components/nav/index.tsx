import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
    IconButton,
    Menu,
    MenuItem,
    AppBar,
    Toolbar,
    Switch,
    FormControlLabel
} from '@mui/material'
import { Dashboard, Logout, MoreVert } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

import { Drawer } from '../../components/elements'
import { logout } from '../../lib/redux/slices/user'
import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakpointSize'
import logo from '../../assets/logo.svg'
import { routes, dashboardRoutes } from './routes'
import styles from './Nav.module.scss'
import { ProfileProps } from '../../utilities/types/userTypes'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff'
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
            }
        }
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff'
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
        }
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2
    }
}))

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

    const handleButtonClick = (event: any) => {
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
            {/* // <nav className={styles.DashboardNav}> */}
            <Toolbar className={styles.DashboardNav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src={logo.src} alt="logo" />
                    </Link>
                </div>
                <div>
                    <FormControlLabel
                        control={
                            <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
                        }
                        label=""
                    />
                    <IconButton
                        className={styles.dashboardMenuIcon}
                        id="dashboard-menu"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleButtonClick}>
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
        // {/* // </nav> */}
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

    const onLogoutClick = () => logout(dispatch, router)

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
