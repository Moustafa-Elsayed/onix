import React from "react";
import "./footer.css";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-img" src="./images/footer-dec.png" alt="" />
      <Grid container spacing={10} alignItems="center">
        <Grid xs={12} md={4}   sx={{ width: { xs: "100%" }, textAlign: "center" }}  item>
          <div>
            <img src=".\images\logo.png" alt="" />
            <p>info@company.com</p>
            <div className="social">
              <FacebookIcon sx={{ color: "blue", marginLeft: "10px" }} />
              <TwitterIcon sx={{ color: "black", marginLeft: "10px" }} />
              <InstagramIcon sx={{ color: "red", marginLeft: "10px" }} />
            </div>
          </div>
        </Grid>
        <Grid xs={12} md={4}   sx={{ width: { xs: "100%" }, textAlign: "center" }} item>
          <h2>Services</h2>
          <div>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
          </div>
        </Grid>
        <Grid xs={12} md={4}   sx={{ width: { xs: "100%" }, textAlign: "center" }} item>
          <h2>Services</h2>
          <div>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
          </div>
        </Grid>
      </Grid>
      <hr />
      <h3 className="final-content">
        Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved. <br /> Designed by{" "}
        <span>TemplateMo</span>
      </h3>
    </div>
  );
};

export default Footer;
