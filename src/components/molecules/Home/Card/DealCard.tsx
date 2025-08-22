"use client"
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/icon";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type DealBookCardProps = {
  slug: string;
  image: string;
  title: string;
  author: string;
  price: number;
  oldPrice?: number | null;
  sale?: boolean;
  onView?: () => void;
  onWishlist?: () => void;
  onAddToCart?: () => void;
};

function DealBookCard({
  slug,
  image,
  title,
  author,
  price,
  oldPrice,
  sale,
  onView,
  onWishlist,
  onAddToCart,
}: DealBookCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: slug,
      slug,
      title,
      author,
      price,
      oldPrice,
      image,
    });
    onAddToCart?.();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative group">
        {/* Sale badge */}
        {sale && (
          <span className="absolute top-5 right-5 bg-[#e9452e] text-white px-4 py-1 text-sm rounded-full font-semibold z-10">
            SALE
          </span>
        )}

        {/* Hover overlay with buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-2 z-30 pointer-events-none">
          <div className="pointer-events-auto">
            <Button onClick={onView} variant="button" size="xl">
              <Icon name="eye" />
            </Button>
          </div>
          <div className="pointer-events-auto">
            <Button onClick={onWishlist} variant="button" size="xl">
              <Icon name="heart" />
            </Button>
          </div>
          <div className="pointer-events-auto">
            <Button onClick={handleAddToCart} variant="button" size="xl">
              <Icon name="cart" />
            </Button>
          </div>
        </div>
        
        {/* Book image with link */}
        <Link href={`/products/${slug}`} className="block">
          <Image
            src={image}
            alt={title}
            width={370}
            height={210}
            className="w-full h-full object-cover cursor-pointer"
          />
        </Link>
      </div>
      {/* Author */}
      <div className="text-center mt-4">
        <div className="text-gray-500 text-sm mb-2.5">{author}</div>
        <Link
          href={`/products/${slug}`} 
          className="font-semibold mb-3 hover:text-[#e9452e]"
        >
          {title}
        </Link>
        <div className="mt-2 flex items-center justify-center gap-2">
          {oldPrice ? (
            <>
              <span className="line-through text-black/80 text-lg">
                £{oldPrice.toFixed(2)}
              </span>
              <span className="text-[#e9452e] font-bold text-lg">
                £{price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[#e9452e] font-bold text-lg">
              £{price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default DealBookCard;
