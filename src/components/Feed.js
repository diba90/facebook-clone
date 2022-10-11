import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import IconButton from "@mui/material/IconButton";
import { addLike, addDislike } from "../features/postSlice";
import "./Feed.css";

const Feed = () => {
  var feedData = useSelector((state) => {
    return state.post;
  });

  var loginData = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();

  const handleLike = (postid) => {
    dispatch(
      addLike({
        id: postid,
      })
    );
  };

  const handleDislike = (postid) => {
    dispatch(
      addDislike({
        id: postid,
      })
    );
  };

  return (
    <React.Fragment>
      {feedData.post
        ?.slice(0)
        .reverse()
        .map((data) => (
          <div key={data?.id} className="post__content">
            <div className="post_user_block">
              <div className="post_user_icon">
                <Avatar style={{ width: "35px", height: "35px" }} />
              </div>
              <div className="post_user_info">
                <h3>
                  {loginData.user?.firstname + " " + loginData.user?.lastname}
                </h3>
                <p>{data?.creationdate}</p>
              </div>
            </div>
            <div className="post_title">{data?.content}</div>
            <div className="post_image">
              {data?.pic && <img src={data?.pic} alt="Feed Image" />}
            </div>
            <div className="post_action_buttons">
              <ThumbDownIcon
                onClick={handleLike({ id: data.id })}
                style={{ fontSize: "30px", float: "left" }}
              />
              <span className="post__like">{data?.like}</span>
              <ThumbUpIcon
                onClick={handleDislike({ id: data.id })}
                style={{ fontSize: "30px", float: "right" }}
              />
              <span className="post__dislike">{data?.dislike}</span>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Feed;
