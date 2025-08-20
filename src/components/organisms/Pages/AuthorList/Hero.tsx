import HeroCard from "@/components/molecules/Collection/HeroCard";
export default function HeroFeaturedSection() {
  return (
    <section className="mb-14">
      <HeroCard
        title=" Author List "
        crumbs={[{ label: "Home", href: "/" }, { label: " Author List" }]}
        bgImage="/assets/bg-image.jpeg"
      />
    </section>
  );
}