import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Autoplay, Pagination } from "swiper/modules";
import "./swervicesswiper.css";

const ServicesSwiper = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      centeredSlides={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: "20px" }}
            >
              Lizard
            </Typography>
            <img
              src=".\images\service-icon-01.png"
              alt=""
              sx={{ marginBottom: "20px" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "20px" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default ServicesSwiper;
