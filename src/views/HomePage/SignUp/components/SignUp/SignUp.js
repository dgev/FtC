import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/actions';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Region from '../Region';
import 'date-fns';
import Footer from 'views/HomePage/Footer/Footer';
import Name from '../Name';
import Gender from '../Gender';
import Birthdate from '../Birthdate';
import Phone from '../Phone';
import Company from '../Company';
import EmailPassword from '../EmailPassword';
import FormFooter from '../FormFooter';
import { useStyles, theme } from 'views/HomePage/SignUp/style';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { validate as validateEmail } from 'email-validator';
let passwordValidator = require('password-validator');

export default function SignUp() {
  const classes = useStyles();

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

  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(
      registerUser(
        email.value,
        phone.value,
        name.value,
        surname.value,
        date.value,
        gender.value,
        'Yerevan',
        companyName.value
      )
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
              <Name name={name} surname={surname} />
              <Gender gender={gender} />
              <Birthdate date={date} />
              <Region />
              <Phone phone={phone} />
              <Company companyName={companyName} isCompany={isCompany} />
              <EmailPassword email={email} password={password} repeatPassword={repeatPassword} />
            </Grid>
            <FormFooter
              handleSubmit={handleSubmit}
              onChange={checked.onChange}
              isChecked={!checked.isChecked}
            />
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
  const [name, setName] = useState('');
  const [isValid, setValidName] = useState(true);
  const [error, setError] = useState('');
  function handleChange(event) {
    if (event.target.value.match(/^[a-zA-Z ]{2,30}$/) && event.target.value.length > 0) {
      setName(event.target.value);
      setValidName(true);
    } else {
      setValidName(false);
      setError(
        event.target.value.trim() === '' ? 'This field should not be empty' : 'Invalid Surname'
      );
    }
  }
  return {
    value: name,
    onChange: handleChange,
    isValid: isValid,
    error: error,
  };
}

function useEmail() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setValidEmail] = useState(true);
  const [error, setError] = useState('');

  function handleEmailChange(event) {
    let user = event.target.value;
    if (user === '') {
      setError('Please enter your email!\n');
      setValidEmail(false);
    } else if (!validateEmail(user)) {
      setError('Invalid email!');
      setValidEmail(false);
    } else {
      setEmail(user);
      setValidEmail(true);
    }
  }
  return {
    value: email,
    onChange: handleEmailChange,
    isValid: isValidEmail,
    error: error,
  };
}

function usePassword() {
  const [password, setPassword] = useState('');
  const [isValidPassword, setValidPassword] = useState(true);
  const [error, setError] = useState('');

  function handlePasswordChange(event) {
    let schema = new passwordValidator();
    schema
      .is()
      .min(8)
      .is()
      .max(150)
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
      .oneOf(['Passw0rd', 'Password123']);

    if (schema.validate(event.target.value)) {
      setPassword(event.target.value);
      setValidPassword(true);
    } else {
      switch (schema.validate(event.target.value, { list: true })[0]) {
        case 'min':
          setError('Password must contain at least 8 characters!');
          break;
        case 'max':
          setError('Password must contain at most 150 characters!');
          break;
        case 'spaces':
          setError('Password cannot contain spaces!');
          break;
        case 'digits':
          setError('Password must contain at least one number!');
          break;
        case 'lowercase':
          setError('Password must contain at least one lowercase letter!');
          break;
        case 'uppercase':
          setError('Password must contain at least one uppercase letter!');
          break;
        default:
          setError('Please enter a valid password');
      }
      setValidPassword(false);
    }
  }
  return {
    value: password,
    onChange: handlePasswordChange,
    isValid: isValidPassword,
    error: error,
  };
}

function useRepeatedPassword(password) {
  const [isValid, setValidPassword] = useState(true);
  function handleChange(event) {
    if (event.target.value === password.value) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }
  return {
    isValid: isValid,
    onChange: handleChange,
  };
}

function useGender() {
  const [gender, setGender] = useState('');
  function handleChange(event) {
    setGender(event.target.value);
  }
  return {
    value: gender,
    onChange: handleChange,
  };
}

function useCompany() {
  const [company, setCompany] = useState('');
  const [isValidName, setValidName] = useState(true);
  const [error, setError] = useState('');

  function handleChange(event) {
    let company = event.target.value;
    if (company.trim() === '') {
      setError('This field should not be empty!');
      setValidName(false);
    } else {
      setCompany(company);
      setValidName(true);
    }
  }
  return {
    value: company,
    onChange: handleChange,
    isValid: isValidName,
    error: error,
  };
}

function useSwitch() {
  const [checked, setChecked] = useState(false);
  function handleChange(event) {
    setChecked(event.target.checked);
  }
  return {
    checked: checked,
    onChange: handleChange,
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

function usePhone() {
  const [phone, setPhone] = useState('');
  function handleChange(value) {
    setPhone(value);
  }
  return {
    value: phone,
    onChange: handleChange,
  };
}

function useChecked() {
  const [checked, setChecked] = useState(false);
  function handleChange(event) {
    setChecked(event.target.checked);
  }
  return {
    isChecked: checked,
    onChange: handleChange,
  };
}
