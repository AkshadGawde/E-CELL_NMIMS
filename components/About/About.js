import { HButtonLight } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'
import { useState } from 'react'
import styles from '../../styles/About.module.css'
import Button from './Button'
import { Date } from './Date'
import Timer from './Timer'

const About = () => {
    const [showTimer, setShowTimer] = useState(true)

    return (
        <div className={styles.container} id="AboutUS">
            <div className={styles.title_container}>
                <h1 className={styles.title}>
                    What is <span>E-CELL &nbsp;?</span>
                </h1>

                <p className={styles.content}>
                    Welcome to the official website of the Entrepreneurship Cell
                    (E-Cell) at NMIMS Navi Mumbai. Here, we strive to foster
                    innovation, entrepreneurship, and leadership among students,
                    providing a platform for aspiring entrepreneurs to learn,
                    connect, and grow.
                    <br />
                    <br />
                    Just like the North Star guides sailors, the
                    Entrepreneurship Cell (E-Cell) at NMIMS Navi Mumbai is your
                    beacon in innovation and entrepreneurship. Embrace your
                    technical talents and chart your course to success with us!
                </p>
                {/* <div className={styles.btn_container}>
                    <HButtonLight name="About Us" icon = {<ImArrowUpRight2/>}/>
                </div> */}
            </div>
            <div className={styles.date_container}>
                <div className={styles.left_date}>
                    <Date day="06" month="May" subtxt="th" />
                </div>
                <hr className={styles.line} />
                <div className={styles.right_date}>
                    <Date day="31" month="October" subtxt="st" />
                </div>
            </div>
            <br />
            <div className={styles.timer_container}>
                {showTimer ? (
                    <Timer setShowTimer={setShowTimer} />
                ) : (
                    <h1 className={styles.title}>
                        It&#39;s Show<span>time</span>
                    </h1>
                )}
            </div>
        </div>
    )
}

export default About
