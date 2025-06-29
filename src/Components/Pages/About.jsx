import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="max-w-5xl mx-auto mt-20 px-6 md:px-14 lg:px-0">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Get to know who I am, what I do, and what I’m passionate about.
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-stretch justify-between md:gap-10 gap-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="w-full md:w-[400px] h-auto md:h-[420px] lg:h-[380px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="/assets/sifat.png"
              alt="Iftakher Hossen"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 lg:w-[600px] flex flex-col justify-center space-y-5 lg:space-y-11 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        >
          <p>
            Hi, I'm{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              Iftakher Hossen
            </span>
            , born and raised in{' '}
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              Chattogram, Bangladesh
            </span>
            . I’ve completed my{' '}
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              Bachelor’s degree in Computer Science and Engineering (CSE)
            </span>
            .
          </p>
          <p>
            I specialize in building clean, user-focused websites and crafting impactful digital marketing strategies.
            My work blends design, development, and strategic thinking to deliver meaningful digital experiences.
          </p>
          <p>
            I’m always eager to explore new technologies and collaborate on exciting projects that challenge norms and
            solve real-world problems.
          </p>
        </motion.div>
      </div>


      
      {/* Stats Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
      >
        {[
          { label: 'Projects Completed', value: '15+' },
          { label: 'Years of Experience', value: '2+' },
          { label: 'Happy Clients', value: '10+' },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">
              {item.value}
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.label}</p>
          </div>
        ))}
      </motion.div> */}
    </section>
  );
};

export default About;
