"use client";
import Link from "next/link";
import RecentPosts from "@/components/molecules/Blog/RecentPost";
import SearchPage from "@/components/molecules/Blog/SearchBar";
import { BLOG_CONSTANTS } from "@/constant/blogconstant";
import blogData from "@/data/Blog/BlogData.json";
import Image from "next/image";

export default function Slug({
  params,
}: {
  params: { slug: string | string[] };
}) {
  // Handle both string and array cases
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="container-fluid py-20">Blog Not Found</div>;
  }

  return (
    <section>
      <div className="container-fluid grid grid-cols-1 lg:grid-cols-[300px_auto] gap-6">
        <div className="order-2 lg:order-1">
          {/* Search */}
          <div className="mb-8">
            <h3 className="text-2xl mb-5">Search</h3>
            <SearchPage />
          </div>

          {/* Categories */}
          <div className="items-center mb-8">
            <h3 className="text-2xl mb-5">Categories</h3>
            <div className="flex flex-col space-y-4">
              {BLOG_CONSTANTS.categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.href}
                  className="text-xl hover:text-[#e9452e]"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-8">
            <RecentPosts />
          </div>

          {/* Archive */}
          <div className="mb-8">
            <h3 className="text-2xl mb-2">Archive</h3>
            {BLOG_CONSTANTS.archives.map((archive, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-xl mt-2.5 mb-2.5">
                  {archive.month}
                </h4>
                <ul className="space-y-4">
                  {archive.posts.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/news/${post.slug}`}
                        className="hover:text-[#e9452e] text-xl"
                      >
                        &gt; {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-2xl mb-2 font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {BLOG_CONSTANTS.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="cursor-pointer text-xl hover:text-[#e9452e]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="order-1 grid grid-cols-1 gap-6 mb-14">
          <article>
            {/* IMAGE */}
            <div className="w-full min-h-[400px]">
              <Image
                src={blog.image}
                alt={blog.title}
                height={300}
                width={300}
                className="w-full h-auto object-cover mb-6"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-4xl mb-4">{blog.title}</h3>

            {/* DATE */}
            <p className="text-gray-500 mb-6">{blog.date}</p>

            {/* PARAGRAPHS (constant) */}
            {BLOG_CONSTANTS.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-lg leading-relaxed text-gray-700 mb-6"
              >
                {para}
              </p>
            ))}

            {/* QUOTE */}
            <blockquote className="border-l-4 border-[#e9452e] pl-4 italic text-lg text-gray-600 mb-6">
              {BLOG_CONSTANTS.quote}
            </blockquote>
            {/* Before image Text */}
            <p className="text-lg text-gray-700 mb-6">
              {BLOG_CONSTANTS.beforeImageText}
            </p>

            {/* IMAGE from constants */}
            <div className="w-full min-h-[300px] mb-6">
              <Image
                src={BLOG_CONSTANTS.Image}
                alt="blog-extra"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* AFTER IMAGE TEXT */}
            <p className="text-lg text-gray-700 mb-6">
              {BLOG_CONSTANTS.afterImageText}
            </p>

            {/* LIST POINTS */}
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
              {BLOG_CONSTANTS.listPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* COMMENTS */}
            <div className="mt-10">
              <h3 className="text-4xl mb-4">Comments</h3>
              <ul className="space-y-4">
                {BLOG_CONSTANTS.comments.map((comment, i) => (
                  <li key={i} className="flex items-start gap-4  pb-4">
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="w-32 h-32"
                    />
                    <div>
                      <p className="font-semibold">{comment.name}</p>
                      <span className="text-lg">{comment.date}</span>
                      <p className="text-base">{comment.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* COMMENTS FORM */}
            <div className="mt-12">
              <h3 className="text-4xl mb-6">Leave A Comment</h3>
              <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-200 px-4 py-3 w-full focus:outline-none"
                  required
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-200 px-4 py-3 w-full focus:outline-none"
                  required
                />

                {/* Message (full width) */}
                <textarea
                  placeholder="Message"
                  className="border border-gray-200 px-4 py-3 w-full lg:col-span-2 h-40 focus:outline-none"
                  required
                />

                {/* Button */}
                <div className="lg:col-span-2">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 hover:bg-[#e9452e] transition"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
