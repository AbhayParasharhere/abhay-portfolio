"use client";

import React, { useState } from 'react';

const EXPERIENCES = [
  {
    company: "Charvar Networks",
    role: "Software Engineer",
    period: "Jan 2024 — Present",
    bullets: [
      
      "Led development of custom enterprise applications, focusing on scalable Next.js and Django architectures.",
      "Architected and deployed the PowerCompass CRM, replacing legacy systems and migrating data to PostgreSQL with full accuracy.",
      "Collaborated with stakeholders to define requirements and map business logic into automated technical solutions."
    ]
  },
  {
    company: "Input Logic",
    role: "Full Stack Developer Co-op",
    period: "May 2023 — Sep 2023",
    bullets: [
      "Designed and developed the Error Diagram Visual Parser to interpret complex syntax into accurate visual outputs.",
      "Derived mathematical and parsing rules from scratch to deliver a unique internal client tool within a single term.",
      "Achieved a 90% client satisfaction rating and reduced setup time by 20%."
    ]
  },
  {
    company: "VIU Help Desk",
    role: "CSCI Help Desk Assistant",
    period: "Sep 2023 — May 2024",
    bullets: [
      "Supported computer science students with troubleshooting, debugging, and understanding fundamental programming concepts.",
      "Maintained lab infrastructure and ensured software tools were consistently available for coursework."
    ]
  },
  {
    company: "GDSC VIU",
    role: "Google Developer Student Club Lead",
    period: "May 2022 — Dec 2022",
    bullets: [
      "Led a community of student developers, organizing technical workshops and collaborative coding sessions.",
      "Fostered peer learning on modern web technologies, cloud infrastructure, and software engineering best practices."
    ]
  },
  {
    company: "A&A Exports",
    role: "Leads & Technical Manager",
    period: "Jan 2018 — Sep 2020",
    bullets: [
      "Managed business operations and solved efficiency bottlenecks using spreadsheet automation and custom workflows.",
      "Developed a modern Next.js B2B web presence to serve prominent clients including Disney and Lee Cooper.",
      "Identified process improvements that drove better client acquisition without relying solely on software automation."
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-display text-white">04. Experience</h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Left Tab Navigation */}
        <div className="flex overflow-x-auto md:flex-col md:w-48 xl:w-56 shrink-0 border-b md:border-b-0 md:border-l border-slate-800 scrollbar-hide">
          {EXPERIENCES.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`
                text-left px-4 py-3 text-sm font-mono whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-[1px] md:-mb-0 md:-ml-[1px]
                ${activeTab === idx 
                  ? 'border-teal text-teal bg-teal/5' 
                  : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
                }
              `}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Right Content Panel */}
        <div className="flex-grow min-h-[300px]">
          <h3 className="text-xl font-display text-white mb-2">
            {EXPERIENCES[activeTab].role} <span className="text-teal">@ {EXPERIENCES[activeTab].company}</span>
          </h3>
          <p className="text-sm font-mono text-slate-500 mb-6">
            {EXPERIENCES[activeTab].period}
          </p>
          
          <ul className="space-y-4">
            {EXPERIENCES[activeTab].bullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-4 items-start text-slate-300 leading-relaxed text-sm lg:text-base">
                <span className="text-teal mt-1.5 shadow-teal drop-shadow-sm">▹</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
