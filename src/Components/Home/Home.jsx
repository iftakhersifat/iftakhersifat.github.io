import React from 'react';
import Skills from '../Pages/Skills';

const Home = () => {
    return (
       <div>
         <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-16 px-4">
  {/* Text Section */}
  <div className="md:w-2/3 space-y-4">
    <h3 className="text-lg font-medium text-gray-600">Hi, I am</h3>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Iftakher Hossen</h1>
    <h3 className="text-2xl font-semibold text-gray-700">
      I am a <span className="text-indigo-600">Web Developer</span>
    </h3>
    <p className="text-gray-600">
      I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
    </p>
  </div>

  {/* Avatar Section */}
  <div className="avatar">
    <div className="w-60 h-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" alt="Iftakher Hossen Profile" />
    </div>
  </div>
</div>

<div id="skills">
  <Skills ></Skills>
</div>
       </div>


    );
};

export default Home;