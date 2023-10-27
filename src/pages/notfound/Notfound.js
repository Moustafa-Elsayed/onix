import React from "react";
import "./notfound.css";
import Button from "@mui/material/Button";
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from "react-router-dom";
const Notfound = () => {
  const navigate=useNavigate()
  return (
    <div className="notfound">
      <img src=".\images\notfound.jpg" alt="" />
      <Button variant="contained"  
      onClick={()=>{
        navigate("/")
      }} sx={{
                  backgroundColor: "#ff8465",
                  color: "black",
                  "&:hover": { backgroundColor: "#03a4ed" },
                }} endIcon={<HouseIcon />}>
        Go Home
      </Button>
    </div>
  );
};

export default Notfound;
