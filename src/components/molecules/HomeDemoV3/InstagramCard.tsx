"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";

type Props = {
  src: string;
  href?: string; 
  alt?: string;
};

export default function InstaCard({ src, href = "#", alt }: Props) {
  const safeAlt = alt ?? src.split("/").pop()?.replace(/\.\w+$/, "") ?? "post";

  return (
    <Link
      href={href}
      aria-label="View on Instagram"
      className="group relative w-fit overflow-hidden"
    >
      {/* image */}
      <Image
        src={src}
        alt={safeAlt}
        height={320}
        width={320}
        className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
        priority={false}
      />

      {/* dark overlay */}
      <span
        className="
          pointer-events-none absolute inset-0 bg-black/0
          transition-colors duration-200 group-hover:bg-black/50
        "
      />

      {/* instagram icon in white round */}
      <span
        className="
          pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          grid place-items-center rounded-full bg-white/95 shadow-lg
          h-12 w-12 opacity-0 scale-75
          transition-all duration-200 group-hover:opacity-100 group-hover:scale-100
        "
      >
        <Instagram className="h-6 w-6 text-black" aria-hidden="true" />
      </span>
    </Link>
  );
}
