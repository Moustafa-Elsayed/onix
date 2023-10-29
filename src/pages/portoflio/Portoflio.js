import React from "react";
import "./portoflio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Portoflio = () => {
  return (
    <div className="portoflio">
      <div className="portoflio-content">
        <h2>
          Our Recent <em>Projects</em> & Case <br /> Studies
          <span>For Clients</span>
        </h2>
        <h3>OUR PORTFOLIO</h3>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView:3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src=".\images\portfolio-01.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".\images\portfolio-02.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".\images\portfolio-03.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".\images\portfolio-04.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <img
        className="image-port"
        src=".\images\portfolio-left-dec.png"
        alt=""
      />
    </div>
  );
};

export default Portoflio;
