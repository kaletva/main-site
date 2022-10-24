import React from 'react';
import styles from '../Header/Header.module.scss'
import { motion } from 'framer-motion';
// import logo from '../Header/logo.svg'
interface Props {
    toContactsScroll?: string;
    toSkillsScroll?: string;
    mouseLeave?: string;
    mouseEnter?: string;
    mouseEnterFocus?: string;
}

const Header = ({toContactsScroll, toSkillsScroll, mouseLeave, mouseEnter, mouseEnterFocus}) => {
    return (
        <header className={styles.header}>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} className={styles.header__name}>
                <img onMouseEnter={()=> mouseEnterFocus()} onMouseLeave={()=> mouseLeave()}  src="" alt="" />
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0  }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }} className={styles.header__links}>
                <p onMouseEnter={()=> mouseEnter()} onMouseLeave={()=> mouseLeave()} onClick={() => toSkillsScroll()}>Skills</p>
                <p  onMouseEnter={()=> mouseEnter()} onMouseLeave={()=> mouseLeave()} onClick={() => toContactsScroll()}>Contacts</p>
            </motion.div>
        </header>
    );
}

export default Header;