import { userConstants } from "../constants";
import { makeGet, makePost, makeDelete, logout } from "../../API/App";
import { history } from "../helpers";

const registerUser = user => dispatch => {
  dispatch({
    type: userConstants.REGISTER_REQUEST,
  });
  makePost("/api/v1/signup", {}, user)
    .then(data => {
      dispatch({ type: userConstants.REGISTER_SUCCESS });
      dispatch({ type: userConstants.LOGIN_SUCCESS });
      dispatch({ type: userConstants.GET_SUCCESS, user: data.user });
      history.push("/");
    })
    .catch(error => dispatch({ type: userConstants.REGISTER_FAILURE, error }));
};

const login = userCredentials => dispatch => {
  dispatch({ type: userConstants.LOGIN_REQUEST, userCredentials });
  makePost("/api/v1/login", {}, userCredentials, true)
    .then(data => {
      dispatch({ type: userConstants.LOGIN_SUCCESS });
      dispatch({ type: userConstants.GET_REQUEST });
      dispatch({ type: userConstants.GET_SUCCESS, user: data.user });
      history.push("/");
    })
    .catch(error => dispatch({ type: userConstants.LOGIN_FAILURE, error }));
};

const getUser = () => dispatch => {
  dispatch({
    type: userConstants.GET_REQUEST,
  });
  makeGet("/api/v1/signup")
    .then(data => {
      dispatch({ type: userConstants.GET_SUCCESS, user: data.user });
    })
    .catch(error => dispatch({ type: userConstants.GET_FAILURE, error }));
};

const updateUser = updatedUser => dispatch => {
  dispatch({ type: userConstants.UPDATE_REQUEST, payload: updatedUser.user });
  makePost(`/api/v1/user/edit/${updatedUser.id}`, {}, updatedUser.user, false)
    .then(data => {
      dispatch({ type: userConstants.UPDATE_SUCCESS });
    })
    .catch(error => dispatch({ type: userConstants.UPDATE_FAILURE, error }));
};

const logoutUser = () => dispatch => {
  dispatch({
    type: userConstants.LOGOUT_REQUEST,
    payload: false,
  });
  history.push("/signin");
  logout();
};

const deleteUser = user => dispatch => {
  dispatch({ type: userConstants.DELETE_REQUEST, user });
  makePost(`/api/v1/user/delete/${user.id}`, {}, user.user)
    .then(data => {
      dispatch({ type: userConstants.DELETE_SUCCESS, data });
      logout();
    })
    .catch(error => dispatch({ type: userConstants.DELETE_FAILURE, error }));
};

const getUserById = id => dispatch => {
  dispatch({
    type: userConstants.GET_REQUEST,
  });
  makePost(`/api/v1/user/${id}`, {}, {}, false)
    .then(data => {
      dispatch({ type: userConstants.GET_SUCCESS, user: data });
    })
    .catch(error => dispatch({ type: userConstants.GET_FAILURE, error }));
};

export { login, registerUser, updateUser, getUser, logoutUser, deleteUser, getUserById };
