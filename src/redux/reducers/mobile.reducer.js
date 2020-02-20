import { mobileConstants } from '../constants';

const initialState = {
  status: false,
};

function mobileStatus(state = initialState, action) {
  switch (action.type) {
    case mobileConstants.GET_MOBILE_STATE:
      return {
        status: action.status,
      };
    default:
      return state;
  }
}

export default mobileStatus;
