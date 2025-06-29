import React from 'react';
import Skills from '../Pages/Skills';
import Career from '../Pages/Career';
import Contact from '../Pages/Contact';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
       <div>
         <div id='home' className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-16 px-7 md:px-14 lg:px-4">
  {/* Text Section */}
  <div className="md:w-2/3 space-y-4">
    <h3 className="text-lg font-medium text-gray-600">Hi, I am</h3>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Iftakher Hossen</h1>
    <h3 className="text-2xl font-semibold text-gray-700">
      I am a{' '}
      <span className="text-green-600">
        <Typewriter
          words={['Web Developer', 'Digital Marketer']}
          loop={0} // 0 = infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h3>
    <p className="text-gray-600">
      I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
    </p>
  </div>

  {/* Avatar Section */}
  {/* Avatar Section */}
<div className="flex-shrink-0 animate-float hover:scale-105 transition-transform duration-500 ease-in-out">
  <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-black transition-all duration-300">
    <img
      src="assets/iftakher.png"
      alt="Iftakher Hossen"
      className="w-full h-full object-cover"
    />
  </div>
</div>

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