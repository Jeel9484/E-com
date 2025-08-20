import HeroCard from "@/components/molecules/Collection/HeroCard";

export default function HeroShop(){
    return(
             <div className="mb-14">
                    <HeroCard
                      title="Shop"
                      crumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
                      bgImage="/assets/bg-image.jpeg"
                    />
              </div>
    )
}