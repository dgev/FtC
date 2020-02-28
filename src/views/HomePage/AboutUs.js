import React from "react";
import InfoAboutUs from "./InfoAboutUs";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function AboutUs(props) {
  return (
    <>
      <div style={{ color: "#4CAF50" }}>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          {"This is Us"}
        </Typography>
      </div>
      <Grid>
        <InfoAboutUs />
      </Grid>
    </>
  );
}
