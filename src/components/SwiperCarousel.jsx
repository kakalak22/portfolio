import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import CarouselSlide from "./CarouselSlide";

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        draggable={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
        spaceBetween={40}
      >
        <SwiperSlide>
          <CarouselSlide />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselSlide />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
