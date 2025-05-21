import type { Product } from '@/types/product';

/**
 * Sorts products by price (low to high).
 */
export function sortProducts(products: Product[]): Product[] {
  return [...products].sort((a, b) => Number(BigInt(a.priceUsdc) - BigInt(b.priceUsdc)));
} 