import cardStyles from '../../styles/Card.module.css'
import Image from 'next/image'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import buttonStyles from '/styles/HButton.module.css'
import Link from 'next/link'

const Card2 = (props) => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])

    const handleButtonClick = (e) => {
        e.stopPropagation()
        // Add any additional logic if needed
    }

    return (
        <div
            className={cardStyles.borderwrap}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
        >
            <Link href={'/event/' + props.link} passHref>
                <div
                    className={classNames(
                        cardStyles.wrapper,
                        cardStyles.active,
                    )}
                >
                    <div className={cardStyles.daycards}>
                        {props.poster && (
                            <Image
                                src={props.poster}
                                alt="poster"
                                height="250"
                                width="250"
                                priority={true}
                                className="img"
                            />
                        )}
                        <style jsx global>{`
                            .img {
                                border-radius: 4px;
                            }
                        `}</style>
                        <div className={cardStyles.content_container}>
                            <span className={cardStyles.name}>
                                {props.name}
                            </span>
                            {/* <span className={cardStyles.role}>{props.tag}</span> */}
                        </div>
                        <div className={cardStyles.detailContainer}>
                            <p>
                                {props.date}
                                <br />
                                {props.time}
                            </p>
                        </div>
                        <div className={buttonStyles.buttons}>
                            <a
                                href={props.registration}
                                target="_blank"
                                rel="noreferrer"
                                onClick={handleButtonClick}
                            >
                                <button className={buttonStyles.b1}>
                                    Register
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card2
