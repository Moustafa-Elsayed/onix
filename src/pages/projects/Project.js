import React from "react";
import Grid from "@mui/material/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./project.css";
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="project">
      <Grid container spacing={20}>
        <Grid
          xs={12}
          md={6}
          sx={{ width: { xs: "100%" }, textAlign: "center" }}
          item
        >
          <img
            src=".\images\about-left-image.png"
            alt=""
            data-aos="zoom-in-right"
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <div className="head-content">
            <h2>
              Grow Your Website With Our <br /> <span>SEO Tools</span> &
              <em>Project</em> <br />
              Management
            </h2>
            <p className="para-content">
              You can browse free HTML templates on Too CSS website. Visit the
              website and explore latest website templates for your projects.
            </p>
            <div className="content-grid">
              <div className="content">
                <img src=".\images\service-icon-01.png" alt="" />
                <h2>320</h2>
                <p className="first">SEO Projects</p>
                <hr />
                <p>Lorem ipsum dolor sitti amet, consectetur.</p>
              </div>
              <div className="content">
                <img src=".\images\service-icon-02.png" alt="" />
                <h2>320</h2>
                <p className="first">SEO Projects</p>
                <hr />
                <p>Lorem ipsum dolor sitti amet, consectetur.</p>
              </div>
              <div className="content">
                <img src=".\images\service-icon-03.png" alt="" />
                <h2>320</h2>
                <p className="first">SEO Projects</p>
                <hr />
                <p>Lorem ipsum dolor sitti amet, consectetur.</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
