// app/about/page.tsx
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode, FaBrain, FaGraduationCap, FaDownload } from 'react-icons/fa';
import Image from "next/image";
import Link from 'next/link';

const NavBar = () => (
  <nav className="flex flex-col md:flex-row justify-between items-center p-6 max-w-6xl mx-auto gap-4">
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <Link href="/" className="hover:text-amber-400 transition-colors text-sm md:text-base">Home</Link>
      <Link href="/about" className="text-amber-400 border-b border-amber-400 text-sm md:text-base">About</Link>
      <Link href="/projects" className="hover:text-amber-400 transition-colors text-sm md:text-base">Projects</Link>
      <Link href="/contact" className="hover:text-amber-400 transition-colors text-sm md:text-base">Contact</Link>
    </div>
    
    <a 
      href="/CV.pdf" 
      download
      className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-md transition-colors text-sm md:text-base"
    >
      <FaDownload /> Download CV
    </a>
  </nav>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 to-stone-800 text-amber-50">
      <NavBar />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-amber-400/10 rounded-full overflow-hidden border-4 border-amber-400/30">
                <Image
                  src="/pfp2.jpeg"
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
              Web Developer & Agentic AI Specialist
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl leading-relaxed">
              A 17 y/o self-driven and tech-savvy student with a passion for modern web development 
              and Artificial Intelligence. I specialize in building full-stack web applications 
              and integrating AI to create future-forward digital solutions.
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

      {/* Core Expertise */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-amber-400/30">
              Experience
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    AI Automation Engineer
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2025-Present-Onsite
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
                    2025-Present
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
                    AI Agent Developer
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    Jan 2025-Present
                  </span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-xs sm:text-sm lg:text-base">
                  Self Project | For SaaS
                </p>
                <p className="text-amber-100/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Fully Autonomous AI HR Agent that can grab attendance by scanning faces, call employees at home 
                  and talk in local language, calculate salary and transfer payments to bank accounts upon employee confirmation.
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-3 sm:pl-4 lg:pl-6 py-1 hover:bg-stone-800/20 transition-colors duration-300 rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    Hackathon Participant
                  </h3>
                  <span className="bg-amber-400/10 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                    2025
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
                  Next.js
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  React.js
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  TypeScript
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Python
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  OpenAI API
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Gemini API
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Agentic AI
                </div>
                <div className="bg-stone-800/70 py-2 px-2 sm:px-3 lg:px-4 rounded text-center text-xs sm:text-sm lg:text-base hover:bg-amber-400/10 transition-colors duration-300">
                  Automation
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
                  AI Agents
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-stone-700">
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
  );
};

export default AboutPage;
