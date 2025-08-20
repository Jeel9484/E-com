"use client";
import React from "react";
import ViewToggle, { ViewMode } from "@/components/molecules/Featured/ViewToggle";
import SelectField, { Option } from "@/components/atoms/SelectField";

export type Availability = "all" | "in_stock" | "out_of_stock";

type Props = {
  view: ViewMode;
  onViewChange: (v: ViewMode) => void;

  sort: string;
  onSortChange: (v: string) => void;
  sortOptions: Readonly<Option<string>[]>;

  availability: Availability;
  onAvailabilityChange: (v: Availability) => void;

  pageSize: number;
  onPageSizeChange: (v: number) => void;
  pageSizeOptions: Readonly<Option<number>[]>;

  showingStart: number;
  showingEnd: number;
  total: number;
};

export default function CatalogToolbar({
  view,
  onViewChange,
  sort,
  onSortChange,
  sortOptions,
  availability,
  onAvailabilityChange,
  pageSize,
  onPageSizeChange,
  pageSizeOptions,
  showingStart,
  showingEnd,
  total,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
      {/* left: view toggle */}
      <ViewToggle value={view} onChange={onViewChange} />

      {/* middle controls */}
      <div className="flex flex-wrap items-center gap-6">
        <SelectField
          id="sort-by"
          label="Sort by :"
          value={sort}
          onChange={onSortChange}
          options={sortOptions}
        />

        <SelectField
          id="availability"
          label="Availability :"
          value={availability}
          onChange={onAvailabilityChange}
          options={[
            { label: "All", value: "all" },
            { label: "In Stock", value: "in_stock" },
            { label: "Out of Stock", value: "out_of_stock" },
          ]}
        />
      </div>

      {/* right: showing + page size */}
      <div className="ml-auto flex items-center gap-6">
        <p className="text-sm text-black/70">
          Showing <strong>{showingStart}</strong> - <strong>{showingEnd}</strong> of{" "}
          <strong>{total}</strong> result
        </p>
        <SelectField
          id="per-page"
          label="Show :"
          value={pageSize}
          onChange={(v) => onPageSizeChange(Number(v))}
          options={pageSizeOptions}
        />
      </div>
    </div>
  );
}
