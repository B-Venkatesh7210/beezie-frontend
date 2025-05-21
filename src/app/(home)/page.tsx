import { useProducts } from '@/hooks/products/useProducts';
import { ItemCard } from '@/components/core/itemCard';

export default function Home() {
  // Fetch products using the custom hook
  const { data: products, isLoading, isError } = useProducts();

  // Handler for buy button
  const handleBuy = (product: any) => {
    // For now, just log the product
    console.log('Buy clicked:', product);
  };

  // Loading state
  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading products...</div>;
  }

  // Error state
  if (isError) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Failed to load products.</div>;
  }

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Responsive grid for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            onBuy={handleBuy}
            // disabled={...} // Will be set based on user balance later
          />
        ))}
      </div>
    </main>
  );
}
