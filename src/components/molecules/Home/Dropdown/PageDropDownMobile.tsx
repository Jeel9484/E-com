"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function PagesDropdownMenuMobile({
  onNavigate,
}: {
  onNavigate?: () => void; 
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-base">
      {/* trigger row */}
      <button
        className="w-full flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-normal">Pages</span>
        <Plus className={`transition-transform ${open ? "rotate-45" : ""}`} />
      </button>

      {/* items */}
      {open && (
        <ul className="pl-3 pb-2 space-y-3">
          <li>
            <Link href="/pages/author-list" onClick={onNavigate} className="block py-1">
              Author List Page
            </Link>
          </li>
          <li>
            <Link href="/pages/about-us" onClick={onNavigate} className="block py-1">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/pages/contact-us" onClick={onNavigate} className="block py-1">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/pages/faq" onClick={onNavigate} className="block py-1">
              Faq Page
            </Link>
          </li>
          <li>
            <Link href="/pages/404" onClick={onNavigate} className="block py-1">
              404 Error Page
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
