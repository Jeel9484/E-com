"use client";
import { ChevronDown } from "lucide-react";
import { PropsWithChildren, useState } from "react";

type Props = PropsWithChildren<{
  title: string;
  defaultOpen?: boolean;
  scrollable?: boolean;
}>;

export default function FilterGroup({ title, defaultOpen = true, scrollable = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between">
        <span className="text-lg font-semibold">{title}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={open ? "mt-4" : "hidden"}>
        <div className={scrollable ? "max-h-48 overflow-y-auto pr-1" : ""}>{children}</div>
      </div>
    </div>
  );
}
