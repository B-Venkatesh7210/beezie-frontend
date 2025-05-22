import type { Product } from '@/types/product';
import { useState } from 'react';

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
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="p-4 flex flex-col items-center w-full max-w-xs mx-auto rounded-2xl h-full bg-transparent">
      <div className="w-48 h-56 bg-white rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse" />
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className={`object-contain w-full h-full rounded-xl transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <div className="text-white text-base font-medium text-center leading-tight mb-2">
        {product.name}
      </div>
      <div className="flex flex-col flex-grow w-full justify-end">
        <div className="text-white text-2xl font-bold text-left w-full mb-4 mt-auto">
          ${product.priceUsdc}
        </div>
        {onBuy && (
          <button
            className={`w-full py-2 rounded-lg font-bold text-base transition-colors duration-200
              ${disabled ? 'bg-[#FFB800] opacity-50 cursor-not-allowed text-black' : 'bg-[#FFB800] hover:bg-yellow-400 text-black'}`}
            onClick={() => onBuy(product)}
            disabled={disabled}
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
} 