import React from "react";
import { CssBaseline, Container, AppBar, Toolbar, Grid } from "@material-ui/core";
import Header from "../Header";
import MainFeaturedPost from "views/HomePage/Posts/MainPost/Post";
import FeaturedPost from "views/HomePage/Posts/Posts/FeaturedPost";
import { postsText } from "views/HomePage/Posts/Posts/Text/PostsText";
import Footer from "views/HomePage/Footer/Footer";
import Slider from "views/HomePage/Slider/components/Slider";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useStyles, theme } from "../style/HomeCss";

export default function HomePage() {
  const sections = [{ title: "Home", url: "home" }, { title: "About Us", url: "about" }];
  const classes = useStyles();
  const images = [
    require("views/HomePage/Slider/products/2.jpg"),
    require("views/HomePage/Slider/products/3.jpg"),
    require("views/HomePage/Slider/products/4.jpg"),
    require("views/HomePage/Slider/products/5.jpg"),
    require("views/HomePage/Slider/products/6.jpg"),
    require("views/HomePage/Slider/products/7.jpg"),
    require("views/HomePage/Slider/products/8.jpg"),
    require("views/HomePage/Slider/products/9.jpg"),
    require("views/HomePage/Slider/products/11.jpg"),
    require("views/HomePage/Slider/products/12.jpg"),
  ];

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Toolbar>
              <Container maxWidth="lg">
                <Header title="Support The Local Farmers" sections={sections} />
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
              <Grid container>
                <Slider slides={images} />
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
