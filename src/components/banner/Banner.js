import React from "react";
import "./banner.css";
import "swiper/css";
import Button from "@mui/material/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, []);
  const navigate=useNavigate();
  return (
    <>
      <div className="banner">
        <img className="left" src=".\images\baner-dec-left.png" alt="" />
        <img className="right" src=".\images\banner-right-image.png" alt="" />
      <div className="slider-conten" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1 >
          build <span>your website</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
          recusandae necessitatibus sapiente ab odio ad, vero amet unde, atque
          autem dolor reprehenderit. Sapiente atque praesentium, commodi neque
          cumque aliquid maxime!
        </p>
        <Button
        component={motion.div}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
          sx={{
            backgroundColor: "#ff8465",
            color: "black",
            "&:hover": { backgroundColor: "#03a4ed" },
          }}
          onClick={()=>{
            navigate("/contact");
          }}
        >
          Message Us
        </Button>
      </div>
      </div>
    </>
  );
};

export default Banner;
