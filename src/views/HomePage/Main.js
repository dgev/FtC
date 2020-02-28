import React from "react";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import { postsText } from "./PostsText";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Caro from "./Slider/src/Caro";
import { useStyles, theme } from "./HomeCss";
import Footer from "./Footer/Footer";

export default function Main() {
  const classes = useStyles();
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Grid>
          <MainFeaturedPost />
          <Grid container spacing={3}>
            {postsText.map((post, i) => (
              <FeaturedPost key={i} post={post} />
            ))}
          </Grid>
          <Grid container spacing={3}>
            <Caro />
          </Grid>
          <Grid className={classes.marginTop}>
            <Footer title="Join us on" />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </>
  );
}
