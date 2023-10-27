import React from "react";
import "./banner.css";
import "swiper/css";
import Button from "@mui/material/Button";
const Banner = () => {
  return (
    <div className="banner">
      <img className="right" src=".\images\banner-right-image.png" alt="" />
      <img className="left" src=".\images\baner-dec-left.png" alt=""/>

      <div className="slider-conten">
      <h1>
          build <span>your website</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
          recusandae necessitatibus sapiente ab odio ad, vero amet unde, atque
          autem dolor reprehenderit. Sapiente atque praesentium, commodi neque
          cumque aliquid maxime!
        </p>
        <Button
          sx={{
            backgroundColor: "#ff8465",
            color: "black",
            "&:hover": { backgroundColor: "#03a4ed" },
          }}
        >
          Message Us
        </Button>
      
      </div>
    </div>
  );
};

export default Banner;
