import React, { Component, useState } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoLists, VideoDetail } from "./components/";

const App = () => {
  const [videos, setVideos] = useState([]);

  const [selectedVideos, setSelectedVideos] = useState(null);
  const handleSubmit = async data => {
    const {
      data: { items: video }
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        key: "AIzaSyAdiholK6oJHuFx0mFtHwVQcm-vmofAZkk",
        maxResults: 5,
        q: data
      }
    });
    setVideos(video);
    setSelectedVideos(video[0]);
    console.log("response:", video);
  };

  // const handleVideoClick = event => {};
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar formSubmit={handleSubmit}></SearchBar>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideos}></VideoDetail>
          </Grid>
          <Grid item xs={4}>
            <VideoLists
              onVideoSelect={setSelectedVideos}
              videoList={videos}
            ></VideoLists>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
