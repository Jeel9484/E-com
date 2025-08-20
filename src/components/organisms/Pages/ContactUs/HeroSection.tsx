"use client";
import HeroCard from "@/components/molecules/Collection/HeroCard";
import { MapPin, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

/** ---- Config (edit as needed) ---- */
const MAP_IFRAME_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.513781082241!2d-122.35032608436974!3d47.6205099791859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154e3f3bca2b%3A0x8e7e7c8d49d5e7b!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1676158892143!5m2!1sen!2sus";

const CONTACT = {
  address: "123 Suspendis eccums american",
  email: "info@example.com",
  phone: "+1 23 445 789 00",
  opening:
    "Opening time: Our store has re-opened for shopping, exchanges every day 11am to 7pm",
};

export default function ContactPage() {
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      setBusy(true);
      console.log("Send form:", form);
      alert("Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <section>
      <div className="mb-14">
        <HeroCard
          title="Contact Us"
          crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
          bgImage="/assets/bg-image.jpeg"
        />
      </div>
      <div className="container-fluid">
        {/* Map with center title overlay */}
        <div className="w-full mb-14">
          <div className="mx-auto">
            <div className="relative w-full overflow-hidden">
              <iframe
                src={MAP_IFRAME_SRC}
                width="100%"
                height={520}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              {/* Overlay title like screenshot */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 translate-y-[65px] -translate-x-1/2">
                <span className="text-5xl md:text-6xl font-medium tracking-wide text-black/80 drop-shadow-[0_1px_0_rgba(255,255,255,.85)]">
                  Seattle
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info + Form */}
        <div className="w-full mb-16">
          <div className="mx-auto">
            <h2 className="text-center text-4xl md:text-5xl mb-10">
              Let&apos;s get in touch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Info cards */}
              <div className="lg:col-span-5 space-y-4">
                <InfoRow
                  icon={<MapPin className="w-7 h-7 text-[#e34228]" />}
                  title="Address:"
                  subtitle={CONTACT.address}
                />
                <InfoRow
                  icon={<Mail className="w-7 h-7 text-[#e34228]" />}
                  title="Email:"
                  subtitle={CONTACT.email}
                />
                <InfoRow
                  icon={<Phone className="w-7 h-7 text-[#e34228]" />}
                  title="Call Us:"
                  subtitle={CONTACT.phone}
                />

                <p className="text-[15px] text-black mt-4">{CONTACT.opening}</p>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-7">
                <form onSubmit={onSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, name: e.target.value }))
                    }
                    className="w-full h-14 border border-black/15 px-4 outline-none focus:border-black transition"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full h-14 border border-black/15 px-4 outline-none focus:border-black transition"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, subject: e.target.value }))
                    }
                    className="w-full h-14 border border-black/15 px-4 outline-none focus:border-black transition"
                  />
                  <textarea
                    placeholder=""
                    value={form.message}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, message: e.target.value }))
                    }
                    className="w-full min-h-[160px] border border-black/15 p-4 outline-none focus:border-black transition resize-y"
                  />
                  <button
                    type="submit"
                    disabled={busy}
                    className="inline-flex items-center justify-center h-[54px] px-8 bg-black text-white text-lg hover:bg-[#e34228] transition disabled:opacity-70"
                  >
                    {busy ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small presentational row for left side list */
function InfoRow({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded bg-black/[0.03] border border-black/10 px-6 py-6">
      <div className="mt-0.5">{icon}</div>
      <div>
        <h3 className="text-xl font-medium text-black">{title}</h3>
        <p className="text-[15px] text-slate-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
