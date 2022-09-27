import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import WhoIAm from './components/WhoIAm/WhoIAm';
import { motion, useScroll } from 'framer-motion';
import Stack from './components/Stack/Stack';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Header />
      <motion.div className='scroll-progress' style={{ scaleX: scrollYProgress }} />
      <WhoIAm />
      <Stack/>
      {/* <Projects/> */}
      <ContactMe/>
      <Footer/>
    </>

  );
}

export default App;
