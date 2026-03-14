import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function SideRails() {
  return (
    <>
      {/* Left Social Rail */}
      <div className="hidden lg:flex flex-col items-center fixed bottom-0 left-10 xl:left-14 z-40 after:content-[''] after:w-px after:h-24 after:bg-slate-700 after:mt-6">
        <ul className="flex flex-col gap-6 items-center">
          <li>
            <Link href="https://github.com/AbhayParasharhere" target="_blank" className="text-slate-400 hover:text-teal hover:-translate-y-1 transition-all duration-300 block p-2" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/parashar-abhay" target="_blank" className="text-slate-400 hover:text-teal hover:-translate-y-1 transition-all duration-300 block p-2" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link href="mailto:abhayparasharr@gmail.com" className="text-slate-400 hover:text-teal hover:-translate-y-1 transition-all duration-300 block p-2" aria-label="Email">
              <Mail className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Email Rail */}
      <div className="hidden lg:flex flex-col items-center fixed bottom-36 right-10 xl:right-14 z-40">
        <Link 
          href="mailto:abhayparasharr@gmail.com" 
          className="text-slate-400 hover:text-teal font-mono text-[13px] tracking-widest hover:-translate-y-1 transition-all duration-300 vertical-rl p-2 pb-6"
          style={{ writingMode: 'vertical-rl' }}
        >
          abhayparasharr@gmail.com
        </Link>
      </div>
    </>
  );
}
