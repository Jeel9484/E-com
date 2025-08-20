import InstaCard from "@/components/molecules/HomeDemoV3/InstagramCard";
import data from "@/data/HomeDemoV3/ShopInstgramdata.json";

type Item = { image: string; href?: string; alt?: string };

export default function ShopInstagram() {
  const items = data as Item[];

  return (
    <section aria-labelledby="shop-instagram" className="container-fluid mb-14">
      <div className="mb-8 text-center">
        <h2 id="shop-instagram" className="mb-2.5 text-5xl">
          Shop At Instagram
        </h2>
        <p className="mb-2.5 text-gray-600 text-2xl">@dunki_shop</p>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {items.map((it, i) => (
          <InstaCard
            key={`${it.image}-${i}`}
            src={it.image}
            href={it.href ?? "#"}
            alt={it.alt}
          />
        ))}
      </div>
    </section>
  );
}
