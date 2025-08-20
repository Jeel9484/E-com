import Image from "next/image";
import Link from "next/link";

interface PromoBannerCardProps {
  title: string;
  subtitle: string;
  linkText: string;
  link: string;
  image: string;
}

const PromoBannerCard = ({
  title,
  subtitle,
  linkText,
  link,
  image,
}: PromoBannerCardProps) => (
  <div className="relative w-full h-[300px] overflow-hidden group mb-8">
    {/* Banner Image (fills whole box) */}
    <Image
      src={image}
      alt={title}
      height={194}
      width={470}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      priority
      quality={90}
    />
    <div className="absolute left-[8%] top-[24%] z-10 text-white">
      <div className="mb-2 text-base md:text-lg drop-shadow">{subtitle}</div>
      <div className="my-4 text-3xl md:text-5xl drop-shadow">{title}</div>
      <Link
        href={link}
        className="underline text-base md:text-lg drop-shadow group-hover:text-yellow-200 transition-colors duration-200"
      >
        {linkText}
      </Link>
    </div>
  </div>
);

export default PromoBannerCard;
