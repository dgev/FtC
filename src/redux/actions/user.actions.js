import { userConstants } from '../constants';

export const registerUser = (
  email,
  phoneNumber,
  firstName,
  lastName,
  birthDate,
  gender,
  region,
  company
) => {
  return {
    type: userConstants.GER_USER,
    email,
    phoneNumber,
    firstName,
    lastName,
    birthDate,
    gender,
    region,
    company,
  };
};
