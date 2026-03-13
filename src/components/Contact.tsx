import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 lg:px-12 py-16 text-center">
      
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px bg-slate-800 w-12 hidden sm:block"></div>
        <h2 className="text-3xl font-display text-white">07. What&apos;s Next?</h2>
        <div className="h-px bg-slate-800 w-12 hidden sm:block"></div>
      </div>

      <h3 className="text-4xl lg:text-5xl font-display text-slate-200 mb-8 font-medium">
        Get In Touch
      </h3>
      
      <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
        I&apos;m wrapping up my CS degree at VIU this March and looking for a full-time engineering role in Vancouver or remote in Canada. If you&apos;re building something that matters to real users and you need someone who can own the full stack from architecture to deployment, I&apos;d like to hear about it. No recruiters, no form letters. Just send me an email.
      </p>

      {/* Primary CTA */}
      <Link 
        href="mailto:abhayparasharr@gmail.com"
        className="inline-block px-8 py-4 border border-teal text-teal font-medium rounded-md hover:bg-teal/10 transition-colors mb-16"
      >
        Say Hello &rarr; abhayparasharr@gmail.com
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
          href="/Abhay_Parashar_Resume.pdf" 
          target="_blank"
          className="text-sm font-mono text-slate-500 hover:text-teal transition-colors border-b border-transparent hover:border-teal/50 pb-1"
        >
          Download Resume (PDF)
        </Link>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-slate-800/50 pt-8 text-xs font-mono text-slate-500 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <span>Designed & Built by Abhay Parashar</span>
        <span className="hidden sm:inline">&middot;</span>
        <span>Next.js + Tailwind</span>
        <span className="hidden sm:inline">&middot;</span>
        <span>Vercel</span>
      </footer>

    </section>
  );
}
