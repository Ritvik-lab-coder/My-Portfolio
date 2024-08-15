import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si"

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6 flex-col md:flex-row'>
            <div className="flex flex-shrink-0 items-center h-8">
                <img src={logo} alt="" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-4xl'>
                <a href="https://www.linkedin.com/in/ritvik-sharma-4483b0311" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://leetcode.com/u/RitvikSharma2004/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
                <a href="https://github.com/Ritvik-lab-coder" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.instagram.com/__ritvik__with__extensions__/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
        </nav>
    )
}
export default Navbar
