import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Button,
  Link
} from "@material-ui/core";
import { useStyles, CustomCheckbox } from "./SignUpCss";

function handleSubmit() {}

export default function FormFooter() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography inline align="left">
          <FormControlLabel control={<CustomCheckbox />} />
          <a className={classes.color}>
            Check here to indicate that you have read and agreed to the
            <Link href="#" className={classes.color}>
              {" "}
              EventNet Terms and Conditions
            </Link>
          </a>
        </Typography>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="#" variant="body2" className={classes.color}>
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
