import styles from '../../styles/Team.module.css'
import Card from './Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import {
    Finance,
    technicals,
    President,
    eventM,
    PR,
    Creatives,
    Logistics,
    Sponsorship,
    mentors,
    Photography,
    Marketing,
} from '@data/team'

export const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Adjust duration as needed
            once: true, // Animation happens only once
        })
    }, [])

    const NextArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <FaArrowRight
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    color: '#ffffff',
                    fontSize: '20px', // Adjust size if needed
                }}
                onClick={onClick}
            />
        )
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <FaArrowLeft
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    color: '#ffffff',
                    fontSize: '20px', // Adjust size if needed
                }}
                onClick={onClick}
            />
        )
    }

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust speed for better effect
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div className={styles.team_container}>
            <h1 data-aos="zoom-in" data-aos-duration="1500">
                Our <span>Team</span>
            </h1>

            <div className={styles.carousel_container}>
                <Slider {...carouselSettings}>
                    <div className={styles.carousel_image}>
                        <img src="/team/Team.png" alt="Team Member 1" />
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="/team/President.png" alt="Team Member 2" />
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="/team/Tech_Head.png" alt="Team Member 3" />
                    </div>
                    <div className={styles.carousel_image}>
                        <img
                            src="/team/Creatives_Head.png"
                            alt="Team Member 4"
                        />
                    </div>
                    <div className={styles.carousel_image}>
                        <img
                            src="/team/Marketing_Head.png"
                            alt="Team Member 5"
                        />
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="/team/RnD_Head.png" alt="Team Member 6" />
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="/team/Logs_Head.png" alt="Team Member 7" />
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="/team/Events_Head.png" alt="Team Member 8" />
                    </div>
                    <div className={styles.carousel_image}>
                        <img src="/team/PR_Head.png" alt="Team Member 9" />
                    </div>
                </Slider>
            </div>

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
                        // twitter={data.twitter}
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
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Public Relation Heads
            </h2>
            <div className={styles.mentor}>
                {PR.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Creative Heads
            </h2>
            <div className={styles.mentor}>
                {Creatives.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Technical Heads
            </h2>
            <div className={styles.mentor}>
                {technicals.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Finance Heads
            </h2>
            <div className={styles.mentor}>
                {Finance.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Event Heads
            </h2>
            <div className={styles.mentor}>
                {eventM.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Sponsorship Heads
            </h2>
            <div className={styles.mentor}>
                {Sponsorship.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Admin & Logistic Heads
            </h2>
            <div className={styles.mentor}>
                {Logistics.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Marketing Heads
            </h2>
            <div className={styles.mentor}>
                {Marketing.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Photography Head
            </h2>
            <div className={styles.mentor}>
                {Photography.map((data) => (
                    <Card
                        key={data.id}
                        name={data.name}
                        image={data.image}
                        linkedin={data.linkedin}
                        instagram={data.instagram}
                        // twitter={data.twitter}
                    />
                ))}
            </div>
        </div>
    )
}
