import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MotionValue } from 'framer-motion'

const ProgressStyles = styled(motion.div)`
    position: fixed;
    top: 70;
    left: 0;
    right: 0;
    height: 1px;
    background: black;
`
interface ScrollProgressI {
    scrollYProgress: MotionValue<number>
}

const ScrollProgress: React.FC<ScrollProgressI> = ({scrollYProgress}) => {
  return (
    <ProgressStyles style={{ scaleX: scrollYProgress }} />
  )
}

export default ScrollProgress