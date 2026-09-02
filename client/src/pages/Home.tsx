import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Certificates from '../components/sections/Certificates';
import GitHub from '../components/sections/GitHub';
import Testimonials from '../components/sections/Testimonials';
import Process from '../components/sections/Process';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';
import FinalCTA from '../components/sections/FinalCTA';
import TrustBar from '../components/sections/TrustBar';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <Certificates />
      <GitHub />
      <Testimonials />
      <Blog />
      <Contact />
      <FinalCTA />
    </>
  );
}
