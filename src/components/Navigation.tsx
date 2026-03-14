"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { name: '01. About', href: '#about' },
  { name: '02. CRM Case Study', href: '#work' },
  { name: '03. Work', href: '#projects' },
  { name: '04. Experience', href: '#experience' },
  { name: '05. How I Think', href: '#how-i-think' },
  { name: '06. Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle hidden/shown navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Handle transparent/blurred background
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);

      // Handle active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, activeSection]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-navy/80 backdrop-blur-md shadow-sm h-16' : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <Link href="/" className="text-teal font-display font-bold text-xl hover:opacity-80 transition-opacity">
          AP.
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-mono text-xs transition-colors hover:text-teal ${
                activeSection === link.href.substring(1) ? 'text-teal' : 'text-slate-400'
              }`}
            >
              <span className="text-teal mr-1">{link.name.split('.')[0]}.</span>
              {link.name.split('.')[1].trim()}
            </Link>
          ))}
          <Link 
            href="/Resume_Parashar_StartupGeneralist_V3.pdf" 
            target="_blank"
            className="font-mono text-xs bg-teal text-navy font-medium px-4 py-2 rounded hover:bg-teal/90 transition-all duration-200 ml-4 shadow-[0_0_15px_rgba(32,201,151,0.3)] hover:shadow-[0_0_25px_rgba(32,201,151,0.5)]"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
