"use client";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

export type Category = {
  id: string;
  title: string;
  img: string;
  alt: string;
  href?: string;
};

type Props = { item: Category };

function BaseCard({ item }: Props) {
  const Wrapper: any = item.href ? Link : "div";
  const wrapperProps = item.href ? { href: item.href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block border border-black/5 bg-white
                 px-8 py-10 text-center shadow-sm hover:shadow-md transition
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
      aria-label={item.title}
    >
      <div className="mx-auto mb-8 relative h-24 w-24">
        <Image
          src={item.img}
          alt={item.alt}
          fill
          sizes="96px"
          className="object-contain object-center transition-transform group-hover:scale-105"
        />
      </div>
      <p className="text-lg">{item.title}</p>
    </Wrapper>
  );
}

export const CategoryCard = memo(BaseCard);
