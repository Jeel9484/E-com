"use client";
import Image from "next/image";

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatar: string;
};

export default function ClientCard({ t }: { t: Testimonial }) {
  return (
    <article className="relative h-full rounded border border-black/10 bg-white p-10 text-center">
      <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/10">
        <Image src={t.avatar} alt={`${t.name} avatar`} width={96} height={96} className="h-full w-full object-cover" />
      </div>
      <p className="mx-auto max-w-[380px] text-[18px] leading-8 text-black/80">“{t.quote}”</p>
      <p className="mt-6 tracking-wide">
        <span className="font-medium">{t.name}</span>
        <span className="text-black/50"> — {t.location}</span>
      </p>
      <span aria-hidden className="pointer-events-none absolute -bottom-2 right-6 select-none text-[120px] leading-none font-serif text-black/5">”</span>
    </article>
  );
}
