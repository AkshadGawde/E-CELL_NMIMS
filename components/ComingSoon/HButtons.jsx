import styles from '/styles/HButton.module.css'
import Link from 'next/link'

const HButtons = () => {
    return (
        <div className={styles.buttons}>
            <Link href="/events">
                <button className={styles.b1}>Register for Events</button>
            </Link>
        </div>
    )
}

export default HButtons
