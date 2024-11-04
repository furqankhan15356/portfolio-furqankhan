import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Hireme() {
    return (
        <main className="flex justify-center mt-28 mb-52 m-28">
            <div className="p-6 sm:p-10 lg:p-12 bg-black border border-gray-300 rounded-3xl transition-shadow duration-300 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)] max-w-lg sm:max-w-2xl lg:max-w-4xl">
                
                {/* Heading */}
                <div className="text-center text-white mb-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-500 to-purple-100">
                        Contact Me Personally
                    </h1>
                </div>

                {/* Contact Info */}
                <div className="text-center text-white mb-4">
                    <p className="mb-2">
                        You can reach me at <a href="mailto:furqankhan1553@gmail.com" className="text-blue-400">furqankhan1553@gmail.com</a> or call us at <br /><a href="tel:+923110114528" className="text-blue-400">+923110114528</a>.
                    </p>
                    <h2 className="text-lg font-semibold text-purple-400">
                        Connect with us on social media
                    </h2>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 text-lg sm:text-xl text-white">
                <a href="https://www.linkedin.com/in/furqan-k-44991231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0A66C2]">
                    <FaLinkedin />
                </a>

                    <a href="https://github.com/furqankhan15356" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F0F0F0]">
                    <FaGithub />
                </a>
                    <a href="https://www.instagram.com/furqan_khan134?igsh=OWRua3MxcXl3cXow" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E1306C]">
                    <FaInstagram />
                </a>

                <a href="https://wa.me/+923110114528" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366]">
                    <FaWhatsapp />
                </a>
                </div>
            </div>
        </main>
    );
}