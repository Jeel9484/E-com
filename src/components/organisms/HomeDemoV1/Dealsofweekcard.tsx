"use client";
import dealsData from "@/data/HomeDemoV1/DealsOfWeekend.json";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DealCard from "@/components/molecules/HomeDemoV1/Cards/DealsWeekCard";

export default function DealsOfTheWeekSection() {
  return (
    <section className="container-fluid mb-10">
      <div className="flex justify-between mb-10">
        <h2 className="text-5xl font-normal">Deals Of The Week</h2>
        <Link
          href="#"
          className="bg-black text-white px-6 py-3 text-lg hover:bg-[#e9452e] transition"
        >
          View All Book
        </Link>
      </div>
      {/* --- SLIDER --- */}
      <div className="relative group">
        <Swiper
          modules={[Navigation,Pagination]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next", 
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20},
            1024: { slidesPerView: 4, spaceBetween: 24},
          }}
          className="!pb-12"
        >
          {(dealsData as any[]).map((book, idx) => (
            <SwiperSlide key={book.title + idx}>
              <DealCard {...book} />
            </SwiperSlide>
          ))}
          </Swiper>
        <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 cursor-pointer">
          <button className="p-4 rounded-full bg-black text-white hover:bg-[#e9452e] hover:text-white transition-colors">
            <ChevronLeft size={30} />
          </button>
        </div>

        {/* Custom Next Button (Corrected) */}
        <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 cursor-pointer">
          <button className="p-4 rounded-full bg-black text-white hover:bg-[#e9452e] hover:text-white transition-colors">
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
