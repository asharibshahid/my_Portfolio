"use client"
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Portfolio = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Asharib_Cv.pdf'; // Make sure this file is in your public folder
    link.download = 'Asharib_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Download CV Button */}
          <button 
            onClick={handleDownloadCV}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </button>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300">Work</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/asharibshahid" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/asharib-shahid-/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/AsharibSheikh01" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Portfolio;
