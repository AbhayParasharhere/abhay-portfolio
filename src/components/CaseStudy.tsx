import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudy() {
  return (
    <section id="work" className="w-full bg-slate-900/40 border-y border-slate-800/50 relative overflow-hidden my-16 py-20 lg:py-28">
      {/* Background glow for visual interest */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-display text-teal tracking-widest uppercase text-sm">Case Study &middot; Flagship</h2>
          <div className="h-px bg-slate-800 flex-grow max-w-[100px]"></div>
        </div>

        <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-16 leading-tight max-w-4xl tracking-tight">
          95% stakeholder satisfaction. Replaced a multimillion-dollar org&apos;s core CRM. Led the build from proposal to production.
        </h3>

        {/* Narrative Grid */}
        <div className="grid md:grid-cols-2 gap-12 text-slate-300 leading-relaxed mb-24">
          <div className="space-y-12">
            <div>
              <h4 className="font-mono text-white mb-3">01. The Problem</h4>
              <p className="mb-4">
                NACL is a multimillion-dollar nonprofit supporting individuals with developmental disabilities. Over 300 employees used their CRM every day. The system was Microsoft Power Apps. It worked in the way a spreadsheet works when you need a database: technically functional, practically painful.
              </p>
              <p>
                Board members couldn&apos;t pull operational data without asking someone to run a manual report. Employees fought the UI instead of doing their actual jobs. The analytics didn&apos;t exist. The limitations weren&apos;t edge cases. They were the daily reality for hundreds of people.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-white mb-3">02. The Decision</h4>
              <p className="mb-4">
                Nobody asked me to replace it. I sat in on enough workflows to see that patching Power Apps was a dead end. So I wrote a proposal: rebuild the entire thing from scratch, designed around how the organization actually operates. I made the case to leadership, got buy-in, and was brought on as the lead developer.
              </p>
              <p>
                I owned the architecture, the core implementation, user testing, and deployment. The team worked under my technical direction, but the design decisions and product calls were mine.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="font-mono text-white mb-3">03. What I Built</h4>
              <p className="mb-4">
                A multi-tenant SaaS CRM built to serve multiple organizations, each with 200+ employees. The frontend is Next.js. The backend runs on Supabase with PostgreSQL, row-level security policies for full tenant data isolation, role-based authentication, and real-time event handling.
              </p>
              <p className="mb-4">
                On top of that: a board-level analytics dashboard so leadership could make operational decisions without waiting for anyone to compile a report. Stripe integration with concurrency handling for payment processing. Novu for the notification infrastructure. A migration system for schema evolution as the product grows.
              </p>
              <p>
                Testing isn&apos;t an afterthought. Playwright covers the critical backend flows. GitHub Actions runs CI/CD on every push. The deployment pipeline catches regressions before they reach users.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-white mb-3">04. The Outcome</h4>
              <p className="mb-4">
                95% satisfaction across all stakeholder groups: employees, management, and board. The board now makes operational decisions directly from in-app analytics. Manual reporting workflows are gone.
              </p>
              <p>
                PowerCompass Pro is designed as a multi-tenant platform. NACL is the first client. The architecture supports onboarding additional organizations without code changes. Launching July 2026 at powercompasspro.com.
              </p>
            </div>
          </div>
        </div>

        {/* Feature / Architecture break-out box */}
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-teal/40 transition-all duration-500 hover:shadow-[0_10px_50px_rgba(32,201,151,0.15)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-teal/20 transition-colors duration-500"></div>
          
          <div className="grid md:grid-cols-12 gap-12 relative z-10">
            <div className="md:col-span-12 lg:col-span-5">
              <h3 className="text-2xl font-display text-white mb-4">Architecture & Tech Stack</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Led development as lead engineer on a team to build PowerCompass — an end-to-end custom CRM. We chose Next.js for a responsive frontend and Supabase (PostgreSQL) for a scalable database with Row Level Security (RLS) guaranteeing data isolation.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-slate-300 font-mono">
                <span className="px-3 py-1.5 bg-slate-900 rounded border border-slate-700">Next.js</span>
                <span className="px-3 py-1.5 bg-slate-900 rounded border border-slate-700">Supabase</span>
                <span className="px-3 py-1.5 bg-slate-900 rounded border border-slate-700">PostgreSQL</span>
                <span className="px-3 py-1.5 bg-slate-900 rounded border border-slate-700">RLS</span>
                <span className="px-3 py-1.5 bg-slate-900 rounded border border-slate-700">Stripe</span>
                <span className="px-3 py-1.5 bg-slate-900 rounded border border-slate-700">Playwright</span>
                <span className="px-3 py-1.5 bg-slate-900 rounded border border-slate-700">GitHub Actions</span>
              </div>
              
              <div className="mt-10">
                <Link 
                  href="https://github.com/AbhayParasharhere/powercompass-case-study" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-navy bg-teal px-6 py-3 rounded font-medium hover:bg-teal/90 transition-colors"
                >
                  View GitHub Repository <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-12 lg:col-span-7 lg:pl-8 lg:border-l border-slate-800">
              <h3 className="text-xl font-display text-white mb-6">Key Platform Metrics</h3>
              <ul className="space-y-8 list-none text-slate-300/90">
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded bg-teal/10 flex items-center justify-center text-teal font-bold border border-teal/20">1</div>
                  <div>
                    <span className="text-white font-medium block mb-1 text-lg">95% Stakeholder Satisfaction</span> 
                    <p className="text-slate-400 leading-relaxed">Maintained across employees, management, and board through iterative user testing throughout development.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded bg-teal/10 flex items-center justify-center text-teal font-bold border border-teal/20">2</div>
                  <div>
                    <span className="text-white font-medium block mb-1 text-lg">Eliminated Manual Reporting</span> 
                    <p className="text-slate-400 leading-relaxed">Built automated dashboards that surfaced KPIs instantly for board members. Board now makes operational decisions directly from in-app analytics.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded bg-teal/10 flex items-center justify-center text-teal font-bold border border-teal/20">3</div>
                  <div>
                    <span className="text-white font-medium block mb-1 text-lg">Strong Adoption</span> 
                    <p className="text-slate-400 leading-relaxed">Built an interface that matched actual employee workflows, not a generic framework they had to fight. Manual reporting workflows are gone.</p>
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
