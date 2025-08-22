"use client";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  slug: string;
  id: number;
  title: string;
  date: string;
  comments: number;
  desc: string;
  image: string;
};

export default function BlogCard({
  slug,
  id,
  title,
  date,
  comments,
  desc,
  image,
}: BlogCardProps) {
  return (
    <div className="bg-white w-full">
      {/* Image wrapper with fixed height */}
      <div className="w-full aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden">
          <Image
               src={image}
               alt={title}
               fill
               className="object-cover"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               loading="lazy"
             />
      </div>

      {/* Content wrapper takes rest of space */}
      <div className="flex flex-col justify-between flex-1 mt-5">
        <p className="text-base text-gray-500 mb-2">
          {date} — {comments} comments
        </p>
        <Link href={`/blog/news/${slug}`} className="hover:text-orange-500">
        <h2 className="text-2xl  mb-2">{title}</h2>
        </Link>
        <p className="text-gray-600 text-sm">{desc}</p>
        <Link
          href={`/blog/news/${slug}`}
          className="inline-block mt-3 px-4 py-2 bg-black text-white hover:bg-[#DD321E] transition w-fit"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
