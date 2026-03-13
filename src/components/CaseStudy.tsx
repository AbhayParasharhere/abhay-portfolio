import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudy() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-6 lg:px-12 py-24 border-t border-slate-800/50">
      
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-display text-white">02. PowerCompass</h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>

      <div className="space-y-12">
        {/* Intro */}
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
          <p>
            When I joined NACL's team as a software engineer, their board was frustrated. They needed answers to operational questions that their existing Power Apps implementation couldn't surface without significant manual work. Power Apps wasn't inherently bad, but it was generic software forcing employees to adapt their workflows to its constraints, rather than the other way around.
          </p>
          <p>
            I realized that to fix this, the technology decision had to come last. I paused feature development and spent a week interviewing six employees, mapping out the reality of their daily tasks. That week of understanding the actual bottlenecks saved months of rework down the line.
          </p>
        </div>

        {/* Feature / Architecture split */}
        <div className="grid md:grid-cols-2 gap-12 items-start mt-12 bg-surface border border-slate-800 p-8 rounded-xl">
          <div>
            <h3 className="text-2xl font-display text-white mb-4">Architecture & Tech Stack</h3>
            <p className="text-slate-400 mb-6">
              Led development as lead engineer on a 3-person team to build PowerCompass — an end-to-end custom CRM.
              We chose Next.js for a responsive frontend and Supabase (PostgreSQL) for a scalable database with Row Level Security (RLS) guaranteeing data isolation.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-slate-300">
              <span className="px-3 py-1 bg-slate-800/50 rounded-md border border-slate-700/50">Next.js</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-md border border-slate-700/50">Supabase</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-md border border-slate-700/50">PostgreSQL</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-md border border-slate-700/50">RLS</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-md border border-slate-700/50">Stripe</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-md border border-slate-700/50">Playwright</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-md border border-slate-700/50">GitHub Actions</span>
            </div>
            
            <div className="mt-8">
              <Link 
                href="https://github.com/abhayparashar" 
                target="_blank"
                className="inline-flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                View GitHub Repository <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="space-y-6 text-slate-300">
            <h3 className="text-2xl font-display text-white mb-2">The Outcome</h3>
            <ul className="space-y-4 list-disc list-outside ml-4 text-slate-300/90">
              <li>
                <span className="text-white font-medium">100% Data Accuracy:</span> Migrated legacy records into PostgreSQL, establishing a single source of truth for the entire organization.
              </li>
              <li>
                <span className="text-white font-medium">Eliminated Manual Reporting:</span> Built automated dashboards that surfaced KPIs instantly for board members.
              </li>
              <li>
                <span className="text-white font-medium">High Adoption Rate:</span> By building an interface that matched actual employee workflows, training time was minimized and user satisfaction increased dramatically.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
