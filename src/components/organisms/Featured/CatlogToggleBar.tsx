"use client";
import React from "react";
import ViewToggle, { ViewMode } from "@/components/molecules/Featured/ViewToggle";
import SelectField, { Option } from "@/components/atoms/SelectField";

export type Availability = "all" | "in_stock" | "out_of_stock";

type Props = {
  view: ViewMode;
  onViewChangeAction: (v: ViewMode) => void;

  sort: string;
  onSortChangeAction: (v: string) => void;
  sortOptions: Readonly<Option<string>[]>;

  availability: Availability;
  onAvailabilityChangeAction: (v: Availability) => void;

  pageSize: number;
  onPageSizeChangeAction: (v: number) => void;
  pageSizeOptions: Readonly<Option<number>[]>;

  showingStart: number;
  showingEnd: number;
  total: number;
};

export default function CatalogToolbar({
  view,
  onViewChangeAction,
  sort,
  onSortChangeAction,
  sortOptions,
  availability,
  onAvailabilityChangeAction,
  pageSize,
  onPageSizeChangeAction,
  pageSizeOptions,
  showingStart,
  showingEnd,
  total,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
      <ViewToggle value={view} onChange={onViewChangeAction} />

      <div className="flex flex-wrap items-center gap-6">
        <SelectField
          id="sort-by"
          label="Sort by :"
          value={sort}
          onChangeAction={onSortChangeAction}
          options={sortOptions}
        />
        <SelectField<Availability>
          id="availability"
          label="Availability :"
          value={availability}
          onChangeAction={onAvailabilityChangeAction}
          options={[
            { label: "All", value: "all" },
            { label: "In Stock", value: "in_stock" },
            { label: "Out of Stock", value: "out_of_stock" },
          ]}
        />
      </div>

      <div className="ml-auto flex items-center gap-6">
        <p className="text-sm text-black/70">
          Showing <strong>{showingStart}</strong> - <strong>{showingEnd}</strong> of <strong>{total}</strong> result
        </p>
        <SelectField<number>
          id="per-page"
          label="Show :"
          value={pageSize}
          onChangeAction={onPageSizeChangeAction}
          options={pageSizeOptions}
        />
      </div>
    </div>
  );
}
