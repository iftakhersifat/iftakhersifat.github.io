import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiArrowRight } from 'react-icons/fi';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'career', label: 'Career' }, 
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
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

  // Intersection Observer to update active state
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
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-3 md:px-6 lg:px-10 py-4 md:py-6 pointer-events-none transition-all duration-500">
      <header 
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 rounded-2xl transition-all duration-500 pointer-events-auto border ${
          scrolled 
            ? 'bg-white/90 dark:bg-transparent backdrop-blur-2xl border-white/20 dark:border-zinc-800 shadow-xl shadow-green-900/5' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <div onClick={(e) => handleClick(e, 'home')} className="flex items-center gap-3 cursor-pointer group shrink-0">
          <div className="relative w-9 h-9 md:w-10 md:h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-black text-xs md:text-sm shadow-lg group-hover:rotate-12 transition-all">
            IH
          </div>
          <div className="flex flex-col -space-y-1">
            <h1 className="text-lg md:text-xl font-black dark:text-white leading-none">Iftakher<span className="text-green-500">.</span></h1>
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-zinc-400 dark:text-green-500/60 uppercase">Dev</span>
          </div>
        </div>

        {/* --- DESKTOP & MEDIUM NAV --- */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-zinc-100/50 dark:bg-zinc-800/40 p-1 rounded-xl md:rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`px-3 lg:px-5 py-2 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.1em] rounded-lg md:rounded-xl transition-all duration-500 ${
                activeId === item.id 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105' 
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button 
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-xl md:rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-all"
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} className="text-yellow-400" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="hidden xl:flex items-center gap-2 px-5 py-3 bg-green-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
          >
            Hire Me <FiArrowRight />
          </a>

          {/* Hamburger (Mobile only) */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1 rounded-xl bg-zinc-100 dark:bg-zinc-800"
          >
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-4 rotate-45 translate-y-1.5 bg-green-500' : 'w-4'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-2.5 self-end mr-2.5'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-4 -rotate-45 -translate-y-0 bg-green-500' : 'w-4'}`} />
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <div className={`fixed inset-x-4 bottom-8 z-[110] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
          isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-32 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="max-w-md mx-auto bg-white/98 dark:bg-zinc-900/98 backdrop-blur-3xl rounded-[2.5rem] p-5 border border-zinc-200/50 dark:border-zinc-800 shadow-2xl">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`flex items-center justify-between px-6 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                  activeId === item.id 
                    ? 'bg-green-600 text-white shadow-xl shadow-green-600/40 translate-x-2' 
                    : 'bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {item.label}
                <span className={`text-[9px] font-bold ${activeId === item.id ? 'opacity-50' : 'text-green-500'}`}>0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;