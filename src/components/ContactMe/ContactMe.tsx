import React, { Ref } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ContactMeContent = styled.div`
    height: calc(50vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 15px;
`

const ContactMeContainer = styled.div`
    h2{
        margin-bottom: 10px;
    }
    a {
        display: inline-block;
        padding: 5px 20px;
        border-radius: 5px;
        border: solid rgb(84, 84, 84) 0.5px;
        text-decoration: none;
        transition: transform 0.2s ease;
        &:hover{
            transform: translateY(2px);
        }

    }
`

interface ContactMeI {
    contactsRef?: Ref<HTMLDivElement>
    mouseEnter: () => void
    mouseLeave: () => void
}

const ContactMe: React.FC<ContactMeI> = ({ contactsRef, mouseEnter, mouseLeave }) => {
    return (
        <ContactMeContent ref={contactsRef}>
            <ContactMeContainer>
                <motion.h2
                    whileInView={{
                        x: [-100, 0],
                        opacity: [0, 1]
                    }}
                    viewport={{ amount: 0.5 }}
                >
                    Want to work with me?
                </motion.h2>
                <motion.a
                    onMouseEnter={() => mouseEnter()}
                    onMouseLeave={() => mouseLeave()}
                    whileInView={{ opacity: [0, 1] }}
                    href="mailto:k.kaletvincev@gmail.com?subject=Let's work together"
                >
                    Contact me
                </motion.a>
            </ContactMeContainer>
        </ContactMeContent>
    );
}

export default ContactMe;