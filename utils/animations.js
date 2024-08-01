import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Unified animation function with direction parameter
export const animateElement = (element, direction = 'topToBottom') => {
    const animationOptions = {
        topToBottom: {
            from: { y: -50, opacity: 0 }, // Start slightly above and invisible
            to: { y: 0, opacity: 1 },
            duration: 0.8, // Shorter duration for faster animation
            ease: 'power3.out',
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 0.3,
        },
        bottomToTop: {
            from: { y: 50, opacity: 0 }, // Start slightly below and invisible
            to: { y: 0, opacity: 1 },
            duration: 0.8,
            ease: 'power3.out',
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 0.3,
        },
        leftToRight: {
            from: { x: -200, opacity: 0 }, // Start off-screen to the left and invisible
            to: { x: 0, opacity: 1 },
            duration: 1,
            ease: 'power3.out',
            start: 'top 80%',
            end: 'bottom top',
            scrub: true,
        },
        rightToLeft: {
            from: { x: 200, opacity: 0 }, // Start off-screen to the right and invisible
            to: { x: 0, opacity: 1 },
            duration: 1,
            ease: 'power3.out',
            start: 'top 80%',
            end: 'bottom top',
            scrub: true,
        },
    }

    const { from, to, duration, ease, start, end, scrub } =
        animationOptions[direction] || animationOptions.topToBottom

    gsap.fromTo(
        element,
        from, // Initial state
        {
            ...to, // Final state
            duration,
            ease,
            scrollTrigger: {
                trigger: element,
                start,
                end,
                scrub,
            },
        },
    )
}
