import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Folder, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const FEATURED_PROJECTS = [
  {
    title: "Interactive ERD Diagram Tool",
    label: "Solo R&D · No Existing Solution · Client Deadline · Delivered",
    employer: "Input Logic",
    description: "The client needed a way to write SQL schema definitions and instantly visualize them. Existing ERD tools didn't fit their specific workflow, so I built the parser and rendering rules from scratch. The graph nodes are draggable—you can move them around with your cursor and the relationships between entities re-render in real time. Built end-to-end in Next.js and Django/DRF, and shipped solo within a single co-op term.",
    stack: ["Next.js", "Django/DRF", "Python", "REST API"],
    githubUrl: "https://github.com/abhayparashar",
    liveUrl: null, // Internal tool
    image: null, // Internal tool, needs placeholder
  },
  {
    title: "Broker Training & Client Management Platform",
    label: "Paid Client Work · Lead Developer · Shipped · Live in Production",
    employer: "Canadian insurance brokerage",
    description: "A Canadian insurance brokerage needed a system where brokers could complete training modules and manage client data in one place. Built the full stack: Next.js frontend deployed on Vercel, Django REST backend on AWS EC2, JWT authentication, PostgreSQL database. Delivered end-to-end as the lead developer. The platform is live and in daily use.",
    stack: ["Next.js", "Django REST", "JWT", "AWS EC2", "PostgreSQL", "Vercel"],
    githubUrl: "https://github.com/abhayparashar",
    liveUrl: "https://github.com/abhayparashar", // Placeholder until supplied
    image: "/TrainingPortal_01_dashboard.png"
  },
  {
    title: "Branded Social Media Poster Generator",
    label: "Paid Client Work · Lead Developer · Shipped · Live in Production",
    employer: "Canadian insurance brokerage",
    description: "Insurance advisors needed a fast way to generate customized promotional posters with their own branding. Built a React + Vite frontend deployed on Netlify that proxies to the client's existing backend. The backend runs Python/Django with Docker and nginx for production deployment. GitHub Actions handles CI. Advisors log in, pick a template, and generate posters in seconds.",
    stack: ["React", "Vite", "Django REST", "Docker", "nginx", "GitHub Actions"],
    githubUrl: "https://github.com/abhayparashar",
    image: "/PosterMaker_01_dashboard.png"
  }
];

const NOTEWORTHY_PROJECTS = [
  {
    title: "Study Buddy",
    description: "Student scheduling app with Firebase auth and real-time data. Led user testing; UI changes drove a 30% jump in satisfaction.",
    stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "Firebase"],
  },
  {
    title: "Weather Gallery",
    description: "Desktop weather, climate, and pollutant monitoring by region. Custom image gallery improved user ratings by 20%.",
    stack: ["Python", "Tkinter", "Open Weather API", "PIL"],
  },
  {
    title: "Bankist",
    description: "Banking simulator with loan requests, transfers, and transaction history. State management in vanilla JS, no frameworks.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "ASCII Adventure Game",
    description: "Text-based C++ game with ASCII animation. Geometry and trig for movement and collision detection, optimised for Linux.",
    stack: ["C++", "OOP", "Linux"],
  },
  {
    title: "A&A Exports Website",
    description: "Marketing site for a 20+ year fashion accessories exporter. Clients include Disney and Lee Cooper.",
    stack: ["Next.js", "Firebase", "Vercel"],
  },
  {
    title: "Event Management API",
    description: "Production-grade REST API. Custom user model, token auth, Docker, PostgreSQL, GitHub Actions CI. Backend only.",
    stack: ["Django REST", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    title: "TuneTraveller",
    description: "Collaborative ML project using NLP and topic modelling to classify music lyrics by theme.",
    stack: ["Python", "scikit-learn", "NLP", "Topic Modeling"],
  }
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
      
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-display text-white">03. Work</h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>

      {/* Featured Projects */}
      <div className="space-y-32 mb-32">
        {FEATURED_PROJECTS.map((project, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Card Image / Placeholder */}
            <div className="w-full lg:w-7/12 aspect-video bg-surface border border-slate-800 rounded-xl relative group overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-teal/5 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
               {project.image ? (
                 <Image 
                   src={project.image}
                   alt={project.title}
                   fill
                   className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                 />
               ) : (
                 <div className="flex flex-col items-center justify-center gap-4 text-slate-700">
                    <div className="flex gap-4">
                      <div className="w-16 h-12 border-2 border-slate-700/50 rounded-md relative before:content-[''] before:absolute before:w-8 before:h-0.5 before:bg-slate-700/50 before:-right-9 before:top-1/2 before:-translate-y-1/2"></div>
                      <div className="w-16 h-12 border-2 text-teal border-teal/20 rounded-md bg-teal/5"></div>
                      <div className="w-16 h-12 border-2 border-slate-700/50 rounded-md relative before:content-[''] before:absolute before:w-8 before:h-0.5 before:bg-slate-700/50 before:-left-9 before:top-1/2 before:-translate-y-1/2"></div>
                    </div>
                    <span className="font-mono text-sm tracking-widest uppercase opacity-70 mt-4">System Architecture</span>
                 </div>
               )}
            </div>

            {/* Content */}
            <div className={`w-full lg:w-5/12 flex flex-col ${idx % 2 !== 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
              <div className="text-teal text-xs font-mono mb-2 bg-teal-dim px-2 py-1 rounded inline-block self-start lg:self-auto">
                {project.label}
              </div>
              <h3 className="text-2xl font-display text-white mb-2 hover:text-teal transition-colors">
                {project.title}
              </h3>
              <div className="text-sm text-slate-400 mb-6 bg-surface px-3 py-1 rounded-full border border-slate-800/50 block w-fit">
                {project.employer}
              </div>

              <div className="bg-surface lg:p-6 p-5 rounded-xl border border-slate-800 text-slate-300 text-sm leading-relaxed mb-6 relative z-20 hover:border-teal/30 transition-colors">
                <p>{project.description}</p>
              </div>

              <ul className={`flex flex-wrap text-xs text-slate-400 gap-x-4 gap-y-2 mb-6 ${idx % 2 !== 0 ? 'justify-start' : 'lg:justify-end'}`}>
                {project.stack.map(tech => (
                  <li key={tech} className="font-mono">{tech}</li>
                ))}
              </ul>

              <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? 'justify-start' : 'lg:justify-end'}`}>
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" className="text-slate-400 hover:text-teal transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" className="text-slate-400 hover:text-teal transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Noteworthy Projects Grid */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-display text-white mb-2">Other Noteworthy Projects</h3>
        <p className="text-slate-400">Smaller apps, tools, and technical experiments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NOTEWORTHY_PROJECTS.map((project, idx) => (
          <div key={idx} className="bg-surface border border-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:border-teal/30 transition-all duration-300 flex flex-col h-full group">
            <div className="flex justify-between items-center mb-6">
              <Folder className="w-10 h-10 text-teal stroke-1" />
              <Link href="https://github.com/abhayparashar" target="_blank" className="text-slate-400 hover:text-teal transition-colors">
                 <Github className="w-5 h-5" />
              </Link>
            </div>
            
            <h4 className="text-xl font-display text-slate-200 mb-3 group-hover:text-teal transition-colors">
              {project.title}
            </h4>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-slate-500 font-mono mt-auto pt-4 border-t border-slate-800/50">
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
