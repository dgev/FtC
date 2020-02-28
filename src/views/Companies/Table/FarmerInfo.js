import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { orange } from "@material-ui/core/colors";

export default function FarmerInfo(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={() => props.handleClick(false)} aria-labelledby="title">
        <DialogTitle id="title">{"Farmer Details"}</DialogTitle>
        <DialogContent>Hello :)</DialogContent>
        <DialogActions>
          <Button onClick={() => props.handleClick(false)} style={{ color: orange[500] }} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
