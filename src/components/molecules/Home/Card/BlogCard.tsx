import Image from "next/image";
import Link from "next/link";
type BlogCardProps = {
  slug: string;
  image: string;
  date: string;
  comments: number;
  title: string;
};

export default function BlogCard({ image, date, comments, title,slug }: BlogCardProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full mb-6 overflow-hidden transition-transform duration-500 ease-in-out hover:scale-110">
        <Image src={image} alt={title} height={230} width={230} className="object-cover w-full h-full" />
      </div>
      <div className="text-gray-500 text-lg mb-2">
        {date} <span className="mx-2">—</span>{comments} comments
      </div>
      <Link href={`/blog/news/${slug}`} className="text-2xl md:text-3xl font-normal hover:text-[#e9452e]">{title}</Link>
    </div>
  );
}
