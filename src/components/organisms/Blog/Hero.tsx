"use client";
import { useState } from "react";
import HeroCard from "@/components/molecules/Collection/HeroCard";
import BlogCard from "@/components/molecules/Blog/BlogCard";
import blogData from "@/data/Blog/BlogData.json";
import Link from "next/link";
import RecentPosts from "@/components/molecules/Blog/RecentPost";
import SearchPage from "@/components/molecules/Blog/SearchBar";

export default function HeroBlog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 6 cards per page
  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <section>
      <div className="mb-14">
        <HeroCard
          title=" News"
          crumbs={[{ label: "Home", href: "/" }, { label: " News" }]}
          bgImage="/assets/bg-image.jpeg"
        />
      </div>

      <div className="container-fluid grid grid-cols-1 lg:grid-cols-[300px_auto] gap-6">
        {/* left side */}
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <h3 className="text-2xl mb-5">Search</h3>
            <SearchPage />
          </div>
          <div className="items-center mb-8">
            <h3 className="text-2xl mb-5">Catogries</h3>
            <div className=" flex flex-col space-y-4">
              <Link href="/" className="text-xl hover:text-[#e9452e]">
                Our Blog
              </Link>
              <Link href="/" className="text-xl hover:text-[#e9452e] ">
                About Our Shop
              </Link>
              <Link href="/" className="text-xl hover:text-[#e9452e]">
                Secure Shopping
              </Link>
              <Link href="/" className="text-xl hover:text-[#e9452e]">
                Privacy Policy
              </Link>
              <Link href="/" className="text-xl hover:text-[#e9452e]">
                Delivery information
              </Link>
            </div>
          </div>

          <div className="mb-8">
            <RecentPosts />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl mb-2">Archive</h3>
            <div>
              <h4 className="font-semibold text-xl mt-2.5 mb-2.5">
                October 2023
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog/1" className="hover:text-[#e9452e] text-xl">
                    &gt; Miracle morning with Book shopify
                  </Link>
                </li>
                <li>
                  <Link href="/blog/2" className="hover:text-[#e9452e] text-xl">
                    &gt; Best Book store shopify theme ever
                  </Link>
                </li>
                <li>
                  <Link href="/blog/3" className="hover:text-[#e9452e] text-xl">
                    &gt; Top 5 Book for World Summit 2023
                  </Link>
                </li>
                <li>
                  <Link href="/blog/4" className="hover:text-[#e9452e] text-xl">
                    &gt; A Beautiful Morning with my baby book
                  </Link>
                </li>
                <li>
                  <Link href="/blog/5" className="hover:text-[#e9452e] text-xl">
                    &gt; Top 10 Books to Make It a Great Year
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-8">
              <h3 className="text-2xl mb-2 font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="cursor-pointer text-xl hover:text-[#e9452e]">
                  Book
                </span>
                <span className="cursor-pointer text-xl hover:text-[#e9452e]">
                  Great
                </span>
                <span className="cursor-pointer text-xl hover:text-[#e9452e]">
                  History
                </span>
                <span className="cursor-pointer text-xl hover:text-[#e9452e]">
                  Morning
                </span>
                <span className="cursor-pointer text-xl hover:text-[#e9452e]">
                  Novels
                </span>
                <span className="cursor-pointer text-xl hover:text-[#e9452e]">
                  Shopify
                </span>
                <span className="cursor-pointer text-xl hover:text-[#e9452e]">
                  Summit
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2">
        {/* Prev */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded hover:bg-[#DD321E] hover:text-white disabled:opacity-50"
        >
          &lt;
        </button>

        {/* Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded hover:bg-[#DD321E] ${
              currentPage === index + 1 ? "bg-[#DD321E] text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded hover:bg-[#DD321E] disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
