
import styles from '../Stack/Stack.module.scss'
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion'
import StackImg from '../Stack/img/Stack.svg'
import { useRef } from 'react';

function Stack() {
    let { scrollY } = useScroll()
    let [scroll, setScroll] = useState(scrollY)
    useEffect(() => {
        return scrollY.onChange((latest) => {
          setScroll(latest * 0.2)
          console.log(latest)
        })
    })
    let rotate = { rotate: scroll }

    return (
        <div className={styles.languages} >
            <div className={styles.languages__col}>
                <motion.h2
                    whileInView={{ x: [-200, 0], opacity:[0, 1] }}
                >Skills</motion.h2>
                <motion.p
                     whileInView={{ y: [50, 0], opacity:[0, 1]}}
                >
                    JavaScript, Typescript, React, Redux, Html, Sass, Css, Git, Figma
                </motion.p>
            </div>
            <div className={styles.languages__iconsCol}>
                <motion.img style={rotate} src={StackImg} alt="" />
            </div>
        </div>
    );
}

export default Stack;