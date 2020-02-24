import { userConstants } from "../constants";
import { makeGet, makePost, makeDelete, logout } from "API/App";
import { history } from "../helpers";

const registerUser = user => dispatch => {
  dispatch({
    type: userConstants.REGISTER_REQUEST,
  });
  makePost("/api/v1/signup", {}, user)
    .then(data => {
      dispatch({ type: userConstants.REGISTER_SUCCESS });
      dispatch({ type: userConstants.LOGIN_SUCCESS });
      dispatch({ type: userConstants.GET_REQUEST, user: data.user });
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

const updateUser = updatedUser => {
  return { type: userConstants.UPDATE_REQUEST, payload: updatedUser };
};

const logoutUser = () => dispatch => {
  logout();
  dispatch({
    type: userConstants.LOGOUT_REQUEST,
  });
};

// const deleteUser = user => dispatch => {
//   console.log(user.user);

//   dispatch({ type: userConstants.DELETE_REQUEST, user });
//   makePost(`/api/v1/user/delete/${user.id}`, {}, user.user)
//     .then(data => {
//       dispatch({ type: userConstants.DELETE_SUCCESS, data });
//       logoutUser();
//       history.push("/");
//     })
//     .catch(error => dispatch({ type: userConstants.DELETE_FAILURE, error }));
// };

const deleteUser = userCredentials => dispatch => {
  dispatch({ type: userConstants.DELETE_REQUEST, userCredentials });
  makePost("/api/v1/user/delete/" + userCredentials.id, {}, userCredentials.user)
    .then(data => {
      dispatch({ type: userConstants.DELETE_SUCCESS, data });
      history.push("/");
    })
    .catch(error => dispatch({ type: userConstants.DELETE_FAILURE, error }));
};

const getUserById = id => dispatch => {
  dispatch({
    type: userConstants.GET_REQUEST,
  });
  makeGet(`/api/v1/user/${id}`)
    .then(data => {
      dispatch({ type: userConstants.GET_SUCCESS, user: data });
    })
    .catch(error => dispatch({ type: userConstants.GET_FAILURE, error }));
};

export { login, registerUser, updateUser, getUser, logoutUser, deleteUser, getUserById };
