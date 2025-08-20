import Image from "next/image";
import Link from "next/link"; 

interface BestBookListItemProps {
  slug: string;
  image: string;
  author: string;
  title: string;
  price: number;
  oldPrice?: number;
}

const BestBookItem = ({ image, author, title, price, oldPrice,slug }: BestBookListItemProps) => (
  <div className="flex gap-5 mb-8 last:mb-0 items-start">
    <Image
      src={image}
      alt={title}
      width={110}
      height={122}
      className="object-cover"
      loading="lazy"
    />
    <div>
      <div className="text-gray-400 text-base mb-1">{author}.</div>
      <Link href={`/products/${slug}`} className="text-lg mb-2 hover:text-[#e9452e] ">{title}</Link>
      <div className="flex gap-2 items-center">
        <span className="text-[#e9452e] font-bold text-base">£{price.toFixed(2)}</span>
        {oldPrice && (
          <span className="line-through text-black/50 text-base">£{oldPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  </div>
);

export default BestBookItem;
