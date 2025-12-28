import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiArrowRight, FiHome, FiUser, FiCode, FiBriefcase, FiLayers, FiMail } from 'react-icons/fi';

const navItems = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser /> },
  { id: 'skills', label: 'Skills', icon: <FiCode /> },
  { id: 'career', label: 'Career', icon: <FiBriefcase /> }, 
  { id: 'projects', label: 'Projects', icon: <FiLayers /> },
  { id: 'contact', label: 'Contact', icon: <FiMail /> },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  // Theme logic
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) setActiveId('home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-3 md:px-6 lg:px-10 py-4 md:py-6 pointer-events-none transition-all duration-500">
      <header 
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 rounded-2xl transition-all duration-500 pointer-events-auto border ${
          scrolled 
            ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800 shadow-2xl shadow-green-900/5' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <div onClick={(e) => handleClick(e, 'home')} className="flex items-center gap-3 cursor-pointer group shrink-0">
          <div className="relative w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-green-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            IH
          </div>
          <div className="flex flex-col -space-y-1">
            <h1 className="text-xl font-black dark:text-white leading-none tracking-tight">Iftakher<span className="text-green-500">.</span></h1>
            <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 dark:text-green-500/60 uppercase">Developer</span>
          </div>
        </div>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/50 dark:bg-zinc-800/40 p-1.5 rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all duration-500 ${
                activeId === item.id 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' 
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all pointer-events-auto"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} className="text-yellow-400" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="hidden xl:flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-green-600 dark:hover:bg-green-500 dark:hover:text-white transition-all shadow-xl pointer-events-auto"
          >
            Hire Me <FiArrowRight />
          </a>

          {/* --- PROFESSIONAL HAMBURGER --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 pointer-events-auto group relative overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 transition-all duration-300">
              <span className={`h-0.5 bg-zinc-800 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-zinc-800 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4 ml-auto'}`} />
              <span className={`h-0.5 bg-zinc-800 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-0' : 'w-6'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* --- PROFESSIONAL MOBILE MENU --- */}
      <div className={`fixed inset-x-4 bottom-6 z-[110] transition-all duration-700 md:hidden pointer-events-auto ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
        }`}
      >
        <div className="max-w-md mx-auto bg-white/90 dark:bg-zinc-900/95 backdrop-blur-2xl rounded-[2.5rem] p-4 border border-zinc-200/50 dark:border-zinc-800 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
          <nav className="grid grid-cols-2 gap-2">
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`flex flex-col items-center justify-center gap-2 py-5 rounded-[2rem] transition-all duration-500 border ${
                  activeId === item.id 
                    ? 'bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/30' 
                    : 'bg-zinc-50 dark:bg-zinc-800/50 border-transparent text-zinc-500 dark:text-zinc-400'
                }`}
              >
                <span className={`text-xl ${activeId === item.id ? 'text-white' : 'text-green-500'}`}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
              </a>
            ))}
          </nav>
          
          {/* Footer of Menu */}
        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col items-center        gap-2">
         <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/20">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400        opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
           </span>
           <span className="text-[8px] font-black uppercase tracking-widest text-green-600        dark:text-green-400">Available for Work</span>
         </div>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;