"use client";

import { useId, useState } from "react";
import HeroCard from "@/components/molecules/Collection/HeroCard";

type FaqItem = { id: string; q: string; a: string };

const INTRO = {
  p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  p2: "Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis.",
};

const FAQS: FaqItem[] = [
  {
    id: "f1",
    q: "What is the difference between various metals used in jewelry",
    a: "Different metals offer distinct characteristics. For example, gold comes in various karats, with higher karats indicating a higher gold content. Platinum is known for its durability and hypoallergenic properties. Understanding these differences helps you choose the metal that suits your preferences and lifestyle.",
  },
  {
    id: "f2",
    q: "How does the 30 day money back guarantee work",
    a: "If you’re not satisfied within 30 days, return the product in original condition for a full refund. Some exclusions may apply for personalized items.",
  },
  {
    id: "f3",
    q: "How do I determine my ring size",
    a: "Use a ring sizer or measure the inner diameter of a comfortable ring and compare with a sizing chart. We also offer a printable guide.",
  },
  {
    id: "f4",
    q: "What is the significance of different gemstone cuts",
    a: "Cuts affect brilliance and style. Round brilliant maximizes sparkle, emerald emphasizes clarity, while oval and pear elongate the appearance of the finger.",
  },
  {
    id: "f5",
    q: "What is your return and warranty policy",
    a: "Returns within 30 days, free exchanges, and a 1-year manufacturing warranty. See our policy page for details.",
  },
];

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <main>
      {/* Hero Section */}
      <section className="mb-14">
        <HeroCard
          title="Frequently Asked Questions"
          crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
          bgImage="/assets/bg-image.jpeg"
        />
      </section>

      {/* FAQ Section */}
      <section className="w-full container-fluid bg-white">
        <div className="w-full">
          {/* Intro */}
            <p className="text-2xl leading-tight">{INTRO.p1}</p>
            <p className="mt-6 text-base  text-black/80">
              {INTRO.p2}
            </p>

          {/* Divider */}
          <hr className="mt-8 border-t-2 border-black" />

          {/* Accordion */}
          <div className="mt-2 divide-y divide-black/10 mb-14">
            {FAQS.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId((prev) => (prev === item.id ? null : item.id))
                }
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  return (
    <div className="py-3">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-start justify-between gap-6 py-4 text-left"
      >
        <h3 className="text-[22px] leading-8 font-normal">{item.q}</h3>
        <span className="select-none text-2xl">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={panelId}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-6 pr-10 text-[17px] leading-8 text-black/60">
          {item.a}
        </p>
      </div>
    </div>
  );
}
