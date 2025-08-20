"use client";
import Image from "next/image";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

type HeroBannerProps = {
  title: string;
  crumbs: Crumb[];
  bgImage: string;
  heightClass?: string;
  overlayClass?: string;
  className?: string;
};

export default function HeroCard({
  title,
  crumbs,
  bgImage,
  heightClass = "h-[200px] md:h-[260px] lg:h-[300px]",
  overlayClass = "",
  className = "",
}: HeroBannerProps) {
  return (
    <section className={`relative w-full ${heightClass} ${className}`}>
      {/* BG image */}
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* optional overlay */}
      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} />}

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mt-2 text-sm md:text-base">
          <ol className="flex items-center gap-2 text-gray-800">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {c.href && !last ? (
                    <Link href={c.href} className="hover:text-[#DD321E] text-base">
                      {c.label}
                    </Link>
                  ) : (
                    <span className={last ? "text-black text-xl" : ""}>{c.label}</span>
                  )}
                  {!last && <span>•</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
