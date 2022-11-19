import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./css/Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState({});
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(false);

  var loginData = useSelector((state) => {
    return state.user;
  });

  const navigate = useNavigate();

  useEffect(() => {
    {
      if (loginData.user == null) {
        navigate("/signup");
      } else if (loginData.user.loggedIn == true) {
        navigate("/homeApp");
      }
    }
  }, []);

  useEffect(() => {
    {
      if (flag === true) {
        if (localStorage.getItem("ListUsers") != null) {
          const addedUser = JSON.parse(localStorage.getItem("ListUsers"));
          const updatedUsers = [...addedUser, obj];
          localStorage.setItem("ListUsers", JSON.stringify(updatedUsers));
          setVisible(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setTimeout(() => {
            setVisible(false);
            navigate("/login");
          }, 3000);
        } else {
          localStorage.setItem("ListUsers", JSON.stringify(users));
          const addedUser = JSON.parse(localStorage.getItem("ListUsers"));
          const updatedUsers = [...addedUser, obj];
          localStorage.setItem("ListUsers", JSON.stringify(updatedUsers));
          setVisible(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setTimeout(() => {
            setVisible(false);
            navigate("/login");
          }, 3000);
        }
      }
    }
  }, [error]);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const box_styles = {
    backgroundColor: "#ffffff",
    height: "60%",
    width: "50%",
    textAlign: "center",
    padding: "30px",
    margin: "10% 27% 0 27%",
    border: "solid 1px #f2f2f2",
    borderRadius: "14px",
  };

  var users = [
    {
      first_name: "Admin",
      last_name: "",
      email: "admin@email.com",
      password: "admin123",
    },
    {
      first_name: "Rakesh",
      last_name: "Kumar",
      email: "rakesh@gmail.com",
      password: "rakesh",
    },
  ];

  var input_first_name = firstName;
  var input_last_name = lastName;
  var input_email = email;
  var input_password = password;

  var obj = {
    first_name: input_first_name,
    last_name: input_last_name,
    email: input_email,
    password: input_password,
  };

  function handleSubmit() {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;

    if (!firstName) {
      errors.firstname = "First Name is required!";
      setFlag(false);
    }

    if (!lastName) {
      errors.lastname = "Last Name is required!";
      setFlag(false);
    }

    if (!email) {
      errors.email = "Email is required!";
      setFlag(false);
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email!";
      setFlag(false);
    }

    if (!password) {
      errors.password = "Password is required!";
      setFlag(false);
    } else if (password.length < 4) {
      errors.password = "Password should have 4 characters";
      setFlag(false);
    } else if (password.length > 8) {
      errors.password = "Password should not exceed 8 characters";
      setFlag(false);
    } else {
      setFlag(true);
    }
    setError(errors);
  }

  return (
    <React.Fragment>
      <Container fixed>
        <Collapse style={{ width: "100%" }} in={visible}>
          <Alert
            style={{ width: "50%", margin: "0 27%" }}
            variant="filled"
            severity="success"
          >
            Account created successfully. Login to your account now
          </Alert>
        </Collapse>
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
                  value={firstName}
                  variant="outlined"
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <p className="validation__message">{error.firstname}</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Last Name"
                  value={lastName}
                  variant="outlined"
                  onChange={(event) => setLastName(event.target.value)}
                />
                <p className="validation__message">{error.lastname}</p>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                value={email}
                label="Email ID"
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
                onClick={handleSubmit}
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
                  to="/login"
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

export default Signup;
