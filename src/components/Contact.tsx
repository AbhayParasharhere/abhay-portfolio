'use client';
import React from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 lg:px-12 py-16 text-center">
      
      <FadeIn>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-slate-800 w-12 hidden sm:block"></div>
          <h2 className="text-3xl font-display text-white">06. What&apos;s Next?</h2>
          <div className="h-px bg-slate-800 w-12 hidden sm:block"></div>
        </div>

        <h3 className="text-4xl lg:text-6xl font-display text-slate-200 mb-8 font-medium tracking-tight">
          Get In Touch
        </h3>
        
        <p className="text-lg text-slate-400 leading-relaxed mb-16 max-w-2xl mx-auto">
          I&apos;m wrapping up my CS degree at VIU this March and looking for a full-time engineering role in Vancouver or remote in Canada. If you&apos;re building something that matters to real users and you need someone who can own the full stack from architecture to deployment, I&apos;d like to hear about it. No recruiters, no form letters. Just send me an email.
        </p>

        {/* AI Experience Bank Callout */}
        <div className="mb-10 p-5 rounded-2xl border border-teal/20 bg-teal/5 backdrop-blur-sm flex flex-col sm:flex-row items-center gap-5 text-left hover:border-teal/40 hover:bg-teal/10 transition-all duration-300 cursor-pointer group" onClick={() => { const btn = document.querySelector('[aria-label="Toggle Experience Bank Chat"]') as HTMLButtonElement; btn?.click(); }}>
          <div className="w-12 h-12 shrink-0 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
            <MessageSquare className="w-5 h-5 text-teal" />
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white text-sm font-medium">Ask my AI about my experience</span>
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">Have a question about my work? Ask my AI — it&apos;s trained on everything I&apos;ve built.</p>
          </div>
          <div className="shrink-0 text-teal text-xs font-mono border border-teal/30 px-3 py-1.5 rounded group-hover:bg-teal/10 transition-colors whitespace-nowrap">
            Try it &rarr;
          </div>
        </div>

        {/* Primary CTA */}
        <Link 
          href="mailto:abhayparasharr@gmail.com"
          className="inline-block px-10 py-5 bg-slate-800/50 backdrop-blur-sm border border-teal/40 text-teal text-lg font-medium rounded-lg hover:bg-slate-800/80 hover:border-teal transition-all duration-300 shadow-[0_0_20px_rgba(32,201,151,0.15)] hover:shadow-[0_0_40px_rgba(32,201,151,0.3)] hover:-translate-y-1 mb-16"
        >
          Say Hello &rarr; <span className="text-slate-300 block sm:inline mt-2 sm:mt-0 sm:ml-2">abhayparasharr@gmail.com</span>
        </Link>

      {/* Social Links Rail */}
      <div className="flex justify-center flex-wrap gap-8 items-center mb-16">
        <Link href="https://github.com/AbhayParasharhere" target="_blank" className="flex items-center py-2 px-3 hover:bg-slate-800 rounded group transition-colors">
          <Github className="w-5 h-5 text-slate-400 group-hover:text-teal mr-3" />
          <span className="text-slate-400 font-mono text-sm group-hover:text-teal transition-colors">GitHub</span>
        </Link>
        <Link href="https://linkedin.com/in/parashar-abhay" target="_blank" className="flex items-center py-2 px-3 hover:bg-slate-800 rounded group transition-colors">
          <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-teal mr-3" />
          <span className="text-slate-400 font-mono text-sm group-hover:text-teal transition-colors">LinkedIn</span>
        </Link>
        <Link href="mailto:abhayparasharr@gmail.com" className="flex items-center py-2 px-3 hover:bg-slate-800 rounded group transition-colors">
          <Mail className="w-5 h-5 text-slate-400 group-hover:text-teal mr-3" />
          <span className="text-slate-400 font-mono text-sm group-hover:text-teal transition-colors">Email</span>
        </Link>
      </div>

      {/* Resume Download CTA (per instructions) */}
      <div className="mb-24">
        <Link 
          href="/Resume_Parashar_StartupGeneralist_V3.pdf" 
          target="_blank"
          className="text-sm font-mono text-slate-500 hover:text-teal transition-colors border-b border-transparent hover:border-teal/50 pb-1"
        >
          Download Resume (PDF)
        </Link>
      </div>
      
        {/* Footer */}
        <footer className="border-t border-slate-800/50 pt-8 text-xs font-mono text-slate-500 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 pb-8">
          <span>Designed & Built by Abhay Parashar</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Next.js + Tailwind</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Vercel</span>
        </footer>
      </FadeIn>

    </section>
  );
}
