import React, { useState } from "react";
import "../css/Login.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ForgotPassword = () => {
  const [isDisabled, setIsDisabled] = useState(true);

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

  function sendEmailHandler() {
    setIsDisabled(false);
  }

  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={box_styles}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <h2 className="text-3xl font-bold text-cyan-900">
                Reset Password
              </h2>
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
                label="Enter your OTP"
                disabled={isDisabled}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={sendEmailHandler}
                variant="outlined"
                style={{ width: "100%" }}
                size="medium"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ForgotPassword;
