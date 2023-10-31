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
        <Grid xs={12} md={4}   sx={{ width: { xs: "100%" } }}  item>
          <div>
            <img  className="content-image" src=".\images\logo.png" alt=""  />
            <Link className="links" href="#" underline="none">info@company.com</Link>
            <div className="social">
              <FacebookIcon  sx={{ color: "blue", marginLeft: "10px" }} />
              <TwitterIcon sx={{ color: "black", marginLeft: "10px" }} />
              <InstagramIcon sx={{ color: "red", marginLeft: "10px" }} />
            </div>
          </div>
        </Grid>
        <Grid xs={12} md={4}   sx={{ width: { xs: "100%" } }} item>
          <h2>Services</h2>
          <div>
            <Link className="links" href="#" underline="none">
              SEO Development
            </Link>
            <Link className="links" href="#" underline="none">
            Business Growth
            </Link>
            <Link className="links" href="#" underline="none">
            Social Media Managment
            </Link>
            <Link className="links" href="#" underline="none">
            Website Optimization
            </Link>
          
          </div>
        </Grid>
        <Grid xs={12} md={4}   sx={{ width: { xs: "100%" }}} item>
          <h2>Community</h2>
          <div className="links-content">
            <Link className="links" href="#" underline="none">
            Digital Marketing
            </Link>
            <Link className="links" href="#" underline="none">
            Business Ideas
            </Link>
            <Link className="links" href="#" underline="none">
            Website Checkup
            </Link>
            <Link className="links" href="#" underline="none">
            Page Speed Test
            </Link>
            
          </div>
        </Grid>
      </Grid>
      <hr />
      <h3 className="final-content">
        Copyright © 2023 Onix Digital Co., Ltd. All Rights Reserved. <br /> Designed by <em>Mostafa-ELsayed</em>
        <span> from TemplateMo</span>
      </h3>
    </div>
  );
};

export default Footer;
