import styles from '../../styles/Team.module.css'
import Card from './Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {
    mentors,
    technicals,
    President,
    eventM,
    Finance,
    PR,
    Creatives,
    Logistics,
    Sponsorship,
    Marketing,
} from '@data/team'

export const Team = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])

    return (
        <div className={styles.team_container}>
            <h1>
                Our <span>Team</span>
            </h1>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Mentors
            </h2>
            <div className={styles.mentor}>
                {mentors.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        gif={data.gif}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Presidents
            </h2>
            <div className={styles.mentor}>
                {President.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Public Relations Team
            </h2>
            <div className={styles.mentor}>
                {PR.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Creatives Team
            </h2>
            <div className={styles.mentor}>
                {Creatives.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Technical Team
            </h2>
            <div className={styles.mentor}>
                {technicals.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Marketing Team
            </h2>
            <div className={styles.mentor}>
                {Marketing.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Sponsorship Team
            </h2>
            <div className={styles.mentor}>
                {Sponsorship.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>

            {/* Events Team */}
            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Events Team
            </h2>
            <div className={styles.mentor}>
                {eventM.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Admin/Logistics Team
            </h2>
            <div className={styles.mentor}>
                {Logistics.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        twitter={data.twitter}
                    />
                ))}
            </div>
        </div>
    )
}
