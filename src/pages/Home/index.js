import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Intro from 'pages/Home/Intro'
import ProjectSummary from 'pages/Home/ProjectSummary'
import Profile from 'pages/Home/Profile'
import Footer from 'components/Footer'
import { usePrefersReducedMotion, useRouteTransition } from 'hooks'
import { useLocation } from 'react-router-dom'
import iphone11 from 'assets/iphone-11.glb'
import macbookPro from 'assets/macbook-pro.glb'
import spotify_player from 'assets/spotify-player.jpg'
import spotify_player_placeholder from 'assets/spotify-player-blurred.jpg'
import player from 'assets/player.jpg'
import player_placeholder from 'assets/player-blurred.jpg'
import botto_void from 'assets/whatsapp-botto-void.jpg'
import botto_void_placeholder from 'assets/whatsapp-botto-void-blurred.jpg'
import WSF from 'assets/WSF.jpg'
import WSF_Placeholder from 'assets/WSF-blurred.jpg'

import './index.css'

const disciplines = ['Prototyper', 'Trailblazer']

const Home = () => {
    const { status } = useRouteTransition()
    const { hash, state } = useLocation()
    const initHash = useRef(true)
    const [visibleSections, setVisibleSections] = useState([])
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false)
    const intro = useRef()
    const projectOne = useRef()
    const projectTwo = useRef()
    const projectThree = useRef()
    const details = useRef()
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const revealSections = [intro, projectOne, projectTwo, projectThree, details]

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target
                        observer.unobserve(section)
                        if (visibleSections.includes(section)) return
                        setVisibleSections(prevSections => [...prevSections, section])
                    }
                })
            },
            { rootMargin: '0px 0px -10% 0px' }
        )

        const indicatorObserver = new IntersectionObserver(
            ([entry]) => {
                setScrollIndicatorHidden(!entry.isIntersecting)
            },
            { rootMargin: '-100% 0px 0px 0px' }
        )

        revealSections.forEach(section => {
            sectionObserver.observe(section.current)
        })

        indicatorObserver.observe(intro.current)

        return () => {
            sectionObserver.disconnect()
            indicatorObserver.disconnect()
        }
    }, [visibleSections])

    useEffect(() => {
        const hasEntered = status === 'entered'
        const supportsNativeSmoothScroll =
            'scrollBehavior' in document.documentElement.style
        let scrollObserver
        let scrollTimeout

        const handleHashchange = (hash, scroll) => {
            clearTimeout(scrollTimeout)
            const hashSections = [intro, projectOne, details]
            const hashString = hash.replace('#', '')
            const element = hashSections.filter(item => item.current.id === hashString)[0]
            if (!element) return
            const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant'
            const top = element.current.offsetTop

            scrollObserver = new IntersectionObserver(
                (entries, observer) => {
                    const [entry] = entries
                    if (entry.isIntersecting) {
                        scrollTimeout = setTimeout(
                            () => {
                                element.current.focus()
                            },
                            prefersReducedMotion ? 0 : 400
                        )
                        observer.unobserve(entry.target)
                    }
                },
                { rootMargin: '-20% 0px -20% 0px' }
            )

            scrollObserver.observe(element.current)

            if (supportsNativeSmoothScroll) {
                window.scroll({
                    top,
                    left: 0,
                    behavior,
                })
            } else {
                window.scrollTo(0, top)
            }
        }

        if (hash && initHash.current && hasEntered) {
            handleHashchange(hash, false)
            initHash.current = false
        } else if (!hash && initHash.current && hasEntered) {
            window.scrollTo(0, 0)
            initHash.current = false
        } else if (hasEntered) {
            handleHashchange(hash, true)
        }

        return () => {
            clearTimeout(scrollTimeout)
            if (scrollObserver) {
                scrollObserver.disconnect()
            }
        }
    }, [hash, state, prefersReducedMotion, status])

    return (
        <div className="home">
            <Helmet>
                <title>Alen Yohannan | Devloper + </title>
                <meta
                    name="description"
                    content="Portfolio of Alen Yohannan – a backend devloper working on node apps"
                />
                <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
                <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
            </Helmet>
            <Intro
                id="intro"
                sectionRef={intro}
                disciplines={disciplines}
                scrollIndicatorHidden={scrollIndicatorHidden}
            />
            <ProjectSummary
                id="project-1"
                sectionRef={projectOne}
                visible={visibleSections.includes(projectOne.current)}
                index={1}
                title="Wa-Sticker-Formatter"
                description="WhatsApp Sticker Creator and Formatter"
                buttonText="View Project"
                buttonLink="https://github.com/AlenSaito1/wa-sticker-formatter"
                model={{
                    type: 'laptop',
                    alt: 'Wa-Sticker-Formatter',
                    textures: [
                        {
                            src: WSF,
                            srcSet: `${WSF} 980w, ${WSF} 1376w`,
                            placeholder: WSF_Placeholder,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-2"
                alternate
                sectionRef={projectTwo}
                visible={visibleSections.includes(projectTwo.current)}
                index={2}
                title="Spotifydl-Core"
                description="Spotify Downloader for NodeJS"
                buttonText="View Project"
                buttonLink="https://github.com/AlenSaito1/Spotifydl-Core"
                model={{
                    type: 'phone',
                    alt: 'Spotifydl-Core',
                    textures: [
                        {
                            src: player,
                            srcSet: `${player} 254w, ${player} 508w`,
                            placeholder: player_placeholder,
                        },
                        {
                            src: spotify_player,
                            srcSet: `${spotify_player} 254w, ${spotify_player} 508w`,
                            placeholder: spotify_player_placeholder,
                        }
                    ],
                }}
            />
            <ProjectSummary
                id="project-3"
                sectionRef={projectThree}
                visible={visibleSections.includes(projectThree.current)}
                index={3}
                title="Whatsapp-Botto-Void"
                description="A Multipurpose WhatsApp Bot"
                buttonText="View Project"
                buttonLink="https://github.com/Synthesized-infinity/spotifydl-core"
                model={{
                    type: 'laptop',
                    alt: 'Whatsapp-Botto-Void',
                    textures: [
                        {
                            src: botto_void,
                            srcSet: `${botto_void} 800w, ${botto_void} 1440w`,
                            placeholder: botto_void_placeholder,
                        },
                    ],
                }}
            />
            <Profile
                sectionRef={details}
                visible={visibleSections.includes(details.current)}
                id="details"
            />
            <Footer />
        </div>
    )
}

export default Home
