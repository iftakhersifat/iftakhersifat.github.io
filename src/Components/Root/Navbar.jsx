import React, { useState, useEffect } from 'react';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'career', label: 'Career' },
  // { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0.3, 0.5],
      }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentId = 'home';
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentId = id;
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/70 backdrop-blur-lg shadow-md rounded-b-xl">
  <div className="max-w-5xl mx-auto px-6 md:px-14 lg:px-0 py-3 flex items-center justify-between">
    <h1 className="text-xl font-bold text-green-600 tracking-wide">
      &lt;Iftakher/Hossen&gt;
    </h1>

    <nav className="hidden md:flex space-x-6 text-sm font-medium">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={handleClick}
          className={`transition-colors cursor-pointer ${
            activeId === item.id
              ? 'text-green-600 font-semibold'
              : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>

    <a
      href="https://github.com/iftakhersifat"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-white text-sm font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition transform hover:scale-105"
    >
      <FiGithub size={18} />
      GitHub Profile
    </a>

    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-green-600 focus:outline-none"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
  </div>

  {isOpen && (
    <div className="absolute top-full left-0 w-full bg-white dark:bg-black rounded-b-xl shadow-md mt-2 md:hidden z-40">
      <nav className="flex flex-col items-start px-6 py-4 gap-4 max-w-5xl mx-auto">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleClick}
            className={`w-full text-sm transition-colors ${
              activeId === item.id
                ? 'text-green-600 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://github.com/iftakhersifat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full mt-2 px-5 py-3 text-white text-sm font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition transform hover:scale-105"
        >
          <FiGithub size={18} />
          GitHub Profile
        </a>
      </nav>
    </div>
  )}
</header>

  );
};

export default Navbar;
