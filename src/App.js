
import './App.scss';
import Header from './components/Header/Header';
import WhoIAm from './components/WhoIAm/WhoIAm';
import { motion, useScroll } from 'framer-motion';
import Stack from './components/Stack/Stack';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer'
import { useRef } from 'react';
import { useState, useEffect } from 'react';


function App() {
  const { scrollYProgress } = useScroll();

  const contactsRef = useRef(null)
  const skillsRef = useRef(null)

  const toContactsScroll = () => contactsRef.current.scrollIntoView({ behavior: "smooth" })
  const toSkillsScroll = () => skillsRef.current.scrollIntoView({ behavior: "smooth", block: 'center' })

  //курсор
  const [cursorPos, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [enterCursorData, setEnterCursorData] = useState("default")
  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);
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
      mixBlendMode: "difference"
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

  const mouseEnterFocus = () => setEnterCursorData("focus")

  const mouseEnterСircle = () => setEnterCursorData("circle")
  const mouseLeave = () => setEnterCursorData("default")
  
  const clickF = () => {
    setEnterCursorData("click")
    setTimeout(() => setEnterCursorData("default"), 200);
  }


  return (
    <div onClick={() => clickF()}>
      <motion.div animate={enterCursorData} variants={cursor}  className='cursor'></motion.div>
      <Header mouseEnter={mouseEnterСircle} mouseLeave={mouseLeave} mouseEnterFocus={mouseEnterFocus}  toContactsScroll={toContactsScroll} toSkillsScroll={toSkillsScroll} />
      <motion.div className='scroll-progress' style={{ scaleX: scrollYProgress }} />
      <WhoIAm />
      <Stack skillsRef={skillsRef} />
      {/* <Projects/> */}
      <ContactMe contactsRef={contactsRef} mouseEnter={mouseEnterСircle} mouseLeave={mouseLeave}/>
      <Footer mouseEnter={mouseEnterСircle} mouseLeave={mouseLeave}/>
    </div>

  );
}

export default App;
