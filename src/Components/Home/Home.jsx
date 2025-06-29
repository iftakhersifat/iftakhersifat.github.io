import React from "react";
import { motion } from "framer-motion";
import Skills from "../Pages/Skills";
import Career from "../Pages/Career";
import Contact from "../Pages/Contact";
import { Typewriter } from "react-simple-typewriter";
import About from "../Pages/About";
import { FaPaperPlane } from "react-icons/fa";

// Multiple animated blobs with different colors, sizes, and timings
const AnimatedBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
    {/* Blob 1 */}
    <motion.div
      className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-400 opacity-30 blur-3xl"
      animate={{
        x: [0, 40, -40, 0],
        y: [0, 30, -30, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ filter: "blur(120px)" }}
    />
    {/* Blob 2 */}
    <motion.div
      className="absolute top-20 right-20 w-56 h-56 rounded-full bg-emerald-400 opacity-25 blur-2xl"
      animate={{
        x: [0, -30, 30, 0],
        y: [0, -20, 20, 0],
        scale: [1, 1.05, 0.95, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 10,
      }}
      style={{ filter: "blur(100px)" }}
    />
    {/* Blob 3 */}
    <motion.div
      className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-lime-400 opacity-20 blur-2xl"
      animate={{
        x: [0, 25, -25, 0],
        y: [0, 20, -20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5,
      }}
      style={{ filter: "blur(110px)" }}
    />
  </div>
);

const Home = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 lg:px-4">
        <motion.div
          id="home"
          className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-20 px-6 md:px-14 lg:px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
              I’m a{" "}
              <span className="text-green-600 dark:text-green-400">
                <Typewriter
                  words={["Web Developer", "Digital Marketer"]}
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
          <motion.div
            className="flex-shrink-0 animate-float hover:scale-105 transition-transform duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-black transition-all duration-300">
              <img
                src="/assets/iftakher.png"
                alt="Iftakher Hossen"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <div id="about" className="scroll-mt-24">
          <About />
        </div>

        {/* Skills Section */}
        <div id="skills" className="scroll-mt-24">
          <Skills />
        </div>

        {/* Career Section */}
        <div id="career" className="scroll-mt-24">
          <Career />
        </div>

        {/* Contact Section */}
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
