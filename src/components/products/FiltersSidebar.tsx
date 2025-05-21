"use client";
import { useState } from 'react';

const FILTERS = [
  'Status',
  'Set Name',
  'Language',
  'Year',
  'Grader',
  'Grade',
  'Edition',
  'Card Number',
  'Card Type',
];

function FilterIcon() {
  return (
    <svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 13.414V19a1 1 0 01-1.447.894l-2-1A1 1 0 019 18v-4.586a1 1 0 00-.293-.707L2.293 6.707A1 1 0 012 6V4z" /></svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
  );
}
function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  );
}

export function FiltersSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile filter button */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <span className="font-bold text-xl text-white flex items-center gap-2">
          <FilterIcon /> Filters
        </span>
        <button
          className="bg-yellow-400 px-4 py-2 rounded font-semibold"
          onClick={() => setOpen(true)}
        >
          Open Filters
        </button>
      </div>
      {/* Sidebar for desktop, drawer for mobile */}
      <aside
        className={`
          bg-[#181818] text-white shadow-lg p-0
          md:static md:block md:w-64 md:bg-[#181818] md:shadow-none
          fixed inset-y-0 left-0 z-30 w-72 transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          flex flex-col
        `}
        style={open ? {} : {}}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#232323] sticky top-0 bg-[#181818] z-10">
          <span className="font-bold text-lg flex items-center gap-2">
            <FilterIcon /> Filters
          </span>
          <button
            className="text-gray-300 text-2xl md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close filters"
          >
            <CloseIcon />
          </button>
        </div>
        {/* Filter sections */}
        <nav className="flex-1 overflow-y-auto">
          {FILTERS.map((filter, idx) => (
            <button
              key={filter}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-base text-white hover:bg-[#232323] focus:bg-[#232323] border-b border-[#232323]"
              style={{ borderBottom: idx === FILTERS.length - 1 ? 'none' : undefined }}
              type="button"
            >
              <span>{filter}</span>
              <ChevronDownIcon />
            </button>
          ))}
        </nav>
      </aside>
      {/* Overlay for mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
} 