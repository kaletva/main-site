import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';

const WhoIAmContainer = styled.div`
    padding: 50px 15px;
    border-bottom: 0.5px solid rgb(84, 84, 84);
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
`

function WhoIAm() {
    // const whoTextAnimation = {
    //     hidden: { x: -100, opacity: 0 },
    //     show: {
    //         x: 0, opacity: 1,
    //         transition: {
    //             duration: 0.5
    //         }
    //     }
    // }
    return (
        <WhoIAmContainer >
            <div>
                <motion.h1 initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}>
                    hello, i'm Kirill Kaletvintsev.
                </motion.h1>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}>
                    I’m a Front-End Developer located in Russia.
                </motion.p>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.2, duration: 0.5 } }}>
                    I have 2 years of web development experience and i like to create user interfaces, <br /> animations and create an intuitive, dynamic user interface.
                </motion.p>
            </div>
        </WhoIAmContainer>
    );
}

export default WhoIAm;