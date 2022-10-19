import React from "react";
import reactIcon from "../assets/dev_icons/reactIcon.svg";
import redux from "../assets/dev_icons/redux.svg";
import html from "../assets/dev_icons/html5.svg";
import tailwindCss from "../assets/dev_icons/tailwindCss.svg";
import sass from "../assets/dev_icons/sass.svg";
import styles from "../constants/styles";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const TechStack = () => {
  return (
    <section className="w-full h-[200px] flex flex-col justify-start gap-10">
      <div className="w-full flex justify-center">
        <h2 className={`${styles.heading2} w-fit text-center`}>Tech Stack</h2>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            360: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img className="w-[80px] h-[80px]" src={redux} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[80px] h-[80px]" src={html} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[80px] h-[80px]"
              src={reactIcon}
              alt=""
              srcset=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[80px] h-[80px]"
              src={tailwindCss}
              alt=""
              srcset=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[80px] h-[80px]" src={sass} alt="" srcset="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TechStack;
