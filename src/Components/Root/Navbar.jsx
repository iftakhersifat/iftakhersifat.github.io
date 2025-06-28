import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-5xl mx-auto mt-10 md:p-0 p-4'>
            <div>
                <h1 className="text-xl font-bold text-indigo-600 tracking-wide">&lt;Iftakher/Hossen&gt;</h1>
            </div>
            <div className='space-x-4 hidden md:flex'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition">Skills</a>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="contact">Contact</NavLink>

            </div>
            <div>
                <button className='btn p-4 rounded-xl bg-violet-500 text-white'>GitHub Profile</button>
            </div>
        </div>
    );
};

export default Navbar;