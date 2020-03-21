import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ onVideoSelect, video }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt='thumbnail'
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant='subtitle4'>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};
