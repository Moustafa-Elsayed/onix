import React from "react";
import "./haeder.css";
import {
  Box,
  Button,
  Divider,
  Drawer,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const navigate = useNavigate();
  const location=useLocation();
  const [open, setOpen] = useState("none");
  // const [isCollapde, setisCollapde] = useState(false);

  const [close, setClose] = useState("permanent");

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ cursor: "pointer" }} onClick={()=>{
            navigate("/")
          }}>
            <img src=".\images\logo.png" alt="" />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{ display: "flex", marginRight: "60px" }}>
              <ListItemButton
                onClick={() => {
                  navigate("/");

                }}
                sx={{
                  "&:hover": { color: "red", backgroundColor: "transparent" },

                  borderBottom: location.pathname === "/" ? "1px solid #03a4ed" : null,

                }}
              >
                <ListItemText
                  primary="Home"
                  sx={{
                    color: "black",
                    marginRight: "30px",
                    marginLeft: "30px",
                    textAlign: "center",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  "&:hover": { color: "red", backgroundColor: "transparent" },
                  
                  borderBottom: location.pathname === "/about" ? "1px solid #03a4ed" : null,

                }}
                onClick={() => {
                  navigate("about");
                }}
              >
                <ListItemText
                  primary="About"
                  sx={{
                    color: "black",
                    marginRight: "30px",
                    marginLeft: "30px",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  "&:hover": { color: "red", backgroundColor: "transparent" },

                  borderBottom: location.pathname === "/contact" ? "1px solid #03a4ed" : null,

                }}
                onClick={() => {
                  navigate("contact");
                }}
              >
                <ListItemText
                  primary="Contact"
                  sx={{
                    color: "black",
                    marginRight: "30px",
                    marginLeft: "30px",
                  }}
                />
              </ListItemButton>

              <Button
                sx={{
                  backgroundColor: "#ff8465",
                  color: "black",
                  marginLeft:"10px",
                  "&:hover": { backgroundColor: "#03a4ed" },
                }}
                onClick={() => {
                  navigate("/contactus")
                }}
                disableElevation
              >
                Contact Us Now
              </Button>
            </Box>
          </Box>

          <MenuIcon
            onClick={() => {
              setClose("temporary");
              setOpen("block");
            }}
            sx={{ display: { xs: "block", md: "none" },color:"#ff7662",
          }}
          />
        </Toolbar>
      </AppBar>
      {/* start Drawer */}
      <Drawer
      
        open={true}
        onClose={() => {
          setClose("permanent");
          setOpen("none");
        }}
        sx={{
          position: "relative",
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "250px" },
            boxSizing: "border-box",
          },
          display: { xs: open },
        }}
        variant={close}
        anchor="right"
      >
        <CloseIcon
          onClick={() => {
            setClose("permanent");
            setOpen("none");
          }}
          sx={{
            position: "absolute",
            right: 13,
            color:"#ff7662",
            top: 13,
            zIndex: "555",
            cursor: "pointer",
          }}
        />

        <Toolbar />
        <Divider />
        <Box>
          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#ff7662" },
              backgroundColor: location.pathname === "/" ? " #03a4ed" : null,

            }}
            onClick={() => {
              setClose("permanent");
              setOpen("none");
              navigate("/")
            }}
          >
            <ListItemText className="drawer-links" primary="Home" />
          </ListItemButton>

          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#ff7662" },
              backgroundColor: location.pathname === "/about" ? " #03a4ed" : null,

            }}
            onClick={() => {
              setClose("permanent");
              setOpen("none");
              navigate("/about")

            }}
          >
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#ff7662" },
              backgroundColor: location.pathname === "/contact" ? " #03a4ed" : null,

            }}
            onClick={() => {
              setClose("permanent");
              setOpen("none");
              navigate("/contact")

            }}
          >
            <ListItemText primary="Contact" />
          </ListItemButton>

          <Button
            sx={{ textAlign: "center", mb: 1,"&:hover": { backgroundColor: "#1976d2" }, }}
            fullWidth
            startIcon={<LoginIcon />}
            variant="outlined"
            color="inherit"
            onClick={() => {
              setClose("permanent");
              setOpen("none");

            }}
          >
            Contact Us Now
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
