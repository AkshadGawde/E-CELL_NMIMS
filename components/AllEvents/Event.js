import styles from '../../styles/Team.module.css'
import Card from './Card'
import Card2 from './Card2'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Pastevents, UpcomingEvents, happenings, Archives } from '@data/events'
import { getStaticProps } from 'pages/event/[id]'

export const Event = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])

    return (
        <div className={styles.team_container}>
            <h1>Upcoming</h1>
            <div className={styles.cards}>
                {UpcomingEvents.map((data) => (
                    <Card2
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        poster={data.poster}
                        date={data.date}
                        time={data.time}
                        tag={data.tag}
                        link={data.link}
                        registration={data.registration}
                        venue={data.venue}
                    />
                ))}
            </div>

            <h1>Archives</h1>
            <div className={styles.cards}>
                {Archives.map((data) => (
                    <Card
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        poster={data.poster}
                        date={data.date}
                        time={data.time}
                        tag={data.tag}
                        link={data.link}
                        venue={data.venue}
                    />
                ))}
            </div>

            <h1>E-Summit 1.0</h1>
            <div className={styles.cards}>
                {Pastevents.map((data) => (
                    <Card
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        poster={data.poster}
                        date={data.date}
                        time={data.time}
                        tag={data.tag}
                        link={data.link}
                    />
                ))}
            </div>

            <h1>Happenings</h1>
            <div className={styles.cards}>
                {happenings.map((data) => (
                    <Card
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        poster={data.poster}
                        date={data.date}
                        time={data.time}
                        tag={data.tag}
                        link={data.link}
                    />
                ))}
            </div>
        </div>
    )
}
