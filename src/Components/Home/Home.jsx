import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Career from './Career';
import Projects from './Projects';
import Contact from './Contact';
import ScrollControl from './ScrollControl';
import WhatsAppButton from './WhatsAppButton';

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Career />
      <Projects />
      <Contact />
      <ScrollControl />
      <WhatsAppButton />
    </div>
  );
};

export default Home;