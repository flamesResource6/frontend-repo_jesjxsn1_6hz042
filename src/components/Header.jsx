import React from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Seminar', href: '#seminar' },
  { label: 'Sponsors & Media Partners', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-cyan-400/20 ring-2 ring-cyan-400/50 flex items-center justify-center text-cyan-300 font-bold">
            W
          </div>
          <span className="text-white font-semibold tracking-widest uppercase">World Philosophy Day 2025</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm text-gray-300 hover:text-white transition group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#22d3ee]" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
