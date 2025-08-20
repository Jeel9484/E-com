"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function HomeDropdownMenuMobile({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-base">
      {/* Home accordion trigger */}
      <button
        className="w-full flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-normal">Home</span>
        <Plus className={`transition-transform ${open ? "rotate-45" : ""}`} />
      </button>

      {/* Dropdown content when open */}
      {open && (
        <ul className="pl-3 pb-2 space-y-3">
          <li>
            <Link href="/home-v1" onClick={onNavigate} className="block py-1">
              Home Demo V1
            </Link>
          </li>
          <li>
            <Link href="/home-v2" onClick={onNavigate} className="block py-1">
              Home Demo V2
            </Link>
          </li>
          <li>
            <Link href="/home-v3" onClick={onNavigate} className="block py-1">
              Home Demo V3
            </Link>
          </li>
          <li>
            <Link href="/home-v4" onClick={onNavigate} className="block py-1">
              Home Demo V4
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
