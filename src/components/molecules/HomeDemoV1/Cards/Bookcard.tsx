import { useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/icon";
import Link from "next/link";

interface BookCardProps {
   slug: string;
  image: string;
  title: string;
  author: string;
  price: number;
  oldPrice?: number;
  isSale?: boolean;
  showTimer?: boolean;
  onView?: () => void;
  onWishlist?: () => void;
  onAddToCart?: () => void;
}

export default function BookCard({
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
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white flex flex-col h-full">
      <div
        className="relative group mb-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* SALE Badge — TOP RIGHT */}
        {isSale && (
          <div className="absolute top-2 right-2 z-20 bg-[#e9452e] text-white px-3 py-1 text-xs rounded-full">
            SALE
          </div>
        )}
        {/* TIMER — BOTTOM CENTER, ON IMAGE */}
        {showTimer && (
          <div
            className="
      absolute
      left-1/2 -translate-x-1/2
      z-20
      flex
      gap-2 md:gap-2.5 sm:gap-1.5        /* spacing – responsive  */
      transition-opacity duration-300
      group-hover:opacity-0 opacity-100
      bottom-3 md:bottom-6 sm:bottom-0      /* 位置 – સ્ક્રીન‑સાઇઝ‑નુ   */
    "
          >
            {["Days", "Hours", "Min", "Sec"].map((label) => (
              <div
                key={label}
                className="
          bg-black
          text-white
          text-center
          px-3 py-1 rounded
          flex flex-col items-center
        "
              >
                <div className="font-bold text-lg md:text-xl">00</div>
                <div className="text-xs md:text-sm">{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Hover icons — CENTER on image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition gap-2 z-30">
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
        {/* Book Image */}
        <Link href={`/products/${slug}`}>
          <Image
          src={image}
          alt={title}
          width={370}
          height={298}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        </Link>
      </div>
      <div className="text-center mt-4">
        <div className="text-gray-500 text-sm mb-2.5">{author}</div>
        <Link href={`/products/${slug}`} className="font-semibold mb-3 hover:text-[#e9452e]">
          {title}
        </Link>
        <div className="mt-2 flex items-center justify-center gap-2">
          {oldPrice ? (
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
