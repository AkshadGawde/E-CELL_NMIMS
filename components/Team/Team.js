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
                Technical Team
            </h2>
            <div className={styles.cards}>
                {technicals.map((data) => (
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
                Event Managers
            </h2>
            <div className={styles.cards}>
                {eventM.map((data) => (
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
                President
            </h2>
            <div className={styles.cards}>
                {President.map((data) => (
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
                Finance Team
            </h2>
            <div className={styles.cards}>
                {Finance.map((data) => (
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
                Public Realtions Team
            </h2>
            <div className={styles.cards}>
                {PR.map((data) => (
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
                Creatives Team
            </h2>
            <div className={styles.cards}>
                {Creatives.map((data) => (
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
                Logistics Team
            </h2>
            <div className={styles.cards}>
                {Logistics.map((data) => (
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
                Sponsorship Team
            </h2>
            <div className={styles.cards}>
                {Sponsorship.map((data) => (
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
                Marketing Team
            </h2>
            <div className={styles.cards}>
                {Marketing.map((data) => (
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
        </div>
    )
}
