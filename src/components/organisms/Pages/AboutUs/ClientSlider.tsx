"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard, { Testimonial } from "@/components/molecules/Pages/AboutUs/ClientCard";
import raw from "@/data/Pages/AboutUs/Clientdata.json";

const items = raw as Testimonial[];

export default function ClientSlider() {
  return (
    <section className="container-fluid w-full mb-14">
      <div>
        <h2 className="text-center text-4xl md:text-5xl">
          What Our Clients Say
        </h2>

        {/* group = hover target */}
        <div className="mt-10 relative group">
          {/* Custom Prev Button */}
          <div className="custom-prev absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              aria-label="Previous testimonial"
              className="bg-black hover:bg-[#e9452e] transition-all w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Custom Next Button */}
          <div className="custom-next absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              aria-label="Next testimonial"
              className="bg-black hover:bg-[#e9452e] transition-all w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            >
              <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            loop
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="!pb-2"
          >
            {items.map((t) => (
              <SwiperSlide key={t.id} className="!h-auto">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
