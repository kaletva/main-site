import styles from '../Header/Header.module.scss'
import logo from '../Header/logo.svg'
import { motion } from 'framer-motion';

function Header() {
    return (
        <header className={styles.header}>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} className={styles.header__name}>
                <img src={logo} alt="" />
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0  }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }} className={styles.header__links}>
                <p>about</p>
                <p>contacts</p>
            </motion.div>
        </header>
    );
}

export default Header;