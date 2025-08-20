import HeroCard from "@/components/molecules/Collection/HeroCard";

export default function HeroProduct() {
  return (
    <div className="mb-14">
      <HeroCard
        title=""
        crumbs={[{ label: "Home", href: "/" }, { label: "Kaleidoscope Chronicles Book" }]}
        bgImage="/assets/bg-image.jpeg"
      />
    </div>
  );
}
