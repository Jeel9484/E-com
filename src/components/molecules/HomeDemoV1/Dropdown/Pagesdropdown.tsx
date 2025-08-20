import React from "react";
import Link from "next/link";
import { Dropdown } from "@/components/atoms/dropdown";
import { ChevronDown } from "lucide-react";

const PagesDropdownMenu = () => (
  <Dropdown
    trigger={
      <div className="flex items-center gap-1 text-xl  hover:text-orange-500">
        Pages
        <ChevronDown className="w-4 h-4" />
      </div>
    }
  >
    <div className="flex flex-col py-3 min-w-[220px]">
      <Link href="/pages/author-list" className="block px-4 py-2 hover:text-orange-500">
        Author List Page
      </Link>
      <Link href="/pages/about-us" className="block px-4 py-2 hover:text-orange-500">
        About Us
      </Link>
      <Link href="/pages/contact-us" className="block px-4 py-2 hover:text-orange-500">
        Contact Us
      </Link>
      <Link href="/pages/faq" className="block px-4 py-2 hover:text-orange-500">
        Faq Page
      </Link>
      <Link href="/pages/404" className="block px-4 py-2 hover:text-orange-500">
        404 Error Page
      </Link>
    </div>
  </Dropdown>
);

export default PagesDropdownMenu;
