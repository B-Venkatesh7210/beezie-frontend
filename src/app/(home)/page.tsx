import { ProductsList } from '@/components/products/ProductsList';

export default function Home() {
  return (
    <main className="p-4 md:p-8 max-w-10xl mx-auto bg-[#131313]">
      <ProductsList />
    </main>
  );
}
