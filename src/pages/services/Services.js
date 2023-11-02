import React from "react";
import "./services.css";
import ServicesSwiper from "./ServicesSwiper";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="services">
      <div className="services-content">
        <h2>
          We <span>Provide</span> The Best <br /> Service With
          <span> Our Tools</span>
        </h2>
        <h3>our services</h3>
      </div>
      <ServicesSwiper />

      <div className="slider"></div>
      <div className="image">
        <img
          className="iamge-left"
          src=".\images\services-left-dec.png"
          alt=""
        />
        <img
          className="image-right"
          src=".\images\services-right-dec.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Services;
