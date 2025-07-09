'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaLaptopCode, 
  FaBrain, 
  FaGraduationCap, 
  FaDownload, 
  FaRobot 
} from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 to-stone-800 text-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-stone-700">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 lg:p-6 max-w-7xl mx-auto gap-4 sm:gap-0">
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm lg:text-base">
            <Link 
              href="/" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-amber-400/10"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-amber-400 border-b-2 border-amber-400 px-2 py-1"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-amber-400/10"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-amber-400/10"
            >
              Contact
            </Link>
          </div>
          
          <a 
            href="/CV.pdf" 
            download="Asharib_Shahid_CV.pdf"
            className="bg-amber-600 hover:bg-amber-500 text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm lg:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FaDownload className="text-sm" /> 
            Download CV
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I&apos;m <span className="text-amber-400">Asharib Shahid</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 font-light text-amber-200">
              Web Developer & Agentic AI Specialist
            </h2>
            <p className="text-base lg:text-lg mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0 text-amber-100/90">
              A 17 y/o self-driven and tech-savvy student with a passion for modern web development 
              and Artificial Intelligence. I specialize in building full-stack web applications 
              and integrating AI to create future-forward digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <Link 
                href="https://github.com/asharibshahid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaGithub /> GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/asharib-shahid-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaLinkedin /> LinkedIn
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full overflow-hidden border-4 border-amber-400/30 shadow-2xl">
                <Image
                  src="/pfp2.jpeg"
                  alt="Asharib Shahid"
                  className="rounded-full object-cover w-full h-full"
                  width={256}
                  height={256}
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-stone-800 px-3 py-2 rounded-full border-2 border-amber-400 shadow-lg">
                <span className="text-amber-400 font-bold text-xs sm:text-sm flex items-center gap-1">
                  <FaRobot />
                  AI Enthusiast
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-stone-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              My Core Expertise
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-stone-800/70 p-6 lg:p-8 rounded-xl border border-stone-700 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
              <div className="text-amber-400 mb-4">
                <FaLaptopCode className="text-3xl lg:text-4xl" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">
                Full-Stack Web Development
              </h3>
              <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                Building responsive, modern web applications using Next.js, React, 
                TypeScript, and Tailwind CSS. Expertise in API integration and CMS 
                solutions like Sanity.
              </p>
            </div>
            
            <div className="bg-stone-800/70 p-6 lg:p-8 rounded-xl border border-stone-700 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
              <div className="text-amber-400 mb-4">
                <FaBrain className="text-3xl lg:text-4xl" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">
                Agentic AI Solutions
              </h3>
              <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                Developing AI-powered tools and productivity solutions using Python 
                and prompt engineering. Creating intelligent systems that automate 
                complex workflows.
              </p>
            </div>
            
            <div className="bg-stone-800/70 p-6 lg:p-8 rounded-xl border border-stone-700 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="text-amber-400 mb-4">
                <FaGraduationCap className="text-3xl lg:text-4xl" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">
                Continuous Learning
              </h3>
              <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                Committed to staying at the forefront of technology. Currently 
                expanding knowledge in AGI, Web3, and advanced AI concepts through 
                formal education and self-driven projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 pb-3 border-b-2 border-amber-400/30">
              Experience
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-amber-400 pl-6 py-2 hover:bg-stone-800/20 transition-all duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold">
                    AI Automation Engineer
                  </h3>
                  <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    2025-Present
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-3 text-sm lg:text-base">
                  zApps Consulting
                </p>
                <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                  Developed multiple intelligent AI agents using Python, OpenAI/Gemini APIs. 
                  Specialized in automating business processes and focused on scalable, 
                  agentic automation solutions for businesses.
                </p>
              </div>

              <div className="border-l-4 border-amber-400 pl-6 py-2 hover:bg-stone-800/20 transition-all duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold">
                    Full Stack Developer
                  </h3>
                  <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    2025-Present
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-3 text-sm lg:text-base">
                  Freelance
                </p>
                <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                  Developed multiple responsive web applications using Next.js, TypeScript, 
                  and integrated APIs with CMS and Web3Form solutions for international clients.
                </p>
              </div>
              
              <div className="border-l-4 border-amber-400 pl-6 py-2 hover:bg-stone-800/20 transition-all duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold">
                    AI Agent Developer
                  </h3>
                  <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    Jan 2025-Present
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-3 text-sm lg:text-base">
                  Self Project | For SaaS
                </p>
                <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                  Fully Autonomous AI HR Agent that can grab attendance by scanning faces, call employees at home 
                  and talk in local language, calculate salary and transfer payments to bank accounts upon employee confirmation.
                </p>
              </div>
              
              <div className="border-l-4 border-amber-400 pl-6 py-2 hover:bg-stone-800/20 transition-all duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold">
                    Hackathon Participant
                  </h3>
                  <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    2025
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-3 text-sm lg:text-base">
                  GIAIC Hackathon, Karachi
                </p>
                <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                  Built a functional e-commerce site in 48 hours using Next.js, 
                  Tailwind CSS, and Sanity CMS.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education & Skills */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 pb-3 border-b-2 border-amber-400/30">
              Education
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-amber-400 pl-6 py-2 hover:bg-stone-800/20 transition-all duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold">
                    Web & Agentic AI Engineering
                  </h3>
                  <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    2023-2025
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-3 text-sm lg:text-base">
                  GIAIC - Karachi
                </p>
                <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                  Focus: AI, Python, Web Development, AGI (Governor&apos;s Initiative for AI & Computing)
                </p>
              </div>
              
              <div className="border-l-4 border-amber-400 pl-6 py-2 hover:bg-stone-800/20 transition-all duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold">
                    Intermediate 1st Year
                  </h3>
                  <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    2025
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-3 text-sm lg:text-base">
                  Private College - Karachi
                </p>
                <p className="text-amber-100/80 text-sm lg:text-base leading-relaxed">
                  Field: Computer Science
                </p>
              </div>
              
              <div className="border-l-4 border-amber-400 pl-6 py-2 hover:bg-stone-800/20 transition-all duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg lg:text-xl font-bold">
                    Hafiz Al Quran
                  </h3>
                  <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    2023
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-3 text-sm lg:text-base">
                  Taneem al Madaris - Karachi Pak
                </p>
              </div>
            </div>
            
            {/* Technical Skills */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 pb-3 border-b-2 border-amber-400/30">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'Next.js', 'React.js', 'TypeScript', 'Python', 'OpenAI API', 'Gemini API',
                  'Agentic AI', 'Automation', 'Tailwind CSS', 'API Integration', 'Sanity CMS', 'AI Agents'
                ].map((skill) => (
                  <div 
                    key={skill}
                    className="bg-stone-800/70 py-3 px-4 rounded-lg text-center text-sm lg:text-base hover:bg-amber-400/20 hover:text-amber-400 transition-all duration-300 cursor-default border border-stone-700 hover:border-amber-400/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 px-4 lg:px-6 bg-gradient-to-r from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-base lg:text-lg mb-8 max-w-2xl mx-auto text-amber-100/80 leading-relaxed">
            Whether you need a cutting-edge web application or AI-powered automation solutions, 
            I&apos;m ready to bring your ideas to life. Let&apos;s create something amazing together.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-lg hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 lg:px-6 border-t border-stone-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-lg lg:text-xl font-bold">
              <span className="text-amber-400">A</span>SHARIB SHAHID
            </div>
            <p className="text-amber-100/60 text-sm mt-1">
              Web Developer & Agentic AI Specialist
            </p>
          </div>
          <div className="flex gap-6">
            <Link 
              href="https://github.com/asharibshahid" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-100/60 hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaGithub className="text-xl" />
            </Link>
            <Link 
              href="https://linkedin.com/in/asharib-shahid-/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-100/60 hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaLinkedin className="text-xl" />
            </Link>
            <Link 
              href="https://x.com/AsharibSheikh01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-100/60 hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaTwitter className="text-xl" />
            </Link>
            <Link 
              href="https://asharib.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-100/60 hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaLaptopCode className="text-xl" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
