import { userConstants } from "../constants";
const initialState = localStorage.getItem("token") ? { loggedIn: true } : {};

function userAuth(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return { loggingin: true };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loggedInError: action.error,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

export default userAuth;
