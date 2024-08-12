import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Footer from '@components/Footer/Footer'
import EventHeading from '@components/Events/EventHeading'
import Navbar from '@components/Nav/Navbar'
import EventDetails from '@components/Events/EventDetails'
import OrganizerContainer from '@components/Events/Orgnjdge'
import { Pastevents, happenings, UpcomingEvents, Archives } from '@data/events'

export const getStaticPaths = async () => {
    const eventPaths = Pastevents.map((event) => ({
        params: { id: event.link },
    }))

    const happeningsPaths = happenings.map((happening) => ({
        params: { id: happening.link },
    }))

    const UpcomingEventsPaths = UpcomingEvents.map((UpcomingEvents) => ({
        params: { id: UpcomingEvents.link },
    }))

    const ArchivesPaths = Archives.map((Archives) => ({
        params: { id: Archives.link },
    }))

    return {
        paths: [
            ...eventPaths,
            ...happeningsPaths,
            ...UpcomingEventsPaths,
            ...ArchivesPaths,
        ],
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const link = context.params.id

    const data =
        Pastevents.find((el) => el.link === link) ||
        happenings.find((el) => el.link === link) ||
        UpcomingEvents.find((el) => el.link === link) ||
        Archives.find((el) => el.link === link)

    return {
        props: {
            name: data.name,
            poster: data.poster,
            description: data.description,
            register: data.registration,
            date: data.date,
            time: data.time,
            organisers: data.organisers,
            tag: data.tag,
            lead: data.leadLink,
            images: data.images,
        },
    }
}

export default function Home(props) {
    const organisers = props.organisers

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>ECELL| NMIMS {props.name} </title>
                    <meta
                        name="description"
                        content="NMIMS Entrepreneurship Cell"
                    />
                    <link rel="icon" href="/SVG/ecell-logo.svg" />
                </Head>
                <Navbar />
                <EventHeading
                    title={props.name}
                    content={props.tag}
                    register={props.register}
                    eventPoster={props.poster}
                    lead={props.lead}
                />
                <EventDetails
                    description={props.description}
                    date={props.date}
                    time={props.time}
                    images={props.images}
                />
                <OrganizerContainer organiser={organisers} />
            </div>
            <Footer />
        </>
    )
}
