import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import Head from 'next/head'
import { Event } from '@components/AllEvents/Event'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <Head>
                <title>ECELL | EVENTS </title>
                <meta
                    name="description"
                    content="NMIMS Entrepreneurship Cell"
                />
                <link rel="icon" href="/SVG/ecell-logo.svg" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Event />
            </div>
            <Footer />
        </>
    )
}

export default team
