import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { useDispatch } from "react-redux";
import { deleteProduct } from "redux/actions";

const useStyles = {
  width: "100%",
  maxWidth: "360",
};

export default function ProductList(props) {
  const dispatch = useDispatch();
  return (
    <List style={useStyles}>
      <ListItem key={props.id} dense button>
        <ListItemText primary={props.description} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={e => {
              e.preventDefault();
              dispatch(deleteProduct(props.id));
            }}
          >
            <Icon>delete</Icon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
