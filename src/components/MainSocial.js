import React, { useState, useEffect } from "react";
import store from "../app/store";
import "./MainSocial.css";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import HeaderSocial from "./HeaderSocial";
import NewPost from "./NewPost";
import News from "./News";
import { Outlet } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainSocial = () => {
  var loginData = useSelector((state) => {
    return state.user;
  });

  const navigate = useNavigate();

  useEffect(() => {
    {
      if (loginData.user == null) {
        navigate("/login");
      } else if (loginData.user.loggedIn == true) {
        navigate("/homeApp");
      }
    }
  }, []);

  return (
    <React.Fragment>
      <HeaderSocial />
      <Outlet style={{ margin: "0 25%" }} />
    </React.Fragment>
  );
};

export default MainSocial;
