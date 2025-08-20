"use client";
import Link from "next/link";
import Image from "next/image";
import HeroCard from "@/components/molecules/Collection/HeroCard";

export default function NotFoundPageSection() {
  return (
    <section>
      <HeroCard
        title=" Author List "
        crumbs={[{ label: "Home", href: "/" }, { label: " Author List" }]}
        bgImage="/assets/bg-image.jpeg"
      />
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <Image
          src="/assets/404.jpg"
          alt="404 Not Found"
          width={400}
          height={400}
          priority
        />

        {/* Heading */}
        <h1 className="mt-6 text-2xl sm:text-3xl font-medium">
          Oops! That page can&apos;t be found.
        </h1>

        {/* Sub text */}
        <p className="mt-2 text-black/70">
          Sorry, But the page you are looking for doesn&apos;t exist!
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-none text-lg hover:bg-gray-800 transition-colors"
        >
          Go to home page
        </Link>
      </div>
    </section>
  );
}
