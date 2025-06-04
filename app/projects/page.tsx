"use client"
import { Calendar, ChevronDown, ExternalLink, Github, Search, Sparkles, Star } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
const Page = () => {
  const [activeFilter, setActiveFilter] = React.useState<'all' | 'ai' | 'web'>('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  

 
   // Add your skills array if needed

  const projects = [
    // AI/Python Projects
    {
      id: 0,
      title: "NlP APP",
      description: "Intelligent  Natural language processing Ai Agent ",
      tech: ["Python", "AI", "API Integration", "Automation"],
      category: "ai",
      link: "https://www.linkedin.com/posts/asharib-shahid-_python-nextjs-fastapi-activity-7331616520789274626-lK3m?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEuvhZ4BQcxul22iK__NsDK9PZ0ksh_ddUI",
      github: "https://github.com/asharibshahid/AI_NLP-App_Python",
      featured: true,
      year: "2025",
      status: "Live"
    },
    {
      id: 1,
      title: "AI Dropshipping Agent",
      description: "Intelligent agent for automating dropshipping operations with AI-powered decision making and market analysis.",
      tech: ["Python", "AI/ML", "API Integration", "Automation"],
      category: "ai",
      link: "https://shorturl.at/wWms5",
      github: "https://github.com/asharibshahid/Droppshiping_Ai_Agent",
      featured: true,
      year: "2025",
      status: "Live"
    },
    {
      id: 2,
      title: "Face Recognition Attendance System",
      description: "CLI-based attendance system using computer vision and facial recognition for automated check-ins.",
      tech: ["Python", "OpenCV", "Machine Learning", "CLI"],
      category: "ai",
      link: "https://www.linkedin.com/posts/asharib-shahid-_everyone-linkedin-fyp-activity-7314318402880192512-XkLA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEuvhZ4BQcxul22iK__NsDK9PZ0ksh_ddUI",
      github: "https://github.com/asharibshahid/Learn-Python-q3/blob/main/Projects/adv-03.py",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      id: 3,
      title: "AI Productivity Analyzer",
      description: "Smart productivity tool using agentic AI and prompt engineering to analyze and optimize work patterns.",
      tech: ["Python", "AI Agents", "Prompt Engineering", "Analytics"],
      category: "ai",
      link: "#",
      github: "https://github.com/asharibshahid/AI_Analyzer_Backend-",
      featured: true,
      year: "2025",
      status: "In Progress"
    },
    {
      id: 4,
      title: "3D Crypto Saver",
      description: "AI-powered Crypto Currency Saver Modern Encrypt | Decrypt",
      tech: ["Python", "AI", "Code Analysis", "3D Visualization"],
      category: "ai",
      link: "https://cybervault3dpython-8kbzxudaewz2msjgzx3g3d.streamlit.app/",
      github: "https://github.com/asharibshahid/CyberVault3D_Python",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      id: 5,
      title: "Live Weather app",
      description: "Weather App Which Contains Api Data You can See Live Weather Data World Wide", 
      tech: ["Python", "Apii", "Data", "Weather"],
      category: "ai",
      link: "https://q3-assignments-hu54czsrazddsg9fxdsttk.streamlit.app/",
      github: "https://github.com/asharibshahid/q3-assignments/blob/main/learn-Python/index.py",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    // Next.js/Web Projects
    {
      id: 6,
      title: "NovaCart E-commerce",
      description: "Full-featured e-commerce platform built in 48 hours during GIAIC Hackathon with modern UI and CMS integration.",
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Stripe"],
      category: "web",
      link: "https://novacart.space",
      github: "https://github.com/asharibshahid/novacart-Upload",
      featured: true,
      year: "2025",
      status: "Live"
    },
    {
      id: 7,
      title: "TechTalks Blogging Platform",
      description: "Modern blogging platform for tech enthusiasts with rich editor, commenting system, and social features.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Auth.js"],
      category: "web",
      link: "https://techtalks-yyt.vercel.app",
      github: "https://github.com/asharibshahid/Pakistan-sNova",
      featured: true,
      year: "2024",
      status: "Live"
    },
    {
      id: 8,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with modern animations and responsive design.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "web",
      link: "https://asharib.vercel.app",
      github: "https://github.com/asharibshahid/personal-portfolio",
      featured: false,
      year: "2024",
      status: "Live"
    },
    {
      id: 9,
      title: "Hackathon Nike  App",
      description: "Hackathon In Giaic | UiUX and Functionality Achieve In 48Hr",
      tech: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      category: "web",
      link: "https://hackathon-seven-zeta.vercel.app/",
      github: "https://github.com/asharibshahid/hackathon",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      id: 10,
      title: "Resume Builder",
      description: " Interactive resume builder with templates, live preview, and export options.",
      tech: ["Next.js", "Javascript", "Typescript", "Resumes"],
      category: "web",
      link: "https://resume-builder-one-sooty.vercel.app/",
      github: "https://github.com/asharibshahid/Resume-Builder",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      id: 11,
      title: "ReaL Estate System",
      description: "Real estate management system with property listings, search functionality, and user authentication.",
      tech: ["Next.js", "Sanity", "Clerk", "PWA"],
      category: "web",
      link: "https://real-estate-vert-two.vercel.app/",
      github: "https://github.com/asharibshahid/Real-Estate-ui-Template",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      id: 12,
      title: "Landing Page",
      description: " Interactive landing page for a startup with animations, call-to-action sections, and responsive design.",
      tech: ["Next.js", "Tailwind CSS", "Stripe", "Google Maps"],
      category: "web",
      link: "https://asharib-ten.vercel.app/",
      github: "https://github.com/asharibshahid/Landing-Page-",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      id: 13,
      title: "The Acme Dashboard",
      description: " Comprehensive admin dashboard for managing user data, analytics, and system settings.",
      tech: ["Next.js", "TypeScript", "Acme", "Maths"],
      category: "web",
      link: "",
      github: "https://github.com/asharibshahid/The-Acme-Dashboard",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      id: 14,
      title: "Portfolio Web For Graphic Designer",
      description: " Stunning portfolio website for a graphic designer with interactive galleries and client testimonials.",
      tech: ["Next.js", "Social APIs", "Redis", "WebSockets"],
      category: "web",
      link: "gelson-cabral.vercel.app",
      github: "https://github.com/asharibshahid/3D_Port",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      id: 15,
      title: "Ananya Furniture Store",
      description: "Modern furniture store website with product catalog, shopping cart, and secure checkout.",
      tech: ["Next.js", "Furniture", "Paid project", "Analytics"],
      category: "web",
      link: "furniture-site-nc26-clh3fxjph-asharibs-projects.vercel.app",
      github: "https://github.com/asharibshahid/Furniture-Site",
      featured: false,
      year: "2024",
      status: "Completed"
    }
  ];
  

  

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);


 

  return (
    <section className={"min-h-screen py-20 px-4  bg-black sm:px-6 lg:px-8 transition-all duration-1000 "}>
        <div className="max-w-7xl mx-auto">
          
          {/* Projects Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="text-purple-400" size={20} />
              <span className="text-purple-300 font-medium">Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of 15 projects showcasing my expertise in AI, web development, and full-stack solutions
            </p>
          </div>

          {/* Filter and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            
            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                All Projects ({projects.length})
              </button>
              <button
                onClick={() => setActiveFilter('ai')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === 'ai'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                AI/Python ({projects.filter(p => p.category === 'ai').length})
              </button>
              <button
                onClick={() => setActiveFilter('web')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === 'web'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                Web Dev ({projects.filter(p => p.category === 'web').length})
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
              />
            </div>
          </div>

          {/* Featured Projects Banner */}
          {activeFilter === 'all' && !searchTerm && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="text-yellow-400" size={24} />
                Featured Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star size={12} />
                        Featured
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                          >
                            <ExternalLink size={16} />
                            <span className="text-sm">Live</span>
                          </a>
                        )}
                        <a
                          href={project.github}
                          className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={12} />
                        {project.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              {activeFilter === 'all' ? 'All Projects' : 
               activeFilter === 'ai' ? 'AI & Python Projects' : 'Web Development Projects'}
              <span className="text-purple-400 ml-2">({filteredProjects.length})</span>
            </h3>
            
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Star className="text-yellow-400" size={16} />
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110 transform"
                          >
                            <ExternalLink size={14} />
                            <span className="text-xs">Live</span>
                          </a>
                        )}
                        <a
                          href={project.github}
                          className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Github size={14} />
                          <span className="text-xs">Code</span>
                        </a>
                      </div>
                      <div className="text-xs text-gray-500">
                        {project.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No projects found matching your criteria</p>
                  <p className="text-sm">Try adjusting your filters or search terms</p>
                </div>
              </div>
            )}
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-16">
            <Link href="/">
            <button
            
              className="group px-8 py-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/50 rounded-full font-semibold text-purple-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <ChevronDown className="mr-2 rotate-180" size={20} />
                Back to Home
              </span>
            </button>
            </Link>
          </div>
        </div>
      </section>

  )
}

export default Page
