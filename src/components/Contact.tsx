import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-12 py-32 text-center">
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="text-lg font-mono text-teal">06. What&apos;s Next?</h2>
      </div>
      
      <h3 className="text-5xl lg:text-7xl font-display text-white mb-8">
        Get In Touch
      </h3>
      
      <p className="text-lg text-slate-400 mb-12 leading-relaxed">
        I&apos;m wrapping up my CS degree at VIU this March and looking for a full-time engineering role in Vancouver or remote in Canada. If you&apos;re building something that matters to real users and you need someone who can own the full stack from architecture to deployment, I&apos;d like to hear about it. No recruiters, no form letters. Just send me an email.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
        <Link 
          href="mailto:abhayparasharr@gmail.com"
          className="px-8 py-4 bg-transparent border-2 border-teal text-teal font-medium rounded-md hover:bg-teal/10 transition-colors w-full sm:w-auto"
        >
          Say Hello
        </Link>
        {/* Placeholder for Resume, will link to /resume.pdf */}
        <Link 
          href="/resume.pdf"
          target="_blank"
          className="flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-medium rounded-md transition-colors w-full sm:w-auto"
        >
          <FileText className="w-5 h-5" /> Download Resume
        </Link>
      </div>

      <div className="flex items-center justify-center gap-6 text-slate-400 mb-32">
        <Link href="https://github.com/abhayparashar" target="_blank" className="hover:text-teal transition-colors">
          <Github className="w-6 h-6" />
        </Link>
        <Link href="https://linkedin.com/in/abhayparasharr" target="_blank" className="hover:text-teal transition-colors">
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link href="mailto:abhayparasharr@gmail.com" className="hover:text-teal transition-colors">
          <Mail className="w-6 h-6" />
        </Link>
      </div>

      <footer className="pt-8 border-t border-slate-800/50 text-sm font-mono text-slate-500">
        <p>Designed & Built by Abhay Parashar · Next.js + Tailwind · Vercel</p>
      </footer>

      {/* Vertical Email Right Rail (Hidden on small screens) */}
      <div className="hidden xl:flex fixed bottom-0 right-10 flex-col items-center gap-6 text-slate-400 after:content-[''] after:w-px after:h-24 after:bg-slate-700">
        <Link 
          href="mailto:abhayparasharr@gmail.com" 
          className="writing-vertical text-sm font-mono tracking-widest hover:text-teal hover:-translate-y-1 transition-all"
          style={{ writingMode: 'vertical-rl' }}
        >
          abhayparasharr@gmail.com
        </Link>
      </div>
    </section>
  );
}
