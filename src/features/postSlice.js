import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
const creationdate = date.toDateString();
const creationTime = date.toLocaleTimeString();
var datetime = creationdate + "   " + creationTime;

export const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
  },
  reducers: {
    createPost: (state, action) => {
      state.post.push(action.payload);
    },
    addLikeDislike: (state, action) => {
      state.post.map((item) => {
        if (item.id === action.payload.id.id) {
          if (item.like === false) {
            item.like = true;
          } else {
            item.like = false;
          }
        }
      });
    },
  },
});

export const { createPost, addLikeDislike } = postSlice.actions;

export const selectPost = (state) => state.post.post;

export default postSlice.reducer;
