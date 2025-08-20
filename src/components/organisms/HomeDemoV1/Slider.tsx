"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Button from "@/components/atoms/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Baby's First Christmas",
    description:
      "Introduce your little one to the magic of Christmas carols with this enchanting book featuring classic holiday tunes.",
    image: "/assets/s-1.jpg",
    buttonText: "Shop Now",
    buttonHref: "/shop",
  },
  {
    title: "The Adventure Begins",
    description:
      "An epic tale for young explorers, packed with illustrations and stories that inspire wonder and courage.",
    image: "/assets/s-2.jpg",
    buttonText: "Shop Now",
    buttonHref: "/shop",
  },
];

export default function SliderSection() {
  return (
    <section className="w-full min-h-[500px] md:min-h-[700px] bg-[#024944] flex items-center overflow-hidden relative mb-30">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
        className="w-full"
        slidesPerView={1}
        spaceBetween={0}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-25 lg:px-[150px] min-h-[350px]">
              {/* Left: Content */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white mb-9 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-lg text-white/90 mb-4 max-w-xl">
                  {slide.description}
                </p>
                <Button
                  href={slide.buttonHref}
                  size="md"
                  className="bg-[#e9452e] text-white px-8 py-3 text-lg hover:text-black hover:bg-white transition-all mt-9"
                >
                  {slide.buttonText}
                </Button>
              </div>
              {/* Right: Image */}
              <div className="flex justify-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={530}
                  height={230}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-2xl object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Arrows */}
        <div className="custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <button className="bg-black hover:bg-[#e9452e] transition-all w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group">
            <ChevronLeft className="text-white group-hover:text-[#e9452e] w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        <div className="custom-next absolute right-6 top-1/2 -translate-y-1/2 z-20">
          <button className="bg-black hover:bg-[#e9452e] transition-all w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group">
            <ChevronRight className="text-white group-hover:text-[#e9452e] w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </Swiper>
    </section>
  );
}
