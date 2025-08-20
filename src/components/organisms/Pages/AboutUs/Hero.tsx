import HeroCard from "@/components/molecules/Collection/HeroCard";
export default function HeroFeaturedSectionAboutus() {
  return (
    <section className="mb-14">
      <HeroCard
        title=" About Us "
        crumbs={[{ label: "Home", href: "/" }, { label: " About Us" }]}
        bgImage="/assets/bg-image.jpeg"
      />
    </section>
  );
}