export interface Product {
  id: number;
  name: string;
  priceUsdc: string; // Raw USDC value as string (to be parsed with decimals)
  imageUrl: string;
} 