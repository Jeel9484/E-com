import HeroCard from "@/components/molecules/Collection/HeroCard";
export default function HeroFeaturedSection() {
  return (
    <section className="mb-14">
      <HeroCard
        title=" Featured Books"
        crumbs={[{ label: "Home", href: "/" }, { label: " Featured Books" }]}
        bgImage="/assets/bg-image.jpeg"
      />
    </section>
  );
}
