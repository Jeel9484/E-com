"use client";
import ProductCard, { Book } from "@/components/atoms/ProductCard";

export default function ProductGrid({ items }: { items: Book[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((p, i) => (
        <ProductCard key={p.title + i} {...p} />
      ))}
    </div>
  );
}
