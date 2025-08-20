"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";

type Props = {
  onNavigate?: () => void; // link click → panel close
  onOpen?: () => void;     // Shop accordion open → parent scroll
};

const collections = ["Romance", "History", "Comedy", "Fiction", "Adventure"];
const featuredCards = [
  { src: "/assets/nav-1.jpg", title: "Featured Books", href: "/collections/featured" },
  { src: "/assets/nav-2.jpg", title: "Best Sellers",   href: "/collections/best-sellers" },
  { src: "/assets/nav-3.jpg", title: "Most Viewed",    href: "/collections/most-viewed" },
];

export default function ShopMegaDropdownMenuMobile({ onNavigate, onOpen }: Props) {
  const [shopOpen, setShopOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(prev => {
      const next = !prev;
      if (next) onOpen?.(); // only when opening
      return next;
    });
  };

  return (
    <div className="text-base">
      <button
        className="w-full flex items-center justify-between"
        onClick={toggleShop}
        aria-expanded={shopOpen}
      >
        <span className="font-normal">Shop</span>
        <Plus className={`transition-transform ${shopOpen ? "rotate-45" : ""}`} />
      </button>

      {shopOpen && (
        <div className="pl-3 pb-2 space-y-4">
          {/* Featured cards */}
          <div className="space-y-4">
            {featuredCards.map(card => (
              <Link
                key={card.href}
                href={card.href}
                className="flex flex-col items-center"
                onClick={onNavigate}
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  width={144}
                  height={192}
                  className="w-36 h-48 object-cover"
                />
                <span className="mt-2 text-center">{card.title}</span>
              </Link>
            ))}
          </div>

          {/* All Collections */}
          <div className="border-t pt-2">
            <button
              className="w-full flex items-center justify-between py-3"
              onClick={() => setCollectionsOpen(v => !v)}
              aria-expanded={collectionsOpen}
            >
              <Link href="/collections" className="font-normal">All Collections</Link>
              <Plus className={`transition-transform ${collectionsOpen ? "rotate-45" : ""}`} />
            </button>

            {collectionsOpen && (
              <ul className="pl-3 pb-2 space-y-3">
                {collections.map(c => (
                  <li key={c}>
                    <Link
                      href={`/collections/${c.toLowerCase()}`}
                      className="block py-1"
                      onClick={onNavigate}
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
