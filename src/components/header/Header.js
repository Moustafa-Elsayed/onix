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
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { motion } from "framer-motion";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState("none");
  // const [isCollapde, setisCollapde] = useState(false);
  const [ope, setOpe] = useState(false);

  const [close, setClose] = useState("permanent");

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            component={motion.div}
            className="logo"
            initial={{ y: -250 }}
            animate={{ y: -3 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
            onClick={() => {
              navigate("/");
            }}
          >
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

                  borderBottom:
                    location.pathname === "/" ? "1px solid #03a4ed" : null,
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

                  borderBottom:
                    location.pathname === "/about" ? "1px solid #03a4ed" : null,
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

                  borderBottom:
                    location.pathname === "/contact"
                      ? "1px solid #03a4ed"
                      : null,
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
                component={motion.div}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                sx={{
                  backgroundColor: "#ff8465",
                  color: "black",
                  marginLeft: "10px",
                  "&:hover": { backgroundColor: "#03a4ed" },
                }}
                onClick={() => {
                  navigate("/message");
                }}
                disableElevation
              >
                Message Us Now
              </Button>
            </Box>
          </Box>

          <MenuIcon
            onClick={() => {
              setClose("temporary");
              setOpen("block");
            }}
            sx={{ display: { xs: "block", md: "none" }, color: "#ff7662" }}
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
            color: "#ff7662",
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
              // setClose("permanent");
              // setOpen("none");
              // navigate("/");
              setOpe(!ope);
            }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <ListItemText
              className="drawer-links"
              primary="Home"
              sx={{ paddingLeft: "21px" }}
            />
            {ope ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={ope} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{ justifyContent: "space-between" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder sx={{ color: "red" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Main Home"
                  onClick={() => {
                    setClose("permanent");
                    setOpen("none");
                    navigate("/");
                    setOpe(!ope);
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#ff7662" },
              backgroundColor:
                location.pathname === "/about" ? " #03a4ed" : null,
            }}
            onClick={() => {
              setClose("permanent");
              setOpen("none");
              navigate("/about");
            }}
          >
            <ListItemIcon>
              <DashboardCustomizeIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#ff7662" },
              backgroundColor:
                location.pathname === "/contact" ? " #03a4ed" : null,
            }}
            onClick={() => {
              setClose("permanent");
              setOpen("none");
              navigate("/contact");
            }}
          >
            <ListItemIcon>
              <PermContactCalendarIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>

          <Button
            sx={{
              textAlign: "center",
              mb: 1,
              "&:hover": { backgroundColor: "#1976d2" },
            }}
            fullWidth
            startIcon={<LoginIcon />}
            variant="outlined"
            color="inherit"
            onClick={() => {
              setClose("permanent");
              setOpen("none");
              navigate("/message");
            }}
          >
            Message Us Now
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
