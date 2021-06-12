import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
} from 'components/ProjectLayout'
import Link from 'components/Link'
import usesBackground from 'assets/uses-background.mp4'
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg'
import prerender from 'utils/prerender'
import { useScrollRestore } from 'hooks'
import Footer from 'components/Footer'
import './index.css'

const Uses = () => {
    useScrollRestore()

    return (
        <Fragment>
            <Helmet>
                <title>Uses | Alen Yohannan</title>
                <meta
                    name="description"
                    content="A list of hardware and software I use to do my thing"
                />
            </Helmet>
            <ProjectContainer className="uses">
                <ProjectBackground
                    src={usesBackground}
                    placeholder={usesBackgroundPlaceholder}
                    opacity={0.7}
                    entered={!prerender}
                />
                <ProjectHeader
                    title="Uses"
                    description="A somewhat comprehensive list of tools, apps, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
                />
                <ProjectSection first className="uses__section">
                    <ProjectSectionContent>
                        <ProjectTextRow width="m">
                            <ProjectSectionHeading>Development</ProjectSectionHeading>
                            <ProjectSectionText>
                                <ul>
                                    <li>
                                        I use{' '}
                                        <Link href="https://code.visualstudio.com/">
                                            Visual Studio Code
                                        </Link>{' '}
                                        as my text editor, with the Doki-Emilia-Dark theme
                                        and Operator Mono as my typeface of choice.
                                    </li>
                                    <li>
                                        For Backend I use{' '}
                                        <Link href="https://rustlang.org">Rust</Link>,
                                        it's a great Language and it gets work done in
                                        minutes
                                    </li>
                                    <li>
                                        For Server Side I use{' '}
                                        <Link href="https://nodejs.org">Node.JS</Link>,
                                        it's a amazing framework which is really easy to
                                        use.
                                    </li>
                                    <li>
                                        Firefox is my main browser for both development
                                        and general use.
                                    </li>
                                    <li>
                                        <Link href="https://reactjs.org/">React</Link> is
                                        my front end Javascript library of choice. The
                                        component-centric mental model is the first thing
                                        that truly made sense to me as a Backend Developer
                                    </li>
                                    <li>
                                        For 3D effects and image shaders I use{' '}
                                        <Link href="https://threejs.org/">three.js</Link>.
                                        It has a bit of a learning curve but you can do
                                        some really powerful stuff with it.
                                    </li>
                                    <li>
                                        For CSS I've used a myriad pre-processors and
                                        css-in-js solutions like styled-components, but
                                        these days I'm using vanilla CSS with{' '}
                                        <Link href="https://postcss.org/">PostCSS</Link>{' '}
                                        to get upcoming CSS features today.
                                    </li>
                                    <li>
                                        For Javascript animations I use{' '}
                                        <Link href="https://popmotion.io/api/">
                                            Popmotion Pure 8
                                        </Link>
                                        , it's a great way to add spring animations to
                                        three.js. All other animations are CSS with{' '}
                                        <Link href="https://reactcommunity.org/react-transition-group/">
                                            React Transition Group
                                        </Link>{' '}
                                        for enter/exit transitions.
                                    </li>
                                </ul>
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    )
}

export default Uses
