"use client";

import Image from "next/image";

type Benefit = {
  id: string;
  icon: string;   
  title: string;    
  subtitle: string; 
};
const BENEFITS: Benefit[] = [
  {
    id: "b1",
    icon: "/assets/box.png",
    title: "Free Shipping",
    subtitle: "Order over $300 More",
  },
  {
    id: "b2",
    icon: "/assets/cc.png",
    title: "Free Shipping",
    subtitle: "100% Secure Payment",
  },
  {
    id: "b3",
    icon: "/assets/purchase.png",
    title: "Free Shipping",
    subtitle: "Within 30 Days Returns",
  },
];

export default function PurchaseSection() {
  return (
    <section className="w-full container-fluid mb-14">
      {/* container-fluid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b) => (
            <div
              key={b.id}
              className="flex items-center gap-6"
            >
              {/* Icon */}
              <div className="shrink-0">
                <Image
                  src={b.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-medium text-black">
                  {b.title}
                </h3>
                <p className="text-base text-slate-500 mt-1">
                  {b.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
