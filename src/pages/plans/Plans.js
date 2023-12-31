import React from "react";
import "./plans.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

const Plans = () => {

  return (
    <div className="plans">
      <div className="plans-content">
        <h2>
          Select A Suitable <em>Plan</em> For <br /> Your Next
          <span>Projects</span>
        </h2>
        <h3>OUR PLANS</h3>
      </div>
      <Grid container spacing={10}>
        <Grid
      
          xs={12}
          sm={6}
          md={4}
          sx={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
          item
        >
          <Card
            component={motion.div}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="card-content"
            sx={{ maxWidth: { xs: "100%", md: "345px" } }}
            elevation={10}
          >
            <CardContent
              sx={{
                maxWidth: "500px",
                paddingBottom: "30px",
                paddingTop: "30px",
                zIndex: "66666666666",
              }}
            >
              <Typography gutterBottom variant="h5">
                Starter Plan
              </Typography>
              <Typography
                variant="h2"
                color="initial"
                sx={{
                  fontSize: "20px",
                  color: "#ff8465",
                  textDecoration: "line-through",
                }}
              >
                $190
              </Typography>
              <Typography
                variant="h2"
                color="initial"
                sx={{
                  marginBottom: "20px",
                  fontSize: "50px",
                  color: "#ff8465",
                  fontWeight: "bold",
                }}
              >
                $140
              </Typography>
              <div className="line">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: "20px" }}
                >
                  <span className="mark">✓</span> 10 Projects
                </Typography>
              </div>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
            <span className="mark">✓</span>   100 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
              <span className="mark">✓</span>  10 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
              <span className="mar">X</span>  Basic Support
              </Typography>
              <Button
                component={motion.div}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                variant="text"
                disableElevation
                sx={{
                  backgroundColor: "#03a4ed",
                  color: "black",
                  marginLeft: "10px",
                  "&:hover": { backgroundColor: "#ff8465" },
                  borderRadius: "10px",
                }}
              >
                Get Start
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          
          xs={12}
          sm={6}
          md={4}
          sx={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
          item
        >
          <Card
            component={motion.div}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="card-content"
            sx={{ zIndex: "22", maxWidth: { xs: "100%", md: "345px" } }}
            elevation={10}
          >
            <CardContent
              sx={{
                maxWidth: "500px",
                paddingBottom: "30px",
                paddingTop: "30px",
              }}
            >
              <Typography gutterBottom variant="h5">
                Basic Plan
              </Typography>
              <Typography
                variant="h2"
                color="initial"
                sx={{
                  fontSize: "20px",
                  color: "#ff8465",
                  textDecoration: "line-through",
                }}
              >
                $200
              </Typography>
              <Typography
                variant="h2"
                color="initial"
                sx={{
                  marginBottom: "20px",
                  fontSize: "50px",
                  color: "#ff8465",
                  fontWeight: "bold",
                }}
              >
                $170
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
              <span className="mark">✓</span>  10 Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
               <span className="mark">✓</span>  70 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                <span className="mark">✓</span>15 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
              <span className="mar">X</span>   Basic Support
              </Typography>
              <Button
                variant="text"
                disableElevation
                sx={{
                  backgroundColor: "#03a4ed",
                  color: "black",
                  marginLeft: "10px",
                  "&:hover": { backgroundColor: "#ff8465" },
                  borderRadius: "10px",
                }}
              >
                Get Start
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
        
          xs={12}
          sm={6}
          md={4}
          sx={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
          item
        >
          <Card
            component={motion.div}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="card-content"
            sx={{ zIndex: "22", maxWidth: { xs: "100%", md: "345px" } }}
            elevation={10}
          >
            <CardContent
              sx={{
                maxWidth: "500px",
                paddingBottom: "30px",
                paddingTop: "30px",
              }}
            >
              <Typography gutterBottom variant="h5">
                Pro Plan
              </Typography>
              <Typography
                variant="h2"
                color="initial"
                sx={{
                  fontSize: "20px",
                  color: "#ff8465",
                  textDecoration: "line-through",
                }}
              >
                $250
              </Typography>
              <Typography
                variant="h2"
                color="initial"
                sx={{
                  marginBottom: "20px",
                  fontSize: "50px",
                  color: "#ff8465",
                  fontWeight: "bold",
                }}
              >
                $200
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
              <span className="mark">✓</span>  10 Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
              <span className="mark">✓</span>  100 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
              <span className="mark">✓</span>  20 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
              <span className="mark">✓</span>  Basic Support
              </Typography>
              <Button
                variant="text"
                disableElevation
                sx={{
                  backgroundColor: "#03a4ed",
                  color: "black",
                  marginLeft: "10px",
                  "&:hover": { backgroundColor: "#ff8465" },
                  borderRadius: "10px",
                }}
              >
                Get Start
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <img className="img-left" src=".\images\tables-left-dec.png" alt="" />
    </div>
  );
};

export default Plans;
