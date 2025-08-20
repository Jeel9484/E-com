"use client";

import React from "react";
import Icon from "@/components/atoms/icon";

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

type Props = {
  total: number;
  showingFrom: number;
  showingTo: number;

  sort: SortKey;
  onSort: (v: SortKey) => void;

  perPage: number;
  onPerPage: (n: number) => void;

  view: ViewMode;
  onViewChange: (v: ViewMode) => void;
};

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
  { label: "Featured", value: "featured" },
  { label: "Best Selling", value: "best-selling" },
  { label: "Alphabetically, A-Z", value: "alpha-asc" },
  { label: "Alphabetically, Z-A", value: "alpha-desc" },
  { label: "Price, Low To High", value: "price-asc" },
  { label: "Price, High To Low", value: "price-desc" },
  { label: "Date, New To Old", value: "date-new-old" },
  { label: "Date, Old To New", value: "date-old-new" },
];

const PER_PAGE_OPTIONS = [12, 22, 36];

export default function TopBar({
  total,
  showingFrom,
  showingTo,
  sort,
  onSort,
  perPage,
  onPerPage,
  view,
  onViewChange,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
      {/* LEFT: grid/list */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Grid view"
          onClick={() => onViewChange("grid")}
          className={`inline-flex h-7 w-7 items-center justify-center ${
            view === "grid"
              ? "text-orange-500"
              : "bg-transparent"
          }`}
        >
          <Icon name="grid" size={25} />
        </button>
        <button
          type="button"
          aria-label="List view"
          onClick={() => onViewChange("list")}
          className={`inline-flex h-7 w-7 items-center justify-center ${
            view === "list"
              ? "text-orange-500"
              : "bg-transparent"
          }`}
        >
          <Icon name="list" size={25} />
        </button>
      </div>

      {/* MIDDLE: Sort + Showing */}
      <div className="flex items-center gap-6">
        {/* Sort select */}
        <label className="flex items-center gap-2 text-lg">
          <span className="text-black/80">Sort by :</span>
          <div className="relative">
            <select 
              value={sort}
              onChange={(e) => onSort(e.target.value as SortKey)}
              className="h-9 min-w-[180px] appearance-none border border-gray-300 bg-white px-3 pr-8 text-sm outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              size={16}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 opacity-70"
            />
          </div>
        </label>

        {/* Showing text */}
        <p className="text-lg text-black/70">
          Showing <strong>{showingFrom}</strong> - <strong>{showingTo}</strong>{" "}
          of <strong>{total}</strong> result
        </p>
      </div>

      {/* RIGHT: per-page */}
      <label className="flex items-center gap-2 text-lg">
        <span className="text-black/80">Show :</span>
        <div className="relative">
          <select
            value={perPage}
            onChange={(e) => onPerPage(Number(e.target.value))}
            className="h-9 min-w-[90px] appearance-none border border-gray-300 bg-white px-3 pr-8 text-sm outline-none"
          >
            {PER_PAGE_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <Icon
            name="chevron-down"
            size={16}
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 opacity-70"
          />
        </div>
      </label>
    </div>
  );
}
