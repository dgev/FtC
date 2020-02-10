import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CopyRight from "./CopyRight";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0)
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));
const theme = createMuiTheme({
  palette: {
    inherit: { main: "#0077B5" },
    primary: { main: "#3b5999" },
    secondary: { main: "#55acee" },
    error: { main: "#212121" }
  }
});

export default function Footer(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography align="center" gutterBottom>
          <ThemeProvider theme={theme}>
            <a href="#">
              <GitHubIcon color="error" />
            </a>
            <a href="#">
              <TwitterIcon color="secondary" />
            </a>
            <a href="#">
              <FacebookIcon color="primary" />
            </a>
            <a href="#">
              <LinkedInIcon color="inherit" />
            </a>
          </ThemeProvider>
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
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import CopyRight from "./CopyRight";
// import Divider from "@material-ui/core/Divider";

// const useStyles = makeStyles(theme => ({
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     // marginTop: theme.spacing(8),
//     padding: theme.spacing(6, 0)
//   },
//   toolbarLink: {
//     padding: theme.spacing(1),
//     flexShrink: 0
//   }
// }));

// export default function Footer(props) {
//   const classes = useStyles();
//   const { title } = props;

//   return (
//     <footer className={classes.footer}>
//       <Container maxWidth="lg">
//         <Typography variant="h5" align="center" gutterBottom>
//           {title}
//         </Typography>
//         <Typography align="center" gutterBottom>
//           <Link>
//             <GitHubIcon></GitHubIcon>
//           </Link>
//           <Link>
//             <TwitterIcon></TwitterIcon>
//           </Link>
//           <Link>
//             <FacebookIcon></FacebookIcon>
//           </Link>
//           <Link>
//             <LinkedInIcon></LinkedInIcon>
//           </Link>
//         </Typography>
//         <CopyRight />
//         <Divider />
//         <Typography>
//           <Link noWrap className={classes.toolbarLink}>
//             Home
//           </Link>
//           <Link noWrap className={classes.toolbarLink}>
//             About
//           </Link>
//         </Typography>
//       </Container>
//     </footer>
//   );
// }

// Footer.propTypes = {
//   description: PropTypes.string,
//   title: PropTypes.string
// };
