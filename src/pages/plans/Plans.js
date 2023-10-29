import React from "react";
import "./plans.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Plans = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
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
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                10 Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                100 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                20 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                Basic Support
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
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                10 Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                100 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                20 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                Basic Support
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
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                10 Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                100 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                20 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "20px" }}
              >
                Basic Support
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
