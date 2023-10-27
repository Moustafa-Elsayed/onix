import React from "react";
import Banner from "../../components/banner/Banner";
import Services from "../services/Services";
import Contact from "../Contact";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Services />
      <Contact />
      </Container>

    </>
  );
};

export default Home;
