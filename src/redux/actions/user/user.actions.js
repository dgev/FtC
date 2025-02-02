import { userConstants } from "redux/constants";
import { makeGet, makePost, makeDelete, makePut, logout } from "API/App";
import { history } from "redux/helpers";

const registerUser = user => dispatch => {
  dispatch({
    type: userConstants.REGISTER_REQUEST,
  });
  makePost("/api/v1/signup", {}, user, true)
    .then(data => {
      dispatch({ type: userConstants.REGISTER_SUCCESS });
      dispatch({ type: userConstants.LOGIN_SUCCESS });
      dispatch({ type: userConstants.GET_SUCCESS, payload: data.user });
      history.push("/");
    })
    .catch(error => dispatch({ type: userConstants.REGISTER_FAILURE, error }));
};

const login = userCredentials => dispatch => {
  dispatch({ type: userConstants.LOGIN_REQUEST, userCredentials });
  makePost("/api/v1/login", {}, userCredentials, true)
    .then(data => {
      dispatch({ type: userConstants.LOGIN_SUCCESS, payload: data.user });
      dispatch({ type: userConstants.GET_REQUEST });
      dispatch({ type: userConstants.GET_SUCCESS, payload: data.user });
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
      dispatch({ type: userConstants.GET_SUCCESS, payload: data.user });
    })
    .catch(error => dispatch({ type: userConstants.GET_FAILURE, error }));
};

const updateUser = updatedUser => dispatch => {
  dispatch({ type: userConstants.UPDATE_REQUEST });
  makePut(`/api/v1/user/${updatedUser.id}`, {}, updatedUser.user, false)
    .then(data => {
      dispatch({ type: userConstants.UPDATE_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: userConstants.UPDATE_FAILURE, payload: "UNAUTHORIZED" });
    });
  return { error: "UNAUTHORIZED" };
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
  makeDelete(`/api/v1/user/${user.id}`, {}, user.user)
    .then(data => {
      dispatch({ type: userConstants.DELETE_SUCCESS, data });
      logout();
    })
    .catch(error => dispatch({ type: userConstants.DELETE_FAILURE, payload: "UNAUTHORIZED" }));
  return { error: "UNAUTHORIZED" };
};

const getRegisteredUser = () => dispatch => {
  dispatch({
    type: userConstants.GET_REQUEST,
  });
  makeGet(`/api/v1/user`, {}, {}, false)
    .then(data => {
      dispatch({ type: userConstants.GET_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: userConstants.GET_FAILURE, error }));
};

const reset = (id, user) => dispatch => {
  dispatch({ type: userConstants.RESET_REQUEST });
  makePut(`/api/v1/user/reset/${id}`, {}, user)
    .then(data => {
      dispatch({ type: userConstants.RESET_SUCCESS, payload: data });
      history.push("/");
    })
    .catch(error => dispatch({ type: userConstants.RESET_FAILURE, error }));
};

export {
  login,
  registerUser,
  updateUser,
  getUser,
  logoutUser,
  deleteUser,
  getRegisteredUser,
  reset,
};
