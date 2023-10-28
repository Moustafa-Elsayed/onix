import React from "react";
import Services from "../services/Services";
import { Container } from "@mui/material";
import Banner from "../../components/banner/Banner";
import Project from "../projects/Project";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Services />
        <Project />
      </Container>
    </>
  );
};

export default Home;
