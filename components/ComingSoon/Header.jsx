import styles from '/styles/Header.module.css'
import HButtons from './HButtons'
import { useEffect, useRef } from 'react'
import { animateElement } from '../../utils/animations.js'

const Header = () => {
    const topToBottomRef = useRef(null)
    const bottomToTopRef = useRef(null)

    useEffect(() => {
        if (topToBottomRef.current) {
            animateElement(topToBottomRef.current, 'topToBottom')
        }
        if (bottomToTopRef.current) {
            animateElement(bottomToTopRef.current, 'bottomToTop')
        }
    }, [])

    return (
        <div className={styles.hbody} id="Header">
            <p
                className={styles.heading}
                ref={topToBottomRef} // Apply top-to-bottom animation to this element
            >
                <span>Where Ideas</span> <span>Gets</span>{' '}
                <span className={styles.maintxt}>Stellar!</span>
            </p>
            <p
                className={styles.desciption}
                ref={bottomToTopRef} // Apply bottom-to-top animation to this element
            >
                <span className={styles.subtext}>
                    Welcome to Entrepreneurship Cell, STME NMIMS Navi Mumbai
                </span>
                <span>
                    <br />
                </span>
            </p>
            <HButtons />
        </div>
    )
}

export default Header
