import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer/Footer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './HomeCss';

export default function Home() {
  const sections = [
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Projects', url: '#' },
  ];

  const bImage = './Images/home.jpg';
  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    // image: "file:///C:/Users/Diana/Desktop/trial/src/images/home.jpg",
    image:
      'https://www.itl.cat/pngfile/big/0-9079_free-desktop-wallpaper-downloads-sunflower-sunflowers-hd.jpg',
    imgText: 'main image description',
  };

  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: './images/home.jpg',
      imageText: 'Image Text',
      linkText: 'Read more...',
    },
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: './images/home.jpg',
      imageText: 'Image Text',
      linkText: 'Read more...',
    },
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: './images/home.jpg',
      imageText: 'Image Text',
      linkText: 'Read more...',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: './images/home.jpg',
      imageText: 'Image Text',
      linkText: 'Read more...',
    },
  ];
  const classes = useStyles();

  return (
    <React.Fragment>
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
            <MainFeaturedPost post={mainFeaturedPost} image={bImage} />
            <Grid container spacing={4}>
              {featuredPosts.map((post, i) => (
                <FeaturedPost key={i} post={post} />
              ))}
            </Grid>
            <Grid className={classes.marginTop}>
              <Footer title="Join us on" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}