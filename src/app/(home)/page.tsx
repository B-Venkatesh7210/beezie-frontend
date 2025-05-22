"use client";
import { Navbar } from '@/components/layout/Navbar';
import { MobileNavbar } from '@/components/layout/MobileNavbar';
import { ProductsList } from '@/components/products/ProductsList';
import { useUsdcDecimals } from '@/hooks/web3/useUsdcDecimals';
import { useUserBalance } from '@/hooks/web3/useUserBalance';
import { formatUnits } from 'ethers';

export default function Home() {
  const { data: decimals, isLoading: isDecimalsLoading, isError: isDecimalsError } = useUsdcDecimals();
  const { data: userBalance, isLoading: isBalanceLoading, isError: isBalanceError } = useUserBalance();

  const processedUsdcBalance = userBalance && decimals !== undefined
    ? Number(formatUnits(userBalance, decimals))
    : 0;

  // Optionally handle loading/error states for balance here

  return (
    <>
      <Navbar balance={processedUsdcBalance} />
      <MobileNavbar />
      <main className="p-4 md:p-8 max-w-10xl mx-auto bg-[#131313] min-h-screen">
        <ProductsList />
      </main>
    </>
  );
}
