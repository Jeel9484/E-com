"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, Plus, ChevronDown } from "lucide-react";

import HomeDropdownMenu from "@/components/molecules/HomeDemoV1/Dropdown/Homedropdown";
import PagesDropdownMenu from "@/components/molecules/HomeDemoV1/Dropdown/Pagesdropdown";
import ShopMegaDropdownMenu from "@/components/molecules/HomeDemoV1/Dropdown/Shopdropdown";
import { HeaderIcon } from "@/components/organisms/Home/HeaderIcon";
import ShopMegaDropdownMenuMobile from "@/components/molecules/Home/Dropdown/ShopdropdownMobile";
import HomeDropdownMenuMobile from "@/components/molecules/Home/Dropdown/HomeDropDownMobile";
import PagesDropdownMenuMobile from "@/components/molecules/Home/Dropdown/PageDropDownMobile";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* promo bar — unchanged */}
      <div className="w-full h-full flex justify-center gap-1 py-4 text-center bg-orange text-base text-white mb-5">
        <h1>Free express shipping with orders over $150</h1>
        <span className="underline">Shop Now</span>
      </div>

      <div className="container-fluid mb-10">
        <div className="flex items-center justify-between">
          <Image src="/assets/logo.jpg" alt="logo" width={130} height={130} />

          {/* desktop nav (same style) */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8 items-center text-xl">
              <Link href="/">
                <HomeDropdownMenu />
              </Link>
              <Link href="/shop">
                <ShopMegaDropdownMenu />
              </Link>
              <Link href="/blog/news" className="hover:text-orange-500">
                Blog
              </Link>
              <Link href="/pages">
                <PagesDropdownMenu />
              </Link>
              <Link href="/about-us" className="hover:text-orange-500">
                About Us
              </Link>
              <Link href="/contact-us" className="hover:text-orange-500">
                Contact Us
              </Link>
            </ul>
          </nav>

          {/* right icons */}
          <div className="flex items-center gap-2">
            <Search className="hidden lg:inline-block" />
            <HeaderIcon />
            {/* mobile hamburger */}
            <button
              aria-label="Open menu"
              className="lg:hidden inline-flex items-center justify-center p-2"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer + backdrop */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-[90%] bg-white shadow-xl
    transition-transform duration-300 ${
      open ? "translate-x-0" : "translate-x-full"
    }
    flex flex-col overflow-y-auto scroll-smooth overscroll-y-contain
  `}
          role="dialog"
          aria-modal="true"
        >
          {/* sticky header */}
          <div className="px-4 py-3 flex items-center justify-between mb-5 border-b border-gray-200 sticky top-0 bg-white z-10">
            <Image src="/assets/logo.jpg" alt="logo" width={90} height={40} />
            <button
              aria-label="Close menu"
              className="p-2"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          {/* body (no extra overflow wrapper needed) */}
          <div className="px-4 pt-4">
            <div className="flex items-center gap-2 border border-gray-200 px-3 py-2">
              <input
                type="text"
                placeholder="I'm looking for..."
                className="w-full outline-none text-sm"
              />
              <Search className="h-4 w-4" />
            </div>
            <div className="mt-4">
              <HeaderIcon />
            </div>
          </div>

          <nav className="px-4 py-4">
            <ul className="flex flex-col space-y-4 gap-4 text-base">
              <li className="">
                <HomeDropdownMenuMobile onNavigate={() => setOpen(false)} />
              </li>

              {/* Shop block */}
              <li className="" id="shop-block">
                <ShopMegaDropdownMenuMobile
                  onNavigate={() => setOpen(false)}
                  onOpen={() => {
                    // optional: scroll to shop block when opening
                    document.getElementById("shop-block")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                />
              </li>

              <li className="">
                <Link
                  href=""
                  className="hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
              </li>

              <li className="">
                <PagesDropdownMenuMobile onNavigate={() => setOpen(false)} />
              </li>

              <li className="">
                <Link
                  href=""
                  className="hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
}
