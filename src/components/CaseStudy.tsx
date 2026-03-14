import React from 'react';
import FadeIn from './FadeIn';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <section id="work" className="w-full bg-slate-900/40 border-y border-slate-800/50 relative overflow-hidden my-16 py-20 lg:py-28">
      {/* Background glow for visual interest */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none"></div>
      
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-display text-white">02. PowerCompass</h2>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-teal hidden md:inline-block">CASE STUDY &middot; FLAGSHIP</span>
            </div>
            <div className="h-px bg-slate-800 flex-grow max-w-[100px]"></div>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-7xl font-display text-white mb-8 leading-tight max-w-4xl tracking-tight">
            95% stakeholder satisfaction. Replaced a multimillion-dollar org&apos;s core CRM. Led the build from proposal to production.
          </h3>
          <p className="text-slate-400 text-lg max-w-3xl mb-16 leading-relaxed">
            A 300-person organization was running on software that made everyone&apos;s job harder. I proposed replacing it, led the build, and shipped a system they actually wanted to use.
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-24 text-slate-300 leading-relaxed mb-32 max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* === Full-width text blocks === */}
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="relative pl-8 md:pl-12 border-l border-slate-800">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700"></span>
              <h4 className="font-mono text-teal tracking-widest uppercase text-sm mb-4">01 &middot; The Problem</h4>
              <p className="mb-4 text-lg">
                NACL is a multimillion-dollar nonprofit supporting individuals with developmental disabilities. Over 300 employees used their CRM every day. The system was Microsoft Power Apps. It worked in the way a spreadsheet works when you need a database: technically functional, practically painful.
              </p>
              <p className="text-lg text-slate-400">
                Board members couldn&apos;t pull operational data without asking someone to run a manual report. Employees fought the UI instead of doing their actual jobs. The analytics didn&apos;t exist. The limitations weren&apos;t edge cases. They were the daily reality for hundreds of people.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="max-w-3xl">
          <FadeIn delay={0.2}>
            <div className="relative pl-8 md:pl-12 border-l border-slate-800">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700"></span>
              <h4 className="font-mono text-teal tracking-widest uppercase text-sm mb-4">02 &middot; The Decision</h4>
              <p className="mb-4 text-lg">
                Nobody asked me to replace it. I sat in on enough workflows to see that patching Power Apps was a dead end. So I wrote a proposal: rebuild the entire thing from scratch, designed around how the organization actually operates. I made the case to leadership, got buy-in, and was brought on as the lead developer.
              </p>
              <p className="text-lg text-slate-400">
                I owned the architecture, the core implementation, user testing, and deployment. The team worked under my technical direction, but the design decisions and product calls were mine.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Primary Screenshot - Full Width */}
        <div className="w-full">
          <FadeIn delay={0.2}>
            <div className="w-full aspect-video bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden flex flex-col items-center justify-center shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(32,201,151,0.15)] hover:border-teal/40 group">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#0F172A] border-b border-slate-800/80 flex items-center px-4 gap-2 z-20">
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
               <div className="mx-auto text-[10px] font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded">app.powercompasspro.com</div>
            </div>
            <div className="relative w-full h-full pt-8">
               <Image 
                 src="/PowerCompass_04_dashboard.png"
                 alt="PowerCompass Dashboard Architecture"
                 fill
                 className="object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60"></div>
               <div className="absolute bottom-4 left-6 z-30">
                 <p className="text-white font-medium text-sm md:text-base drop-shadow-md">Core Dashboard</p>
                 <p className="text-slate-300 text-xs mt-1 drop-shadow-md">Next.js 14 & Supabase</p>
               </div>
            </div>
           </div>
          </FadeIn>
        </div>

        <div className="max-w-3xl">
          <FadeIn delay={0.3}>
            <div className="relative pl-8 md:pl-12 border-l border-teal/50 shadow-[-1px_0_10px_rgba(32,201,151,0.2)]">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_10px_rgba(32,201,151,0.8)]"></span>
              <h4 className="font-mono text-teal tracking-widest uppercase text-sm mb-4 text-white">03 &middot; What I Built</h4>
              <p className="mb-4 text-lg">
                A multi-tenant SaaS CRM built to serve multiple organizations, each with 200+ employees. The frontend is Next.js. The backend runs on Supabase with PostgreSQL, row-level security policies for full tenant data isolation, role-based authentication, and real-time event handling.
              </p>
              <p className="mb-4 text-lg text-slate-400">
                On top of that: a board-level analytics dashboard so leadership could make operational decisions without waiting for anyone to compile a report. Stripe integration with concurrency handling for payment processing. Novu for the notification infrastructure. A migration system for schema evolution as the product grows.
              </p>
              <p className="text-lg text-slate-400">
                Testing isn&apos;t an afterthought. Playwright covers the critical backend flows. GitHub Actions runs CI/CD on every push. The deployment pipeline catches regressions before they reach users.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Secondary Screenshot - Full Width */}
        <div className="w-full">
          <FadeIn delay={0.4}>
            <div className="w-full aspect-video bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden flex flex-col items-center justify-center shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(32,201,151,0.15)] hover:border-teal/40 group">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#0F172A] border-b border-slate-800/80 flex items-center px-4 gap-2 z-20">
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
               <div className="mx-auto text-[10px] font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded">/analytics</div>
            </div>
            <div className="relative w-full h-full pt-8">
               <Image 
                 src="/PowerCompass_06_reporting_analytics.png"
                 alt="PowerCompass Reporting and Analytics"
                 fill
                 className="object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-40"></div>
               <div className="absolute bottom-4 left-6 z-30">
                 <p className="text-white font-medium text-sm md:text-base drop-shadow-md">Reporting & Analytics</p>
                 <p className="text-slate-300 text-xs mt-1 drop-shadow-md">Real-time operational KPIs</p>
               </div>
            </div>
           </div>
          </FadeIn>
        </div>

        <div className="max-w-3xl">
          <FadeIn delay={0.4}>
            <div className="relative pl-8 md:pl-12 border-l border-slate-800">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal"></span>
              <h4 className="font-mono text-teal tracking-widest uppercase text-sm mb-4">04 &middot; The Outcome</h4>
              <p className="mb-4 text-lg text-white">
                95% satisfaction across all stakeholder groups: employees, management, and board. The board now makes operational decisions directly from in-app analytics. Manual reporting workflows are gone.
              </p>
              <p className="text-lg text-slate-400">
                PowerCompass Pro is designed as a multi-tenant platform. NACL is the first client. The architecture supports onboarding additional organizations without code changes. Launching July 2026 at powercompasspro.com.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Video Link */}
        <div className="max-w-3xl">
          <FadeIn delay={0.5}>
            <Link href="https://youtu.be/5j7n_2j5pmQ" target="_blank" className="flex items-center justify-between p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-teal/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] group">
              <div className="flex items-center gap-4">
                <PlayCircle className="w-10 h-10 text-slate-400 group-hover:text-teal transition-colors" />
                <div>
                  <h5 className="text-white font-medium mb-1">Watch Demo Video</h5>
                  <p className="text-sm text-slate-400">A full walkthrough of the CRM capabilities.</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-teal" />
            </Link>
          </FadeIn>
        </div>

      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 mt-12 mb-6">
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
          If your team is dealing with internal tools that aren&apos;t working, manual processes that should be automated, or software that users avoid — that&apos;s the kind of problem I solve.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/50 pt-10">
        <p className="text-slate-400 text-sm">Interested in how I approach projects like this?</p>
        <a href="#contact" className="text-sm font-mono text-teal border border-teal/30 px-5 py-2 rounded hover:bg-teal/10 hover:border-teal/60 transition-all duration-200 whitespace-nowrap">
          Get in touch &rarr;
        </a>
      </div>
    </section>
  );
}
