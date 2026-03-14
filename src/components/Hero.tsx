import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-20 lg:pt-32 relative min-h-[85vh]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Availability Badge */}
      <FadeIn delay={0.1} onMount>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-dim border border-teal/20 text-teal text-xs font-medium tracking-wide w-fit mb-8 shadow-[0_0_15px_rgba(32,201,151,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
          </span>
          Available for new opportunities — Vancouver, BC
        </div>
      </FadeIn>

      <FadeIn delay={0.2} onMount>
        <p className="text-teal font-mono mb-4 text-sm md:text-base">
          Hi, my name is
        </p>
      </FadeIn>

      <FadeIn delay={0.3} onMount>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-4 relative z-10 tracking-tight">
          Abhay Parashar.
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.4} onMount>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-slate-400 mb-8 tracking-tight max-w-4xl">
          I build software that ships to real users.
        </h2>
      </FadeIn>
      
      <FadeIn delay={0.5} onMount>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          Full-stack engineer out of Vancouver with 4 years of professional experience across Canada and India. Right now I&apos;m finishing a multi-tenant CRM for a 300-person nonprofit and building an AI agent channel for a live manufacturing business. I care about software that works for the people using it, not just the people reviewing the pull request. <span className="text-slate-300">Graduating March 2026 and looking for a full-time engineering role in Canada.</span>
        </p>
      </FadeIn>

      {/* CTAs */}
      <FadeIn delay={0.6} onMount>
        <div className="flex flex-wrap items-center gap-6 mb-16 relative z-10">
          <Link 
            href="#work" 
            className="px-8 py-4 bg-teal text-navy font-medium rounded-md hover:bg-teal/90 transition-all duration-300 shadow-[0_0_20px_rgba(32,201,151,0.25)] hover:shadow-[0_0_35px_rgba(32,201,151,0.5)] hover:-translate-y-1"
          >
            See my work &darr;
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-4 bg-transparent border border-teal text-teal font-medium rounded-md hover:bg-teal/10 transition-all duration-300 hover:-translate-y-1"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </FadeIn>

      {/* Social Proof Bar */}
      <FadeIn delay={0.7} onMount>
        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm md:text-base text-slate-400 border-t border-slate-800/60 pt-8 mt-4 relative z-10 w-full max-w-3xl">
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
      </FadeIn>
    </section>
  );
}
