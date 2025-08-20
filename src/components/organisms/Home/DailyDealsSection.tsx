import DealBookCard from "@/components/molecules/Home/Card/DealCard";
import DealsBook from "@/data/Home/DealsBook.json" 

export default function DailyDealsSection() {
  return (
    <section className="container-fluid w-full">
      {/* Heading & Timer */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-4xl md:text-5xl font-normal">Daily Deals</h2>
        <div className="flex gap-2 bg-[#e9452e] text-white text-lg px-6 py-2">
          <span>00 Days</span>
          <span>00 Hours</span>
          <span>00 Min</span>
          <span>00 Sec</span>
        </div>
      </div>
      {/* Book cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {DealsBook.map((book, idx) => (
          <DealBookCard key={book.title + idx} {...book} />
        ))}
      </div>
    </section>
  );
}