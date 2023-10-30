import React from "react";
import Services from "../services/Services";
import { Container } from "@mui/material";
import Banner from "../../components/banner/Banner";
import Project from "../projects/Project";
import Portoflio from "../portoflio/Portoflio";
import Plans from "../plans/Plans";
import Subscribe from "../subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Services />
        <Project />
        <Portoflio />
        <Plans />
        <Subscribe />
      </Container>
    </>
  );
};

export default Home;
