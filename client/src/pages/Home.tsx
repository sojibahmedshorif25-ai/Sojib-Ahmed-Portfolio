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

function Separator() {
  return <div className="section-separator" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <TrustBar />
      <Separator />
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Services />
      <Separator />
      <Process />
      <Separator />
      <Certificates />
      <Separator />
      <GitHub />
      <Separator />
      <Testimonials />
      <Separator />
      <Blog />
      <Separator />
      <Contact />
      <Separator />
      <FinalCTA />
    </>
  );
}
