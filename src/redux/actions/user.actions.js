import { userConstants } from "../constants";
import { makeGet, makePost } from "API/App";
import { history } from "../helpers";

const registerUser = user => dispatch => {
  dispatch({
    type: userConstants.REGISTER_REQUEST,
    // user,
  });
  makePost("/api/v1/signup", {}, user)
    .then(data => {
      dispatch({ type: userConstants.REGISTER_SUCCESS, payload: data.user });
      dispatch({ type: userConstants.LOGIN_SUCCESS, user: data.user });
      history.push("/");
    })
    .catch(e => dispatch({ type: userConstants.REGISTER_FAILURE, e }));
};

const login = userCredentials => dispatch => {
  dispatch({ type: userConstants.LOGIN_REQUEST, userCredentials });
  makePost("/api/v1/login", {}, userCredentials)
    .then(data => {
      dispatch({ type: userConstants.LOGIN_SUCCESS, user: data.user });
      history.push("/");
    })

    .catch(e => dispatch({ type: userConstants.LOGIN_FAILURE, e }));
};

const getUser = () => dispatch => {
  dispatch({
    type: userConstants.GET_REQUEST,
  });
  makeGet("/api/v1/signup")
    .then(data => {
      dispatch({ type: userConstants.GET_SUCCESS, user: data.user });
    })
    .catch(e => dispatch({ type: userConstants.GET_FAILURE, e }));
};

const updateUser = updatedUser => {
  return { type: userConstants.UPDATE_REQUEST, payload: updatedUser };
};

// const updateUser = updatedUser => dispatch => {
//   dispatch({ type: userConstants.UPDATE_REQUEST, updatedUser });
//   // makePost("/api/v1/login", {}, updateUser)
//   //   .then(user => dispatch({ type: userConstants.GET_REQUEST, user }))

//   //   .catch(e => console.error(e));
// };

export { login, registerUser, updateUser, getUser };
