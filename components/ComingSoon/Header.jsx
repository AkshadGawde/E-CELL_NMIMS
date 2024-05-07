import styles from '/styles/Header.module.css'
import HButtons from './HButtons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Header = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <>
            <div className={styles.hbody} id="Header">
                <p
                    className={styles.heading}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="top-bottom"
                >
                    <span>Where Ideas</span> <span>Gets</span>{' '}
                    <span className={styles.maintxt}>Stellar!</span>
                </p>
                <p
                    className={styles.desciption}
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                >
                    <span className={styles.subtext}>
                        Welcome to Entrepreneurship Cell, NMIMS Navi Mumbai
                    </span>
                    <span>
                        Join us for an exhilarating two-day Navi Mumbai Startup
                        Fest ,
                        <br />
                        We guaranteed to fuel your entrepreneurial spirit and
                        unleash your creative potential!
                    </span>
                </p>
                <HButtons />
            </div>
        </>
    )
}

export default Header
