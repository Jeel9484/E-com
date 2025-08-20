"use client";

import { FormEvent, useState } from "react";

type JoinCommunityProps = {
  title?: string;
  description?: string;
  bgColor?: string;
  bookImage?: string; // e.g. "/assets/book-stack.png"
  onSubmitEmail?: (email: string) => Promise<void> | void;
};

export default function JoinCommunity({
  title = "Join the community",
  description = "Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.",
  bgColor = "#A8D5C0",
  bookImage = "/assets/s-1.jpg",
  onSubmitEmail,
}: JoinCommunityProps) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      setBusy(true);
      await onSubmitEmail?.(email);
      setEmail("");
      alert("Thanks! You're subscribed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section
      className="w-full"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center w-full mb-14">
        
        {/* LEFT: Content */}
        <div className="py-20 col-span-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
              {title}
            </h2>
            <p className="mt-5 text-lg md:text-xl text-black/80 leading-8">
              {description}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-xl"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 flex-1 px-6 bg-white text-black placeholder-black/40 outline-none border-0"
              />
              <button
                type="submit"
                disabled={busy}
                className="h-14 px-6 bg-black text-white text-lg disabled:opacity-70 hover:bg-[#0f0f0f] transition"
              >
                {busy ? "…" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: Background Image */}
        <div
          className="h-[250px] lg:h-full w-full bg-no-repeat bg-contain col-span-6"
          style={{
            backgroundImage: `url(${bookImage})`,
          }}
        ></div>
      </div>
    </section>
  );
}
