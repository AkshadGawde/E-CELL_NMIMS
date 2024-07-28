import styles from '/styles/HButton.module.css'
import Link from 'next/link'

const HButtons = () => {
    return (
        <div className={styles.buttons}>
            <Link href="/events">
                <button className={styles.b1}>Register</button>
            </Link>
            <button className={styles.b2}>
                <Link href="/events" target="_blank">
                    {/* <SiDiscord className={styles.faicon} /> */}
                    <span> Events </span>
                </Link>
            </button>
        </div>
    )
}

export default HButtons
