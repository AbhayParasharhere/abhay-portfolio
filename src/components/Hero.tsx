import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-6 lg:px-12">
      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-dim border border-teal/20 text-teal text-xs font-medium tracking-wide w-fit mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
        </span>
        Available for new opportunities — Vancouver, BC
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6">
        Abhay Parashar
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
        Full-Stack Engineer. I build robust software systems that solve real operational problems.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-6 mb-16">
        <Link 
          href="mailto:abhayparasharr@gmail.com" 
          className="px-6 py-3 bg-teal text-navy font-medium rounded-md hover:bg-teal/90 transition-colors"
        >
          Say Hello
        </Link>
        <div className="flex items-center gap-4 text-slate-400">
          <Link href="https://github.com/abhayparashar" target="_blank" className="hover:text-teal transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/abhayparasharr" target="_blank" className="hover:text-teal transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm md:text-base text-slate-400 border-t border-slate-800 pt-8">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">95%</span> satisfaction
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">300+</span> users
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">2</span> products in market
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block"></div>
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">4 yrs</span> experience
        </div>
      </div>
    </section>
  );
}
