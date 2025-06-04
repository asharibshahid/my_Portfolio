// app/about/page.js
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode, FaBrain, FaGraduationCap } from 'react-icons/fa';
import Image from "next/image"
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 to-stone-800 text-amber-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        
        <div className="flex space-x-6">
          <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="/about" className="text-amber-400 border-b border-amber-400">About</a>
          <a href="/projects" className="hover:text-amber-400 transition-colors">Projects</a>
          <a href="/contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-amber-400">Asharib Shahid</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-light text-amber-200">
              Web Developer & Agentic AI Specialist
            </h2>
            <p className="text-lg mb-8 max-w-2xl leading-relaxed">
              A 17 y/o self-driven and tech-savvy student with a passion for modern web development 
              and Artificial Intelligence. I specialize in building full-stack web applications 
              and integrating AI to create future-forward digital solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/asharibshahid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-md flex items-center transition-colors"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/asharib-shahid-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-amber-400 text-amber-400 hover:bg-amber-400/10 px-6 py-3 rounded-md flex items-center transition-colors"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
                
              <div className="w-64 h-64 bg-amber-400/10 rounded-full overflow-hidden border-4 border-amber-400/30">
              <Image
             src="/pfp2.png"
                                alt="Asharib Shahid"
                                className="rounded-full object-cover w-full h-full"
                                width={200}
                                height={200}

           / >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                
              </div>
                
              <div className="absolute -bottom-4 -right-4 bg-stone-800 px-4 py-2 rounded-full border border-amber-400">
                <span className="text-amber-400 font-bold">Agentic AI Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 px-6 bg-stone-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Core Expertise</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-800/70 p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all">
              <div className="text-amber-400 mb-4">
                <FaLaptopCode className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Web Development</h3>
              <p className="text-amber-100/80">
                Building responsive, modern web applications using Next.js, React, 
                TypeScript, and Tailwind CSS. Expertise in API integration and CMS 
                solutions like Sanity.
              </p>
            </div>
            
            <div className="bg-stone-800/70 p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all">
              <div className="text-amber-400 mb-4">
                <FaBrain className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Agentic AI Solutions</h3>
              <p className="text-amber-100/80">
                Developing AI-powered tools and productivity solutions using Python 
                and prompt engineering. Creating intelligent systems that automate 
                complex workflows.
              </p>
            </div>
            
            <div className="bg-stone-800/70 p-8 rounded-xl border border-stone-700 hover:border-amber-400/30 transition-all">
              <div className="text-amber-400 mb-4">
                <FaGraduationCap className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-amber-100/80">
                Committed to staying at the forefront of technology. Currently 
                expanding knowledge in AGI, Web3, and advanced AI concepts through 
                formal education and self-driven projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-amber-400/30">Experience</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-amber-400 pl-6 py-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm">2025-Present</span>
                </div>
                <p className="text-amber-200/80 italic mb-2">
                Freelance</p>
                <p className="text-amber-100/80">
                  Developed a Multiple  responsive web applications using Next.js, TypeScript, 
                  and integrated APIs with CMS and Web3Form solutions For International Clients.
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-6 py-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">AI Agent Developer</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm">Jan 2025-Present</span>
                </div>
                <p className="text-amber-200/80 italic mb-2">Self Project | For Saas</p>
                <p className="text-amber-100/80">
                Fully Autonomous Ai Hr Agent That Can Grab Attendance By Scan The face and Call the home And talk in Local language and also that can calculate salary and ask th employe if employee say Tranfer it to bank Agent will Tranfers the salary on Bank  
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-6 py-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Hackathon Participant</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm">2025</span>
                </div>
                <p className="text-amber-200/80 italic mb-2">GIAIC Hackathon, Karachi</p>
                <p className="text-amber-100/80">
                  Built a functional e-commerce site in 48 hours using Next.js, 
                  Tailwind CSS, and Sanity CMS.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-amber-400/30">Education</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-amber-400 pl-6 py-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Web & Agentic AI Engineering</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm">2023-2025</span>
                </div>
                <p className="text-amber-200/80 italic mb-2">GIAIC - Karachi</p>
                <p className="text-amber-100/80">
                  Focus: AI, Python, Web Development, AGI (Governor s Initiative for AI & Computing)
                </p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-6 py-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Intermediate 1st Year</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm">2025</span>
                </div>
                <p className="text-amber-200/80 italic mb-2">Private College - Karachi</p>
                <p className="text-amber-100/80">Field: Computer Science</p>
              </div>
              
              <div className="border-l-2 border-amber-400 pl-6 py-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Hafiz AI Quran</h3>
                  <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-sm">2023</span>
                </div>
                <p className="text-amber-200/80 italic mb-2">Taneem al Madaris - Karachi Pak</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-amber-400/30">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">Next.js</div>
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">React.js</div>
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">TypeScript</div>
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">Python</div>
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">Agentic AI</div>
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">Prompt Engineering</div>
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">Tailwind CSS</div>
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">API Integration</div>
                <div className="bg-stone-800/70 py-2 px-4 rounded text-center">Sanity CMS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-amber-100/80">
            Whether you need a cutting-edge web application or AI-powered solutions, 
            Im ready to bring your ideas to life. Lets create something amazing.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-md hover:bg-amber-300 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-stone-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold">
              <span className="text-amber-400">A</span>SHARIB SHAHID
            </div>
            <p className="text-amber-100/60 text-sm mt-1">
              Web Developer & Agentic AI Specialist
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/asharibshahid" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/asharib-shahid-/" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/AsharibSheikh01" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://asharib.vercel.app" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <FaLaptopCode className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;