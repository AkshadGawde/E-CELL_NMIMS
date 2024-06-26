import styled from 'styled-components'
import Burger from './Burger'
import Link from 'next/link'
import Image from 'next/image'

const Nav = styled.nav`
    overflow-x: hidden;
    top: 0;
    position: absolute;
    width: 100%;
    height: 5rem;
    font-family: var(--title);
    font-size: 2.5em;
    background-color: none;
    color: white;
    padding-top: 0.25rem;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    .maintxt {
        margin-left: 5px;
    }

    .logo {
        padding: 15px 0;
        cursor: pointer;
        font-size: 2rem;
        display: flex;
        align-items: center;
    }

    .logoimg {
        height: 40px;
        marginright: 3px;
    }

    @media only screen and (max-width: 800px) {
        .maintxt {
            display: none;
        }
        .logoimg {
            height: 50px;
            marginright: 3px;
        }
    }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <Link href="/" passHref>
                    <Image
                        src="/SVG/ecell-logo.svg"
                        className="logoimg"
                        alt="Ecell Logo"
                        height={40}
                        width={40}
                        loading="eager"
                    ></Image>
                </Link>

                <span className="maintxt">
                    <Link href="/" passHref>
                        ECELL
                    </Link>
                </span>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar
