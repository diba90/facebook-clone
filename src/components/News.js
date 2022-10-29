import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeaderSocial from "./HeaderSocial";
import "./News.css";
import NewsContent from "./NewsData.js";

const News = () => {
  const [news, setNews] = useState(null);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    let timer = setTimeout(() => {
      setNews(NewsContent.articles);
      setSpinner(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };

    // axios
    //   .get(
    //     "https://newsapi.org/v2/top-headlines?q=india&from=2022-10-09&sortBy=publishedAt&apiKey=7402b905d028412d8c162a111a7d4181"
    //   )
    //   .then((res) => {
    //     setNews(res.data.articles);
    //     setSpinner(false);
    //   });
  }, []);

  return (
    <React.Fragment>
      <HeaderSocial />
      <Grid item style={{ margin: "0 25%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {spinner ? (
              <Box
                sx={{ display: "block", textAlign: "center", padding: "5%" }}
              >
                <CircularProgress />
              </Box>
            ) : (
              news?.map((article) => (
                <div className="news__content">
                  <div className="publisher">
                    <h3>{article?.source.name}</h3>
                    <p>{article?.publishedAt}</p>
                  </div>
                  <div className="content__block">
                    <h2>{article?.title}</h2>
                    <img src={article?.urlToImage} alt={"News"} />
                    <p>{article?.description}</p>
                  </div>
                </div>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default News;
