import { userConstants } from "../constants";

const initialState = {};

function userAuth(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_USER:
      return { loggingin: true };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

export default userAuth;
