import React, { useState, useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import Header from './components/Header/Header';
import WhoIAm from './components/WhoIAm/WhoIAm';
import Stack from './components/Stack/Stack';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer'
import Global from './styles/global';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const contactsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)


  const toContactsScroll = () => {
    if (contactsRef.current) {
      contactsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toSkillsScroll = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth", block: 'center' })
    }
  }

  //cursor
  const [cursorPos, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [enterCursorData, setEnterCursorData] = useState("default")
  useEffect(() => {
    const mouseMove = (e: {clientX: number, clientY: number}) => {
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

  const mouseEnterFocus = () => setEnterCursorData("focus")

  const mouseEnterСircle = () => setEnterCursorData("circle")
  const mouseLeave = () => setEnterCursorData("default")
  
  const clickF = () => {
    setEnterCursorData("click")
    setTimeout(() => setEnterCursorData("default"), 200);
  }


  return (
    <div onClick={() => clickF()}>
      <Global/>
      <Cursor cursorPos={cursorPos} enterCursorData={enterCursorData}/>
      <Header mouseEnter={mouseEnterСircle} mouseLeave={mouseLeave} mouseEnterFocus={mouseEnterFocus}  toContactsScroll={toContactsScroll} toSkillsScroll={toSkillsScroll} />
      <ScrollProgress scrollYProgress={scrollYProgress}/>
      <WhoIAm />
      <Stack skillsRef={skillsRef} />
      <ContactMe contactsRef={contactsRef} mouseEnter={mouseEnterСircle} mouseLeave={mouseLeave}/>
      <Footer mouseEnter={mouseEnterСircle} mouseLeave={mouseLeave}/>
    </div>

  );
}

export default App;
