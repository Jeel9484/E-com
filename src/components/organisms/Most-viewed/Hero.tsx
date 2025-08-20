import HeroCard from "@/components/molecules/Collection/HeroCard";
export default function HeroFeaturedSection() {
  return (
    <section className="mb-14">
      <HeroCard
        title=" Most Viewed"
        crumbs={[{ label: "Home", href: "/" }, { label: " Most Viewed" }]}
        bgImage="/assets/bg-image.jpeg"
      />
    </section>
  );
}
