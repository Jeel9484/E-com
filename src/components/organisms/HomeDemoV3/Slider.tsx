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
    eyebrow: "#1 Trending Now",
    title: "Mystery of the Village",
    description:
      "We stock hundreds of quality books and comics so you will definitely find what you’re looking for.",
    image: "/assets/village.png",
    buttonText: "Shop Now",
    buttonHref: "/shop",
  },
  {
    eyebrow: "#2 Trending Now",
    title: "Love After Married",
    description:
      "We stock hundreds of quality books and comics so you will definitely find what you’re looking for.",
    image: "/assets/love.png",
    buttonText: "Shop Now",
    buttonHref: "/shop",
  },
];

export default function SliderSection() {
  return (
    <section className="w-full min-h-[500px] md:h-[700px] bg-[#DD321E] flex items-center overflow-hidden relative mb-14">
      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        loop={true}
        className="w-full group"
        slidesPerView={1}
        spaceBetween={0}
      >
        {slides.map((slide, idx) => {
          const imageLeft = idx === 0; // 1st: image left / text right ; 2nd: image right / text left (order below)
          const textRightOnDesktop = idx === 1; // align text to right only on 2nd slide

          return (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-6 md:px-24 lg:px-[150px] min-h-[350px]">
                {/* Image */}
                <div
                  className={`flex justify-center ${
                    imageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={620}
                    height={877}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-2xl object-contain"
                    priority={idx === 0}
                  />
                </div>

                {/* Text Content */}
                <div
                  className={`flex flex-col mb-20 text-left ${
                    imageLeft ? "md:order-2" : "md:order-1"
                  } ${textRightOnDesktop ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}
                >
                  <span className="text-lg text-white uppercase mb-4">
                    {slide.eyebrow}
                  </span>

                  <h2 className="text-3xl sm:text-xl lg:text-5xl text-white mb-6">
                    {slide.title}
                  </h2>

                  <p className="text-sm sm:text-lg lg:text-xl text-white mb-4 max-w-lg">
                    {slide.description}
                  </p>

                  <Button
                    href={slide.buttonHref}
                    size="md"
                    className="bg-gray-900 text-white hover:text-black hover:bg-white transition-all w-fit mt-4"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

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
