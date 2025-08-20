import data from "@/data/HomeDemoV1/BestOfMonthdata.json";
import PromoBannerBox from "@/components/molecules/HomeDemoV1/Cards/PromoBannerBox";
import BestBookListItem from "@/components/molecules/HomeDemoV1/Cards/BestBookItem";

const BestBookSection = () => (
  <section className="container-fluid mb-10">
    <div className="grid grid-cols-1 lg:grid-cols-[500px_auto] gap-10 w-full">
      {/* Left: Banner */}
      <div className="w-full">
        <PromoBannerBox 
          subtitle={data.promo.subtitle}
          title={data.promo.title}
          ctaText={data.promo.ctaText}
          ctaLink={data.promo.ctaLink}
          image={data.promo.images[0]}
        />
      </div>
      {/* Right: Book List */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {data.books.map((book, i) => (
          <BestBookListItem key={book.title + i} {...book} />
        ))}
      </div>
    </div>
  </section>
);

export default BestBookSection;
