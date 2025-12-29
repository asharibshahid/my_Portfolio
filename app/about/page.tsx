
"use client"
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode, FaBrain, FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

const AboutPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 to-stone-800 text-amber-50">
      
      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 w-full z-50 backdrop-blur-md bg-stone-900/90 border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Download CV Button */}
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV.pdf';
                link.download = 'CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 text-sm"
            >
              Download CV
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-full bg-amber-500/20 border border-amber-400/30 hover:bg-amber-500/30 transition-all duration-300"
            >
              {isMobileMenuOpen ? <FaTimes className="text-amber-400" /> : <FaBars className="text-amber-400" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-stone-900/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out border-l border-amber-400/20 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col p-6 space-y-6 mt-20">
          <Link 
            href="/" 
            className="text-amber-100 hover:text-amber-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-amber-400/10 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className="text-amber-100 hover:text-amber-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-amber-400/10 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className="text-amber-400 bg-amber-400/10 py-2 px-4 rounded-lg text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-amber-100 hover:text-amber-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-amber-400/10 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          {/* Social Links in Mobile Menu */}
          <div className="flex space-x-4 pt-4 border-t border-amber-400/20">
            <a href="https://github.com/asharibshahid" className="text-amber-100/60 hover:text-amber-400 transition-colors p-2">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/asharib-shahid-/" className="text-amber-100/60 hover:text-amber-400 transition-colors p-2">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/AsharibSheikh01" className="text-amber-100/60 hover:text-amber-400 transition-colors p-2">
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Add padding-top for mobile to account for fixed navbar */}
      <div className="pt-16 lg:pt-0">

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-amber-400/10 rounded-full overflow-hidden border-4 border-amber-400/30">
                <Image
                  src="/pfp2.png"
                  alt="Asharib Shahid"
                  className="rounded-full object-cover w-full h-full"
                  width={256}
                  height={256}
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-stone-800 px-3 py-1 md:px-4 md:py-2 rounded-full border border-amber-400">
                <span className="text-amber-400 font-bold text-sm md:text-base">Agentic AI Enthusiast</span>
              </div>
            </div>
          </div>
          
          <div className="md:order-1 md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
              Hi, Im <span className="text-amber-400">Asharib Shahid</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 md:mb-6 font-light text-amber-200">
              WEB & AGENTIC AI ENGINEER
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl leading-relaxed">
              Tech focused developer from the AI & Computing (GIAIC) program with
1.5 years of hands-on experience in modern web development and
Agentic AI automation. Skilled in building scalable fullstack applications
with Next.js and engineering intelligent agents that improve
productivity and workflows. Successfully worked with 10+ clients on
real projects and earned 3 Job offer letters within 9 months of starting
my career. Dedicated to continuous learning, delivering reliable digital
solutions, and building future ready AI driven products
            </p>
            

            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://github.com/asharibshahid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md flex items-center transition-colors text-sm md:text-base"
              >
                <FaGithub className="mr-2" /> GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/asharib-shahid-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-amber-400 text-amber-400 hover:bg-amber-400/10 px-4 py-2 md:px-6 md:py-3 rounded-md flex items-center transition-colors text-sm md:text-base"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your existing content remains exactly the same */}
      {/* Core Expertise */}
    
        {/* ... your existing core expertise section ... */}
         <section className="py-12 md:py-16 px-4 md:px-6 bg-stone-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">My Core Expertise</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-stone-800/70 p-6 md:p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all">
              <div className="text-amber-400 mb-4">
                <FaLaptopCode className="text-3xl md:text-4xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Full-Stack Web Development</h3>
              <p className="text-amber-100/80 text-sm md:text-base">
                Building responsive, modern web applications using Next.js, React, 
                TypeScript, and Tailwind CSS. Expertise in API integration and CMS 
                solutions like Sanity.
              </p>
            </div>
            
            <div className="bg-stone-800/70 p-6 md:p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all">
              <div className="text-amber-400 mb-4">
                <FaBrain className="text-3xl md:text-4xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Agentic AI Solutions</h3>
              <p className="text-amber-100/80 text-sm md:text-base">
                Developing AI-powered tools and productivity solutions using Python 
                and prompt engineering. Creating intelligent systems that automate 
                complex workflows.
              </p>
            </div>
            
            <div className="bg-stone-800/70 p-6 md:p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all">
              <div className="text-amber-400 mb-4">
                <FaGraduationCap className="text-3xl md:text-4xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-amber-100/80 text-sm md:text-base">
                Committed to staying at the forefront of technology. Currently 
                expanding knowledge in AGI, Web3, and advanced AI concepts through 
                formal education and self-driven projects.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Experience & Education */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6 max-w-7xl mx-auto">
        {/* ... your existing experience & education section ... */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-amber-400/30">
              Experience
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    Agentic AI Engineer
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2025 Present Onsite
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-xs sm:text-sm lg:text-base">
                  Vertex Sphere
                </p>
                <p className="text-amber-100/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Have To Work In LLMS Agentic Ai Patterns And Systems Building AI Agents That Can Work Autonomously To Solve Complex Problems And Automate Tasks.
                  Integrate AI Solutions Into Existing Workflows And Products like whatsapp.
                  Continuously Research And Experiment With Emerging AI Technologies To Enhance Agent Capabilities And Performance.
                </p>
              </div>
              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    AI Automation Engineer
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2025 Onsite
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-xs sm:text-sm lg:text-base">
                  zApps Consulting
                </p>
                <p className="text-amber-100/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Developed multiple intelligent AI agents using Python, OpenAI/Gemini APIs. 
                  Specialized in automating business processes and focused on scalable, 
                  agentic automation solutions for businesses.
                </p>
              </div>

              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    Full Stack Developer
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2024
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-xs sm:text-sm lg:text-base">
                  Freelance
                </p>
                <p className="text-amber-100/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Developed multiple responsive web applications using Next.js, TypeScript, 
                  and integrated APIs with CMS and Web3Form solutions for international clients.
                </p>
              </div>
              
            
              
              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    Hackathon Participant
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2023
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-xs sm:text-sm lg:text-base">
                  GIAIC Hackathon, Karachi
                </p>
                <p className="text-amber-100/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Built a functional e-commerce site in 48 hours using Next.js, 
                  Tailwind CSS, and Sanity CMS.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-amber-400/30">
              Education
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    Web & Agentic AI Engineering
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2023-2025
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-xs sm:text-sm lg:text-base">
                  GIAIC - Karachi
                </p>
                <p className="text-amber-100/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Focus: AI, Python, Web Development, AGI (Governor&apos;s Initiative for AI & Computing)
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    Intermediate 1st Year
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2025
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-xs sm:text-sm lg:text-base">
                  Private College - Karachi
                </p>
                <p className="text-amber-100/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Field: Computer Science
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    Hafiz Al Quran
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2023
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-xs sm:text-sm lg:text-base">
                  Taneem al Madaris - Karachi Pak
                </p>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-amber-400/30">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Agents Sdk
                </div>
                  <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Prompt Engineering
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  OpenAI API
                </div>
               
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Agentic AI
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Ai Automation 
                </div>

                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Next.js
                </div>
               
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  TypeScript
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Python
                </div>
                
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Tailwind CSS
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  API Integration
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Sanity CMS
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Databases
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-stone-700">
        {/* ... your existing footer ... */}
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-lg md:text-xl font-bold">
              <span className="text-amber-400">A</span>SHARIB SHAHID
            </div>
            <p className="text-amber-100/60 text-xs md:text-sm mt-1">
              Web Developer & Agentic AI Specialist
            </p>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <Link href="https://github.com/asharibshahid" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaGithub className="text-lg md:text-xl" />
            </Link>
            <Link href="https://linkedin.com/in/asharib-shahid-/" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaLinkedin className="text-lg md:text-xl" />
            </Link>
            <Link href="https://x.com/AsharibSheikh01" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaTwitter className="text-lg md:text-xl" />
            </Link>
            <Link href="https://asharib.vercel.app" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaLaptopCode className="text-lg md:text-xl" />
            </Link>
          </div>
        </div>
      </footer>

      </div>
    </div>
  );
};

export default AboutPage;




