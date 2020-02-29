import { ntfConstants } from "../constants";
import { makeGet, makePost } from "../../API/App";

const sendNotif = notif => dispatch => {
  console.log(notif);

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

export { sendNotif, getNotif };
