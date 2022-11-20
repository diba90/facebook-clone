import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import { login } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import "./css/Login.css";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [flag, setFlag] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertText, setAlertText] = useState("");

  const userList = JSON.parse(localStorage.getItem("ListUsers"));

  var loginData = useSelector((state) => {
    return state.user;
  });

  const box_styles = {
    backgroundColor: "#ffffff",
    height: "430px",
    width: "50%",
    textAlign: "center",
    padding: "30px",
    margin: "10% 27% 0 27%",
    border: "solid 1px #f2f2f2",
    borderRadius: "14px",
    "@media (max-width: 768px)": {
      height: "auto",
      width: "100%",
      padding: "0",
      margin: "50px 0 0 0",
    },
  };

  const collapse_style = {
    width: "50%",
    margin: "0 27%",
    "@media (max-width: 768px)": {
      width: "100%",
      margin: "0",
    },
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  var errors = {};
  var i = 1;

  useEffect(() => {
    {
      if (loginData.user == null) {
        navigate("/login");
      } else if (loginData.user.loggedIn == true) {
        navigate("/homeApp");
      }
    }
  }, []);

  useEffect(() => {
    {
      if (flag === true) {
        if (userList && userList.length) {
          const getUsers = JSON.parse(localStorage.getItem("ListUsers"));
          getUsers.find((el) => {
            if (el.email === email && el.password === password) {
              let firstname = el.first_name;
              let lastname = el.last_name;
              setVisible(true);
              setAlertSeverity("success");
              setAlertText("Login Successfull. Redirecting...");
              setEmail("");
              setPassword("");
              setLoader(true);
              setVisible(true);
              dispatch(
                login({
                  email: email,
                  password: password,
                  loggedIn: true,
                  firstname: firstname,
                  lastname: lastname,
                })
              );
              setTimeout(() => {
                setVisible(false);
                navigate("/homeApp");
              }, 3000);
              return true;
            } else {
              setVisible(true);
              setAlertSeverity("error");
              setAlertText("Incorrect email and password");
              setTimeout(() => {
                setVisible(false);
              }, 3000);
              return false;
            }
          });
        }
      }
    }
  }, [error]);

  const handleSubmit = () => {
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;

    if (!email) {
      errors.email = "Email is required!";
      setFlag(false);
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email!";
      setFlag(false);
    } else {
      setFlag(true);
    }

    if (!password) {
      errors.password = "Password is required!";
      setFlag(false);
    } else {
      setFlag(true);
    }

    setError(errors);
  };

  return (
    <React.Fragment>
      <Container fixed>
        <Collapse sx={collapse_style} in={visible}>
          <Alert sx={collapse_style} variant="filled" severity={alertSeverity}>
            {alertText}
          </Alert>
        </Collapse>
        <Box sx={box_styles}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {loader && <CircularProgress color="success" />}
              <h2 className="text-3xl font-bold text-cyan-900">
                Sign In to your Account
              </h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Email ID"
                value={email}
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
              />
              <p className="validation__message">{error.email}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Password"
                value={password}
                variant="outlined"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <p className="validation__message">{error.password}</p>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                style={{ width: "100%" }}
                size="medium"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
            </Grid>
            <Grid container style={{ flex: 1 }} spacing={4} sx={{ mt: "5px" }}>
              <Grid item xs={5}></Grid>
              <Grid
                item
                style={{ alignItems: "center", textAlign: "right" }}
                xs={7}
              >
                <Button
                  component={RouterLink}
                  to="/signup"
                  variant="contained"
                  size="small"
                >
                  Create an Account
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
