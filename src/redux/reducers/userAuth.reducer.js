import { userConstants } from "../constants";

const initialState = { logginin: false };

function userAuth(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_USER:
      return {};
    case userConstants.LOGIN_USER:
      return { logginin: true };
    default:
      return state;
  }
}

export default userAuth;
