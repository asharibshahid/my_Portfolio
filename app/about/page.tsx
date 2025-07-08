// app/about/page.js
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode, FaBrain, FaGraduationCap, FaDownload } from 'react-icons/fa';
import Image from "next/image"
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 to-stone-800 text-amber-50">
      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto gap-4 sm:gap-0">
        <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 text-sm sm:text-base">
          <Link href="/" className="hover:text-amber-400 transition-colors whitespace-nowrap">Home</Link>
          <Link href="/about" className="text-amber-400 border-b border-amber-400 whitespace-nowrap">About</Link>
          <Link href="/projects" className="hover:text-amber-400 transition-colors whitespace-nowrap">Projects</Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors whitespace-nowrap">Contact</Link>
        </div>
        
        {/* Download CV Button */}
        <Link 
          href="/CV.pdf" 
          download="Asharib_Shahid_CV.pdf"
          className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-md flex items-center transition-colors text-sm sm:text-base whitespace-nowrap"
        >
          <FaDownload className="mr-2" /> Download CV
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
              Hi, I'm <span className="text-amber-400">Asharib Shahid</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 font-light text-amber-200 text-center lg:text-left">
              Web Developer & Agentic AI Specialist
            </h2>
            <p className="text-base sm:text-lg mb-8 max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              A 17 y/o self-driven and tech-savvy student with a passion for modern web development 
              and Artificial Intelligence. I specialize in building full-stack web applications 
              and integrating AI to create future-forward digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center lg:items-start">
              <Link 
                href="https://github.com/asharibshahid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-md flex items-center transition-colors w-full sm:w-auto justify-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/asharib-shahid-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-amber-400 text-amber-400 hover:bg-amber-400/10 px-6 py-3 rounded-md flex items-center transition-colors w-full sm:w-auto justify-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </Link>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-amber-400/10 rounded-full overflow-hidden border-4 border-amber-400/30">
                <Image
                  src="/pfp2.jpeg"
                  alt="Asharib Shahid"
                  className="rounded-full object-cover w-full h-full"
                  width={256}
                  height={256}
                />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-stone-800 px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-amber-400">
                <span className="text-amber-400 font-bold text-xs sm:text-sm">Agentic AI Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 bg-stone-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Core Expertise</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-stone-800/70 p-6 sm:p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all">
              <div className="text-amber-400 mb-4">
                <FaLaptopCode className="text-3xl sm:text-4xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Full-Stack Web Development</h3>
              <p className="text-amber-100/80 text-sm sm:text-base">
                Building responsive, modern web applications using Next.js, React, 
                TypeScript, and Tailwind CSS. Expertise in API integration and CMS 
                solutions like Sanity.
              </p>
            </div>
            
            <div className="bg-stone-800/70 p-6 sm:p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all">
              <div className="text-amber-400 mb-4">
                <FaBrain className="text-3xl sm:text-4xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Agentic AI Solutions</h3>
              <p className="text-amber-100/80 text-sm sm:text-base">
                Developing AI-powered tools and productivity solutions using Python 
                and prompt engineering. Creating intelligent systems that automate 
                complex workflows.
              </p>
            </div>
            
            <div className="bg-stone-800/70 p-6 sm:p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all md:col-span-2 lg:col-span-1">
              <div className="text-amber-400 mb-4">
                <FaGraduationCap className="text-3xl sm:text-4xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-amber-100/80 text-sm sm:text-base">
                Committed to staying at the forefront of technology. Currently 
                expanding knowledge in AGI, Web3, and advanced AI concepts through 
                formal education and self-driven projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-amber-400/30">Experience</h2>
              <div className="space-y-6 sm:space-y-8">
              <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 py-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">Ai Automation Eng</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm self-start">2025-Present</span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-sm sm:text-base">
                  Onsite
                </p>
                <p className="text-amber-100/80 text-sm sm:text-base">
                  Developed multiple Ai Agents That Can Automate The work Like I've Build COLD Caling Agents And thats Type of More ...Working On Custom OPenAI AGent, N8n ,Zapier , Buit With Code Too ...
                </p>
              </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 py-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">Full Stack Developer</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm self-start">2025-Present</span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-sm sm:text-base">
                  Freelance
                </p>
                <p className="text-amber-100/80 text-sm sm:text-base">
                  Developed multiple responsive web applications using Next.js, TypeScript, 
                  and integrated APIs with CMS and Web3Form solutions for international clients.
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 py-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">AI Agent Developer</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm self-start">Jan 2025-Present</span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-sm sm:text-base">Self Project | For SaaS</p>
                <p className="text-amber-100/80 text-sm sm:text-base">
                  Fully Autonomous AI HR Agent that can grab attendance by scanning faces, call employees at home 
                  and talk in local language, calculate salary and transfer payments to bank accounts upon employee confirmation.
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 py-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">Hackathon Participant</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm self-start">2025</span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-sm sm:text-base">GIAIC Hackathon, Karachi</p>
                <p className="text-amber-100/80 text-sm sm:text-base">
                  Built a functional e-commerce site in 48 hours using Next.js, 
                  Tailwind CSS, and Sanity CMS.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-amber-400/30">Education</h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 py-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">Web & Agentic AI Engineering</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm self-start">2023-2025</span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-sm sm:text-base">GIAIC - Karachi</p>
                <p className="text-amber-100/80 text-sm sm:text-base">
                  Focus: AI, Python, Web Development, AGI (Governor's Initiative for AI & Computing)
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 py-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">Intermediate 1st Year</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm self-start">2025</span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-sm sm:text-base">Private College - Karachi</p>
                <p className="text-amber-100/80 text-sm sm:text-base">Field: Computer Science</p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 py-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">Hafiz Al Quran</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm self-start">2023</span>
                </div>
                <p className="text-amber-200/80 italic mb-2 text-sm sm:text-base">Taneem al Madaris - Karachi Pak</p>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-amber-400/30">Technical Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">Next.js</div>
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">React.js</div>
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">TypeScript</div>
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">Python</div>
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">Agentic AI</div>
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">Prompt Engineering</div>
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">Tailwind CSS</div>
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">API Integration</div>
                <div className="bg-stone-800/70 py-2 px-3 sm:px-4 rounded text-center text-sm sm:text-base">Sanity CMS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto text-amber-100/80">
            Whether you need a cutting-edge web application or AI-powered solutions, 
            I'm ready to bring your ideas to life. Let's create something amazing.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-amber-400 text-stone-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-amber-300 transition-colors text-sm sm:text-base"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-stone-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-lg sm:text-xl font-bold">
              <span className="text-amber-400">A</span>SHARIB SHAHID
            </div>
            <p className="text-amber-100/60 text-xs sm:text-sm mt-1">
              Web Developer & Agentic AI Specialist
            </p>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <Link href="https://github.com/asharibshahid" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaGithub className="text-lg sm:text-xl" />
            </Link>
            <Link href="https://linkedin.com/in/asharib-shahid-/" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaLinkedin className="text-lg sm:text-xl" />
            </Link>
            <Link href="https://x.com/AsharibSheikh01" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaTwitter className="text-lg sm:text-xl" />
            </Link>
            <Link href="https://asharib.vercel.app" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaLaptopCode className="text-lg sm:text-xl" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
