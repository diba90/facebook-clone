import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import "./css/News.css";
import NewsContent from "./NewsData.js";

const News = () => {
  const [news, setNews] = useState(null);
  const [spinner, setSpinner] = useState(false);

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
      <Header id={2} />
      <Grid item sx={grid_style}>
        <Grid container spacing={8}>
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
