import React from 'react';
import Skills from '../Pages/Skills';
import Career from '../Pages/Career';
import Contact from '../Pages/Contact';
import { Typewriter } from 'react-simple-typewriter';
import About from '../Pages/About';
import { FaPaperPlane } from 'react-icons/fa';

const Home = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
       <div>
         <div
      id="home"
      className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-20 px-6 md:px-14 lg:px-4"
    >
      {/* Text Section */}
      <div className="md:w-2/3 space-y-5">
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
          Hi, I am
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Iftakher Hossen
        </h1>
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          I’m a{' '}
          <span className="text-green-600 dark:text-green-400">
            <Typewriter
              words={['Web Developer', 'Digital Marketer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          A passionate and adaptable professional who thrives on challenges.
          With a strong dedication to continuous learning, I strive to craft
          high-quality, impactful solutions that make a difference. My focus on
          growth, creativity, and collaboration enables me to deliver results
          that matter.
        </p>

        <button
          onClick={scrollToContact}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300"
        >
          <span>Contact Me</span>
          <FaPaperPlane className="text-white" />
        </button>
      </div>

      {/* Avatar Section */}
      <div className="flex-shrink-0 animate-float hover:scale-105 transition-transform duration-500 ease-in-out">
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-black transition-all duration-300">
          <img
            src="/assets/iftakher.png"
            alt="Iftakher Hossen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
{/* About Section */}
<div id="about" className='scroll-mt-24'>
  <About></About>
</div>

{/* skills section */}
<div id="skills" className='scroll-mt-24'>
  <Skills ></Skills>
</div>

{/* career section */}
<div id="career" className='scroll-mt-24'>
  <Career></Career>
</div>

{/* contact section */}
<div id="contact" className='scroll-mt-24'>
  <Contact></Contact>
</div>
       </div>


    );
};

export default Home;