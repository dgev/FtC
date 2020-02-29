import React from "react";
import InfoAboutUs from "./InfoAboutUs";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useStyles, theme } from "./HomeCss";

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
          </Container>
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
