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
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
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
              <Grid container spacing={3}>
                {/* <Slider slides={images} /> */}
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
