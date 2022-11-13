import React, { LegacyRef } from 'react'

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion'
import styled from 'styled-components';
import StackImg from './media/Stack.svg'


const LanguagesContainer = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    position: relative;
    overflow: hidden;
    padding: 0px 15px;
    border-bottom: 0.5px solid $primary-color;

    align-items: center;
    @media screen and (max-width: 850px) {
        flex-direction: column;
        padding:15px;
        height: 260px;
    }
`
const LanguagesTextContainer = styled.div`
        width: 50%;
        @media screen and (max-width: 850px) {
            width: 100%;
            height: 50%;
        }
`
const LanguagesIconsContainer = styled(motion.div)`
    position: absolute;
    right: -250px;
    height: fit-content;
    width: 50%;
    svg {
        height: 100%;
    }
    @media screen and (max-width: 850px) {
        position: relative;
        right: auto;
        height: 100%;
        width: 100%;

        svg {
            height: auto;
        }
    }

`


interface StackI {
    //Fix
    skillsRef: any
}


const Stack: React.FC<StackI> = ({ skillsRef }) => {
    const { scrollY } = useScroll()
    const [scroll, setScroll] = useState<any>(scrollY)
    useEffect(() => {
        return scrollY.onChange((latest) => setScroll(latest * 0.2))
    })
    const rotate = { rotate: scroll }

    return (
        <LanguagesContainer ref={skillsRef}>
            <LanguagesTextContainer >
                <motion.h2
                    whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                >Skills</motion.h2>
                <motion.p
                    whileInView={{ y: [10, 0], opacity: [0, 1] }}
                >
                    JavaScript, Typescript, React, Redux-toolkit, Rest Api, Axios, Html, Sass, Css, Styled-Components, Framer-motion, Webpack, Git, Figma
                </motion.p>
            </LanguagesTextContainer>
            <LanguagesIconsContainer>
                <motion.div style={rotate}>
                    <StackImg />
                </motion.div>
            </LanguagesIconsContainer>
        </LanguagesContainer>
    );
}

export default Stack;