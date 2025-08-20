import authors from "@/data/HomeDemoV1/Authordata.json";
import AuthorCard from "@/components/molecules/HomeDemoV1/Cards/Authorcard";
import Link from "next/link";

const AuthorSection = () => (
  <section className="container-fluid my-10">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-5xl font-normal">Favorite Authors</h2>
      <Link
        href="#"
        className="bg-black text-white px-8 py-3 text-lg hover:bg-[#e9452e] transition"
      >
        View All Authors
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {(authors as any[]).map((author, idx) => (
        <AuthorCard key={author.name + idx} {...author} />
      ))}
    </div>
  </section>
);

export default AuthorSection;
