"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      {/* Search Box */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center border overflow-hidden w-full max-w-lg"
      >
        {/* Input field */}
        <input
          type="text"
          placeholder="I'm looking for..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-3 py-4 outline-none text-gray-700 placeholder-gray-400"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="px-3 py-2 text-gray-600 hover:text-[#e9452e] transition"
        >
          <Search size={18} />
        </button>
      </form>
    </div>
  );
}
