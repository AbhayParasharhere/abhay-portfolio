import React from 'react';

const TAKES = [
  {
    title: "I run user testing before I write a line of code.",
    content: "When I started the NACL CRM, I built the first version of several screens based on what I thought the workflows looked like. User testing proved me wrong almost immediately. The daily reality of 300 employees didn't match the assumptions I had made from the outside. I paused feature work for a week, went back to six employees for structured interviews, and rebuilt. That one week of delay saved months of rework after launch. Now I don't start building until I've watched someone do the job the software is supposed to help with."
  },
  {
    title: "Replacing Power Apps taught me what enterprise software gets wrong.",
    content: "Power Apps isn't bad software. It's generic software used in a specific context, and that's where it falls apart. NACL's board needed answers to operational questions that Power Apps couldn't surface without manual work. The employees needed a UI that matched their actual workflow, not a configurable framework they had to fight. The lesson: good enterprise software doesn't start with features. It starts with sitting in the room where the work happens and understanding what's actually broken. The technology decision comes after that."
  },
  {
    title: "The best thing about a business background is knowing when code isn't the answer.",
    content: "At A&A Exports, I spent two years solving problems with proposals, client calls, and spreadsheets before I ever touched a codebase. That experience gave me something I didn't appreciate until much later: the ability to look at a problem and recognize when it needs a process change, not a software feature. On the AI agent channel I'm building now, half the value came from deciding which parts of the acquisition pipeline should stay manual. Not everything needs to be automated. Knowing the difference is the hard part."
  }
];

export default function HowIThink() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-12 py-24 mb-16">
      
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-display text-white">05. How I Think</h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>

      <div className="space-y-16">
        {TAKES.map((take, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-xl md:text-2xl font-display text-white">
              {take.title}
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              {take.content}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
