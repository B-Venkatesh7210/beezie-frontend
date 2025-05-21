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
export function ItemCard({ product, disabled, onBuy }: ItemCardProps) {
  return (
    <div className="p-4 flex flex-col items-center w-full max-w-xs mx-auto rounded-2xl">
      <div className="w-86 h-86 md:w-72 md:h-72 bg-white rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain w-full h-full rounded-xl"
        />
      </div>
      <div className="text-white text-base font-medium text-center leading-tight mb-2">
        {product.name}
      </div>
      <div className="text-white text-2xl font-bold text-left w-full mt-2 mb-4">
        ${product.priceUsdc}
      </div>
      {onBuy && (
        <button
          className={`w-full cursor-pointer py-2 rounded-lg font-bold text-base transition-colors duration-200 mt-auto
            ${disabled ? 'bg-[#FFB800] opacity-50 cursor-not-allowed text-black' : 'bg-[#FFB800] hover:bg-yellow-400 text-black'}`}
          onClick={() => onBuy(product)}
          disabled={disabled}
        >
          Buy
        </button>
      )}
    </div>
  );
} 