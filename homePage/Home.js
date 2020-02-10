import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer/Footer";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
const drawerWidth = 100;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#9C27B0"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6)
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0
  }
}));
export default function Home() {
  const sections = [
    { title: "Home", url: "#" },
    { title: "About Us", url: "#" },
    { title: "Projects", url: "#" }
  ];

  const mainFeaturedPost = {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    // image: "file:///C:/Users/Diana/Desktop/trial/src/images/home.jpg",
    image:
      "https://www.itl.cat/pngfile/big/0-9079_free-desktop-wallpaper-downloads-sunflower-sunflowers-hd.jpg",
    imgText: "main image description"
  };

  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "./images/home.jpg",
      imageText: "Image Text",
      linkText: "Read more..."
    },
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "./images/home.jpg",
      imageText: "Image Text",
      linkText: "Read more..."
    },
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "./images/home.jpg",
      imageText: "Image Text",
      linkText: "Read more..."
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "./images/home.jpg",
      imageText: "Image Text",
      linkText: "Read more..."
    }
  ];
  const posts = [post1, post2, post3];
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Container maxWidth="lg">
              <Header title="Welcome to EventNet" sections={sections} />
            </Container>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Grid>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map(post => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Footer title="Join us on" />
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
