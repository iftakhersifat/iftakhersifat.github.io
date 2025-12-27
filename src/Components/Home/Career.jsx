import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity, FaBriefcase, FaCode, FaMapMarkerAlt } from "react-icons/fa";

const timelineData = {
  education: [
    {
      title: "B.Sc (Engg.) in CSE",
      institution: "International Islamic University Chittagong",
      location: "Chattogram, Bangladesh",
      date: "2023 - Present",
      icon: <FaUniversity />,
      description: "Focusing on Software Engineering, Data Structures, and Modern Web Architectures."
    },
    {
      title: "Higher Secondary Certificate",
      institution: "BAF Shaheen College Chittagong",
      location: "Chattogram, Bangladesh",
      date: "2019 - 2021",
      icon: <FaSchool />,
      description: "Science background with a focus on Mathematics and Physics."
    },
    {
      title: "Secondary School Certificate",
      institution: "Railway Public High School",
      location: "Chattogram, Bangladesh",
      date: "2014 - 2019",
      icon: <FaSchool />,
      description: "Strong foundation in Science and analytical problem solving."
    }
  ],
  career: [
    {
      title: "Full Stack Developer (Trainee)",
      institution: "MERN Stack Specialist",
      location: "Remote / Self",
      date: "2024 - Present",
      icon: <FaCode />,
      description: "Developing robust web applications and optimizing backend performance."
    },
    {
      title: "Open Source Contributor",
      institution: "GitHub Community",
      location: "Global",
      date: "2023 - 2024",
      icon: <FaBriefcase />,
      description: "Fixing UI bugs and contributing to modern React component libraries."
    }
  ]
};

const TimelineCard = ({ data, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mb-12 md:mb-20 flex justify-center items-center w-full"
    >
      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-green-600 flex items-center justify-center text-green-600 bg-transparent">
          {data.icon}
        </div>
      </div>

      <div className={`w-full flex flex-col md:flex-row ${isLeft ? "md:flex-row-reverse" : ""}`}>
        <div className="w-full md:w-1/2 pl-16 md:px-12">
          {/* Card: Removed all bg colors and blurs */}
          <div className="p-6 md:p-8 rounded-[2.5rem] border border-zinc-500/10 dark:border-white/10 group relative">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="px-4 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                {data.date}
              </span>
              <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                <FaMapMarkerAlt className="text-green-600" /> {data.location}
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-zinc-800 dark:text-zinc-100 mb-2 tracking-tighter">
              {data.title}
            </h3>
            <p className="font-bold text-green-600 text-sm mb-4 uppercase tracking-wide">
              {data.institution}
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
              {data.description}
            </p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </motion.div>
  );
};

const Career= () => {
  const [activeTab, setActiveTab] = useState('education');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id="career" className="py-12 relative overflow-hidden bg-transparent" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-[10px] mb-3">My Journey</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-800 dark:text-white tracking-tighter">
              Career & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Education</span>
            </h2>
            <div className="h-1.5 w-14 bg-green-600 mt-6 mb-12 rounded-full"></div>
            
            <div className="flex p-1 bg-transparent border border-zinc-500/10 dark:border-white/10 rounded-full mb-8">
              {['education', 'career'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 md:px-10 py-3 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-500 flex items-center gap-2 ${activeTab === tab ? 'text-white' : 'text-zinc-500'}`}
                >
                  {activeTab === tab && <motion.div layoutId="activeTab" className="absolute inset-0 bg-green-600 rounded-full" />}
                  <span className="relative z-10 flex items-center gap-2 capitalize">
                    {tab === 'education' ? <FaGraduationCap size={16} /> : <FaBriefcase size={14} />}
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-500/10 dark:bg-white/5" />
          <motion.div style={{ scaleY }} className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-green-600 origin-top z-10" />
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {timelineData[activeTab].map((item, index) => (
                  <TimelineCard key={`${activeTab}-${index}`} data={item} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;