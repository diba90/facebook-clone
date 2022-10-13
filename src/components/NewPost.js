import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Feed from "./Feed";
import HeaderSocial from "./HeaderSocial";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/postSlice";

const NewPost = () => {
  const [content, setContent] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [picUrl, setPicUrl] = useState("");
  const [displayText, setDisplayText] = useState("Add Photo for your Post");

  var loginData = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();

  const customId = Math.floor(Math.random() * 10 + 321);

  const handleSubmit = () => {
    if (content != "") {
      if (picUrl === "") {
        var path = "";
      } else {
        var path = (window.URL || window.webkitURL).createObjectURL(picUrl);
      }
      const fullname =
        loginData.user?.firstname + " " + loginData.user?.lastname;
      let date = new Date();
      let creationdate = date.toDateString();
      let creationTime = date.toLocaleTimeString();
      let datetime = creationdate + "   " + creationTime;
      setDisplayText("Add Photo for your Post");
      setContent("");
      dispatch(
        createPost({
          id: customId,
          username: fullname,
          content: content,
          creationdate: datetime,
          pic: path,
          like: false,
        })
      );
    }
  };

  return (
    <React.Fragment>
      <HeaderSocial />
      <Grid item style={{ margin: "0 25%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-textarea"
              label="What's on your mind !!"
              multiline
              style={{
                width: "100%",
                fontSize: "45px",
                backgroundColor: "#f2f2f2",
              }}
              rows={2}
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
            <FormControl
              style={{ float: "left", marginTop: "20px" }}
              sx={{ m: 1, minWidth: 40 }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  onChange={(event) => {
                    setPicUrl(event.target.files[0]);
                    setDisplayText("Image Selected");
                  }}
                  type="file"
                />
                <PhotoCamera />
              </IconButton>
            </FormControl>
            <FormControl
              style={{ float: "left", marginTop: "25px" }}
              sx={{ m: 1, minWidth: 40 }}
            >
              {displayText}
            </FormControl>
            <Button
              variant="contained"
              style={{ float: "right", marginTop: "15px" }}
              endIcon={<SendIcon />}
              onClick={handleSubmit}
            >
              Post
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Feed />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NewPost;
