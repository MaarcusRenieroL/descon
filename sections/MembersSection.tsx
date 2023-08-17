"use client";

import MemberCard from "@/components/MemberCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MembersSection() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-48 py-28">
      <div>
        <h1 className="text-4xl mx-auto my-10 font-black tracking-[4px] uppercase font-[montserrat]">
          Members
        </h1>
      </div>
      <div className="h-96 w-1/2 flex items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <MemberCard
              name="Maarcus Reniero L"
              designation="Project Director Web Technologies"
              comment="Wakkarimashta"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MemberCard
              name="Maarcus Reniero L"
              designation="Project Director Web Technologies"
              comment="Wakkarimashta"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MemberCard
              name="Maarcus Reniero L"
              designation="Project Director Web Technologies"
              comment="Wakkarimashta"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MemberCard
              name="Maarcus Reniero L"
              designation="Project Director Web Technologies"
              comment="Wakkarimashta"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
