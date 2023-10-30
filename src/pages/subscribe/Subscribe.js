import React from "react";
import "./subscribe.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <img
        src=".\images\subscribe-dec.png"
        alt=""
      />
      <h2>Know Your Website SEO Score by Email</h2>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "white",
          width: "fit-content",
          
        }}
      >
        <TextField
          required
          id="outlined-required"
          defaultValue="Hello World"
          sx={{ backgroundColor: "transparent", border: "none",outline:"none" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <Button variant="contained" color="primary">
          Subscribe
        </Button>
      </Box>
    </div>
  );
};

export default Subscribe;
