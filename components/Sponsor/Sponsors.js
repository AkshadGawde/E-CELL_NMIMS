import { SponsorsRow } from './SponsorsRow'
import styles from './Sponsor.module.css'
import styleP from './Prizes.module.css'
import { sponsors, sponsors2, sponsors3 } from '@data/sponsor'
import { prizes } from '@data/prizes'

export const Sponsors = () => {
    const prizeMoney = '55,000'

    return (
        <div className={styleP.prizesDiv} id="Sponsors">
            <div className={styles.sponsorH2Margin}>
                <h2 className={styles.sponsorH2}>Our Sponsors</h2>
            </div>
            <div className={styles.sponsorMargin}>
                <SponsorsRow sponsors={sponsors} />

                <SponsorsRow sponsors={sponsors2} />

                <SponsorsRow sponsors={sponsors3} />
                <div>
                    <h3></h3>
                </div>
            </div>
        </div>
    )
}
