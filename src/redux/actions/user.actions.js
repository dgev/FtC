import { userConstants } from "../constants";
import { makeGet, makePost } from "API/App";

const registerUser = user => dispatch => {
  dispatch({
    type: userConstants.REGISTER_REQUEST,
  });
  makePost("/api/v1/signup", {}, user)
    .then(user => dispatch({ type: userConstants.LOGIN_REQUEST, user }))
    .catch(e => console.error(e));
};

const login = userCredentials => dispatch => {
  dispatch({ type: userConstants.LOGIN_REQUEST, userCredentials });
  makePost("/api/v1/login", {}, userCredentials)
    .then(user => dispatch({ type: userConstants.GET_REQUEST, user }))

    .catch(e => console.error(e));
};

const updateUser = updatedUser => {
  return { type: userConstants.UPDATE_REQUEST, updatedUser };
};

// const updateUser = updatedUser => dispatch => {
//   dispatch({ type: userConstants.UPDATE_REQUEST, updatedUser });
//   // makePost("/api/v1/login", {}, updateUser)
//   //   .then(user => dispatch({ type: userConstants.GET_REQUEST, user }))

//   //   .catch(e => console.error(e));
// };

export { login, registerUser, updateUser };
