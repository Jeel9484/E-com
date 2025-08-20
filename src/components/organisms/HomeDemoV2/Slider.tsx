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
    title: "Online book’s store",
    description:
    "Top 20 Books <br/> For Year",
    image: "/assets/vs-1.png",
    buttonText: "Shop Now",
    buttonHref: "/shop",
  },
  {
    title: "Bundles are limited-time",
    description:
    "Starting At $10 <br/> Bundels.",
    image: "/assets/vs-2.png",
    buttonText: "Shop Now",
    buttonHref: "/shop",
  },
];

export default function SliderSection() {
  return (
    <section className="w-full min-h-[500px] md:min-h-[700px] bg-[#FCEDEC] flex items-center overflow-hidden relative mb-14">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
        className="w-full group"
        slidesPerView={1}
        spaceBetween={0}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-24 lg:px-[150px] min-h-[350px]">
              {/* Left: Content */}
              <div className="container-fluid flex flex-col items-center text-center">
                <h2 className="text-3xl sm:text-xl lg:text-2xl text-red-500 mb-8 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-7xl text-black font-bold mb-4 max-w-xl" dangerouslySetInnerHTML={{ __html: slide.description }}>
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
                  width={620}
                  height={877}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-3xl object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Arrows */}
        <div className="custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <button className="bg-black hover:bg-[#e9452e] transition-all w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group">
            <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        <div className="custom-next absolute right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <button className="bg-black hover:bg-[#e9452e] transition-all w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg group">
            <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </Swiper>
    </section>
  );
}
