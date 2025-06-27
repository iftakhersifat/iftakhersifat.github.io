import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-10'>
            <div>
                <h1>Iftakher / Hossen</h1>
            </div>
            <div className='space-x-4'>
                <NavLink to="home">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="skills">Skills</NavLink>
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