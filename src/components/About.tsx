import React from 'react';
import { Activity } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-display text-white">01. About</h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>
          
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Text Content */}
        <div className="lg:w-2/3 space-y-6 text-lg text-slate-300 leading-relaxed">
          
          {/* Floated Photo */}
          <div className="float-right ml-6 mb-6 w-32 h-32 md:w-40 md:h-40 relative rounded-2xl overflow-hidden border border-teal/20 shadow-[0_0_20px_rgba(32,201,151,0.1)] group hover:shadow-[0_0_30px_rgba(32,201,151,0.2)] hover:-translate-y-1 transition-all duration-500">
            <div className="absolute inset-0 bg-teal/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
            <Image 
              src="/denim.png"
              alt="Abhay Parashar"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <p>
            Before computer science, there was a manufacturing floor. My family runs an export business in India that has supplied companies like Disney and Lee Cooper for over twenty years. Starting at 17, running their CRM platform and writing client proposals taught me something most CS grads learn much later: software exists to solve a business problem or it doesn&apos;t need to exist.
          </p>
          <p>
            That realization is what pulled me into a CS degree at Vancouver Island University. Not because I wanted to learn syntax, but because I kept seeing manual processes that software could fix and I wanted to be the person who could actually build the fix. Three co-op placements and a near-perfect GPA later, the instinct hasn&apos;t changed. Every project I take on starts with the same question: what&apos;s broken and who is it broken for?
          </p>
          <p>
            These days, most of my hours go into PowerCompass Pro, a multi-tenant CRM I proposed and am shipping as the lead developer for a 300-person nonprofit. On the side, I&apos;m building an AI agent channel to automate client acquisition for my family&apos;s export operation. Both are live projects with real stakeholders and real consequences. That&apos;s the part I like.
          </p>

          <div className="clear-both"></div>

          {/* Tech List */}
          <div className="grid grid-cols-2 gap-4 text-sm font-mono text-slate-400 mt-8 pt-6 border-t border-slate-800/50">
            <ul className="space-y-2">
              <li className="flex gap-2 items-center"><span className="text-teal">▹</span> Next.js</li>
              <li className="flex gap-2 items-center"><span className="text-teal">▹</span> Supabase (PostgreSQL)</li>
              <li className="flex gap-2 items-center"><span className="text-teal">▹</span> TypeScript</li>
            </ul>
            <ul className="space-y-2">
              <li className="flex gap-2 items-center"><span className="text-teal">▹</span> Django/DRF</li>
              <li className="flex gap-2 items-center"><span className="text-teal">▹</span> Playwright</li>
              <li className="flex gap-2 items-center"><span className="text-teal">▹</span> GitHub Actions</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Currently Building Card */}
        <div className="lg:w-1/3 w-full flex flex-col gap-8">
          
          <div className="relative rounded-xl border border-slate-800 bg-surface p-6 overflow-hidden group hover:border-teal/30 transition-colors shadow-xl">
            {/* Subtle gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 text-xs font-medium text-teal uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
                  </span>
                  Currently Building
                </div>
                <Activity className="w-5 h-5 text-slate-600 group-hover:text-teal transition-colors" />
              </div>
              
              <ul className="space-y-5 text-sm text-slate-300 font-medium">
                <li className="flex gap-3 items-start">
                  <span className="text-teal mt-1">▹</span>
                  <div className="space-y-1">
                    <span className="text-white block">PowerCompass Pro</span>
                    <span className="text-slate-500 font-normal text-xs uppercase tracking-wide">Launching July 2026</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-teal mt-1">▹</span>
                  <div className="space-y-1">
                    <span className="text-white block">AI Agent Channel</span>
                    <span className="text-slate-500 font-normal text-xs uppercase tracking-wide">A&amp;A Exports (active)</span>
                  </div>
                </li>
              </ul>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
