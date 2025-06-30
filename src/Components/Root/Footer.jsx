import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/iftakhersifat',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/iftakhersifat',
    label: 'LinkedIn',
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:hossensifat615@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#28AF49] backdrop-blur-md dark:bg-black/50 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center text-white">
        <h3 className="text-2xl md:text-2xl font-bold tracking-wide mb-4">
          &lt;Iftakher / Hossen&gt;
        </h3>

        <p className="text-sm md:text-base italic mb-6">
          “Building creative, scalable & user-first solutions on the web.”
        </p>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-green-100 transition">About</a></li>
            <li><a href="#skills" className="hover:text-green-100 transition">Skills</a></li>
            <li><a href="#career" className="hover:text-green-100 transition">Career</a></li>
            {/* <li><a href="#projects" className="hover:text-green-100 transition">Projects</a></li> */}
            <li><a href="#contact" className="hover:text-green-100 transition">Contact</a></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-white hover:text-green-100 transition"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-white opacity-80">
          &copy; {new Date().getFullYear()} Iftakher Hossen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
