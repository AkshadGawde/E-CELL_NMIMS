import React from 'react'
import styles from './speakers.module.css'
import Speaker from './Speaker'
import { speaker } from '@data/speaker'

export default function Speakers() {
    return (
        <div className={styles.speakers_section}>
            <div className={styles.title}>Our Speakers</div>
            <div className={styles.speakers}>
                {speaker.map((item) => (
                    <div key={item.id} className={styles['speaker-card']}>
                        <img
                            className={styles['speaker-image']}
                            src={item.image}
                            alt={item.name}
                        />
                        <div className={styles['speaker-details']}>
                            <h3>{item.name}</h3>
                            <p>{item.details}</p>
                            <div className={styles['speaker-links']}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Event Link
                                </a>
                                <a
                                    href={item.linkyt}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
