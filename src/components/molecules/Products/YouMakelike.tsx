"use client";
import Link from "next/link";
import data from "@/data/HomeDemoV2/CustomerFavouriteData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomerCard from "@/components/molecules/HomeDemoV2/Card/CustomerFavouriteCard";
import { ChevronLeft, ChevronRight } from "lucide-react"
export default function YouMayLikeSection(){
    return(
        <section className="mb-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl">You May Also Like</h2>
      </div>
      <div className="relative group">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="!pb-12"
        >
          {(data as any[]).map((book, idx) => (
            <SwiperSlide key={book.title + idx}>
              <CustomerCard {...book} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Previous Button (Corrected) */}
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
    )
}