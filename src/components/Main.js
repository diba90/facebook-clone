import React, { useEffect } from "react";
import "./css/Main.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

const Main = () => {
  var loginData = useSelector((state) => {
    return state.user;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.user === null) {
      navigate("/login");
    } else if (loginData.user.loggedIn === true) {
      navigate("/homeApp");
    }
  }, [loginData.user, navigate]);

  return (
    <React.Fragment>
      <Header />
      <Outlet style={{ margin: "0 25%" }} />
    </React.Fragment>
  );
};

export default Main;
