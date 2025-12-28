import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaExternalLinkAlt, FaGithub, FaGlobe } from 'react-icons/fa';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: "Job Box",
    subtitle: "Career Platform",
    description: "High-performance job portal utilizing advanced filtering and seamless recruitment workflows for modern job seekers and recruiters.",
    image: "/assets/job-box.png",
    demoLink: "https://jobbox-bd.netlify.app/",
    githubLink: "https://github.com/iftakhersifat", 
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent"
  },
  {
    title: "Gardening Community",
    subtitle: "Full Stack Ecosystem",
    description: "A sophisticated platform for gardening enthusiasts with real-time interaction modules and resource management. Designed to bridge nature and digital space seamlessly.",
    image: "/assets/Gardening.png",
    demoLink: "https://gardening-resource-hub.netlify.app/",
    githubLink: "https://github.com/iftakhersifat",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    gradient: "from-green-600/20 via-emerald-600/10 to-transparent"
  },
];

const Project = () => {
  return (
    <section id="projects" className="w-full py-12 max-w-6xl mx-auto px-6 md:px-6 lg:px-4 scroll-mt-20 overflow-hidden bg-transparent">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-green-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">Selected Works</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          Featured <span className="text-green-600 italic">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          className="!pb-16"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative min-h-[550px] md:min-h-[450px] lg:min-h-[420px] bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-100 dark:border-white/5 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl shadow-green-900/5 transition-all duration-500">
                
                {/* Watermark */}
                <div className="absolute top-0 right-10 select-none pointer-events-none z-0">
                  <span className="text-[8rem] md:text-[12rem] font-black text-zinc-500/[0.03] dark:text-white/[0.02] leading-none tracking-tighter">
                    0{idx + 1}
                  </span>
                </div>

                <div className={`w-full lg:w-[45%] p-4 md:p-6 lg:p-8 bg-gradient-to-br ${project.gradient} z-10 flex items-center`}>
                  <div className="relative w-full aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-[4px] border-zinc-900 dark:border-zinc-800">
                    <div className="absolute top-0 w-full h-5 bg-zinc-900 dark:bg-zinc-800 flex items-center px-3 gap-1.5 z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                    </div>
                    
                    <div className="w-full h-full pt-5 bg-white relative group/img cursor-pointer overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-all duration-[6s] ease-in-out group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                         <FaGlobe className="text-white text-3xl scale-0 group-hover/img:scale-100 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[1.5px] w-6 bg-green-600 rounded-full"></span>
                    <span className="text-green-600 font-bold text-[10px] uppercase tracking-[0.2em]">{project.subtitle}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-medium line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 text-[9px] font-black uppercase rounded-lg border border-zinc-200 dark:border-white/10 tracking-widest transition-all hover:border-green-500/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 active:scale-95">
                      Live Preview <FaExternalLinkAlt size={10} />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-all active:scale-95">
                      <FaGithub size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;