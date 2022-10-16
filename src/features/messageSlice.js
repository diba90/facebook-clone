import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
