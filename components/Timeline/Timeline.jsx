import { useState, useEffect } from 'react'
import styles from './TL.module.css'
import classNames from 'classnames'
import Dcard from '@components/Accessories/dcard'
import Ecard from '@components/Accessories/ecard'
import { event } from '@data/timeline'

export default function Timeline() {
    const targetDate = new Date('2025-01-10T00:00:00').getTime()
    const [countdown, setCountdown] = useState(
        targetDate - new Date().getTime(),
    )
    const [showFest, setShowFest] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate - now

            if (distance < 0) {
                clearInterval(interval)
                setShowFest(true)
            } else {
                setCountdown(distance)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [targetDate])

    const handleday1 = () => {
        setday1(true)
        setday2(false)
        setday3(false)
        setday4(false)
    }
    const handleday2 = () => {
        setday2(true)
        setday1(false)
        setday3(false)
        setday4(false)
    }
    const handleday3 = () => {
        setday3(true)
        setday2(false)
        setday1(false)
        setday4(false)
    }
    const handleday4 = () => {
        setday3(false)
        setday2(false)
        setday1(false)
        setday4(true)
    }

    const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000)

    return (
        <div className={styles.main} id="Events">
            {!showFest ? (
                <div className={styles.countdown}>
                    <h1>Navi Mumbai Startup Fest</h1>
                    <h2>-Avartan</h2>
                    <p>
                        {days} Days {hours} Hours {minutes} Minutes {seconds}{' '}
                        Seconds
                    </p>
                </div>
            ) : (
                <div>
                    <div className={styles.header}>
                        <p className={styles.err}>Navi Mumbai Startup Fest </p>
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.days}>
                            <div onClick={handleday1}>
                                <Dcard name="Day 1" day={day1} />
                            </div>
                            <div onClick={handleday2}>
                                <Dcard name="Day 2" day={day2} />
                            </div>
                            {/* <div onClick={handleday3}>
                                <Dcard name="Day 3" day={day3} />
                            </div> */}
                            {/* <div onClick={handleday4}>
                                <Dcard name="Day 4" day={day4} />
                            </div> */}
                        </div>
                        <div
                            className={classNames(
                                styles.events,
                                !day1 && styles.events2,
                            )}
                        >
                            {event.map((item) => {
                                if (item.day === 1) {
                                    return (
                                        <Ecard
                                            name={item.name}
                                            time={item.time}
                                            link={item.link}
                                        />
                                    )
                                }
                            })}
                        </div>
                        <div
                            className={classNames(
                                styles.events,
                                !day2 && styles.events2,
                            )}
                        >
                            {event.map((item) => {
                                if (item.day === 2) {
                                    return (
                                        <Ecard
                                            name={item.name}
                                            time={item.time}
                                            link={item.link}
                                        />
                                    )
                                }
                            })}
                        </div>
                        <div
                            className={classNames(
                                styles.events,
                                !day3 && styles.events2,
                            )}
                        >
                            {event.map((item) => {
                                if (item.day === 3) {
                                    return (
                                        <Ecard
                                            name={item.name}
                                            time={item.time}
                                            link={item.link}
                                        />
                                    )
                                }
                            })}
                        </div>
                        <div
                            className={classNames(
                                styles.events,
                                !day4 && styles.events2,
                            )}
                        >
                            {event.map((item) => {
                                if (item.day === 4) {
                                    return (
                                        <Ecard
                                            name={item.name}
                                            time={item.time}
                                            link={item.link}
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className={styles.mobile}>
                        <div className={styles.mdays}>
                            <div onClick={handleday1}>
                                <Dcard name="Day 1" day={day1} />
                            </div>
                            <div className={styles.events}>
                                {event.map((item) => {
                                    if (item.day === 1) {
                                        return (
                                            <Ecard
                                                name={item.name}
                                                time={item.time}
                                                link={item.link}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className={styles.mdays}>
                            <div onClick={handleday2}>
                                <Dcard name="Day 2" day={day2} />
                            </div>
                            <div className={styles.events}>
                                {event.map((item) => {
                                    if (item.day === 2) {
                                        return (
                                            <Ecard
                                                name={item.name}
                                                time={item.time}
                                                link={item.link}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        {/* <div className={styles.mdays}>
                            <div onClick={handleday3}>
                                <Dcard name="Day 3" day={day3} />
                            </div>
                            <div className={styles.events}>
                                {event.map((item) => {
                                    if (item.day === 3) {
                                        return (
                                            <Ecard
                                                name={item.name}
                                                time={item.time}
                                                link={item.link}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </div> */}
                        {/* <div className={styles.mdays}>
                            <div onClick={handleday4}>
                                <Dcard name="Day 4" day={day4} />
                            </div>
                            <div className={styles.events}>
                                {event.map((item) => {
                                    if (item.day === 4) {
                                        return (
                                            <Ecard
                                                name={item.name}
                                                time={item.time}
                                                link={item.link}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    )
}
