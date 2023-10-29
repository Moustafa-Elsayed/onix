import React from "react";
import "./plans.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
      <Grid container spacing={0}>
        <Grid
          xs={12}
          md={4}
          sx={{
            width: { xs: "100%" },
            marginBottom: "20px",
            marginTop: "20px",
          }}
          item
        >
          <Card className="card-content" sx={{ maxWidth: 345 }} elevation={10}>
            <CardContent sx={{ maxWidth: "500px" }}>
              <Typography gutterBottom variant="h5">
                Starter Plan
              </Typography>
              <Typography variant="h2" color="initial">
                $140
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                10 Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                100 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                20 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                Basic Support
              </Typography>
              <Button
                variant="text"
                disableElevation
                sx={{
                  backgroundColor: "#ff8465",
                  color: "black",
                  marginLeft: "10px",
                  "&:hover": { backgroundColor: "#03a4ed" },
                }}
              >
                Get Start
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={4}
          sx={{
            width: { xs: "100%" },
            marginBottom: "20px",
            marginTop: "20px",
          }}
          item
        >
          <Card className="card-content" sx={{ maxWidth: 345 }} elevation={10}>
            <CardContent sx={{ maxWidth: "500px" }}>
              <Typography gutterBottom variant="h5">
                Starter Plan
              </Typography>
              <Typography variant="h2" color="initial">
                $140
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                10 Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                100 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                20 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                Basic Support
              </Typography>
              <Button
                variant="text"
                disableElevation
                sx={{
                  backgroundColor: "#ff8465",
                  color: "black",
                  marginLeft: "10px",
                  "&:hover": { backgroundColor: "#03a4ed" },
                }}
              >
                Get Start
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={4}
          sx={{
            width: { xs: "100%" },
            marginBottom: "20px",
            marginTop: "20px",
          }}
          item
        >
          <Card className="card-content" sx={{ maxWidth: 345 }} elevation={10}>
            <CardContent sx={{ maxWidth: "500px" }}>
              <Typography gutterBottom variant="h5">
                Starter Plan
              </Typography>
              <Typography variant="h2" color="initial">
                $140
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                10 Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                100 GB space
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                20 SEO checkups
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                Basic Support
              </Typography>
              <Button
                variant="text"
                disableElevation
                sx={{
                  backgroundColor: "#ff8465",
                  color: "black",
                  marginLeft: "10px",
                  "&:hover": { backgroundColor: "#03a4ed" },
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
