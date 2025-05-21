"use client";

import { useProducts } from '@/hooks/products/useProducts';
import { useUsdcDecimals } from '@/hooks/web3/useUsdcDecimals';
import { useUserBalance } from '@/hooks/web3/useUserBalance';
import { ItemCard } from '@/components/core/itemCard';
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
    <>
      {/* User balance display */}
      <div className="mb-6 text-right font-semibold text-lg text-gray-800">
        Balance: {processedUsdcBalance} USDC
      </div>
      {/* Responsive grid for products */}
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
    </>
  );
} 