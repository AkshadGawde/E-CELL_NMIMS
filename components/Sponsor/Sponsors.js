import { SponsorsRow } from './SponsorsRow'
import styles from './Sponsor.module.css'
import styleP from './Prizes.module.css'
import { sponsors, sponsors2, sponsors3 } from '@data/sponsor' // Ensure this path is correct
import { prizes } from '@data/prizes' // Ensure this path is correct

export const Sponsors = () => {
    const prizeMoney = '55,000'

    return (
        <div className={styleP.prizesDiv} id="Sponsors">
            {/* <h2 className={styleP.prizeH2Stroke}>Prizes</h2>
            <h3 className={styleP.prizeH3}>Total prize of</h3>
            <h2 className={styleP.prizeH2}>Rs. {prizeMoney}</h2>
            <h3 className={styleP.prizeH3}>
                Also win exciting prizes&nbsp;from
            </h3> */}

            {/* Uncomment the line below if PrizesRow component is needed */}
            {/* <PrizesRow prizes={prizes} /> */}

            <div className={styles.sponsorH2Margin}>
                <h2 className={styles.sponsorH2}>Our Sponsors</h2>
            </div>
            <div className={styles.sponsorMargin}>
                <div className={styles.backPill}></div>
                <SponsorsRow sponsors={sponsors} />
                <div className={styles.backPill}></div>
                <SponsorsRow sponsors={sponsors2} />
                <div className={styles.backPill}></div>
                <SponsorsRow sponsors={sponsors3} />
                <div className={styles.backPill}>
                    <h3></h3>
                </div>
            </div>
        </div>
    )
}
