import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/HomeOutlined";
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

const HeaderSocial = () => {
  const [flag, setFlag] = useState(0);
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
    fontSize: "37px",
    margin: "0px 15px",
    background: "rgb(196 202 175)",
    borderRadius: "10px",
    padding: "4px",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.user === null) {
      navigate("/login");
    }
  }, []);

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
          <RouterLink
            to="/createPost"
            onClick={() => {
              const flagVal = 1;
              setFlag(flagVal);
            }}
          >
            <NoteAddIcon style={flag === 1 ? button_selected : button_normal} />
          </RouterLink>

          <RouterLink
            to="/news"
            onClick={() => {
              const flagVal = 2;
              setFlag(flagVal);
            }}
          >
            <ArticleOutlinedIcon
              style={flag === 2 ? button_selected : button_normal}
            />
          </RouterLink>

          <RouterLink
            to="/messageModule"
            onClick={() => {
              const flagVal = 3;
              setFlag(flagVal);
            }}
          >
            <MessageIcon style={flag === 3 ? button_selected : button_normal} />
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

export default HeaderSocial;
