import Image from "next/image";
import CountdownStatic from "@/components/molecules/Pages/Author/Countdown";

type CollabHeroProps = {
  imageSrc: string;
  imageAlt?: string;
  ctaHref: string;
  ctaText?: string;
};

export default function Banner({
  imageSrc,
  imageAlt = "Book mockup",
  ctaHref,
  ctaText = "Shop Now",
}: CollabHeroProps) {
  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
              Shop limited edition <br /> collaborations
            </h2>

            <CountdownStatic className="mt-8" />

            <a
              href={ctaHref}
              className="inline-flex items-center justify-center mt-8 h-[56px] px-7 bg-black text-white text-lg transition hover:bg-[#DD321E] border-black"
            >
              {ctaText}
            </a>
          </div>

          {/* RIGHT image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <Image src={imageSrc} alt={imageAlt} height={320} width={320} className="object-contain w-full h-full" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
