import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import Footer from "./Footer/Footer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import FeaturedPost from "./FeaturedPost";
import { useStyles, theme } from "./HomeCss";
import { postsText } from "./PostsText";

export default function Home() {
  const sections = [
    { title: "Home", url: "#" },
    { title: "About Us", url: "#" },
    { title: "Projects", url: "#" },
  ];
  const classes = useStyles();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Toolbar>
              <Container maxWidth="lg">
                <Header title="Support Local Farmers" sections={sections} />
              </Container>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="lg">
            <Grid>
              <MainFeaturedPost />
              <Grid container spacing={3}>
                {postsText.map((post, i) => (
                  <FeaturedPost key={i} post={post} />
                ))}
              </Grid>
              <Grid className={classes.marginTop}>
                <Footer title="Join us on" />
              </Grid>
            </Grid>
          </Container>
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
