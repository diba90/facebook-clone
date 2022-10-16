import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { addMessage } from "../features/messageSlice";
import { useDispatch } from "react-redux";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (message !== "") {
      let date = new Date();
      let creationdate = date.toDateString();
      let creationTime = date.toLocaleTimeString();
      let datetime = creationdate + "   " + creationTime;
      if (event.key === "Enter") {
        dispatch(
          addMessage({
            message: message,
            timestamp: datetime,
          })
        );
        setMessage("");
        document.getElementById("message-ip").value = "";
      }
    }
  };
  return (
    <React.Fragment>
      <TextField
        style={{ width: "100%" }}
        id="message-ip"
        placeholder="Type your message and press enter"
        variant="outlined"
        required
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </React.Fragment>
  );
};

export default MessageInput;
