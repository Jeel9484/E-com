import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "@/components/atoms/dropdown";
import { ChevronDown } from "lucide-react";

const ShopMegaDropdownMenu = () => (
  <Dropdown
    trigger={
      <div className="flex items-center gap-1 text-xl  hover:text-orange-500">
        Shop
        <ChevronDown className="w-4 h-4" />
      </div>
    }
    align="center"
  >
    <Link href="/collections/featured-books" className="flex p-6 gap-8 bg-white min-w-[800px]">
      <div className="flex flex-col items-center">
        <Image
          src="/assets/nav-1.jpg"
          alt="img-1"
          width={144}
          height={192}
          className="w-36 h-48 object-cover"
        />
        <span className="mt-2 text-center">Featured Books</span>
      </div>

      <Link href="/collections/best-sellers" className="flex flex-col items-center">
        <Image
          src="/assets/nav-2.jpg"
          alt="img-1"
          width={144}
          height={192}
          className="w-36 h-48 object-cover"
        />
        <span className="mt-2 text-center">Best Sellers</span>
      </Link>

      <Link href="/collections/most-viewed" className="flex flex-col items-center">
        <Image
          src="/assets/nav-3.jpg"
          alt="img-1"
          width={144}
          height={192}
          className="w-36 h-48 object-cover"
        />
        <span className="mt-2 text-center">Most Viewed</span>
      </Link>

      <div className="border-l h-full mx-4" />
      {/* All Collections List */}
      <div className="flex flex-col min-w-[180px]">
        <Link href="/collections" className="mb-2 border-b border-gray-200 pb-2 font-medium hover:text-orange-500">
          All Collections
        </Link>
        <Link href="/collections/featured-books" className="py-1 hover:text-orange-500">
          Romance
        </Link>
        <Link href="/collections/best-sellers" className="py-1 hover:text-orange-500">
          History
        </Link>
        <Link href="/collections/best-sellers" className="py-1 hover:text-orange-500">
          Comedy
        </Link>
        <Link href="/collections/most-viewed" className="py-1 hover:text-orange-500">
          Fiction
        </Link>
        <Link href="/collections/featured-books" className="py-1 hover:text-orange-500">
          Adventure
        </Link>
      </div>
    </Link>
  </Dropdown>
);

export default ShopMegaDropdownMenu;
