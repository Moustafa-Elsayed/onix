import React from "react";
import "./cradwipper.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const CardSwipper = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="swipers"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="swiper-slides">
          <img src="./images/portfolio-01.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="./images/portfolio-02.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="./images/portfolio-03.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="./images/portfolio-03.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="./images/portfolio-01.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSwipper;
