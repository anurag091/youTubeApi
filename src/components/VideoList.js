import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItems";

export default ({ videoList, onVideoSelect }) => {
  const listOfVideos = videoList.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};
