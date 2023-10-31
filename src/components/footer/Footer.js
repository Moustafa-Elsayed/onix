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
      <Grid container spacing={10} alignItems="center">
        <Grid xs={12} md={4} item>
          <div>
            <img src=".\images\logo.png" alt="" />
            <Link href="#" underline="none">
              info@company.com
            </Link>
            <div className="social">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </Grid>
        <Grid xs={12} md={4} item>
          <h2>Services</h2>
          <div className="links">
            <Link href="#" underline="none">
              SEO Development
            </Link>
            <Link href="#" underline="none">
              SEO Development
            </Link>
            <Link href="#" underline="none">
              SEO Development
            </Link>
            <Link href="#" underline="none">
              SEO Development
            </Link>
            <Link href="#" underline="none">
              SEO Development
            </Link>
          </div>
        </Grid>
        <Grid xs={12} md={4} item>
          <h2>Services</h2>
          <div className="links">
            <Link href="#" underline="none">
              SEO Development
            </Link>
            <Link href="#" underline="none">
              SEO Development
            </Link>
            <Link href="#" underline="none">
              SEO Development
            </Link>
            <Link href="#" underline="none">
              SEO Development
            </Link>
            <Link href="#" underline="none">
              SEO Development
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
