"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/icon";
import Link from "next/link";

interface AuthorMonthCardProps {
  slug: string;
  image: string;
  title?: string;
  author?: string;
  price?: number;
  oldPrice?: number;
  isSale?: boolean;
  showTimer?: boolean;
  onView?: () => void;
  onWishlist?: () => void;
  onAddToCart?: () => void;
  /** when true, render only the image tile (no overlays, no content) */
  imageOnly?: boolean;
}

export default function AuthorMonthCard({
  slug,
  image,
  title,
  author,
  price,
  oldPrice,
  isSale,
  showTimer,
  onView,
  onWishlist,
  onAddToCart,
  imageOnly = false,
}: AuthorMonthCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // When imageOnly, render only the image block (keeps your layout intact)
  if (imageOnly) {
    return (
      <div className="bg-white flex flex-col h-full">
        <div className="relative w-full overflow-hidden">
          <Image
            src={image}
            alt={title ?? "Author of the Month"}
            width={870}
            height={680}
            className="object-cover max-w-[476px] h-full"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white flex flex-col h-full group/card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image wrapper */}
      <div className="relative w-full bg-[#f5f5f5] overflow-hidden">
        {isSale && (
          <div className="absolute top-2 right-2 z-20 bg-[#e9452e] text-white px-3 py-1 text-xs rounded-full">
            SALE
          </div>
        )}

        {showTimer && (
          <div
            className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            {["Days", "Hours", "Min", "Sec"].map((label) => (
              <div key={label} className="bg-black text-white text-center px-3 py-1 rounded">
                <div className="font-bold text-lg leading-none">00</div>
                <div className="text-xs">{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Hover buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition gap-2 z-30">
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

        <Image
          src={image}
          alt={title ?? "Book cover"}
          width={370}
          height={298}
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex-1 flex flex-col items-center text-center">
        <div className="text-gray-500 text-sm mb-2.5">{author}</div>
        <Link href={`/products/${slug}`} className="mb-3 hover:text-[#e9452e]">
          {title}
        </Link>

        <div className="flex items-center justify-center gap-2">
          {typeof oldPrice === "number" ? (
            <>
              <span className="line-through text-black/80 text-lg">£{oldPrice.toFixed(2)}</span>
              <span className="text-[#e9452e] font-semibold text-lg">£{(price ?? 0).toFixed(2)}</span>
            </>
          ) : (
            <span className="text-[#e9452e] font-semibold text-lg">£{(price ?? 0).toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
