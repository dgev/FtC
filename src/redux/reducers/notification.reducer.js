import { ntfConstants } from "../constants";
const initialState = {
  notifications: [],
  loaded: false,
};

export default function controlNotification(state = initialState, action) {
  switch (action.type) {
    case ntfConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case ntfConstants.GET_SUCCESS:
      return {
        ...state,
        notifications: action.payload,
        loaded: true,
      };
    case ntfConstants.GET_FAILURE:
      return {
        ...state,
        getError: action.error,
        loaded: false,
      };
    case ntfConstants.SEND_REQUEST:
      return {
        ...state,
        sending: true,
      };
    case ntfConstants.SEND_SUCCESS:
      return {
        sent: true,
      };
    case ntfConstants.SEND_FAILURE:
      return {
        sent: false,
      };
    case ntfConstants.DELETE_REQUEST:
      return {
        ...state,
        deleting: true,
      };
    case ntfConstants.DELETE_SUCCESS:
      return {
        ...action.notifications,
        deleted: true,
      };
    case ntfConstants.DELETE_FAILURE:
      return {
        ...state,
        deleteError: action.error,
        deleted: false,
      };
    default:
      return {
        ...state,
      };
  }
}
