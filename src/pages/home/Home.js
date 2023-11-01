import React from "react";
import Services from "../services/Services";
import { Container } from "@mui/material";
import Banner from "../../components/banner/Banner";
import Portoflio from "../portoflio/Portoflio";
import Plans from "../plans/Plans";
import Subscribe from "../subscribe/Subscribe";
import CardSwipper from "../../components/cardswipper/CardSwipper";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Services />
        <Portoflio />
        <Plans />
        <CardSwipper />
        <Subscribe />
      <Footer />
      </Container>
    </>
  );
};

export default Home;
