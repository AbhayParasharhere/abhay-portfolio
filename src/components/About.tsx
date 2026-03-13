import React from 'react';
import { Activity } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Text Content */}
        <div className="lg:w-2/3 space-y-6 text-lg text-slate-300 leading-relaxed">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-display text-white">01. About</h2>
            <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
          </div>
          
          <p>
            I transition off my CS degree at VIU this March, bringing four years of professional and co-op experience building software across diverse industries. My background isn't purely academic. I spent two years navigating business operations before writing code professionally, which means I approach engineering with a focus on solving actual bottlenecks, not just shipping features.
          </p>
          <p>
            Whether it's parsing complex error syntaxes for internal logic tools or deploying full-stack training platforms for enterprise clients, I own the entire lifecycle. I don't wait for pixel-perfect specs — I interview the users, map the reality of their workflows, architecture the entire stack, and deliver production-ready solutions on strict deadlines.
          </p>
          <p>
            My preferred stack lives around Next.js, Django, TypeScript, and robust SQL databases like PostgreSQL, but I ultimately reach for the tool that best fits the problem.
          </p>
        </div>

        {/* Currently Building Card */}
        <div className="lg:w-1/3 w-full">
          <div className="relative rounded-xl border border-slate-800 bg-surface p-6 overflow-hidden mt-2 lg:mt-16 group hover:border-teal/30 transition-colors">
            {/* Subtle gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-xs font-medium text-teal mb-4 uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
                  </span>
                  Currently Building
                </div>
                <Activity className="w-5 h-5 text-slate-600" />
              </div>
              
              <h3 className="text-xl font-display text-white mb-2">AI Agent Channel</h3>
              <p className="text-sm text-slate-400 mb-4">
                Developing an automated acquisition pipeline integrated with an AI agent. Evaluating manual vs. automated workflows to maximize conversion value.
              </p>
              
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-300">Next.js</span>
                <span className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-300">Anthropic API</span>
                <span className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-300">Supabase</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
