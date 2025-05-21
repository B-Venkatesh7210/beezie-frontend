import { ProductsList } from '@/components/products/ProductsList';

export default function Home() {
  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto">
      <ProductsList />
    </main>
  );
}
