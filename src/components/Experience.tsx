"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

const EXPERIENCES = [
  {
    company: "Charvar Networks",
    role: "Software Engineer",
    period: "Jan 2024 — Present",
    bullets: [
      "Proposed and led ground-up replacement of Microsoft Power Apps CRM for NACL; designed multi-tenant SaaS architecture serving multiple organizations, each with 200+ employees",
      "Built full-stack system in Next.js + Supabase: schema design, row-level security policies, role-based auth, real-time data, board-level analytics dashboard",
      "Ran structured user testing rounds with employees and board; maintained 95% satisfaction through iterative delivery",
      "Built automated testing (Playwright) and CI/CD (GitHub Actions); integrated Stripe payment processing and Novu notifications"
    ]
  },
  {
    company: "Input Logic",
    role: "Full Stack Developer (Co-op)",
    period: "May 2023 — Sep 2023",
    bullets: [
      "Engineered solo R&D project: interactive ERD diagram tool that parses SQL schema definitions into draggable visual output using derived mathematical rules — Next.js + Django/DRF",
      "Reduced diagram setup time by 20% and achieved 90% satisfaction rating on delivery",
      "Collaborated with 30+ professionals across multiple client projects under tight deadlines"
    ]
  },
  {
    company: "VIU Help Desk",
    role: "CSCI Help Desk Assistant",
    period: "Sep 2023 — May 2024",
    bullets: [
      "Provided technical mentorship to undergraduate CS students on Data Structures, Algorithms, OOP, and debugging",
      "Created reference documentation adopted department-wide"
    ]
  },
  {
    company: "GDSC VIU",
    role: "Google Developer Student Club Lead",
    period: "May 2022 — Dec 2022",
    bullets: [
      "Led 12-person student team in Google Solution Challenger Competition — managed scope, deadlines, and cross-functional coordination",
      "Hosted Git/Version Control workshops at VIU; collaborated with Google engineers for industry events",
      "Selected to attend Google's annual North America student leads summit for outstanding chapter performance"
    ]
  },
  {
    company: "A&A Exports",
    role: "Leads & Technical Manager",
    period: "Jan 2018 — Sep 2020",
    bullets: [
      "Managed leads platform and business development pipeline — drove 20% increase in new client acquisition in year one",
      "Wrote technical proposals (specs, timelines, cost estimates) with 70% win rate",
      "Contributed to strategic planning that produced 15% revenue growth over two years"
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
      <FadeIn>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-display text-white">04. Experience</h2>
          <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>
      </FadeIn>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Left Tab Navigation */}
        <FadeIn delay={0.1}>
          <div className="flex overflow-x-auto md:flex-col md:w-48 xl:w-56 shrink-0 border-b md:border-b-0 md:border-l border-slate-800 scrollbar-hide">
          {EXPERIENCES.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`
                text-left px-4 py-4 text-sm font-mono whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-[1px] md:-mb-0 md:-ml-[1px]
                ${activeTab === idx 
                  ? 'border-teal text-teal bg-teal/10 font-medium' 
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }
              `}
            >
              {exp.company}
            </button>
          ))}
          </div>
        </FadeIn>

        {/* Right Content Panel */}
        <div className="flex-grow min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-xl font-display text-white mb-2">
                {EXPERIENCES[activeTab].role} <span className="text-teal">@ {EXPERIENCES[activeTab].company}</span>
              </h3>
              <p className="text-sm font-mono text-slate-400 mb-8">
                {EXPERIENCES[activeTab].period}
              </p>
              
              <ul className="space-y-6">
                {EXPERIENCES[activeTab].bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-slate-300 leading-relaxed text-sm lg:text-base">
                    <span className="text-teal mt-1 drop-shadow-[0_0_8px_rgba(32,201,151,0.5)]">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
