"use client";

import { useMemo } from "react";
import raw from "@/data/Collection/Featured/LogoData.json";
import { CategoryCard, Category } from "@/components/atoms/CatograyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CategorySliderSection() {
  const items = useMemo(() => raw as Category[], []);
  return (
    <section className="container-fluid mb-14 w-full">
      {/* hover scope */}
      <div className="relative group">
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                     opacity-0 pointer-events-none transition
                     group-hover:opacity-100 group-hover:pointer-events-auto"
        >
          <button
            aria-label="Previous"
            className="js-prev bg-black hover:bg-[#e9452e] transition-all
                       w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            type="button"
          >
            <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                     opacity-0 pointer-events-none transition
                     group-hover:opacity-100 group-hover:pointer-events-auto"
        >
          <button
            aria-label="Next"
            className="js-next bg-black hover:bg-[#e9452e] transition-all
                       w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            type="button"
          >
            <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Keyboard, A11y]}
          navigation={{ prevEl: ".js-prev", nextEl: ".js-next" }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{ enabled: true }}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            480:  { slidesPerView: 2.2, spaceBetween: 24 },
            640:  { slidesPerView: 3,   spaceBetween: 24 },
            768:  { slidesPerView: 3.5, spaceBetween: 28 },
            1024: { slidesPerView: 4,   spaceBetween: 32 },
            1280: { slidesPerView: 5,   spaceBetween: 36 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <CategoryCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
