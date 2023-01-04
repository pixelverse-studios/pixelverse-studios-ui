import { Drawer as MuiDrawer } from '@mui/material'

interface DrawerProps {
    anchor: 'left' | 'right' | 'top' | 'bottom'
    children: JSX.Element | JSX.Element[]
    open: boolean
    onClose: Function
    className?: any // sass classes are objects, but not entirely sure how to Type them, dont feel like looking into it at the current time either
}

type Anchor = 'top' | 'left' | 'bottom' | 'right'

const Drawer = ({
    anchor,
    children,
    open,
    onClose,
    className
}: DrawerProps) => {
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            onClose()
        }
    return (
        <MuiDrawer
            className={className}
            anchor={anchor}
            open={open}
            onClose={toggleDrawer(anchor, false)}>
            {children}
        </MuiDrawer>
    )
}

export default Drawer
