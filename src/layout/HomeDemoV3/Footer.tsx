"use client";

import Link from "next/link";
import Image from "next/image";
import footerData from "@/data/HomeDemoV3/Footerdata.json";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container-fluid py-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* columns */}
          {footerData.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="space-y-4">
              <h3 className="text-2xl">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-lg text-gray-700 hover:text-[#e9452e] transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* newsletter */}
          <section aria-labelledby="newsletter" className="space-y-5">
            <h3 id="newsletter" className="text-xl">
              Our Newsletter
            </h3>
            <p className="text-lg text-gray-700">
              Sign up for our latest news and offers.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // your API call
              }}
              className="flex overflow-hidden border border-gray-200"
            >
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="email@example.com"
                className="w-full px-4 py-3 outline-none"
              />
              <button
                type="submit"
                className="bg-black px-5 text-white text-sm hover:opacity-90"
              >
                Subscribe
              </button>
            </form>

            {/* payment strip (non-clickable) */}
            <div>
              <p className="mb-3 text-lg text-gray-700">
                Secured Payment Gateways
              </p>
              <Image
                src={footerData.paymentStrip}
                alt="Accepted payment methods"
                width={220}
                height={40}
                className="h-full w-full select-none"
                draggable={false}
              />
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
