import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import axios from "axios";
import "./contact.css";
const Contact = () => {
  const onSubmit = () => {
    console.log("submitted");
    postData();
  };
  const { handleBlur, errors, touched, handleChange, values, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },

      onSubmit,
    });
  const postData = () => {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };
    console.log(body);
    axios
      .post("https://fakestoreapi.com/products", body)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{ paddingTop: "90px" }}>
      <div className="contact">
        <Typography gutterBottom variant="h3" align="center">
          Contact
        </Typography>
        <Card
          component={motion.div}
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 50 }}
          className="back-card"
          sx={{
            maxWidth: 470,
            margin: "0 auto",
            padding: "50 5 ",
            backgroundColor: "#dee2e626",
          }}
        >
          <CardContent>
            <form action="" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    value={values.firstName}
                    name="firstName"
                    id="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter First Name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField
                    name="lastName"
                    id="lastName"
                    value={values.lastName}
                    placeholder="Enter Last Name"
                    label="Last Name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    required
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    name="email"
                    id="email"
                    type="email"
                    value={values.email}
                    placeholder="Enter Your Email"
                    label="E-mail"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    required
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="phone"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    name="message"
                    id="message"
                    placeholder="Enter Your Message"
                    value={values.message}
                    label="Message"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    multiline
                    rows={3}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    sx={{
                      backgroundColor: "#ff8465",
                      color: "black",
                      marginLeft: "10px",
                      alignItems: "center",
                      "&:hover": { backgroundColor: "#03a4ed" },
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
