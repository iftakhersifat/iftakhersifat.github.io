import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaRocket, FaCheckCircle, FaUsers } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Years of experience', value: '02+', icon: <FaRocket /> },
    { label: 'Completed projects', value: '15+', icon: <FaCheckCircle /> },
    { label: 'Global Clients', value: '10+', icon: <FaUsers /> },
  ];

  return (
    <section id="about" className="relative py-12 md:py-24 bg-white dark:bg-transparent transition-colors duration-500 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-green-500/5 blur-[80px] md:blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-48 md:w-72 h-48 md:h-72 bg-green-500/5 blur-[70px] md:blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-600 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] mb-3"
          >
            Get to know me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            className="h-1 md:h-1.5 bg-green-600 mt-4 md:mt-6 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* --- LEFT: IMAGE DESIGN (Hover Optimized) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center order-1"
          >
            <div className="relative group p-3 md:p-4">
              {/* Border Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-green-500 rounded-tl-2xl md:rounded-tl-3xl group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-green-500 rounded-br-2xl md:rounded-br-3xl group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
              
              {/* Main Image Container */}
              <div className="relative w-64 h-72 md:w-80 md:h-[420px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <img 
                  src="/assets/sifat.png" 
                  alt="Iftakher Hossen" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Available for Hire Overlay (Appears on Hover) */}
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-white text-center text-[10px] md:text-xs font-bold uppercase tracking-widest">Available for Hire</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: TEXT & STATS --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 md:space-y-12 order-2"
          >
            <div className="space-y-4 md:space-y-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
              <p className="text-justify md:text-left">
                Hi, I'm <span className="text-zinc-900 dark:text-white font-bold text-xl md:text-2xl">Iftakher Hossen</span>, 
                a CSE student at <span className="text-zinc-900 dark:text-white font-bold">IIUC</span> currently based in Chattogram. 
                I spend most of my time building web applications using the <span className="text-green-600 font-bold">MERN stack</span>, 
                focusing on making them clean, efficient, and easy to use. I enjoy taking complex problems 
                and turning them into simple, working solutions through <span className="text-zinc-900 dark:text-white font-bold">elegant code</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative overflow-hidden p-4 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 group transition-all duration-300 hover:shadow-lg dark:hover:shadow-green-900/5">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-green-600 group-hover:h-full transition-all duration-500"></div>
                  <div className="text-green-600 mb-2 md:mb-3 text-lg md:text-xl opacity-80 group-hover:opacity-100 transition-all">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-zinc-900 dark:text-white mb-1 tracking-tighter">
                    {stat.value}
                  </h3>
                  <p className="text-[8px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Section */}
            <div className="pt-2 md:pt-4 flex flex-col sm:flex-row items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Iftakher_Hossen_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-green-600 text-white font-bold rounded-xl md:rounded-2xl shadow-xl shadow-green-600/20 hover:bg-green-700 transition-all text-sm md:text-base cursor-pointer"
              >
                Download CV <FaDownload className="text-xs md:text-sm" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;