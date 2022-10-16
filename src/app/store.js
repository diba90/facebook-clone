import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userReducer from "../features/userSlice";
import postReducer from "../features/postSlice";
import messageReducer from "../features/messageSlice";

const reducer = combineReducers({
  user: userReducer,
  post: postReducer,
  message: messageReducer,
});

const store = configureStore({
  reducer,
});

export default store;
