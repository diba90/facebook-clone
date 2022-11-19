import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import MessageIcon from "@mui/icons-material/Message";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import "./css/Main.css";

const Header = (prop) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var loginData = useSelector((state) => {
    return state.user;
  });

  const button_normal = {
    fontSize: "40px",
    margin: "0 15px",
  };

  const button_selected = {
    fontSize: "38px",
    margin: "0px 15px",
    background: "rgb(189 163 89)",
    borderRadius: "10px",
    padding: "4px",
    color: "#ffffff",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.user === null) {
      navigate("/login");
    }
  }, [loginData.user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <React.Fragment>
      <div className="header__section">
        <div className="header__logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
            alt="facebook"
          />
        </div>
        <div className="header__clickable__element">
          <RouterLink to="/createPost">
            <NoteAddIcon
              id={1}
              style={prop.id === 1 ? button_selected : button_normal}
            />
          </RouterLink>

          <RouterLink to="/news">
            <ArticleOutlinedIcon
              id={2}
              style={prop.id === 2 ? button_selected : button_normal}
            />
          </RouterLink>

          <RouterLink to="/messageModule">
            <MessageIcon
              id={3}
              style={prop.id === 3 ? button_selected : button_normal}
            />
          </RouterLink>
        </div>
        <div className="header__greeting__message">
          <h3 className="text-l ml-3 tracking-wide text-teal-900">
            Welcome,{" "}
            <b>
              {loginData.user &&
                loginData.user.firstname + " " + loginData.user.lastname}
            </b>
          </h3>
          <IconButton
            className="icon__button"
            color="primary"
            style={{ margin: "0 15px" }}
            aria-label="Home"
            component="label"
            onClick={handleClickOpen}
          >
            <LogoutIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation !!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleLogout} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Header;
