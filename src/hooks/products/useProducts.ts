import { useQuery } from '@tanstack/react-query';

// Define the product type based on your API response
import type { Product } from "@/types/product";

/**
 * Fetches products from the /api/products endpoint.
 * Returns the query result with loading and error states.
 */
export function useProducts() {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    },
  });
} 