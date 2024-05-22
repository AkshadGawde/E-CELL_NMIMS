import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaTwitch,
    FaYoutube,
} from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/betalab-horizontal.png'

const Footer = () => {
    function love() {
        alert('With ❤️, We present to you... ECELL !')
    }

    return (
        <div className={styles.footer}>
            <div className={styles.footerUpper}>
                <div className={styles.logo}>
                    {/* <Image src={logo} alt="E cell Logo" priority={true} /> */}
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li>
                            <Link
                                href="mailto:gawdeakshad@gmail.com"
                                passHref={true}
                            >
                                <FaEnvelope />
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref={true}>
                                <FaFacebookSquare />
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref={true}>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref={true}>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref={true}>
                                <SiDiscord />
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref={true}>
                                <FaYoutube />
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref={true}>
                                <FaTwitch />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerLower}>
                <span onClick={love} className={styles.heart}>
                    Developed by ECELL
                </span>
            </div>
        </div>
    )
}

export default Footer
