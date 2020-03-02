import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/actions";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Region from "../Region";
import "date-fns";
import Footer from "views/HomePage/Footer/Footer";
import Name from "../Name";
import Gender from "../Gender";
import Birthdate from "../Birthdate";
import Phone from "../Phone";
import Company from "../Company";
import EmailPassword from "../EmailPassword";
import FormFooter from "../FormFooter";
import { useStyles, theme } from "views/HomePage/Register/SignUp/style/SignUpCss";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { validate as validateEmail } from "email-validator";

let passwordValidator = require("password-validator");

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const name = useName();
  const surname = useName();
  const email = useEmail();
  const password = usePassword();
  const repeatPassword = useRepeatedPassword(password);
  const gender = useGender();
  const isCompany = useSwitch();
  const companyName = useCompany();
  const date = useDate();
  const phone = usePhone();
  const checked = useChecked();
  const region = useRegion();
  const [register, setRegister] = useState(true);

  const user = {
    username: email.value,
    phoneNumber: phone.value,
    firstName: name.value,
    lastName: surname.value,
    birthDate: date.formatDate,
    gender: gender.value.toUpperCase(),
    region: region.value.replace(" ", "").toUpperCase(),
    isCompany: isCompany.value,
    password: password.value,
    companyName: companyName.value,
  };

  function handleSubmit() {
    if (validate()) {
      dispatch(registerUser(user));
    } else {
      setRegister(false);
    }
  }

  function validate() {
    return (
      name.isValid &&
      surname.isValid &&
      email.isValidEmail &&
      repeatPassword.passwordMatches &&
      password.isValidPassword &&
      date.isValid &&
      (isCompany.value ? companyName.isValid : true) &&
      region.isValid &&
      gender.isValid
    );
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Name name={name} surname={surname} canRegister={register} />
              <Gender {...gender} canRegister={register} />
              <Birthdate {...date} canRegister={register} />
              <Region {...region} canRegister={register} />
              <Phone {...phone} canRegister={register} />
              <Company
                companyName={companyName}
                isCompany={isCompany.value}
                onChange={isCompany.onChange}
                canRegister={register}
              />
              <EmailPassword {...email} {...password} {...repeatPassword} canRegister={register} />
            </Grid>
            <FormFooter handleSubmit={handleSubmit} {...checked} />
          </form>
        </div>
        <Box mt={5}>
          <Footer />
        </Box>
      </MuiThemeProvider>
    </Container>
  );
}

function useName() {
  const [value, setValue] = useState("");
  const [isValid, setValidName] = useState(false);
  const [error, setError] = useState("Field is required");

  function handleChange(event) {
    if (event.target.value.match(/^[a-zA-Z ]{2,30}$/) && event.target.value.length > 0) {
      setValue(event.target.value);
      setValidName(true);
    } else {
      setValidName(false);
      setError(event.target.value.trim() === "" ? "Field is required" : "Invalid Input");
    }
  }

  return {
    value,
    onChange: handleChange,
    isValid,
    error,
  };
}

function useEmail() {
  const [value, setValue] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [emailError, setError] = useState("Field is required");

  function handleEmailChange(event) {
    let user = event.target.value;
    if (user === "") {
      setError("Please enter your email!\n");
      setValidEmail(false);
    } else if (!validateEmail(user)) {
      setError("Invalid email!");
      setValidEmail(false);
    } else {
      setValue(user);
      setValidEmail(true);
    }
  }

  return {
    value,
    handleEmailChange,
    isValidEmail,
    emailError,
  };
}

function usePassword() {
  const [value, setValue] = useState("");
  const [isValidPassword, setValidPassword] = useState(false);
  const [passwordError, setError] = useState("Field is required");

  function handlePasswordChange(event) {
    let schema = new passwordValidator();
    schema
      .is()
      .min(8)
      .is()
      .max(40)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits()
      .has()
      .not()
      .spaces()
      .is()
      .not()
      .oneOf(["Passw0rd", "Password123"]);

    if (schema.validate(event.target.value)) {
      setValidPassword(true);
    } else {
      switch (schema.validate(event.target.value, { list: true })[0]) {
        case "min":
          setError("Password must contain at least 8 characters!");
          break;
        case "max":
          setError("Password must contain at most 150 characters!");
          break;
        case "spaces":
          setError("Password cannot contain spaces!");
          break;
        case "digits":
          setError("Password must contain at least one number!");
          break;
        case "lowercase":
          setError("Password must contain at least one lowercase letter!");
          break;
        case "uppercase":
          setError("Password must contain at least one uppercase letter!");
          break;
        default:
          setError("Please enter a valid password");
      }
      setValidPassword(false);
    }
    setValue(event.target.value);
  }

  return {
    value,
    handlePasswordChange,
    isValidPassword,
    passwordError,
  };
}

function useRepeatedPassword(password) {
  const [passwordMatches, setMatchedPassword] = useState(false);
  const [error, setError] = useState("Field is required");

  function handleRepeatedPassword(event) {
    if (event.target.value === password.value) {
      setMatchedPassword(true);
    } else {
      setMatchedPassword(false);
      setError("Passwords do not match");
    }
  }

  return {
    passwordMatches,
    handleRepeatedPassword,
    error,
  };
}

function useGender() {
  const [value, setValue] = useState("");
  const [isValid, setValidGender] = useState(false);
  const [error, setError] = useState("Field is required");

  function handleChange(event) {
    if (event.target.value.length !== 0) {
      setValue(event.target.value);
      setValidGender(true);
    } else {
      setValidGender(false);
      setError("Field is required");
    }
  }

  return {
    value,
    handleChange,
    isValid,
    error,
  };
}

function useCompany() {
  const [value, setValue] = useState("");
  const [isValid, setValidName] = useState(false);
  const [error, setError] = useState("Field is required");

  function handleChange(event) {
    let company = event.target.value;
    if (company.trim() === "") {
      setError("This field should not be empty!");
      setValidName(false);
    } else {
      setValue(company);
      setValidName(true);
    }
  }

  return {
    value,
    onChange: handleChange,
    isValid,
    error,
  };
}

function useSwitch() {
  const [value, setValue] = useState(false);

  function handleChange(event) {
    setValue(event.target.checked);
  }

  return {
    value,
    onChange: handleChange,
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

function usePhone() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("Field is required");
  const [isValid, setValidPhone] = useState(false);

  function handleChange(value) {
    if (value.length === 12) {
      setValue(value);
      setValidPhone(true);
    } else {
      setError(value.length === 0 ? "Field is required" : "Invalid phone number");
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

function useChecked() {
  const [isChecked, setChecked] = useState(false);

  function handleChange(event) {
    setChecked(event.target.checked);
  }

  return {
    isChecked,
    onChange: handleChange,
  };
}

function useRegion() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("Field is required");
  const [isValid, setValid] = useState(false);

  function handleChange(event, value) {
    if (value.length === 0) {
      setError("Field is required");
      setValid(false);
    } else {
      setValue(value);
      setValid(true);
      setError("");
    }
  }
  return {
    value,
    onChange: handleChange,
    error,
    isValid,
  };
}
