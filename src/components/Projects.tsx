import React from 'react';
import Image from 'next/image';
import { Folder, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const FEATURED_PROJECTS = [
  {
    title: "Interactive ERD Diagram Tool",
    label: "Solo R&D · No Existing Solution · Client Deadline · Delivered",
    employer: "Input Logic",
    description: "The client needed a way to write SQL schema definitions and instantly visualize them. Existing ERD tools didn't fit their specific workflow, so I built the parser and rendering rules from scratch. The graph nodes are draggable — you can move them around with your cursor and the relationships between entities re-render in real time. Built end-to-end in Next.js and Django/DRF, and shipped solo within a single co-op term.",
    stack: ["Next.js", "Django/DRF", "Python", "REST API"],
    githubUrl: "https://github.com/AbhayParasharhere",
    liveUrl: null, // Internal tool
    image: null, // Internal tool, needs placeholder
  },
  {
    title: "Broker Training & Client Management Platform",
    label: "Sole Developer · Shipped · Live in Production",
    employer: "Canadian insurance brokerage",
    description: "A brokerage needed a platform where brokers could manage training progress and client workflows without juggling multiple tools. I built the system end-to-end with a Next.js frontend and Django REST backend. JWT authentication handles user sessions while PostgreSQL stores training and client data. The platform runs in production and supports day-to-day operations for the team.",
    stack: ["Next.js", "Django REST", "JWT", "AWS EC2", "PostgreSQL", "Vercel"],
    githubUrl: "https://github.com/AbhayParasharhere",
    liveUrl: "https://github.com/AbhayParasharhere", // Placeholder until supplied
    image: "/TrainingPortal_01_dashboard.png"
  },
  {
    title: "Branded Social Media Poster Generator",
    label: "Sole Developer · Shipped · Live in Production",
    employer: "Canadian insurance brokerage",
    description: "Insurance advisors often needed branded visuals for social posts, but creating them manually slowed things down. This tool lets advisors generate compliant branded posters directly from the web interface. React handles the UI while Django powers the backend services. CI pipelines and containerized deployment keep the system stable in production.",
    stack: ["React", "Vite", "Django REST", "Docker", "nginx", "GitHub Actions"],
    githubUrl: "https://github.com/AbhayParasharhere",
    image: "/PosterMaker_01_dashboard.png"
  }
];

const NOTEWORTHY_PROJECTS = [
  {
    title: "Study Buddy",
    description: "Student scheduling app with Firebase auth and real-time data. Led user testing; UI changes drove a 30% jump in satisfaction scores.",
    stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "Firebase"],
  },
  {
    title: "Weather Gallery",
    description: "Desktop app for weather, climate, and pollutant monitoring by region. Custom image gallery built with PIL improved user ratings by 20%.",
    stack: ["Python", "Tkinter", "Open Weather API", "PIL"],
  },
  {
    title: "Bankist",
    description: "Banking simulator with loan requests, transfers, and transaction history. All state management in vanilla JavaScript. No frameworks.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "ASCII Adventure Game",
    description: "Text-based C++ game with ASCII animation. Geometry and trigonometry for movement and collision detection, optimized for Linux terminals.",
    stack: ["C++", "OOP", "Linux"],
  },
  {
    title: "A&A Exports Website",
    description: "Marketing site for a 20+ year fashion accessories exporter. Clients include Disney and Lee Cooper. Built to modernize their B2B web presence.",
    stack: ["Next.js", "Firebase", "Vercel"],
  },
  {
    title: "Event Management API",
    description: "Production-grade REST API. Custom user model, token auth, Docker, PostgreSQL, GitHub Actions CI. Backend only. No frontend. Just a clean API.",
    stack: ["Django REST", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    title: "TuneTraveller",
    description: "Collaborative ML project using NLP and topic modeling to classify music lyrics by theme.",
    stack: ["Python", "scikit-learn", "NLP", "Topic Modeling"],
  }
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-12 lg:py-16 mb-16 relative">
      
      <div className="flex items-center gap-4 mb-16 relative z-10">
        <h2 className="text-3xl font-display text-white">03. Work</h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>

      {/* Featured Projects */}
      <div className="space-y-24 lg:space-y-32 mb-24 relative z-10">
        {FEATURED_PROJECTS.map((project, idx) => {
          const isOdd = idx % 2 !== 0;
          return (
            <div key={idx} className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
              
              {/* Card Image / Placeholder */}
              <div className={`w-full aspect-video md:aspect-[16/10] bg-slate-900 border border-slate-800 rounded-xl relative group overflow-hidden flex flex-col items-center justify-center md:col-span-7 ${isOdd ? 'md:col-start-6' : 'md:col-start-1'} md:row-start-1 z-0 shadow-2xl`}>
                 <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply pointer-events-none"></div>
                 
                 {project.image ? (
                   <>
                     {/* Browser Chrome for live projects */}
                     <div className="absolute top-0 left-0 w-full h-8 bg-[#0F172A] border-b border-slate-800/80 flex items-center px-4 gap-2 z-20">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     </div>
                     <div className="relative w-full h-full pt-8">
                       <Image 
                         src={project.image}
                         alt={project.title}
                         fill
                         className="object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                       />
                     </div>
                   </>
                 ) : (
                   <div className="flex flex-col items-center justify-center w-full h-full text-slate-700 bg-[#0B1120]">
                     {/* SVG ERD Diagram Placeholder */}
                     <svg viewBox="0 0 400 300" className="w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" fill="none" stroke="currentColor">
                       {/* Table 1 */}
                       <rect x="60" y="80" width="100" height="120" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                       <rect x="60" y="80" width="100" height="34" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                       <text x="72" y="102" fill="#94A3B8" fontSize="12" fontFamily="monospace">users</text>
                       <text x="72" y="130" fill="#20C997" fontSize="11" fontFamily="monospace">id (PK)</text>
                       <text x="72" y="150" fill="#64748B" fontSize="11" fontFamily="monospace">email</text>
                       <text x="72" y="170" fill="#64748B" fontSize="11" fontFamily="monospace">role_id</text>
                       <path d="M60 185h100" stroke="#334155" strokeWidth="1" />
                       <circle cx="160" cy="125" r="5" fill="#20C997" />

                       {/* Table 2 */}
                       <rect x="250" y="130" width="100" height="100" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                       <rect x="250" y="130" width="100" height="34" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                       <text x="262" y="152" fill="#94A3B8" fontSize="12" fontFamily="monospace">posts</text>
                       <text x="262" y="180" fill="#20C997" fontSize="11" fontFamily="monospace">id (PK)</text>
                       <text x="262" y="200" fill="#64748B" fontSize="11" fontFamily="monospace">user_id (FK)</text>
                       <circle cx="250" cy="195" r="5" fill="#64748B" />

                       {/* Connection Curve */}
                       <path d="M165 125 C 210 125, 205 195, 245 195" stroke="#20C997" strokeWidth="2.5" fill="none" strokeDasharray="4 4" className="opacity-80 group-hover:animate-pulse" />
                     </svg>
                   </div>
                 )}
              </div>

              {/* Content Box (Overlapping) */}
              <div className={`w-full md:col-span-6 lg:col-span-5 relative z-10 flex flex-col ${isOdd ? 'md:col-start-1 md:items-start md:text-left' : 'md:col-start-7 lg:col-start-8 md:items-end md:text-right'} md:row-start-1`}>
                <div className="text-teal text-xs font-mono mb-2 px-2 py-1 rounded inline-block">
                  {project.label}
                </div>
                <h3 className="text-2xl font-display text-white mb-4 hover:text-teal transition-colors">
                  {project.title}
                </h3>

                <div className="bg-slate-800/60 backdrop-blur-xl p-6 lg:p-8 rounded-xl border border-slate-700/50 text-slate-300 text-sm leading-relaxed mb-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(32,201,151,0.15)] hover:border-teal/40 hover:-translate-y-1 transition-all duration-300">
                  <p>{project.description}</p>
                </div>

                <ul className={`flex flex-wrap text-sm text-slate-400 gap-x-4 gap-y-2 mb-6 ${isOdd ? 'justify-start' : 'md:justify-end'}`}>
                  {project.stack.map(tech => (
                    <li key={tech} className="font-mono whitespace-nowrap">{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-4 ${isOdd ? 'justify-start' : 'md:justify-end'}`}>
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" className="text-slate-400 hover:text-teal transition-colors" aria-label="GitHub Repository">
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" className="text-slate-400 hover:text-teal transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Noteworthy Projects Grid */}
      <div className="mb-12 text-center mt-32 relative z-10">
        <h3 className="text-2xl font-display text-white mb-2">Other Noteworthy Projects</h3>
        <p className="text-slate-400">Smaller apps, tools, and technical experiments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {NOTEWORTHY_PROJECTS.map((project, idx) => (
          <div key={idx} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:-translate-y-2 hover:bg-slate-800/60 hover:shadow-[0_10px_30px_rgba(32,201,151,0.1)] transition-all duration-300 flex flex-col h-full group">
            <div className="flex justify-between items-center mb-6">
              <Folder className="w-10 h-10 text-teal stroke-1 group-hover:scale-110 transition-transform duration-300" />
              <Link href="https://github.com/AbhayParasharhere" target="_blank" className="text-slate-400 hover:text-teal transition-colors">
                 <Github className="w-5 h-5" />
              </Link>
            </div>
            
            <h4 className="text-xl font-display text-slate-200 mb-3 group-hover:text-teal transition-colors">
              {project.title}
            </h4>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-slate-500 font-mono mt-auto pt-4 border-t border-slate-800/50 group-hover:border-teal/20 transition-colors">
              {project.stack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
