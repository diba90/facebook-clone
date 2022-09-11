import React from "react";
import "../css/Login.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";

const CreateAccount = () => {
  const box_styles = {
    backgroundColor: "#ffffff",
    height: "430px",
    width: "50%",
    textAlign: "center",
    padding: "30px",
    margin: "10% 27% 0 27%",
    border: "solid 1px #f2f2f2",
    borderRadius: "14px",
  };

  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={box_styles}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <h2 className="text-3xl font-bold text-cyan-900">
                Create an Account
              </h2>
            </Grid>
            <Grid container item xs={12} spacing={4}>
              <Grid item xs={6}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Email ID"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                style={{ width: "100%" }}
                size="medium"
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container justify="flex-end" spacing={4} sx={{ mt: "5px" }}>
              <Grid
                item
                style={{ alignItems: "center", textAlign: "right" }}
                xs={12}
              >
                <Button
                  component={RouterLink}
                  to="/"
                  variant="contained"
                  size="small"
                >
                  Sign In to Account
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CreateAccount;
