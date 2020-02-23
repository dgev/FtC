import { userConstants } from "../constants";
import { makeGet, makePost, makeDelete, logout } from "API/App";
import { history } from "../helpers";

const registerUser = user => dispatch => {
  dispatch({
    type: userConstants.REGISTER_REQUEST,
    // user,
  });
  makePost("/api/v1/signup", {}, user)
    .then(data => {
      dispatch({ type: userConstants.REGISTER_SUCCESS });
      dispatch({ type: userConstants.LOGIN_SUCCESS });
      dispatch({ type: userConstants.GET_REQUEST, user: data.user });
      history.push("/");
    })
    .catch(e => dispatch({ type: userConstants.REGISTER_FAILURE, e }));
};

const login = userCredentials => dispatch => {
  dispatch({ type: userConstants.LOGIN_REQUEST, userCredentials });
  makePost("/api/v1/login", {}, userCredentials)
    .then(data => {
      dispatch({ type: userConstants.LOGIN_SUCCESS });
      dispatch({ type: userConstants.GET_REQUEST, user: data.user });
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

const logoutUser = () => dispatch => {
  logout();
  dispatch({
    type: userConstants.LOGOUT_REQUEST,
  });
};

const deleteUser = user => dispatch => {
  dispatch({ type: userConstants.DELETE_REQUEST, user });
  makeDelete("/api/v1/delete", {}, user)
    .then(data => {
      dispatch({ type: userConstants.DELETE_SUCCESS, data });
      logoutUser();
      history.push("/");
    })
    .catch(e => dispatch({ type: userConstants.DELETE_FAILURE, user, e }));
};

export { login, registerUser, updateUser, getUser, logoutUser, deleteUser };
