import { mobileConstants } from '../constants';

export const mobileDropdown = status => {
  return {
    type: mobileConstants.GET_STATE,
    status,
  };
};
