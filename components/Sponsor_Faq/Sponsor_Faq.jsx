import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Style from './FAQ.module.css'
import { HButton, HButtonLight } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'
import { animateElement } from '../../utils/animations.js'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Sponsor_Faq = () => {
    // Refs for elements to animate
    const sponsorRef = useRef(null)
    const faqRef = useRef(null)
    const chatWRef1 = useRef(null)
    const chatBRef1 = useRef(null)
    const chatWRef2 = useRef(null)
    const chatBRef2 = useRef(null)
    const chatWRef3 = useRef(null)
    const chatBRef3 = useRef(null)

    useEffect(() => {
        // Apply animations
        if (sponsorRef.current) {
            animateElement(sponsorRef.current, 'leftToRight')
        }
        if (faqRef.current) {
            animateElement(faqRef.current, 'topToBottom')
        }
        if (chatWRef1.current) {
            animateElement(chatWRef1.current, 'bottomToTop')
        }
        if (chatBRef1.current) {
            animateElement(chatBRef1.current, 'rightToLeft')
        }
        if (chatWRef2.current) {
            animateElement(chatWRef2.current, 'bottomToTop')
        }
        if (chatBRef2.current) {
            animateElement(chatBRef2.current, 'rightToLeft')
        }
        if (chatWRef3.current) {
            animateElement(chatWRef3.current, 'bottomToTop')
        }
        if (chatBRef3.current) {
            animateElement(chatBRef3.current, 'rightToLeft')
        }
    }, [])

    return (
        <div className={Style.wrapper} id="FAQ">
            {/* in-page navigation to FAQ section on clicking FAQ from the navbar */}
            {/* also added smooth scroll for the entire page in globals.css */}
            <div className={Style.backgrounds}>
                {/* A layer containing the background for the sponsor and faq section, placed below the content using a negative z-index */}
                <div className={Style.SponsorBack}></div>
                <div className={Style.FaqBack}></div>
            </div>
            <div className={Style.content}>
                {/* Contains all the content displayed on the FAQ component */}
                <div className={Style.sponsor} ref={sponsorRef}>
                    <p>Want to be a Sponsor?</p>
                    <div>
                        <HButton
                            name={'Apply'}
                            icon={<ImArrowUpRight2 />}
                            url={''}
                        />
                    </div>
                    {/* Included an additional attribute - icon for the up-left arrow, also made the required change in button.jsx */}
                </div>
                <div className={Style.contacts}>
                    <div className={Style.faq} ref={faqRef}>
                        <span>FAQ</span>
                        <p className={Style.subtitle}>
                            Feeling Overwhelmed?
                            <br />
                            Reach out to us.
                        </p>
                        <HButtonLight
                            name={'Contact Us'}
                            icon={<ImArrowUpRight2 />}
                        />
                    </div>
                    <div className={Style.chat}>
                        <div className={Style.chatW} ref={chatWRef1}>
                            What are the eligibility criteria for participating
                            in the events?
                        </div>
                        <div className={Style.chatB} ref={chatBRef1}>
                            As long as you are currently enrolled in an
                            undergraduate degree program, you can participate in
                            any event.
                        </div>
                        <div className={Style.chatW} ref={chatWRef2}>
                            I lack prior experience with the events. Should I
                            still participate?
                        </div>
                        <div className={Style.chatB} ref={chatBRef2}>
                            Don't worry. Just check out our event page and hop
                            on. We will make sure you are equipped with the
                            essential resources.
                        </div>
                        <div className={Style.chatW} ref={chatWRef3}>
                            What if my questions are not listed here?
                        </div>
                        <div className={Style.chatB} ref={chatBRef3}>
                            We are happy to resolve all your doubts. Feel free
                            to email us at{' '}
                            <a href="mailto:ecell.stme@nmims.edu.in">
                                ecell.stme@nmims.edu.in
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor_Faq
