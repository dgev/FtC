import React, { useState, useEffect } from "react";
import { getRegisteredUser, updateUser } from "redux/actions/user/user.actions";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Birthdate from "views/HomePage/Register/SignUp/components/Birthdate";
import Gender from "views/HomePage/Register/SignUp/components/Gender";
import { WindMillLoading } from "react-loadingg";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getNotif } from "redux/actions/notification/notification.action";

import Phone from "views/HomePage/Register/SignUp/components/Phone";
import farmerAvatar from "../Images/farmers.jpg";
import companyAvatar from "../Images/company.png";
import Region from "views/HomePage/Register/SignUp/components/Region";
import { useStyles, theme } from "../style/MyProfileCss";

export default function MyProfile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userData);
  const loaded = useSelector(state => state.userData.loaded);
  const user =
    localStorage.getItem("token") && loaded === false ? dispatch(getRegisteredUser()) : currentUser;
  const [canUpdate, setUpdate] = useState(true);
  const [open, setOpen] = useState(false);

  const firstName = useName();
  const lastName = useName();
  const date = useDate();
  const gender = useGender();
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(true);
  const [passwordError, setError] = useState("");
  const region = useRegion();
  const phone = usePhone();

  useEffect(() => {
    if (loaded) {
      user.hasCompany
        ? dispatch(getNotif("company/" + user.id))
        : dispatch(getNotif("farmer/" + user.id));
    }
  }, [loaded]);

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleConfirm() {
    setUpdate(false);
    const updatedUser = {
      user: {
        firstName: firstName.isValid ? firstName.value : user.firstName,
        lastName: lastName.isValid ? lastName.value : user.lastName,
        gender: gender.isValid ? gender.value.toUpperCase() : user.gender.toUpperCase(),
        region: region.isValid
          ? region.value.replace(" ", "").toUpperCase()
          : user.region.replace(" ", "").toUpperCase(),
        phoneNumber: user.phoneNumber,
        birthDate: date.isValid ? date.formatDate : user.birthDate,
        password: password,
      },
      id: user.id,
    };
    const error = dispatch(updateUser(updatedUser));
    if (error.error === "UNAUTHORIZED") {
      setError("Password is incorrect");
      setValid(false);
    } else if (user.updated === false) {
      setValid(false);
      setError("Something went wrong. Please try again");
    } else {
      setOpen(false);
      window.location.reload();
    }
  }

  return (
    <>
      {!loaded ? (
        <WindMillLoading />
      ) : (
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
                          label="First Name "
                          multiline
                          fullWidth
                          onChange={firstName.onChange}
                          style={{ marginBottom: theme.spacing(3) }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <TextField
                          id="standard-textarea"
                          label="Last Name"
                          onChange={lastName.onChange}
                          multiline
                          fullWidth
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <Region
                          onChange={region.onChange}
                          isValid={true}
                          error={null}
                          canRegister={canUpdate}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <Birthdate
                          onChange={date.onChange}
                          isValid={true}
                          error={null}
                          canRegister={canUpdate}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <Gender {...gender} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <Phone {...phone} canRegister={canUpdate} />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={12} md={6}>
                        <Button color="primary" onClick={handleClickOpen}>
                          Update Profile
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Account</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please enter your password to update your account.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Password"
                    type="password"
                    fullWidth
                    onChange={handlePassword}
                    error={!isValid}
                    helperText={!isValid ? passwordError : null}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleConfirm} color="primary">
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
                    <h5>{"Email:  " + user.username}</h5>
                    <h5>{`Name:  ${user.firstName} ${user.lastName}`}</h5>
                    <h5>{`Born in: ${user.birthDate}  Region: ${user.region}`}</h5>
                    {user.hasCompany ? (
                      <h5>{`Gender: ${user.gender} Company Name:  ${user.companyName}`}</h5>
                    ) : (
                      <h5>{`Gender: ${user.gender}`}</h5>
                    )}
                  </CardBody>
                </Card>
              </GridItem>
            </MuiThemeProvider>
          </GridContainer>
        </div>
      )}
    </>
  );
}

function useName() {
  const [value, setValue] = useState("");
  const [isValid, setValidName] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    if (event.target.value.match(/^[a-zA-Z ]{2,30}$/) && event.target.value.length > 0) {
      setValue(event.target.value);
      setValidName(true);
    } else {
      setValidName(false);
      setError("Invalid Input");
    }
  }

  return {
    value,
    onChange: handleChange,
    isValid,
    error,
  };
}
function useDate() {
  const [value, setValue] = useState(new Date());
  const [isValid, setValidAge] = useState(false);
  const [error, setError] = useState("Field is required");
  const [formatDate, setFormatDate] = useState("");

  function handleChange(date) {
    if (date !== null && date !== undefined) {
      let current_age = Math.abs(new Date(new Date() - date).getUTCFullYear() - 1970);
      if (current_age < 18) {
        setError("You must be 18 or higher to sign up");
        setValidAge(false);
      } else if (current_age > 110) {
        setError("Input a valid birthdate");
        setValidAge(false);
      } else if (
        !(
          date.getDate() >= 0 &&
          date.getDate() <= validDays(date.getMonth() + 1, date.getFullYear()) &&
          date.getMonth() >= 0 &&
          date.getMonth() < 12
        )
      ) {
        setError("Input a valid birthdate");
        setValidAge(false);
      } else {
        setError("");
        setValidAge(true);
        const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        setFormatDate(`${date.getFullYear()}-${month}-${day}`);
      }
      setValue(date);
    } else {
      setError("Field is required");
      setValidAge(false);
    }
  }

  return {
    value,
    onChange: handleChange,
    error,
    isValid,
    formatDate,
  };
}

function validDays(month, year) {
  switch (month) {
    case 1:
      return (year % 4 === 0 && year % 100) || year % 400 === 0 ? 29 : 28;
    case 8:
    case 3:
    case 5:
    case 10:
      return 30;
    default:
      return 31;
  }
}

function useGender() {
  const [value, setValue] = useState("");
  const [isValid, setValidGender] = useState(false);

  function handleChange(event) {
    if (event.target.value.length !== 0) {
      setValue(event.target.value);
      setValidGender(true);
    } else {
      setValidGender(false);
    }
  }

  return {
    value,
    handleChange,
    isValid,
  };
}

function useRegion() {
  const [value, setValue] = useState("");
  const [isValid, setValid] = useState(false);

  function handleChange(event, value) {
    if (value.length === 0) {
      setValid(false);
    } else {
      setValue(value);
      setValid(true);
    }
  }
  return {
    value,
    onChange: handleChange,
    isValid,
  };
}

function usePhone() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isValid, setValidPhone] = useState(false);

  function handleChange(value) {
    if (value.length === 12) {
      setValue(value);
      setValidPhone(true);
      setError("");
    } else {
      setError("Invalid phone number");
      setValidPhone(false);
    }
  }

  return {
    value,
    onChange: handleChange,
    isValid,
    error,
  };
}
