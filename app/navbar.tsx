"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail, Code, Brain, Globe, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    "Full-Stack Developer",
    "Agentic ai Engineer", 
    "Next.js Expert",
    "Python Developer",
    "Hafiz-e-Quran"

  ];

  const techStack = [
    { name: "Next.js", color: "bg-black text-white" },
    { name: "React", color: "bg-blue-500 text-white" },
    { name: "TypeScript", color: "bg-blue-600 text-white" },
    { name: "Python", color: "bg-yellow-500 text-black" },
    { name: "Agentic Ai", color: "bg-purple-600 text-white" },
    { name: "Tailwind", color: "bg-cyan-500 text-white" }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="backdrop-blur-md bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Asharib
              </div>
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
        </div>
      </nav>

      {/* Hero Section */}
       <br />
   <br />
    <br />
   <br />
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Profile Image */}
          <div className={`mb-8 transition-all duration-1500 delay-300 ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 rounded-full animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center">
          
                  <Image
                    src="/pfp.png"
                    alt="Asharib Shahid"
                    className="rounded-full object-cover w-full h-full"
                    width={200}
                    height={200}
                  />
             
             
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className={`mb-6 transition-all duration-1500 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Asharib Shahid
            </h1>
            <div className="text-xl sm:text-2xl text-gray-300 mb-4">
              <span className="inline-block">17-year-old </span>
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">AGENTIC AI </span>
              <span className="inline-block"> & </span>
              <span className="inline-block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Full-Stack Developer</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Building AI-powered futures with modern web technologies while staying rooted in Islamic values
            </p>
          </div>

          {/* Animated Skills */}
          <div className={`mb-8 transition-all duration-1500 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-2xl sm:text-3xl font-semibold mb-4">
              <span className="text-gray-300">I'm a </span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500">
                {skills[currentSkill]}
              </span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className={`mb-12 transition-all duration-1500 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {techStack.map((tech, index) => (
                <span
                  key={tech.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg ${tech.color}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`mb-16 transition-all duration-1500 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center justify-center">
                  <Code className="mr-2" size={20} />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              </Link>
              <Link href="/contact">
              
              <button className="group px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center">
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </span>
              </button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`mb-16 transition-all duration-1500 delay-1300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-400">International Projects</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2023</div>
                <div className="text-gray-400">Started Coding</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Q4</div>
                <div className="text-gray-400">GIAIC Graduate</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">AI Agent</div>
                <div className="text-gray-400">Specialized</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <br />
        <br />
         <br />
        <br />
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            onClick={scrollToSection}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="animate-bounce group-hover:scale-110 transition-transform duration-300" size={24} />
          </button>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 opacity-20">
          <Brain className="text-purple-400 animate-pulse" size={32} />
        </div>
        <div className="absolute top-1/3 right-10 opacity-20">
          <Globe className="text-cyan-400 animate-pulse delay-1000" size={28} />
        </div>
        <div className="absolute bottom-1/4 left-20 opacity-20">
          <Zap className="text-yellow-400 animate-pulse delay-2000" size={24} />
        </div>
        <div className="absolute top-1/2 right-20 opacity-20">
          <Code className="text-green-400 animate-pulse delay-3000" size={30} />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;