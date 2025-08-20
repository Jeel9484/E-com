"use client";
import Image from "next/image";
import { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
    { id: "size-chart", label: "Size Chart" },
    { id: "shipping-policy", label: "Shipping Policy" },
  ];

  return (
    <div className="px-10 mb-10">
      <div className="">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xl`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-8">
        {activeTab === "description" && (
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Image
              src="/assets/icon.png"
              alt="Icon"
              width={150}
              height={150}
              className="object-cover"
              />
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg mb-6">
              <li>MACHINE WASH AT MAX.TEMP. 30° C - NORMAL PROCESS</li>
              <li>DO NOT BLEACH</li>
              <li>DO NOT TUMBLE DRY</li>
              <li>IRON AT MAX. TEMP. OF 110° C WITHOUT STEAM</li>
              <li>DO NOT DRY CLEAN</li>
            </ul>
            <h3 className="text-2xl mb-2">Sample Ordered Lista</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg mb-6">
              <li>Comodous in tempor ullamcorper miaculis</li>
              <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
              <li>Divamus sit amet purus justo.</li>
              <li>
                Proin molestie egestas orci ac suscipit risus posuere loremous
              </li>
            </ol>
            <h3 className="text-2xl mb-2">
              Sample Paragraph Text
            </h3>
            <p className="text-base">
              Faded short sleeves t-shirt with high neckline. Soft and stretchy
              material for a comfortable fit. Accessorize with a straw hat and
              you&apos;re ready for summer!Faded short sleeves t-shirt with high
              neckline. Soft and stretchy material for a comfortable fit.
              Accessorize with a straw hat and you&apos;re ready for summe!Aenean
              massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim.
            </p>
          </div>
        )}
        {activeTab === "reviews" && <div>Reviews content goes here.</div>}
        {activeTab === "size-chart" && <div>Size chart content goes here.</div>}
        {activeTab === "shipping-policy" && (
          <div>Shipping policy content goes here.</div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
