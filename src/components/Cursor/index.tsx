import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CursorElement = styled(motion.div)`
    border: solid 1px rgb(84, 84, 84);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 3;
`

interface CursorI {
    enterCursorData: string,
    cursorPos: {
        x: number,
        y: number
    }
}


const Cursor: React.FC<CursorI> = ({enterCursorData, cursorPos}) => {
    const cursor = {
        default: {
            height: 10,
            width: 10,
            x: cursorPos.x - 5,
            y: cursorPos.y - 5
        },
        focus: {
            height: 70,
            width: 70,
            borderRadius: 10,

            x: cursorPos.x - 35,
            y: cursorPos.y - 35,
            backgroundColor: "white",
            // mixBlendMode: "difference"
        },
        rotate: {
            x: cursorPos.x - 22.5,
            y: cursorPos.y - 22.5,
            borderRadius: 5,
            rotate: 135,
            height: 45,
            width: 45
        },
        circle: {
            x: cursorPos.x - 25,
            y: cursorPos.y - 25,
            rotate: 135,
            height: 45,
            width: 45
        },
        click: {
            x: cursorPos.x - 10,
            y: cursorPos.y - 10
        }
    }

    return (
        <CursorElement animate={enterCursorData} variants={cursor} className='cursor'></CursorElement>
    )
}

export default Cursor