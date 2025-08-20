"use client";
import BookCard from "@/components/molecules/HomeDemoV1/Cards/Bookcard";
import booksData from "@/data/Home/NewRealseBook.json";
import Link from "next/link";

export default function NewReleaseBookSection() {
  return (
    <section className="container-fluid mb-10">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl">New Release Books </h2>
        <Link
          href="#"
          className="bg-black text-white px-6 py-3 text-lg hover:bg-[#e9452e] transition"
        >
          View All Books
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {booksData.map((book: any, idx: number) => (
          <BookCard key={book.title + idx} {...book} />
        ))}
      </div>
    </section>
  );
}
