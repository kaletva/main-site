import styles from '../WhoIAm/WhoIAm.module.scss'
import { motion } from 'framer-motion';

function WhoIAm() {
    const whoTextAnimation = {
        hidden: { x: -100, opacity: 0 },
        show: {
            x: 0, opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }
    return (
        <div className={styles.who}>
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
        </div>
    );
}

export default WhoIAm;