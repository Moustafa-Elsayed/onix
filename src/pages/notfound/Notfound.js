import React from "react";
import "./notfound.css";
import Button from "@mui/material/Button";
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Notfound = () => {
  const navigate=useNavigate()
  return (
    <motion.div className="notfound"
    initial={{y:-500}}
    animate={{y:0}}
    transition={{delay:0.1, type:"spring", stiffness:50}}
    
    
    >
      <img src=".\images\notfound.jpg" alt="" />
      <Button 
      component={motion.div}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      variant="contained"  
      onClick={()=>{
        navigate("/")
      }} sx={{
                  backgroundColor: "#ff8465",
                  color: "black",
                  "&:hover": { backgroundColor: "#03a4ed",scale:1.2},
                }} endIcon={<HouseIcon />}>
        Go Home
      </Button>
    </motion.div>
  );
};

export default Notfound;
