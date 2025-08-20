"use client";
import FilterGroup from "@/components/molecules/Featured/FilterGroup";

export type Filters = {
  inStock: boolean | null;
  priceFrom?: number;
  priceTo?: number;
  authors: Record<string, boolean>;
  colors: Record<string, boolean>;
  categories: Record<string, boolean>;
};

type Props = {
  authorCounts: Record<string, number>;
  colorCounts: Record<string, number>;
  categoryCounts: Record<string, number>;
  selected: Filters;
  onStock: (v: boolean | null) => void;
  onPrice: (from?: number, to?: number) => void;
  onToggleAuthor: (name: string) => void;
  onToggleColor: (name: string) => void;
  onToggleCategory: (name: string) => void;
};

export default function SidebarFilters({
  authorCounts, colorCounts, categoryCounts, selected,
  onStock, onPrice, onToggleAuthor, onToggleColor, onToggleCategory,
}: Props) {
  return (
    <aside className="w-full">
      {/* Availability */}
      <FilterGroup title="Availability" defaultOpen>
        <div className="space-y-3 text-lg">
          <label className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <input type="radio" name="stock" checked={selected.inStock === true} onChange={() => onStock(true)} />
              <span>In stock</span>
            </span>
          </label>
          <label className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <input type="radio" name="stock" checked={selected.inStock === false} onChange={() => onStock(false)} />
              <span>Out of stock</span>
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="stock" checked={selected.inStock == null} onChange={() => onStock(null)} />
            <span>Any</span>
          </label>
        </div>
      </FilterGroup>

      {/* Price */}
      <FilterGroup title="Price" defaultOpen>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 items-center">
            <label className="text-sm">£ From</label>
            <input
              type="number"
              className="border border-gray-200 rounded px-3 py-2"
              placeholder="0"
              defaultValue={selected.priceFrom ?? ""}
              onBlur={(e) => onPrice(Number(e.target.value || 0), selected.priceTo)}
            />
            <label className="text-sm">£ To</label>
            <input
              type="number"
              className="border border-gray-200 rounded px-3 py-2"
              placeholder="9999"
              defaultValue={selected.priceTo ?? ""}
              onBlur={(e) => onPrice(selected.priceFrom, e.target.value ? Number(e.target.value) : undefined)}
            />
          </div>
          <button
            className="w-full bg-black text-white rounded-md py-2 text-sm"
            onClick={() => onPrice(selected.priceFrom, selected.priceTo)}
          >
            Filter
          </button>
        </div>
      </FilterGroup>

      {/* Authors (scrollable) */}
      <FilterGroup title="Authors" defaultOpen scrollable>
        <div className="space-y-3 pr-1">
          {Object.entries(authorCounts).map(([name, count]) => (
            <label key={name} className="flex items-center justify-between text-lg">
              <span className="flex items-center gap-2">
                <input type="checkbox" checked={!!selected.authors[name]} onChange={() => onToggleAuthor(name)} />
                <span>{name}</span>
              </span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">{count}</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      {/* Color (scrollable) */}
      <FilterGroup title="Color" defaultOpen scrollable>
        <div className="space-y-3 pr-1">
          {Object.entries(colorCounts).map(([name, count]) => (
            <label key={name} className="flex items-center justify-between text-lg">
              <span className="flex items-center gap-2">
                <input type="checkbox" checked={!!selected.colors[name]} onChange={() => onToggleColor(name)} />
                <span>{name}</span>
              </span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">{count}</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      {/* Categories (scrollable) */}
      <FilterGroup title="Categories" defaultOpen scrollable>
        <div className="space-y-3 pr-1">
          {Object.entries(categoryCounts).map(([name, count]) => (
            <label key={name} className="flex items-center justify-between text-lg">
              <span className="flex items-center gap-2">
                <input type="checkbox" checked={!!selected.categories[name]} onChange={() => onToggleCategory(name)} />
                <span>{name}</span>
              </span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">{count}</span>
            </label>
          ))}
        </div>
      </FilterGroup>
    </aside>
  );
}
