import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <div>
                <Link href="/">LOGO</Link>
            </div>
            <div className="navLinks">
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">contact</Link>
            </div>
        </nav>
    )
}

export default Nav
