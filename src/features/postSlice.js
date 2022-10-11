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
    addLike: (state, action) => {
      state.post.map((item) => {
        if (item.id === action.payload.id) {
          item.like += 1;
        }
      });
    },
    addDislike: (state, action) => {
      state.post.map((item) => {
        if (item.id === action.payload.id) {
          item.dislike += 1;
        }
      });
    },
  },
});

export const { createPost, addLike, addDislike } = postSlice.actions;

export const selectPost = (state) => state.post.post;

export default postSlice.reducer;
