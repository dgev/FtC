import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyRight from './CopyRight';
import Divider from '@material-ui/core/Divider';
import { useStyles, theme } from './FooterCss';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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
            <RouterLink to="/" className={classes.routerLink}>
              <GitHubIcon className={classes.black} />
            </RouterLink>
            <RouterLink to="/" className={classes.routerLink}>
              <TwitterIcon className={classes.lightBlue} />
            </RouterLink>
            <RouterLink to="/" className={classes.routerLink}>
              <FacebookIcon className={classes.blue} />
            </RouterLink>
            <RouterLink to="/" className={classes.routerLink}>
              <LinkedInIcon className={classes.linkedin} />
            </RouterLink>
          </Typography>
          <CopyRight />
          <Typography gutterBottom>
            <Divider />
          </Typography>
          <Typography>
            <RouterLink to="/" className={classes.toolbarLink}>
              <span>Home</span>
            </RouterLink>
            <RouterLink to="/about" className={classes.toolbarLink}>
              <span>About</span>
            </RouterLink>
          </Typography>
        </Container>
      </ThemeProvider>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
