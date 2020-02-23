import { userConstants } from "../_constants";
const initialState = {};

function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

export default registration;
