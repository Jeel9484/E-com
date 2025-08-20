import HeroCard from "@/components/molecules/Collection/HeroCard";
export default function HeroFeaturedSection() {
  return (
    <section className="mb-14">
      <HeroCard
        title=" 404 Not Found "
        crumbs={[{ label: "Home", href: "/" }, { label: " 404 Not Found" }]}
        bgImage="/assets/bg-image.jpeg"
      />
    </section>
  );
}