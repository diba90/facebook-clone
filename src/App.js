import "./App.css";
import React from "react";
// import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./components/ForgotPassword";
import MainComponent from "./components/MainComponent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<MainComponent />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/reset-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
