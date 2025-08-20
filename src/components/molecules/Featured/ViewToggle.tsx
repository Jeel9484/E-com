"use client";
import { Grid2X2, List } from "lucide-react";
import IconButton from "@/components/atoms/IcconButton";

export type ViewMode = "grid" | "list";

export default function ViewToggle({
  value,
  onChange,
}: {
  value: ViewMode;
  onChange: (v: ViewMode) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <IconButton
        aria-label="Grid view"
        isActive={value === "grid"}
        onClick={() => onChange("grid")}
      >
        <Grid2X2 className="h-4 w-4" />
      </IconButton>
      <IconButton
        aria-label="List view"
        isActive={value === "list"}
        onClick={() => onChange("list")}
      >
        <List className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
