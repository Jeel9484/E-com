import Image from "next/image";
import CircleStatBadge from "@/components/molecules/Pages/AboutUs/Circelstatic";

type AboutSectionProps = {
  imgSrc: string; // e.g. "/images/library.png"
  imgAlt?: string;
  headline: string; // "Since 1987, We have..."
  subhead?: string; // "Win best Book Shop Award At 2023."
  paragraphs?: string[];
  founder?: string; // description lines
};

export default function AboutSection({
  imgSrc,
  imgAlt = "Reading a CEO",
  headline,
  subhead,
  paragraphs = [],
  founder,
}: AboutSectionProps) {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* LEFT: Image with badge */}
        <div className="col-span-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-5 text-black">{headline}</h2>
          {paragraphs.length > 0 && (
            <div className="space-y-4 text-[17px] mb-8 leading-8 text-black/80">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          <span className="text-base">{founder}</span>
        </div>
              {/* RIGHT: Content */}
      <div className="col-span-6">
        <div className="max-w-2xl overflow-hidden">
          <Image
            src={imgSrc}
            alt={imgAlt}
            height={320}
            width={480}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      </div>


    </section>
  );
}
