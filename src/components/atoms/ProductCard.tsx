"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/icon";
import Link from "next/link";

export type Book = {
  image: string;
  title: string;
  author: string;
  price: number;
  oldPrice?: number | null;
  sale?: boolean;
  showTimer?: boolean;
  inStock?: boolean;
  color?: string[];
  categories?: string[];
  onView?: () => void;
  onWishlist?: () => void;
  onAddToCart?: () => void;
};

export default function ProductCard({
  image,
  title,
  author,
  price,
  oldPrice,
  showTimer,
  sale,
  onView,
  onWishlist,
  onAddToCart,
}: Book) {
    const [isHovered, setIsHovered] = useState(false);

  return (
      <div
      className="bg-white flex flex-col h-full group/card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image wrapper with fixed aspect ratio */}
      <div className="relative w-full bg-[#f5f5f5] overflow-hidden">
        {/* SALE badge */}
        {sale && (
          <div className="absolute top-2 right-2 z-20 bg-[#e9452e] text-white px-3 py-1 text-xs rounded-full">
            SALE
          </div>
        )}

        {/* Timer */}
        {showTimer && (
          <div
            className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            {["Days", "Hours", "Min", "Sec"].map((label) => (
              <div
                key={label}
                className="bg-black text-white text-center px-3 py-1 rounded"
              >
                <div className="font-bold text-lg leading-none">00</div>
                <div className="text-xs">{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Hover buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover/card:opacity-100 gap-2 z-30">
          <Button onClick={onView} variant="button" size="xl">
            <Icon name="eye" />
          </Button>
          <Button onClick={onWishlist} variant="button" size="xl">
            <Icon name="heart" />
          </Button>
          <Button onClick={onAddToCart} variant="button" size="xl">
            <Icon name="cart" />
          </Button>
        </div>

        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={370}
          height={298}
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex-1 flex flex-col items-center text-center">
        <div className="text-gray-500 text-sm mb-2.5">{author}</div>
        <Link href="" className="font-semibold mb-3 hover:text-[#e9452e]">{title}</Link>
        <div className="flex items-center justify-center gap-2">
          {typeof oldPrice === "number" ? (
            <>
              <span className="line-through text-black/80 text-lg">
                £{oldPrice.toFixed(2)}
              </span>
              <span className="text-[#e9452e] font-semibold text-lg">
                £{price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[#e9452e] font-semibold text-lg">
              £{price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
