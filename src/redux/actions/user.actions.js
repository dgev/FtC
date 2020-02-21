import { userConstants } from "../constants";

export const registerUser = user => {
  return {
    type: userConstants.GET_USER,
    user,
  };
};
