import styles from '/styles/EventDetails.module.css'

const EventDetails = (props) => {
    const { description, date, time, images } = props

    return (
        <div className={styles.Evecont}>
            <p className={styles.hdn1}>details</p>
            <p className={styles.desc} style={{ whiteSpace: 'pre-line' }}>
                {description}
            </p>
            <p className={styles.hdn1}>Gallery</p>
            <div className={styles.gallery}>
                {images && images.length > 0 ? (
                    images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className={styles.galleryImage}
                        />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
            <p className={styles.date}>
                {date}
                <br />
                {time}
            </p>
            <hr />
        </div>
    )
}

export default EventDetails
