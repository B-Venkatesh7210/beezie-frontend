import { ethers } from 'ethers';

/**
 * Formats a USDC price from raw value and decimals to a human-readable string.
 * @param value Raw USDC value (string or bigint)
 * @param decimals Number of decimals for USDC
 */
export function formatPrice(value: string | bigint, decimals: number): string {
  return ethers.formatUnits(value, decimals);
} 