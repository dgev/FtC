import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Header from "views/HomePage/Home/Header";
import Footer from "views/HomePage/Footer/Footer";
import InfoAboutUs from "views/HomePage/Home/About/Info";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useStyles, theme } from "views/HomePage/Home/style/HomeCss";

export default function AboutUs() {
  const classes = useStyles();
  const sections = [{ title: "Home", url: "home" }, { title: "About Us", url: "about" }];

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
            <div style={{ color: "#4CAF50" }}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {"This is Us"}
              </Typography>
            </div>
            <Grid>
              <InfoAboutUs />
            </Grid>
            <Grid className={classes.marginTop}>
              <Footer title="Join us on" />
            </Grid>
          </Container>
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
