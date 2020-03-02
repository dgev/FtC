import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { orange } from "@material-ui/core/colors";
import { submittedRequest } from "redux/actions/notification/notification.action";

export default function FarmerInfo(props) {
  const dispatch = useDispatch();
  const submitted = useSelector(state => state.controlNotification.submitted);
  useEffect(() => {
    if (props.open) {
      dispatch(submittedRequest(props.id));
    }
  }, [props.open]);

  const user = useSelector(state => state.controlNotification.submittedUser);

  return (
    <div>
      {submitted ? (
        <Dialog open={props.open} onClose={() => props.handleClick(false)} aria-labelledby="title">
          <DialogTitle id="title">{"Farmer Details"}</DialogTitle>
          <DialogContent>{`${user.sender.firstName} ${user.sender.lastName} is responsible for this request. Contact number is: ${user.sender.phoneNumber}`}</DialogContent>
          <DialogActions>
            <Button
              onClick={() => props.handleClick(false)}
              style={{ color: orange[500] }}
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <ReactLoading />
      )}
    </div>
  );
}
