"use client";
import data from "@/data/HomeDemoV3/AuthorMonthdata.json";
import AuthorMonthCard from "@/components/molecules/HomeDemoV3/AuthorMonthCard";

export default function AuthorOfTheMonthSection() {
  return (
    <section className="container-fluid py-[150px]">
      <h2 className="text-center text-4xl md:text-5xl font-medium mb-10">
        Author of the Month
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {(data as any[]).map((card, idx) => (
          <AuthorMonthCard
            key={`${card.title ?? "image-only"}-${idx}`}
            {...card}
            imageOnly={!card?.title && !card?.author && card?.price == null}
          />
        ))}
      </div>
    </section>
  );
}
