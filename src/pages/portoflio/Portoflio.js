import React from "react";
import "./portoflio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Portoflio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
        slidesPerView={0}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swip">
          <img src=".\images\portfolio-02.jpg" alt="" />
          <div className="di">
            <h3>project one</h3>
            <p>SEO Development</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swip">
          <img src=".\images\portfolio-02.jpg" alt="" />
          <div className="di">
            <h3>project two</h3>
            <p>SEO Development</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swip">
          <img src=".\images\portfolio-03.jpg" alt="" />
          <div className="di">
            <h3>project three</h3>
            <p>SEO Development</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swip">
          <img src=".\images\portfolio-04.jpg" alt="" />
          <div className="di">
            <h3>project four</h3>
            <p>SEO Development</p>
          </div>
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
