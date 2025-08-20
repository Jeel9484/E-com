import HeroCard from "@/components/molecules/Collection/HeroCard";
export default function HeroSection() {
  return (
    <section className="mb-14">
      <HeroCard
        title="Collections"
        crumbs={[{ label: "Home", href: "/" }, { label: "Collection" }]}
        bgImage="/assets/bg-image.jpeg"
      />
    </section>
  );
}
