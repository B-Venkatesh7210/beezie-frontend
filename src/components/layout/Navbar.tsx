"use client";

import { addresses } from '@/constants/addresses';

function formatUserAddress(address: string) {
  if (!address) return '';
  return `${address.slice(0, 4)}....${address.slice(-4)}`;
}

interface NavbarProps {
  balance: string | number;
}

export function Navbar({ balance }: NavbarProps) {
  const userAddress = addresses.user;
  const formattedAddress = formatUserAddress(userAddress);

  return (
    <nav className="hidden md:flex items-center justify-between w-full px-8 py-4 bg-[#131313] border-b border-[#232323] z-50 fixed top-0 left-0 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/beezie-logo.svg" alt="Beezie Logo" className="h-8 w-auto" />
      </div>
      {/* Navigation links */}
      <div className="flex gap-8">
        <a href="#" className="text-white font-semibold hover:text-[#FFB800] transition-colors">Marketplace</a>
        <a href="#" className="text-white font-semibold hover:text-[#FFB800] transition-colors">Drops</a>
        <a href="#" className="text-white font-semibold hover:text-[#FFB800] transition-colors">More</a>
      </div>
      {/* Address and Balance */}
      <div className="flex flex-col items-end">
        <div className="text-white font-mono text-xs mb-1">Address: {formattedAddress}</div>
        <div className="text-white font-bold text-lg drop-shadow-lg">Balance: {balance} USDC</div>
      </div>
    </nav>
  );
} 