import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "../css/Main.css";
import logo from "../assets/facebook.png";

const MainComponent = () => {
  const box_styles = {
    backgroundColor: "#fdfdfd",
    height: "100vh",
    width: "60%",
    textAlign: "center",
    padding: "30px",
    borderRight: "solid 1px #eaeaea",
    borderLeft: "solid 1px #eaeaea",
    margin: "0 18%",
  };

  const create_post = {
    backgroundColor: "rgb(253, 253, 253)",
    height: "250px",
    width: "100%",
    textAlign: "center",
    padding: "30px",
    border: "1px solid #ededed",
    margin: "0px",
    borderRadius: "6px",
    boxShadow: "6px 10px 10px #ededed;",
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <img
              src={logo}
              alt={"facebook"}
              style={{ width: "50px" }}
              loading="lazy"
            />

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <Box style={box_styles}>
          <Box style={create_post}>
            <TextField
              className="post_input_field"
              id="outlined-multiline-static"
              label=""
              multiline
              rows={4}
              placeholder="What's on your mind"
            />
            <Grid container item xs={12} style={{ marginTop: "20px" }}>
              <Grid item xs={6}></Grid>
              <Grid item xs={6} sx={{ flexGrow: 1 }}>
                <Button variant="contained">Create Post</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MainComponent;
