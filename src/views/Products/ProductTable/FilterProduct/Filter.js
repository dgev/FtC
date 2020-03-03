import React from "react";
import { useDispatch } from "react-redux";
import {
  getProductById,
  getMyProductById,
  getAllProducts,
  paging,
} from "redux/actions/product/product.actions";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import { products } from "views/Products/ProductTable/Company/products/products";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  color: {
    color: "#4CAF50",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#9CCC65" },
  },
});

export default function DialogSelect(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState("All");

  const handleChange = event => {
    setProduct(event.target.value || "All");
  };

  function handleSubmit() {
    dispatch(paging(0));
    if (product === "All") {
      dispatch(getAllProducts());
    } else {
      props.hasCompany
        ? dispatch(getMyProductById(products.indexOf(product) + 1, props.id))
        : dispatch(getProductById(products.indexOf(product) + 1));
    }
    props.handleClick();
  }

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={props.open}
          onClose={props.handleClick}
        >
          <DialogTitle>Select the product</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-dialog-native">Product</InputLabel>
                <Select value={product} onChange={handleChange} input={<Input />}>
                  <MenuItem key={0} value={"All"}>
                    All
                  </MenuItem>
                  {products.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClick} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
}
