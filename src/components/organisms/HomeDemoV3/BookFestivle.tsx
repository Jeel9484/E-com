import PromoBannerBox from "@/components/molecules/HomeDemoV3/PromoBox";
import BookFestival from "@/components/molecules/HomeDemoV3/BookFestival";
import data from "@/data/HomeDemoV3/BookSelldata.json";

export default function BookFestivalSection() {
  const books = (data as any).books;

  return (
    <section className="container-fluid mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">
        <div className="w-full col-span-5">
          <PromoBannerBox
            subtitle="Summer Sale"
            title="Up to 50% off Bestsellers"
            ctaText="Shop Now"
            ctaLink="/shop"
            image="/assets/festival.jpg"
          />
        </div>
        {/* Right: Book List */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full col-span-7">
          {books.map((book: any, i: number) => (
            <BookFestival key={`${book?.title ?? "book"}-${i}`} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
