"use client";

import { useProducts } from '@/hooks/products/useProducts';
import { useUsdcDecimals } from '@/hooks/web3/useUsdcDecimals';
import { useUserBalance } from '@/hooks/web3/useUserBalance';
import { ItemCard } from '@/components/core/itemCard';
import { FiltersSidebar } from './FiltersSidebar';
import { formatPrice } from '@/utils/formatPrice';
import { formatUnits } from 'ethers';
import { addresses } from '@/constants/addresses';
import type { Product } from '@/types/product';
import { useState } from 'react';

// Helper to format user address
function formatUserAddress(address: string) {
  if (!address) return '';
  return `${address.slice(0, 4)}....${address.slice(-4)}`;
}

// Handler for buy button
function handleBuy(product: Product) {
  console.log('Buy clicked:', product);
}

// Sort products by price
function sortProducts(products: Product[], order: 'asc' | 'desc') {
  return [...products].sort((a, b) => {
    const diff = BigInt(a.priceUsdc) - BigInt(b.priceUsdc);
    return order === 'asc' ? Number(diff) : -Number(diff);
  });
}

export function ProductsList() {
  const { data: products, isLoading, isError } = useProducts();
  const { data: decimals, isLoading: isDecimalsLoading, isError: isDecimalsError } = useUsdcDecimals();
  const { data: userBalance, isLoading: isBalanceLoading, isError: isBalanceError } = useUserBalance();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  if (isLoading || isDecimalsLoading || isBalanceLoading) {
    return <div className="flex justify-center items-center min-h-screen"></div>;
  }
  if (isError || isDecimalsError || isBalanceError) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Failed to load products or USDC data.</div>;
  }

  const processedUsdcBalance = userBalance && decimals !== undefined
    ? Number(formatUnits(userBalance, decimals))
    : 0;

  const processedProducts = products && decimals !== undefined
    ? sortProducts(products, sortOrder).map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.priceUsdc, decimals),
        priceNumber: Number(formatPrice(product.priceUsdc, decimals)),
      }))
    : [];

  const userAddress = addresses.user;
  const formattedAddress = formatUserAddress(userAddress);

  return (
    <div className="relative">
      {/* Address and balance for mobile (flex row, separated) */}
      <div className="md:hidden flex justify-between items-center pb-4 mb-2">
        <div className="font-mono text-xs text-white">Address: {formattedAddress}</div>
        <div className="text-right font-bold text-lg text-white drop-shadow-lg">Balance: {processedUsdcBalance} USDC</div>
      </div>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 md:mt-12">
        {/* Sidebar (desktop) or drawer (mobile) */}
        <div className="md:w-64 md:shrink-0">
          <FiltersSidebar />
        </div>
        {/* Main content */}
        <div className="flex-1">
          {/* Sort dropdown */}
          <div className="flex justify-end mb-6 my-4">
            <select
              className="bg-[#181818] border border-[#232323] text-white text-sm rounded-lg px-4 py-2 appearance-none focus:outline-none cursor-pointer"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')}
            >
              <option value="asc">Price low to high</option>
              <option value="desc">Price high to low</option>
            </select>
          </div>
          <div className="grid-cols-1 w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-8">
            {processedProducts.map((product) => (
              <ItemCard
                key={product.id}
                product={{ ...product, priceUsdc: product.formattedPrice }}
                onBuy={handleBuy}
                disabled={processedUsdcBalance < product.priceNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 