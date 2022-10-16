import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import MessageIcon from "@mui/icons-material/Message";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const HeaderSocial = () => {
  var loginData = useSelector((state) => {
    return state.user;
  });

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
          <RouterLink to="/createPost">
            <NoteAddIcon style={{ fontSize: "40px", margin: "0 15px" }} />
          </RouterLink>

          <RouterLink to="/news">
            <ArticleOutlinedIcon
              style={{ fontSize: "40px", margin: "0 15px" }}
            />
          </RouterLink>

          <RouterLink to="/messageModule">
            <MessageIcon style={{ fontSize: "40px", margin: "0 15px" }} />
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
            onClick={handleLogout}
          >
            <LogoutIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderSocial;
