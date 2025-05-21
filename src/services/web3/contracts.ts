import { addresses } from '@/constants/addresses';
import { provider } from './provider';
import { USDC__factory } from '@/typechain-types/factories/USDC__factory';
import type { USDC } from '@/typechain-types/USDC';

/**
 * USDC contract instance connected to the provider and the correct address.
 */
export const usdcContract: USDC = USDC__factory.connect(addresses.usdc, provider); 