"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/molecules/searchbar";
import { HeaderIcons } from "../../components/organisms/HomeDemoV1/Headericon";
import { Headset, Menu, X, ShoppingBag } from "lucide-react";
import HomeDropdownMenu from "@/components/molecules/HomeDemoV1/Dropdown/Homedropdown";
import ShopMegaDropdownMenu from "@/components/molecules/HomeDemoV1/Dropdown/Shopdropdown";
import PagesDropdownMenu from "@/components/molecules/HomeDemoV1/Dropdown/Pagesdropdown";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      {/* Topbar */}
      <div className="w-full h-full flex justify-center gap-1 py-4 text-center bg-darkgray text-base text-white">
        <h1>Free express shipping with orders over $150</h1>
        <span className="underline">Shop Now</span>
      </div>
      {/* Main header */}
      <div className="container-fluid flex justify-between items-center bg-white py-6 border-b border-gray-200 mb-10">
        <Image src="/assets/logo.jpg" alt="logo" width={130} height={130} />
        {/* SearchBar ONLY desktop */}
        <div className="hidden md:block w-full max-w-2xl mx-8">
          <SearchBar />
        </div>
        <HeaderIcons />
        {/* Hamburger for mobile */}
        <button
          className="ml-2 flex gap-4 md:hidden"
          onClick={() => setOpen(true)}
        >
          <div className="relative">
            <ShoppingBag className="w-7 h-7" />
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <Menu size={32} />
        </button>
      </div>

      {/* Desktop nav (unchanged) */}
      <div className="container-fluid justify-between items-center mt-10 mb-10 hidden md:flex">
        <nav>
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
        <div className="flex gap-1 text-xl cursor-pointer hover:text-orange-500">
          <Headset /> (+01)-800-3456
        </div>
      </div>

      {/* Mobile Drawer (sidebar) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          md:hidden overflow-hidden
        `}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Image src="/assets/logo.jpg" alt="logo" width={80} height={80} />
          <button onClick={() => setOpen(false)}>
            <X size={30} />
          </button>
        </div>
        <div className="p-4">
          <SearchBar />
          <nav className="mt-8">
            <ul className="flex flex-col gap-5 text-lg">
              <Link href="/">
                <HomeDropdownMenu />
              </Link>
              <Link href="/shop">
                <ShopMegaDropdownMenu />
              </Link>
              <Link href="/blog" className="hover:text-orange-500">
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
            <div className="mt-10 border-t pt-6">
              <div className="mb-4">Account</div>
              {/* Account Dropdown etc. */}
            </div>
          </nav>
        </div>
      </aside>
    </header>
  );
}
