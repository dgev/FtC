import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "redux/actions/user/user.actions";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useStyles, theme } from "views/MyProfile/style/MyProfileCss";
import { TextField, Button } from "@material-ui/core";

export default function ResetForm(props) {
  const password = usePassword();
  const dispatch = useDispatch();

  function handleConfirm() {
    dispatch(
      deleteUser({ user: { password: password.value, username: props.username }, id: props.id })
    );
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Account</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your password to update your account.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            color="primary"
            fullWidth
            onChange={password.onChange}
            error={!password.isValidPassword}
            helperText={!password.isValidPassword ? password.error : null}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  );
}

function usePassword() {
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(true);
  const [error, setError] = useState("Input should not be empty");
  function handlePasswordChange(event) {
    if (event.target.value !== null && event.target.value.length) {
      setPassword(event.target.value);
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }
  return {
    value: password,
    onChange: handlePasswordChange,
    isValidPassword,
    error,
  };
}
