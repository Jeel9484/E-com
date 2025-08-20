import Image from "next/image";
import Link from "next/link";

const featuresLeft = [
  "Scientific Department",
  "Technical Literature",
  "Global Scholar Library",
];
const featuresRight = [
  "Audio Books",
  "Rare Manuscripts",
  "Classic Literature",
];

export default function BannerSection() {
  return (
    <div className="w-full bg-[#fcf7ef] mb-10">
      <section className="container-fluid flex flex-col md:grid md:grid-cols-2 gap-8 py-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[600px] mx-auto md:mx-0">
          <div className="text-[#d4472f] mb-3 text-lg tracking-widest">Online Book Copy</div>
          <h2 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
            We have The largest <br />
            Book library on the planet
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start mb-10 w-full">
            <ul className="flex flex-col gap-3 text-lg list-disc pl-5">
              {featuresLeft.map((txt) => (
                <li key={txt}>{txt}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3 text-lg list-disc pl-5">
              {featuresRight.map((txt) => (
                <li key={txt}>{txt}</li>
              ))}
            </ul>
          </div>
          <Link
            href="#"
            className="bg-black text-white px-10 py-4 text-xl hover:bg-[#e9452e] hover:text-white transition w-fit"
          >
            Shop Now
          </Link>
        </div>
        {/* RIGHT: Book + badge image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/hb.jpg"
            alt="Book Library Showcase"
            width={490}
            height={440}
            className="object-contain max-h-[440px] md:max-w-[540px] w-full"
            priority
          />
        </div>
      </section>
    </div>
  );
}
