import HeroCard from "@/components/molecules/Collection/HeroCard";
export default function HeroFeaturedSection() {
  return (
    <section className="mb-14">
      <HeroCard
        title=" Best Sellers"
        crumbs={[{ label: "Home", href: "/" }, { label: " Best Sellers" }]}
        bgImage="/assets/bg-image.jpeg"
      />
    </section>
  );
}
