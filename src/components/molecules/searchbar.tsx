"use client"
import { Search } from "lucide-react";

type SearchBarProps = {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  className?: string;
};

import { useState } from "react";

export default function SearchBar({
  placeholder = "I'm looking for...",
  onSubmit,
  className = "",
}: SearchBarProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit?.(value);
  }

  return (
    <form
      className={`flex-1 mx-8 max-w-2xl ${className}`}
      onSubmit={handleSubmit}
      role="search"
      aria-label="site search"
    >
      <div className="relative flex items-center bg-white border border-gray-100">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 focus:outline-none rounded-md"
          aria-label={placeholder}
        />
        <button
          type="submit"
          className="flex items-center absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black"
        >
          <Search className="w-5 h-5 mr-1" />
          <span className="font-medium">Search</span>
        </button>
      </div>
    </form>
  );
}
