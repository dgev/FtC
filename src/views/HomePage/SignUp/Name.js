import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { makePost } from 'API/App';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from 'redux/actions';

export default function Name(props) {
  // const name = useName();
  // const n = useSelector(state => state);

  // const surname = useName();
  // const dispatch = useDispatch();
  // function makeCall() {
  //   // makePost('localhost:3000/users/a', {}, { name: name, surname: surname });
  //   // console.log(n);
  // }
  // useEffect(() => {
  //   dispatch(registerUser(name.value));
  //   return () => {
  //     {
  //     }
  //   };
  // }, [name]);
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          label="First Name"
          helperText={props.name.isValid ? null : props.name.error}
          onChange={props.name.onChange}
          error={!props.name.isValid}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Last Name"
          helperText={props.surname.isValid ? null : props.surname.error}
          onChange={props.surname.onChange}
          error={!props.surname.isValid}
        />
      </Grid>
      {/* <Button onClick={makeCall}>submit</Button> */}
    </React.Fragment>
  );
}
// function useName() {
//   const [name, setName] = useState('');
//   const [isValid, setValidName] = useState(true);
//   const [error, setError] = useState('');
//   function handleChange(event) {
//     if (event.target.value.match(/^[a-zA-Z ]{2,30}$/) && event.target.value.length > 0) {
//       setName(event.target.value);
//       setValidName(true);
//     } else {
//       setValidName(false);
//       setError(
//         event.target.value.trim() === '' ? 'This field should not be empty' : 'Invalid Surname'
//       );
//     }
//   }
//   return {
//     value: name,
//     onChange: handleChange,
//     isValid: isValid,
//     error: error,
//   };
// }
