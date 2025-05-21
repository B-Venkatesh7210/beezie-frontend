import type { Product } from '@/types/product';

interface ItemCardProps {
  product: Product;
  disabled?: boolean;
  onBuy: (product: Product) => void;
}

/**
 * Displays a product card with image, name, price, and a buy button.
 * The buy button is disabled if the user cannot afford the item.
 */
export function ItemCard({ product, disabled, onBuy }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <div className="w-40 h-40 bg-gray-100 rounded mb-2 overflow-hidden flex items-center justify-center">
        <img src={product.imageUrl} alt={product.name} className="object-contain w-full h-full" />
      </div>
      <div className="font-semibold text-center mb-1">{product.name}</div>
      <div className="text-gray-500 text-sm mb-2">Price: {product.priceUsdc}</div>
      <button
        className="mt-auto px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed w-full"
        onClick={() => onBuy(product)}
        disabled={disabled}
      >
        Buy
      </button>
    </div>
  );
} 