import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakpointSize'

const RouteTransition = ({ children }: { children: any }) => {
    const { asPath } = useRouter()
    const breakpoint = useBreakpointSize()

    const variants = {
        scaleDown: {
            scale: 0.8,
            y: 100,
            transition: {
                duration: 0.4
            }
        },
        out: {
            x: '-100%',
            transition: {
                duration: 0.4,
                delay: 0.5
            }
        },
        in: {
            scale: 0.8,
            y: 100,
            x: '100%',
            transition: {
                duration: 0.4
            }
        },
        center: {
            x: 0,
            scale: 0.8,
            transformOrigin: 'top',
            transition: {
                duration: 0.4
            }
        },
        scaleUp: {
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 0.5
            }
        }
    }

    // if (breakpoint === MOBILE_BREAKPOINT) {
    return <div className="routeChange">{children}</div>
    // }

    // return (
    //     <div className="routeChange">
    //         <AnimatePresence initial={false} exitBeforeEnter>
    //             <motion.div
    //                 key={asPath}
    //                 variants={variants}
    //                 initial="in"
    //                 animate={['center', 'scaleUp']}
    //                 exit={['scaleDown', 'out']}>
    //                 {children}
    //             </motion.div>
    //         </AnimatePresence>
    //     </div>
    // )
}

export default RouteTransition
