import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper";

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
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper"
        spaceBetween={40}
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: [0, 0, -1000],
            opacity: 0,
            scale: 0,
          },
          next: {
            translate: [0, "100%", 500],
            opacity: 1,
            scale: 1,
            perspective: true,
          },
        }}
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
