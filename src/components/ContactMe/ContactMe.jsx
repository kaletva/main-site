import styles from '../ContactMe/ContactMe.module.scss'
import { motion } from 'framer-motion';

function ContactMe({contactsRef, mouseEnter, mouseLeave}) {
    return (
        <div className={styles.contactMe} ref={contactsRef}>
            <div className={styles.contactMe__container}>
                <motion.h2 whileInView={{x:[-100, 0], opacity:[0, 1]}} viewport={{amount: 0.5}} >Want to work with me?</motion.h2>
                <motion.a onMouseEnter={()=> mouseEnter()} onMouseLeave={()=> mouseLeave()}  whileInView={{ opacity:[0, 1]}}  href="mailto:k.kaletvincev@gmail.com?subject=Let's work together" className={styles.contactLink}>Contact me</motion.a>
            </div>
        </div>
    );
}

export default ContactMe;