"use client";

import { useMemo, useState } from "react";
import data from "@/data/Collection/Featured/FeaturedBookData.json";
import ProductGrid from "@/components/organisms/Featured/ProductGrid";
import ProductList from "@/components/organisms/Featured/ProductList";
import SidebarFilters, { Filters } from "@/components/organisms/Featured/SiderbarFilter";
import TopBar from "@/components/molecules/Featured/Topbar";
import type { Book } from "@/components/atoms/ProductCard";

type ViewMode = "grid" | "list";
type SortKey =
  | "featured"
  | "best-selling"
  | "alpha-asc"
  | "alpha-desc"
  | "price-asc"
  | "price-desc"
  | "date-new-old"
  | "date-old-new";

type BookX = Book & {
  featured?: boolean;
  salesCount?: number;
  createdAt?: string | number;
};

export default function CatalogPage() {
  const all = useMemo(() => data as BookX[], []);

  const [view, setView] = useState<ViewMode>("grid");
  const [sort, setSort] = useState<SortKey>("best-selling");
  const [perPage, setPerPage] = useState(22);

  const [filters, setFilters] = useState<Filters>({
    inStock: null,
    priceFrom: 0,
    priceTo: undefined,
    authors: {},
    colors: {},
    categories: {},
  });

  const authorCounts = useMemo(() => {
    const map: Record<string, number> = {};
    all.forEach(b => { map[b.author] = (map[b.author] ?? 0) + 1; });
    return map;
  }, [all]);

  const colorCounts = useMemo(() => {
    const map: Record<string, number> = {};
    all.forEach(b => new Set(b.color ?? []).forEach(c => { map[c] = (map[c] ?? 0) + 1; }));
    return map;
  }, [all]);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = {};
    all.forEach(b => new Set(b.categories ?? []).forEach(cat => { map[cat] = (map[cat] ?? 0) + 1; }));
    return map;
  }, [all]);

  const filtered = useMemo(() => {
    let arr = [...all];

    if (filters.inStock !== null) {
      arr = arr.filter(b => (b.inStock ?? true) === filters.inStock);
    }
    if (filters.priceFrom != null) arr = arr.filter(b => b.price >= (filters.priceFrom || 0));
    if (filters.priceTo != null)   arr = arr.filter(b => b.price <= (filters.priceTo as number));

    const activeAuthors = Object.entries(filters.authors).filter(([, v]) => v).map(([k]) => k);
    if (activeAuthors.length) arr = arr.filter(b => activeAuthors.includes(b.author));

    const activeColors = Object.entries(filters.colors).filter(([, v]) => v).map(([k]) => k);
    if (activeColors.length) arr = arr.filter(b => (b.color ?? []).some(c => activeColors.includes(c)));

    const activeCats = Object.entries(filters.categories).filter(([, v]) => v).map(([k]) => k);
    if (activeCats.length) arr = arr.filter(b => (b.categories ?? []).some(cat => activeCats.includes(cat)));

    const ts = (b: BookX) =>
      typeof b.createdAt === "string" ? Date.parse(b.createdAt)
      : typeof b.createdAt === "number" ? b.createdAt
      : 0;

    switch (sort) {
      case "featured":
        arr.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
        break;
      case "best-selling":
        arr.sort((a, b) => (b.salesCount ?? Number(!!b.sale)) - (a.salesCount ?? Number(!!a.sale)));
        break;
      case "alpha-asc":
        arr.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "alpha-desc":
        arr.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-asc":
        arr.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        arr.sort((a, b) => b.price - a.price);
        break;
      case "date-new-old":
        arr.sort((a, b) => ts(b) - ts(a));
        break;
      case "date-old-new":
        arr.sort((a, b) => ts(a) - ts(b));
        break;
    }
    return arr;
  }, [all, filters, sort]);

  const total = filtered.length;
  const pageItems = filtered.slice(0, perPage);

  return (
    <section className="container-fluid mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
           <div className="lg:col-span-10">
          <TopBar
            total={total}
            showingFrom={total ? 1 : 0}
            showingTo={Math.min(perPage, total)}
            sort={sort}
            onSort={setSort}
            perPage={perPage}
            onPerPage={setPerPage}
            view={view}
            onViewChange={setView}
          />

          <div className="mt-6">
            {view === "grid" ? (
              <ProductGrid items={pageItems} />
            ) : (
              <ProductList items={pageItems} />
            )}
          </div>
        </div>
        <div className="lg:col-span-2">
          <SidebarFilters
            authorCounts={authorCounts}
            colorCounts={colorCounts}
            categoryCounts={categoryCounts}
            selected={filters}
            onStock={(v) => setFilters(s => ({ ...s, inStock: v }))}
            onPrice={(from, to) => setFilters(s => ({ ...s, priceFrom: from, priceTo: to }))}
            onToggleAuthor={(n) => setFilters(s => ({ ...s, authors: { ...s.authors, [n]: !s.authors[n] } }))}
            onToggleColor={(n) => setFilters(s => ({ ...s, colors: { ...s.colors, [n]: !s.colors[n] } }))}
            onToggleCategory={(n) => setFilters(s => ({ ...s, categories: { ...s.categories, [n]: !s.categories[n] } }))}
          />
        </div>
      </div>
    </section>
  );
}
