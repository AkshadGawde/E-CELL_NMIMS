import { useEffect, useRef } from 'react'
import { animateElement } from '../../utils/animations.js'
import styles from './speaker.module.css'

export default function Speaker(props) {
    // Create refs for the elements to animate
    const imageRef = useRef(null)
    const infoRef = useRef(null)

    useEffect(() => {
        // Apply animations to each element
        if (imageRef.current) {
            animateElement(imageRef.current, 'bottomToTop') // Animation for image
        }
        if (infoRef.current) {
            animateElement(infoRef.current, 'topToBottom') // Animation for info
        }
    }, [])

    return (
        <div className={styles.speaker}>
            <div className={styles.image} ref={imageRef}>
                {props.image && (
                    <img
                        src={props.image}
                        alt={props.name}
                        height={200}
                        width={200}
                    />
                )}
            </div>
            <div className={styles.info} ref={infoRef}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.about}>{props.detail}</div>
                <div className={styles.timing}>
                    <span>
                        {props.date}&ensp;{props.time}
                    </span>
                    <span className={styles.linking}>
                        <a
                            href={props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="zoom"
                        >
                            {props.how}
                        </a>
                        &nbsp;(Recorded Session)
                        {/* Prop ready for YouTube, its prop.linkyt, Just wrap the text in an <a/> tag */}
                    </span>
                </div>
            </div>
        </div>
    )
}
