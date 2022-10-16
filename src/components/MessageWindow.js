import React from "react";
import HeaderSocial from "./HeaderSocial";
import Grid from "@mui/material/Grid";
import MessageInput from "./MessageInput";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import "./Message.css";

const MessageWindow = () => {
  var messageData = useSelector((state) => {
    return state.message.messages;
  });

  return (
    <React.Fragment>
      <HeaderSocial />
      <Grid item style={{ margin: "0 25%" }}>
        <Grid container style={{ padding: "20px 0" }}>
          <h2 className="title text-3xl font-bold text-cyan-900">
            Messaging Module
          </h2>
        </Grid>
        <Grid container>
          <Container style={{ width: "100%", padding: "0" }}>
            <Box
              sx={{
                bgcolor: "#fbfbfb",
                height: "400px",
                padding: "15px 0 30px 0",
                width: "100%",
                overflowY: "scroll",
              }}
            >
              {messageData?.map((messageItem) => (
                <Grid item xs={12} style={{ display: "flow-root" }}>
                  <div className="message__block">
                    <div className="message__text">{messageItem?.message}</div>
                    <div className="message__date">
                      {messageItem?.timestamp}
                    </div>
                  </div>
                </Grid>
              ))}
            </Box>
          </Container>
          <MessageInput />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MessageWindow;
