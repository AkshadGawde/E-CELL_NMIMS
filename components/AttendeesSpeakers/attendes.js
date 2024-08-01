import { useEffect, useRef } from 'react'
import { animateElement } from '../../utils/animations.js'
import styles from '../../styles/attendees.module.css'

const Attendes = () => {
    // Create refs for each element to animate
    const eventsRef = useRef(null)
    const img1Ref = useRef(null)
    const workshopsRef = useRef(null)
    const img2Ref = useRef(null)
    const seminarsRef = useRef(null)
    const img3Ref = useRef(null)

    useEffect(() => {
        // Apply animations to each element
        if (eventsRef.current) {
            animateElement(eventsRef.current, 'topToBottom')
        }
        if (img1Ref.current) {
            animateElement(img1Ref.current, 'leftToRight')
        }
        if (workshopsRef.current) {
            animateElement(workshopsRef.current, 'bottomToTop')
        }
        if (img2Ref.current) {
            animateElement(img2Ref.current, 'rightToLeft')
        }
        if (seminarsRef.current) {
            animateElement(seminarsRef.current, 'topToBottom')
        }
        if (img3Ref.current) {
            animateElement(img3Ref.current, 'leftToRight')
        }
    }, [])

    return (
        <div className={styles.back}>
            <div className={styles.inner1}>
                <h1 className={styles.h1} ref={eventsRef}>
                    A first-rate virtual experience for all
                </h1>
            </div>
            <div className={styles.grid}>
                <div className={styles.text} ref={eventsRef}>
                    <h4 className={styles.h4}>Events</h4>
                    <p className={styles.bl}>
                        Immerse yourself in adrenaline-fueled events that boost
                        your mental energy and creativity! Whether you’re
                        looking to demonstrate your team's exceptional synergy
                        or showcase your individual prowess as the ultimate lone
                        wolf, we have the perfect challenge for you. <br /> Get
                        ready for an exhilarating experience that promises
                        unforgettable fun, excitement, and a true test of your
                        skills. Dive in and prove yourself today!
                    </p>
                </div>
                <div className={styles.img} ref={img1Ref}>
                    <img
                        src="https://res.cloudinary.com/dq23wxdum/image/upload/c_crop,ar_1:1/v1715241791/event_3.jpg"
                        className={styles.hi}
                    />
                </div>

                <div className={styles.text} ref={workshopsRef}>
                    <h4 className={styles.h4}>Workshops</h4>
                    <p className={styles.bl}>
                        No one comes up with the technique of tying a shoelace;
                        the “2 egg reference” is taught to us while we do it
                        ourselves. This hands-on experience saves a lot of
                        initial time-consuming steps of learning a topic and is
                        the basis for a strong foundation. Experience quality,
                        fun-packed, interactive workshops at ECELL NMIMS.
                    </p>
                </div>
                <div className={styles.img} ref={img2Ref}>
                    <img
                        src="https://res.cloudinary.com/dq23wxdum/image/upload/c_crop,ar_1:1/v1715240683/wzbdtbytqsubua6p1cjl.jpg"
                        className={styles.hi2}
                    />
                </div>

                <div className={styles.text} ref={seminarsRef}>
                    <h4 className={styles.h4}>Seminars (speaking sessions)</h4>
                    <p className={styles.bl}>
                        The need for a good old sensei is undeniable in a world
                        of endless possibilities. Get guidance on various topics
                        ranging from x to y; you may discover something that
                        gets you up from your bed each day, or avoid going down
                        the next rabbit hole.
                    </p>
                </div>
                <div className={styles.img} ref={img3Ref}>
                    <img
                        src="https://res.cloudinary.com/dq23wxdum/image/upload/v1715241403/event_2.jpg"
                        className={styles.hi3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Attendes
