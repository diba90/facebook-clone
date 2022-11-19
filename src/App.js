import React from "react";
import "./App.css";
import store from "./app/store";
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";
import News from "./components/News";
import NewPost from "./components/NewPost";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MessageWindow from "./components/MessageWindow";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homeApp" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<News />} />
        <Route path="/messageModule" element={<MessageWindow />} />
        <Route path="/*" element={<Login />} />
        <Route path="/createPost" element={<NewPost />} />
      </Routes>
    </Provider>
  );
}

export default App;
