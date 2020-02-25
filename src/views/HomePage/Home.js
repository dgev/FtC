import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import Footer from "./Footer/Footer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { theme } from "views/HomePage/SignUp/style";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import FeaturedPost from "views/HomePage/HompageNav/Nav1/FeaturedPost";
import FeaturedPost2 from "views/HomePage/HompageNav/Nav2/FeaturedPost2";
import FeaturedPost3 from "views/HomePage/HompageNav/Nav3/FeaturedPost3";
import useStyles from "./HomeCss";

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
                <FeaturedPost />
                <FeaturedPost2 />
                <FeaturedPost3 />
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
