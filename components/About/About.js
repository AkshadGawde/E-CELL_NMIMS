import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/About.module.css'
import { HButtonLight } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'
import { animateElement } from '../../utils/animations' // Import the unified animation function
import Button from './Button'
import { Date } from './Date'

const About = () => {
    const [showTimer, setShowTimer] = useState(true)

    const animationRefs = {
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
    }

    useEffect(() => {
        // Initialize GSAP animations with different directions
        animateElement(animationRefs.section1.current, 'leftToRight')
        animateElement(animationRefs.section2.current, 'rightToLeft')
        animateElement(animationRefs.section3.current, 'topToBottom')
        animateElement(animationRefs.section4.current, 'bottomToTop')
    }, [])

    return (
        <div className={styles.container} id="AboutUS">
            <div
                className={styles.title_container}
                ref={animationRefs.section1}
            >
                <h1 className={styles.title}>
                    What is <span>E-CELL &nbsp;?</span>
                </h1>
                <p className={styles.content}>
                    Welcome to the official website of the Entrepreneurship Cell
                    (E-Cell) at NMIMS Navi Mumbai. Empowering and inspiring
                    students to become successful entrepreneurs by providing
                    them with the necessary resources, network and skills. We
                    guaranteed to fuel your entrepreneurial spirit and unleash
                    your creative potential!
                    <br />
                    <br />
                    The Entrepreneurship Cell (E-Cell) at NMIMS Navi Mumbai is
                    your beacon in innovation and entrepreneurship. Embrace your
                    technical talents and chart your course to success with us!
                </p>
            </div>

            <div
                className={styles.title_container}
                ref={animationRefs.section2}
            >
                <h1 className={styles.title}>
                    OUR <span>Vision</span>
                </h1>
                <p className={styles.content}>
                    We're on a mission to empower student entrepreneurs,
                    transforming them into job creators. Picture this: a college
                    community buzzing with innovative ideas, like a beehive of
                    creativity! We're here to nurture those ideas into
                    groundbreaking business models, making our campus the
                    epicenter of innovation.
                    <br />
                    <br />
                    Imagine a world where every student is a potential
                    game-changer, and we're the catalyst sparking this
                    entrepreneurial revolution! This is an exciting journey,
                    where dreams take flight like a rocket into the cosmos of
                    possibilities!
                </p>
                <div className={styles.btn_container}>
                    <HButtonLight name="Mail Us" icon={<ImArrowUpRight2 />} />
                </div>
            </div>

            <div
                className={styles.title_container}
                ref={animationRefs.section3}
            >
                <h1 className={styles.title}>
                    Director's <span>Message</span>
                </h1>
                <div className={styles.image_container}>
                    <Image
                        src="/team/Director_img.png"
                        alt="Director"
                        width={300}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <p className={styles.content}>
                    At NMIMS Navi Mumbai, our Entrepreneurship Cell (E-Cell)
                    sparks innovation and entrepreneurship, guiding our
                    institution forward. E-Cell nurtures the inherent potential
                    in our students, fostering creativity and business acumen
                    throughout our campus. Amidst evolving commerce and
                    technology, E-Cell stands as a hub for cultivating ideas,
                    fostering collaboration, and igniting initiatives that
                    challenge norms.
                    <br /> <br />
                    Witnessing E-Cell's transformative impact is heartwarming,
                    as students dive into startups and innovation, enriching
                    NMIMS Navi Mumbai's success. This spirit of innovation and
                    entrepreneurship shapes our future leaders, and we take
                    pride in our creative, forward-thinking community.
                </p>
            </div>

            <div
                className={styles.title_container}
                ref={animationRefs.section4}
            >
                <h1 className={styles.title}>
                    Faculty's <span>Message</span>
                </h1>
                <div className={styles.image_container}>
                    <Image
                        src="/team/Aparnarao_img.png"
                        alt="Faculty"
                        width={300}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <p className={styles.content}>
                    At NMIMS Navi Mumbai, the Entrepreneurship Cell (E-Cell)
                    boosts innovation and ignites the entrepreneurial mindset of
                    students, exemplifying the vibrant, unique spirit of our
                    institution. E-Cell not only recognizes but nurtures the
                    hidden talents in our smart young minds, fostering a culture
                    of innovation and productivity.
                    <br /> <br />
                    Amidst the ever-changing business world and advancing
                    technology, E-Cell stands as a hub for ideas, collaboration,
                    and groundbreaking innovation. It’s inspiring to see
                    students, driven by E-Cell's efforts, embark on the
                    challenging journey of startups and contribute to NMIMS Navi
                    Mumbai's success stories.
                    <br /> <br />
                    Through themed events, workshops, and programs, E-Cell
                    empowers students with practical entrepreneurial skills,
                    bridging the gap between academics and industry.
                </p>
            </div>

            {/* <div className={styles.date_container}>
                <div className={styles.left_date}>
                    <Date day="06" month="May" subtxt="th" />
                </div>
                <hr className={styles.line} />
                <div className={styles.right_date}>
                    <Date day="31" month="April" subtxt="st" />{' '}
                </div>
            </div> */}
            <br />
        </div>
    )
}

export default About
