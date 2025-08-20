import Link from "next/link";
import blogs from "@/data/Home/BlogData.json"
import BlogCard from "@/components/molecules/Home/Card/BlogCard";

const ReadOurGenralSection = () => (
  <section className="container-fluid mb-20">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-5xl font-normal">Favorite Authors</h2>
      <Link
        href="#"
        className="bg-black text-white px-8 py-3 text-lg hover:bg-[#e9452e] transition"
      >
        View All Authors
      </Link>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {blogs.map((blog, idx) => (
          <BlogCard key={blog.title + idx} {...blog} />
        ))}
      </div>
  </section>
);

export default ReadOurGenralSection;
