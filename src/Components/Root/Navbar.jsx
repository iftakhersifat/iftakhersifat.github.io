import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between sticky top-4 h-fit max-w-5xl mx-auto mt-10 md:p-0 p-4'>
            <div>
                <h1 className="text-xl font-bold text-indigo-600 tracking-wide">&lt;Iftakher/Hossen&gt;</h1>
            </div>
            <div className='space-x-4 hidden md:flex'>

                <a href="#home" className="text-gray-700 hover:text-green-600 transition" >Home</a>
                <a href="#about" className="text-gray-700 hover:text-green-600 transition" >About</a>
                <a href="#skills" className="text-gray-700 hover:text-green-600 transition">Skills</a>
                <a href="#career" className="text-gray-700 hover:text-green-600 transition" >Career</a>
                <a href="#projects" className="text-gray-700 hover:text-green-600 transition" >Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 transition" >Contact</a>

            </div>
            <div>
                <button className='btn p-4 rounded-xl bg-violet-500 text-white'>GitHub Profile</button>
            </div>
        </div>
    );
};

export default Navbar;