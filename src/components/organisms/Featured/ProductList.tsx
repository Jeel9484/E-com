"use client";
import type { Book } from "@/components/atoms/ProductCard";
import Icon from "@/components/atoms/icon";

export default function ProductList({ items }: { items: Book[] }) {
  return (
    <div className="space-y-8">
      {items.map((p) => (
        <article
          key={p.title + p.author}
          className="grid grid-cols-[120px_1fr] items-start gap-6 rounded-xl border p-4 md:grid-cols-[200px_1fr]"
        >
          <img
            src={p.image}
            alt={p.title}
            className="aspect-[3/4] w-full rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-black/60">{p.author}</p>
            <p className="mt-3 line-clamp-3 text-sm text-black/80">
              Captivate with this versatile book description…
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-lg font-bold">£{p.price}</span>
              {p.oldPrice && (
                <span className="text-sm text-black/50 line-through">
                  £{p.oldPrice}
                </span>
              )}
              {p.inStock === false && (
                <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs text-red-600">
                  Out of stock
                </span>
              )}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button className="flex h-10 items-center gap-2 rounded-md border px-4">
                <Icon name="heart" size={16} />
                <span>Wishlist</span>
              </button>
              <button className="flex h-10 items-center gap-2 rounded-md bg-black px-5 text-white">
                <Icon name="cart" size={16} />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
