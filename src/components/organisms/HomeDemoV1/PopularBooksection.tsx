"use client";
import { useState } from "react";
import BookCard from "@/components/molecules/HomeDemoV1/Cards/Bookcard";
import booksData from "@/data/HomeDemoV1/bookdata.json";

type TabKey = "featured" | "bestsellers" | "mostviewed";

const tabs = [
  { label: "Featured Books", value: "featured" as TabKey },
  { label: "Best Sellers", value: "bestsellers" as TabKey },
  { label: "Most Viewed", value: "mostviewed" as TabKey },
];

export default function PopularBooksSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("featured");

  return (
    <section className="container-fluid">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl">Popular Books</h2>
        <div className="flex bg-[#f5f5f5] w-fit overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`px-4 py-3 font-semibold transition 
              ${
                activeTab === tab.value
                  ? "bg-[#e9452e] text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {(booksData as any)[activeTab].map((book: any, idx: number) => (
          <BookCard key={book.title + idx} {...book} />
        ))}
      </div>
    </section>
  );
}
