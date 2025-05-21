import { useQuery } from '@tanstack/react-query';
import { usdcContract } from '@/services/web3/contracts';
import { addresses } from '@/constants/addresses';

/**
 * Fetches the USDC balance for the user wallet address using the contract.
 * Returns the balance as a bigint (raw value).
 */
export function useUserBalance() {
  return useQuery<bigint, Error>({
    queryKey: ['usdcBalance', addresses.user],
    queryFn: async () => {
      return usdcContract.balanceOf(addresses.user);
    },
  });
} 