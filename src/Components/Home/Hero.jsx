import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaPaperPlane, FaDownload, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

// --- Background এনিমেটেড এলিমেন্ট ---
const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1], 
          x: [0, 30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] -right-[5%] w-[400px] h-[400px] rounded-full bg-green-600/5 blur-[100px]"
        animate={{ 
          scale: [1.2, 1, 1.2], 
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 90;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-white dark:bg-transparent transition-colors duration-500 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 lg:px-0 w-full pt-28 pb-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
                
                {/* --- LEFT CONTENT --- */}
                <motion.div 
                  className="flex-1 space-y-8 text-center md:text-left order-2 md:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:border-green-500/50">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Welcome to my portfolio
                    </div>
                    
                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-bold text-zinc-500 dark:text-zinc-400">
                        Hi, I'm <span className="text-zinc-900 dark:text-white underline decoration-green-500/30 decoration-4 underline-offset-8 transition-colors">Iftakher Hossen</span>
                      </h2>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tighter">
                        Creative <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                          <Typewriter
                            words={["Web Developer", "Problem Solver", "UI/UX Designer"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                          />
                        </span>
                      </h1>
                    </div>
      
                    <p className="max-w-lg text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mx-auto md:mx-0 font-medium">
                      Building high-performance, visually stunning web applications with modern technologies. Let's turn your ideas into digital reality.
                    </p>
                  </div>
      
                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="group relative flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-600/20 active:scale-95 overflow-hidden"
                    >
                      Hire Me <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <a href="/Iftakher_Hossen_Resume.pdf" download="Iftakher_Hossen_Resume.pdf" className="flex items-center gap-3 px-8 py-4 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white font-bold rounded-2xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all active:scale-95 border border-zinc-200 dark:border-zinc-700/50"><FaDownload className="text-green-600" /> Resum</a>
                  </div>
      
                  {/* Socials */}
                  <div className="flex items-center justify-center md:justify-start gap-5 pt-4">
      
                    {[
                      { icon: <FaGithub />, link: "#" },
                      { icon: <FaLinkedin />, link: "#" },
                      { icon: <FaFacebook />, link: "#" }
                    ].map((social, i) => (
                      <a 
                        key={i} 
                        href={social.link} 
                        className="text-zinc-500 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-500 transition-all hover:-translate-y-1"
                      >
                        {React.cloneElement(social.icon, { size: 20 })}
                      </a>
                    ))}
                  </div>
                </motion.div>
      
                {/* --- RIGHT IMAGE (Cleaned) --- */}
                <div className="relative order-1 md:order-2">
                  <motion.div 
                    className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Soft Glow Background */}
                    <motion.div 
                      className="absolute inset-0 bg-green-500/20 dark:bg-green-600/10 blur-3xl"
                      animate={{ 
                        borderRadius: ["40% 60% 70% 30% / 40% 40% 60% 60%", "60% 40% 30% 70% / 60% 60% 40% 40%", "40% 60% 70% 30% / 40% 40% 60% 60%"]
                      }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <div className="relative w-full h-full p-4">
                      <motion.div 
                        className="relative w-full h-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-2xl group cursor-pointer transition-colors"
                        animate={{ 
                          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%"]
                        }}
                        whileHover={{ borderRadius: "32px" }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <img
                          src="/assets/iftakher1.png"
                          alt="Iftakher Hossen"
                          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
      
              </div>
            </div>
      
       {/* --- RE-DESIGNED SCROLL INDICATOR --- */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              onClick={() => scrollToSection("about")}
            >
              <div className="relative w-6 h-10 border-2 border-zinc-400 dark:border-zinc-600 rounded-full flex justify-center p-1 group-hover:border-green-500 transition-colors">
                <motion.div 
                  className="w-1.5 h-1.5 bg-green-500 rounded-full"
                  animate={{ 
                    y: [0, 16, 0],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-green-500 transition-colors">Scroll</span>
            </motion.div>
    </section>
  );
};

export default Hero;