import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    opacity: 0.8,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost() {
  const classes = useStyles();

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: "url(" + require("views/HomePage/Posts/MainPost/Images/home.jpg") + ")",
      }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h5" color="inherit" gutterBottom>
              We believe : "Efficient communication is the best way to increase profitability".
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              paragraph
              style={{ opacity: "0.8", textShadow: "1px 1px #FFCA28" }}
            >
              Farmers are the backbone of Agriculture. Agriculture sector feeds the billions and
              builds our nation, contributes to nearly 20% of GDP, employs more than 50% of our
              population and yet it is unorganized at the farmer level. We, 'SmartFarm FTC' focus on
              the bottom of the pyramid and consolidate, organize and optimize farmer data and help
              farmers communicate with companies easily and friendly. We offer solutions that make
              the system efficient right from the bottom of the agriculture process up to market
              linkages. Our solutions directly help farmers reduce the amount of time they spend to
              find suitable partners for further development of their sector. We are trying to
              aggregate all the farming branches under one roof.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
