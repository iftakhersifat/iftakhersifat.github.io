import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/iftakhersifat', hoverColor: 'group-hover:bg-zinc-800' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/iftakhersifat', hoverColor: 'group-hover:bg-blue-600' },
  { icon: <FaEnvelope />, href: 'mailto:hossensifat615@gmail.com', hoverColor: 'group-hover:bg-red-500' },
  { icon: <FaFacebook />, href: '#', hoverColor: 'group-hover:bg-blue-700' },
];

const Footer = () => {
  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#fafafa] dark:bg-transparent pt-20 mt-24 pb-12 border-t border-gray-100 dark:border-white/5 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          
          {/* --- NEW LOGO ADDED HERE --- */}
          <div className="space-y-6">
            <div onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer group shrink-0">
              <div className="relative w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:rotate-12 transition-all duration-300">
                IH
              </div>
              <div className="flex flex-col -space-y-1">
                <h1 className="text-xl font-black dark:text-white leading-none tracking-tight">
                  Iftakher<span className="text-green-500">.</span>
                </h1>
                <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 dark:text-green-500/60 uppercase">
                  Dev
                </span>
              </div>
            </div>
          </div>

          {/* Connect Section with Fixed Dark Hover */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 transition-all duration-500 ${social.hoverColor} group-hover:text-white group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-current/20 shadow-sm`}>
                  <span className="text-xl relative z-10">{social.icon}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Middle Section: Action & Status Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center py-10 border-y border-zinc-100 dark:border-white/5">
           
           {/* Navigation Links */}
           <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  {item}
                </a>
              ))}
           </div>

           {/* Availability Status Card */}
           <div className="flex justify-center">
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-100 dark:border-white/5 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-black text-zinc-700 dark:text-zinc-400 uppercase tracking-widest">Available for Hire</span>
              </div>
           </div>

           {/* Back to Top Button */}
           <div className="flex justify-center md:justify-end">
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-3 text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] hover:text-green-600 dark:hover:text-green-500 transition-all"
              >
                <span>Back to top</span>
                <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                   <FaChevronUp size={12} />
                </div>
              </button>
           </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} Iftakher Hossen — Personal Portfolio
            </p>
            
            <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-600 opacity-50"></span>
              Based in Chattogram, BD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;