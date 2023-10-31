import React from "react";
import "./cradwipper.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Autoplay } from 'swiper/modules';

const CardSwipper = () => {
  return (
    <div>
      <Swiper
    
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="swipers"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="swiper-slides">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slides">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slides">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slides">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slides">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-slides">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slides">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slides">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slides">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSwipper;
