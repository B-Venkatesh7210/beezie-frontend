"use client";

import { useProducts } from '@/hooks/products/useProducts';
import { useUsdcDecimals } from '@/hooks/web3/useUsdcDecimals';
import { useUserBalance } from '@/hooks/web3/useUserBalance';
import { ItemCard } from '@/components/core/itemCard';
import { FiltersSidebar } from './FiltersSidebar';
import { formatPrice } from '@/utils/formatPrice';
import { sortProducts } from '@/utils/sortProducts';
import { formatUnits } from 'ethers';

export function ProductsList() {
  // Fetch products, USDC decimals, and user balance
  const { data: products, isLoading, isError } = useProducts();
  const { data: decimals, isLoading: isDecimalsLoading, isError: isDecimalsError } = useUsdcDecimals();
  const { data: userBalance, isLoading: isBalanceLoading, isError: isBalanceError } = useUserBalance();

  // Handler for buy button
  const handleBuy = (product: any) => {
    console.log('Buy clicked:', product);
  };

  // Loading state
  if (isLoading || isDecimalsLoading || isBalanceLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading products...</div>;
  }

  // Error state
  if (isError || isDecimalsError || isBalanceError) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Failed to load products or USDC data.</div>;
  }

  // Processed user balance
  const processedUsdcBalance = userBalance && decimals !== undefined
    ? Number(formatUnits(userBalance, decimals))
    : 0;

  console.log('processedUsdcBalance', processedUsdcBalance);
  
  // Processed and sorted products
  const processedProducts = products && decimals !== undefined
    ? sortProducts(products).map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.priceUsdc, decimals),
        priceNumber: Number(formatPrice(product.priceUsdc, decimals)),
      }))
    : [];

  return (
    <div className="relative">
      <div className="hidden md:block fixed top-6 right-8 z-40 text-white font-bold text-lg drop-shadow-lg">
        Balance: {processedUsdcBalance} USDC
      </div>
      <div className="md:hidden sticky top-0 z-10 py-4 mb-2">
        <div className="text-right font-bold text-lg text-white drop-shadow-lg">
          Balance: {processedUsdcBalance} USDC
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 md:mt-12">
        {/* Sidebar (desktop) or drawer (mobile) */}
        <div className="md:w-64 md:shrink-0">
          <FiltersSidebar />
        </div>
        {/* Main content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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