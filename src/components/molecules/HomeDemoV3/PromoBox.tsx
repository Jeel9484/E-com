import Image from "next/image";
import Link from "next/link";

const PromoBannerBox = ({
  subtitle,
  title,
  ctaText,
  ctaLink,
  image
}: {
  subtitle: string;
  title: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}) => (
  <div className="relative h-[340px] md:h-[440px] lg:h-[738px] overflow-hidden">
    {/* Banner bg-image (fills all, below text) */}
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover w-full h-full"
      priority
      quality={90}
    />

    {/* Overlay text content */}
    <div className="absolute top-[8%] left-[20%] z-10 text-white max-w-[80%] md:max-w-[75%]">
      <div className="mb-2 text-base md:text-lg">{subtitle}</div>
      <div className="mb-7 text-2xl md:text-4xl font-bold leading-tight">{title}</div>
      <Link
        href={ctaLink}
        className="underline text-base md:text-lg font-medium"
      >
        {ctaText}
      </Link>
    </div>
  </div>
);

export default PromoBannerBox;
