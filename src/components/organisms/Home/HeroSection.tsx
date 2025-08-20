"use client";
import BookCard from "@/components/molecules/Home/Card/BookCard";
import BookCardSmall from "@/components/molecules/Home/Card/BookCardsmall";
import heroPromos from "@/data/Home/BookData.json";

type PromoItem = {
  type: "card" | "small";
  backgroundImage: string;
  heading: string;
  buttonText: string;
  href?: string;
};

export default function HeroSection() {
  const left = heroPromos.left as PromoItem[];
  const right = heroPromos.right as PromoItem[];

  return (
    <section className="container-fluid">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <BookCard {...left[0]} />
          {/* Two small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <BookCardSmall {...left[1]} />
            <BookCardSmall {...left[2]} />
          </div>
        </div>

        {/* RIGHT Column */}
        <div className="flex flex-col">
          {/* Two small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <BookCardSmall {...right[0]} />
            <BookCardSmall {...right[1]} />
          </div>

          {/* Large card */}
          <BookCard {...right[2]} />
        </div>
      </div>
    </section>
  );
}
