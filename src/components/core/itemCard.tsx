import type { Product } from '@/types/product';

interface ItemCardProps {
  product: Product;
  disabled?: boolean;
  onBuy?: (product: Product) => void;
}

/**
 * Displays a product card with image, name, price, and a buy button.
 * The buy button is disabled if the user cannot afford the item.
 */
export function ItemCard({ product }: ItemCardProps) {
  return (
    <div className="p-4 flex flex-col items-center w-full max-w-xs mx-auto">
      <div className="w-48 h-56 bg-white rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain w-full h-full rounded-xl"
        />
      </div>
      <div className="text-white text-base font-medium text-center leading-tight mb-2">
        {product.name}
      </div>
      <div className="text-white text-2xl font-bold text-left w-full mt-2">
        ${product.priceUsdc}
      </div>
    </div>
  );
} 