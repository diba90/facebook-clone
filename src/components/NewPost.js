import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Feed from "./Feed";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/postSlice";

const NewPost = () => {
  const [content, setContent] = useState("");
  const [picUrl, setPicUrl] = useState("");
  const [displayText, setDisplayText] = useState("Add Photo for your Post");

  const grid_style = {
    margin: "0 25%",
    "@media (max-width: 768px)": {
      margin: "0 15px",
    },
  };

  const mt50 = {
    "@media (max-width: 768px)": {
      marginTop: "50px",
    },
  };

  var path = "";

  var loginData = useSelector((state) => {
    return state.user;
  });

  var postData = useSelector((state) => {
    return state.post.post.length;
  });

  const dispatch = useDispatch();

  const customId = postData + 1;

  const handleSubmit = () => {
    if (content !== "") {
      if (picUrl === "") {
        path = "";
      } else {
        path = (window.URL || window.webkitURL).createObjectURL(picUrl);
      }
      const fullname =
        loginData.user?.firstname + " " + loginData.user?.lastname;
      let date = new Date();
      let creationdate = date.toDateString();
      let creationTime = date.toLocaleTimeString();
      let datetime = creationdate + "   " + creationTime;
      setDisplayText("Add Photo for your Post");
      setContent("");
      setPicUrl("");
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
      <Header id={1} />
      <Grid item sx={grid_style}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              sx={mt50}
              id="outlined-textarea"
              placeholder="What's on your mind !!"
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
