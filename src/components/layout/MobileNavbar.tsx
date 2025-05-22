"use client";
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Marketplace', href: '#' },
  { label: 'Drops', href: '#' },
  { label: 'More', href: '#' },
];

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden w-full">
      {/* Logo row */}
      <div className="flex items-center justify-between py-4 px-4 bg-[#131313]">
        <button onClick={() => setOpen(true)} aria-label="Open menu">
          <img src="/beezie-logo2.svg" alt="Beezie Logo" className="h-8 w-auto" />
        </button>
      </div>
      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#181818] z-50 shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#232323] bg-[#131313]">
          <img src="/beezie-logo.svg" alt="Beezie Logo" className="h-8 w-auto" />
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white text-2xl">&times;</button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-lg font-semibold hover:text-[#FFB800] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
} 