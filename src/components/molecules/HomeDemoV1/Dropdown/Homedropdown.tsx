import React from "react";
import Link from "next/link";
import { Dropdown } from "@/components/atoms/dropdown";
import { ChevronDown } from "lucide-react";

const HomeDropdownMenu = () => (
  <Dropdown
    trigger={
      <div className="flex items-center gap-1 text-xl hover:text-orange-500">
        Home
        <ChevronDown className="w-4 h-4" />
      </div>
    }
  >
    <div className="flex flex-col py-3 min-w-[175px]">
      <Link href="/home-v1" className="block px-4 py-2 hover:text-orange-500">
        Home Demo V1
      </Link>
      <Link href="/home-v2" className="block px-4 py-2 hover:text-orange-500">
        Home Demo V2
      </Link>
      <Link href="/home-v3" className="block px-4 py-2 hover:text-orange-500">
        Home Demo V3
      </Link>
      <Link href="/home-v4" className="block px-4 py-2 hover:text-orange-500">
        Home Demo V4
      </Link>
    </div>
  </Dropdown>
);

export default HomeDropdownMenu;
