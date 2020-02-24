import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TermsandConditionsText from './TermsandConditionsText';

export default function TermsConditions(props){

      
        return (
          <div>
            <Dialog
              open={props.open}
              onClose={()=>props.handleClick(false)}
              aria-labelledby="title"
            >
              <DialogTitle id="title">{"Terms and Conditions for Smart Farm FTC"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                 <TermsandConditionsText/>
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={()=>props.handleClick(false)} color='#388E3C' autoFocus>
                 Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
