import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CopyRight from "./CopyRight";
import Divider from "@material-ui/core/Divider";
import { useStyles, theme } from "./FooterCss";

export default function Footer(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <footer className={classes.footer}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography align="center" gutterBottom>
            {/* <ThemeProvider theme={theme}> */}
            <a href="#">
              <GitHubIcon className={classes.black} />
            </a>
            <a href="#">
              <TwitterIcon className={classes.lightBlue} />
            </a>
            <a href="#">
              <FacebookIcon className={classes.blue} />
            </a>
            <a href="#">
              <LinkedInIcon className={classes.linkedin} />
            </a>
            {/* </ThemeProvider> */}
          </Typography>
          <CopyRight />
          <Typography gutterBottom>
            <Divider />
          </Typography>
          <Typography>
            <Link noWrap className={classes.toolbarLink}>
              Home
            </Link>
            <Link noWrap className={classes.toolbarLink}>
              About
            </Link>
          </Typography>
        </Container>
      </ThemeProvider>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};
