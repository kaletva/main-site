import React from 'react';
import { motion } from 'framer-motion';
import Logo from './media/logo.svg'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding: 0px 20px;
    // border-bottom: 0.5px $primary-color solid;
    height: 70px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.717) 100%);

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 2;
    top: 0;
    overflow: hidden;
    svg{
        width: 50px;
    }
`
const HeaderLinks = styled(motion.div)`
    display: flex;
    gap: 15px;

    p {
        transition: transform 0.2s ease;
        cursor: pointer;

        &:hover {
            transform: translateY(2px);
        }
    }
`

interface Props {
    toContactsScroll: () => void;
    toSkillsScroll: () => void;
    mouseLeave: () => void
    mouseEnter: () => void;
    mouseEnterFocus: () => void;
}

const Header: React.FC<Props> = ({toContactsScroll, toSkillsScroll, mouseLeave, mouseEnter, mouseEnterFocus}) => {
    return (
        <HeaderContainer >
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}>
                <Logo onMouseEnter={()=> mouseEnterFocus()} onMouseLeave={()=> mouseLeave()} />
            </motion.div>
            <HeaderLinks initial={{ x: 100, opacity: 0  }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}>
                <p onMouseEnter={()=> mouseEnter()} onMouseLeave={()=> mouseLeave()} onClick={() => toSkillsScroll()}>Skills</p>
                <p  onMouseEnter={()=> mouseEnter()} onMouseLeave={()=> mouseLeave()} onClick={() => toContactsScroll()}>Contacts</p>
            </HeaderLinks>
        </HeaderContainer>
    );
}

export default Header;