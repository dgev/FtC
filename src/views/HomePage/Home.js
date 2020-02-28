import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useStyles, theme } from "./HomeCss";
import AboutUs from "./AboutUs";
import Main from "./Main";
import { Switch, Route } from "react-router-dom";

export default function Home() {
  const sections = [{ title: "Home", url: "home" }, { title: "About Us", url: "about" }];
  const classes = useStyles();

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
            <Switch>
              <Route exact path={"/home"} component={Main} />;
              <Route exact path={"/about"} component={AboutUs} />;
            </Switch>
          </Container>
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
