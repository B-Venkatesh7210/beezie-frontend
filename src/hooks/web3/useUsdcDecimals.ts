import { useQuery } from '@tanstack/react-query';
import { usdcContract } from '@/services/web3/contracts';

/**
 * Fetches the number of decimals for the USDC token using the contract.
 * Returns the decimals as a number.
 */
export function useUsdcDecimals() {
  return useQuery<number, Error>({
    queryKey: ['usdcDecimals'],
    queryFn: async () => {
      const decimals = await usdcContract.decimals();
      // decimals is a bigint, convert to number
      return Number(decimals);
    },
  });
} 