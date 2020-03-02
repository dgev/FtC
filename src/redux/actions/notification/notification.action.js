import { ntfConstants } from "redux/constants";
import { makeGet, makePost, makePut, makeDelete } from "API/App";

const sendNotif = notif => dispatch => {
  dispatch({
    type: ntfConstants.SEND_REQUEST,
  });
  makePost("/api/v1/notification", {}, notif)
    .then(data => {
      dispatch({ type: ntfConstants.SEND_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: ntfConstants.SEND_FAILURE, error }));
};

const getNotif = url => dispatch => {
  dispatch({ type: ntfConstants.GET_REQUEST });
  makeGet(`/api/v1/notification/${url}`, {})
    .then(data => {
      dispatch({ type: ntfConstants.GET_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: ntfConstants.GET_FAILURE, error }));
};

const notificationStatus = (status, id) => dispatch => {
  dispatch({ type: ntfConstants.STATUS_REQUEST });
  makePut(`/api/v1/notification/${id}`, {}, status)
    .then(data => {
      dispatch({ type: ntfConstants.STATUS_SUCCESS });
    })
    .catch(error => dispatch({ type: ntfConstants.STATUS_FAILURE, error }));
};

const submittedRequest = id => dispatch => {
  dispatch({ type: ntfConstants.USER_REQUEST });
  makeGet(`/api/v1/notification/${id}`, {})
    .then(data => {
      dispatch({ type: ntfConstants.USER_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: ntfConstants.USER_FAILURE, error }));
};

const deleteNotif = id => dispatch => {
  dispatch({ type: ntfConstants.DELETE_REQUEST });
  makeDelete(`/api/v1/notification/${id}`, {})
    .then(data => {
      dispatch({ type: ntfConstants.DELETE_SUCCESS });
    })
    .catch(error => dispatch({ type: ntfConstants.DELETE_FAILURE, error }));
};
export { sendNotif, getNotif, notificationStatus, deleteNotif, submittedRequest };
