import { ntfConstants } from "redux/constants";
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
        loaded: false,
      };
    case ntfConstants.SEND_SUCCESS:
      return {
        sent: true,
        loaded: false,
      };
    case ntfConstants.SEND_FAILURE:
      return {
        sent: false,
        loaded: false,
      };
    case ntfConstants.STATUS_REQUEST:
      return {
        ...state,
        changing: true,
        loaded: false,
      };
    case ntfConstants.STATUS_SUCCESS:
      return {
        ...state,
        changed: true,
        loaded: false,
      };
    case ntfConstants.STATUS_FAILURE:
      return {
        ...state,
        StatusError: action.error,
        changed: false,
        loaded: false,
      };
    case ntfConstants.USER_REQUEST:
      return {
        ...state,
        submitting: true,
        loaded: false,
      };
    case ntfConstants.USER_SUCCESS:
      console.log(action.payload);

      return {
        ...state,
        submittedUser: action.payload,
        submitted: true,
        loaded: false,
      };
    case ntfConstants.USER_FAILURE:
      return {
        ...state,
        StatusError: action.error,
        submitted: false,
        loaded: false,
      };
    case ntfConstants.DELETE_REQUEST:
      return {
        ...state,
        deleting: true,
        loaded: false,
      };
    case ntfConstants.DELETE_SUCCESS:
      return {
        ...state,
        deleted: true,
        loaded: false,
      };
    case ntfConstants.DELETE_FAILURE:
      return {
        ...state,
        deleteError: action.error,
        deleted: false,
        loaded: false,
      };
    default:
      return {
        ...state,
      };
  }
}
