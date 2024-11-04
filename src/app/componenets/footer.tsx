import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center sm:flex-row justify-between h-40 sm:h-32 bg-black rounded-full mx-3 mb-3 sm:mx-5 sm:mb-5 shadow-lg relative px-4 sm:px-10 py-4 sm:py-0">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)] opacity-30"></div>

            {/* Navigation links */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-purple-300 font-bold text-lg sm:text-xl mb-3 sm:mb-0">
                <a href="/home" className="hover:text-purple-50">Home</a>
                <a href="/about" className="hover:text-purple-50">About</a>
                <a href="/contact" className="hover:text-purple-50">Contact</a>
            </div>

            {/* Social media icons */}
            <div className="relative z-10 flex space-x-6 text-lg sm:text-xl mb-4 sm:mb-0">
                <a href="https://www.linkedin.com/in/furqan-k-44991231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0A66C2]">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/furqankhan15356" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F0F0F0]">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/furqan_khan134?igsh=OWRua3MxcXl3cXow" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E1306C]">
                    <FaInstagram />
                </a>
            </div>

            {/* Copyright line */}
            <div className="relative z-10 text-center text-xs text-purple-300 font-light w-full sm:w-auto mt-3 sm:mt-0">
                &copy; {new Date().getFullYear()} Furqan Khan. All rights reserved.
            </div>
        </footer>
    );
}