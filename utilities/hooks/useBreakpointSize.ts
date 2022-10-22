import { useState, useEffect } from 'react'

export const MOBILE_BREAKPOINT = 'mobile'
export const REGULAR_BREAKPOINT = 'regular'
const MOBILE_WIDTH = 800

const useBreakpointSize = () => {
    const [breakpoint, setBreakpoint] = useState(REGULAR_BREAKPOINT)

    useEffect(() => {
        function handleResize() {
            const isMobile = window.innerWidth <= MOBILE_WIDTH
            setBreakpoint(isMobile ? MOBILE_BREAKPOINT : REGULAR_BREAKPOINT)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return breakpoint
}

export default useBreakpointSize
