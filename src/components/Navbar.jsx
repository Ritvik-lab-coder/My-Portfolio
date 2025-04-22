import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si"
import { Link } from 'react-router-dom'

const navLinkStyle =
    'relative transition duration-300 text-white hover:text-[#BD8BDE]';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6 flex-col md:flex-row'>
            <div className="flex flex-shrink-0 items-center h-8">
                <img src={logo} alt="Logo" />
            </div>

            {/* NAVIGATION LINKS */}
            <div className='m-8 flex items-center justify-center gap-6 text-lg md:text-xl'>
                {['Home', 'Education', 'Projects', 'Achievements'].map((label, idx) => (
                    <Link
                        to={`/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`}
                        key={idx}
                        className={`${navLinkStyle} group`}
                    >
                        {label}
                        <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-[#BD8BDE] transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className='m-8 flex items-center justify-center gap-4 text-3xl md:text-4xl text-white'>
                <a href="https://www.linkedin.com/in/ritvik-sharma-4483b0311" target="_blank" rel="noopener noreferrer" className='hover:text-[#BD8BDE] transition duration-300'>
                    <FaLinkedin />
                </a>
                <a href="https://leetcode.com/u/RitvikSharma2004/" target="_blank" rel="noopener noreferrer" className='hover:text-[#BD8BDE] transition duration-300'>
                    <SiLeetcode />
                </a>
                <a href="https://github.com/Ritvik-lab-coder" target="_blank" rel="noopener noreferrer" className='hover:text-[#BD8BDE] transition duration-300'>
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/__ritvik__with__extensions__/" target="_blank" rel="noopener noreferrer" className='hover:text-[#BD8BDE] transition duration-300'>
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
