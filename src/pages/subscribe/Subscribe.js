import React from "react";
import "./subscribe.css";
import { motion } from "framer-motion";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <img src=".\images\subscribe-dec.png" alt="" />
      <h2>Know Your Website SEO Score by Email</h2>
      <Box
        sx={{
          display: "flex",
          
        }}
      >
        <form action="">
          <input type="text" placeholder="Your Website Url" />
          <input type="email" placeholder="Your Email" />
        </form>
      </Box>
      <Button
      component={motion.div}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      sx={{
        paddingTop:"10px",
        color: "black",
        marginLeft: "10px",
        "&:hover": { backgroundColor: "#ff8465" },
      }}
      variant="contained" color="primary" >
        Subscribe
      </Button>
    </div>
  );
};

export default Subscribe;
