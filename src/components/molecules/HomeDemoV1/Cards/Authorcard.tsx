import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  name: string;
  image: string;
  publishedBooks: number;
}

const AuthorCard = ({ name, image, publishedBooks }: AuthorCardProps) => (
  <div className="flex flex-col h-full">
    <Link href="/collections/best-sellers" className="overflow-hidden mb-3">
      <Image
        src={image}
        alt={name}
        width={330}
        height={330}
        className="object-cover w-full h-full"
        loading="lazy"
      />
    </Link>
    <Link href="/collections/best-sellers" className="font-normal text-2xl mt-2 mb-1 text-black hover:text-[#e9452e]">{name}</Link>
    <div className="text-gray-400 text-base">{publishedBooks} Published Books</div>
  </div>
);

export default AuthorCard;
