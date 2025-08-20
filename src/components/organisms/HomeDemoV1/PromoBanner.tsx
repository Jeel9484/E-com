import promoBanners from "@/data/HomeDemoV1/promobanner.json";
import PromoBannerCard from "@/components/molecules/HomeDemoV1/Cards/PromoBannercard";

const PromoBannersSection = () => (
  <section className="w-full container-fluid mb-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {(promoBanners as any[]).map((banner) => (
        <div key={banner.id} className="">
          <PromoBannerCard {...banner} />
        </div>
      ))}
    </div>
  </section>
);

export default PromoBannersSection;
