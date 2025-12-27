import React from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaLock, FaServer, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skillData = [
  {
    icon: <FaCode />,
    title: 'Languages',
    subtitle: 'Programming & Markup',
    techs: ['c', 'cpp', 'html', 'css', 'js'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: <FaServer />,
    title: 'Frameworks',
    subtitle: 'Frontend & Backend',
    techs: ['react', 'nodejs', 'express', 'bootstrap', 'tailwind'],
    color: 'from-green-500 to-emerald-400'
  },
  {
    icon: <FaDatabase />,
    title: 'Databases',
    subtitle: 'Storage Solutions',
    techs: ['mysql', 'mongodb', 'firebase', 'sqlite'],
    color: 'from-yellow-500 to-orange-400'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Development',
    subtitle: 'Platforms & Tools',
    techs: ['vite', 'vercel', 'figma', 'postman'],
    color: 'from-purple-500 to-pink-400'
  },
  {
    icon: <FaLock />,
    title: 'Cybersecurity',
    subtitle: 'Security & Analysis',
    techs: ['kali', 'nmap', 'metasploit', 'linux'],
    color: 'from-red-500 to-rose-400'
  },
  {
    icon: <FaGitAlt />,
    title: 'Version Control',
    subtitle: 'Collaboration',
    techs: ['git', 'github'],
    color: 'from-orange-600 to-red-500'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-12 bg-white dark:bg-transparent transition-colors duration-500 overflow-hidden">
      
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-green-500/5 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-green-600 mb-2">My Arsenal</h2>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
            Technical <span className="text-green-600">Expertise</span>
          </h1>
          <div className="w-16 h-1.5 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2.5rem] bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 transition-all duration-300 group shadow-sm hover:shadow-2xl hover:shadow-green-500/5"
            >
              {/* Internal Decorative Gradient */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rounded-bl-full`}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800 text-green-600 text-2xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">{category.title}</h3>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{category.subtitle}</p>
                  </div>
                </div>

                {/* Icons Grid */}
                <div className="flex flex-wrap gap-4">
                  {category.techs.map((tech, i) => (
                    <div key={i} className="group/item relative">
                      <motion.img
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        src={`https://skillicons.dev/icons?i=${tech}`}
                        alt={tech}
                        className="w-11 h-11 md:w-12 md:h-12 cursor-pointer drop-shadow-sm"
                      />
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover/item:opacity-100 transition-all pointer-events-none capitalize shadow-xl">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Decoration Bar */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-t-full overflow-hidden">
                  <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-full bg-gradient-to-r ${category.color} opacity-50`}
                  ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16 text-zinc-500 dark:text-zinc-600 italic text-sm font-medium"
        >
          "Always learning and expanding the stack to build better solutions."
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;