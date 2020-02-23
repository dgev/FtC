import React, { useState, useEffect } from "react";
import { deleteUser } from "redux/actions";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Birthdate from "views/HomePage/SignUp/components/Birthdate";
import Gender from "views/HomePage/SignUp/components/Gender";

import farmerAvatar from "./Images/farmers.jpg";
import companyAvatar from "./Images/company.png";
import Region from "../../components/Region";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useStyles, theme } from "./MyProfileCss";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "redux/actions";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function MyProfile() {
  const classes = useStyles();
  const user = useSelector(state => state.userData);
  const [canUpdate, setUpdate] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [user]);
  const dispatch = useDispatch();

  const firstName = useName();
  const lastName = useName();
  const date = useDate();
  const gender = useGender();
  const password = usePassword();

  const updatedUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    gender: gender.value,
  };

  function handleChange() {
    dispatch(updateUser(updatedUser));
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleConfirm() {
    dispatch(deleteUser({ password: password.value, id: user.id }));
  }

  return (
    <div>
      <GridContainer justify="flex-end">
        <MuiThemeProvider theme={theme}>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="standard-textarea"
                      label="Fisrt Name "
                      multiline
                      fullWidth
                      onChange={firstName.handleChange}
                      style={{ marginBottom: theme.spacing(3) }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="standard-textarea"
                      label="Last Name"
                      onChange={lastName.handleChange}
                      multiline
                      fullWidth
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Region />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Birthdate onChange={date.onChange} value={date.value} />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                    <Gender {...gender} />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <GridItem xs={12} sm={12} md={2}>
                  <Button color="primary" onClick={handleChange}>
                    Update Profile
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button color="primary" onClick={handleClickOpen}>
                    Delete Profile
                  </Button>
                </GridItem>
              </CardFooter>
            </Card>
          </GridItem>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Delete Account</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter your password to permanently delete your account.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
                onChange={password.onChange}
                error={!password.isValidPassword}
                helperText={!password.isValidPassword ? password.error : null}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                color="primary"
                // disabled={password.isValidPassword || password.value.length}
              >
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={user.hasCompany ? companyAvatar : farmerAvatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h4>{`Name:  ${user.firstName} ${user.lastName}`}</h4>
                <h5>{"Born in:  " + user.birthDate}</h5>
                {user.hasCompany ? <h5>{`Company Name:  ${user.companyName}`}</h5> : null}
              </CardBody>
            </Card>
          </GridItem>
        </MuiThemeProvider>
      </GridContainer>
    </div>
  );
}

function useName() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isValid, setValidName] = useState(true);
  function handleChange(event) {
    setValue(event.target.value);
  }
  return {
    value,
    isValid,
    error,
    handleChange,
  };
}
function useDate() {
  const [date, setDate] = useState(new Date());
  function handleChange(date) {
    if (
      new Date().getFullYear() - date.getFullYear() >= 18 &&
      new Date().getFullYear() - date.getFullYear() <= 110
    ) {
      setDate(date);
    }
  }
  return {
    value: date,
    onChange: handleChange,
  };
}

function useGender() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    handleChange,
  };
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
