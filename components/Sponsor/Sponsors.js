import { useRef, useEffect } from 'react'
import { SponsorsRow } from './SponsorsRow'
import styles from './Sponsor.module.css'
import styleP from './Prizes.module.css'
import { sponsors, sponsors2, sponsors3 } from '@data/sponsor'
import { prizes } from '@data/prizes'
import { animateElement } from '../../utils/animations.js'

export const Sponsors = () => {
    const prizeMoney = '55,000'

    // Refs for elements to animate
    const sponsorHeaderRef = useRef(null)
    const sponsorRowRef1 = useRef(null)
    const sponsorRowRef2 = useRef(null)
    const sponsorRowRef3 = useRef(null)

    useEffect(() => {
        // Apply animations
        if (sponsorHeaderRef.current) {
            animateElement(sponsorHeaderRef.current, 'topToBottom')
        }
        if (sponsorRowRef1.current) {
            animateElement(sponsorRowRef1.current, 'leftToRight')
        }
        if (sponsorRowRef2.current) {
            animateElement(sponsorRowRef2.current, 'rightToLeft')
        }
        if (sponsorRowRef3.current) {
            animateElement(sponsorRowRef3.current, 'bottomToTop')
        }
    }, [])

    return (
        <div className={styleP.prizesDiv} id="Sponsors">
            <div className={styles.sponsorH2Margin} ref={sponsorHeaderRef}>
                <h2 className={styles.sponsorH2}>Our Sponsors</h2>
            </div>
            <div className={styles.sponsorMargin}>
                <div ref={sponsorRowRef1}>
                    <SponsorsRow sponsors={sponsors} />
                </div>
                <div ref={sponsorRowRef2}>
                    <SponsorsRow sponsors={sponsors2} />
                </div>
                <div ref={sponsorRowRef3}>
                    <SponsorsRow sponsors={sponsors3} />
                </div>
            </div>
        </div>
    )
}
