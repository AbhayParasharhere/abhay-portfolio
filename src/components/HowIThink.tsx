import React from 'react';

const TAKES = [
  {
    title: "User testing early saves a surprising amount of time.",
    body: "Watching someone actually use a system tends to reveal issues faster than design discussions ever do."
  },
  {
    title: "The quiet signals usually matter most.",
    body: "When people start exporting data or creating side spreadsheets, it usually means the system isn't doing its job yet."
  },
  {
    title: "Good internal tools remove small frustrations.",
    body: "Enterprise products rarely succeed because they look impressive. They succeed because people stop fighting the workflow."
  }
];

export default function HowIThink() {
  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-display text-white">05. How I Think</h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>

      <div className="space-y-16">
        {TAKES.map((take, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            {/* Custom List Marker */}
            <div className="absolute left-0 top-1 text-teal font-mono text-xl leading-none">
              {(idx + 1).toString().padStart(2, '0')}.
            </div>
            
            <h3 className="text-xl md:text-2xl font-display text-slate-200 mb-4 font-medium">
              {take.title}
            </h3>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
              {take.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
