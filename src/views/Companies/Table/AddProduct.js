import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles, theme } from "./AddProductCss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { yellow } from "@material-ui/core/colors";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/actions";
import { editProduct } from "redux/actions";
import { products } from "./products";

export default function AddProduct(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [productId, setProductId] = useState(0);
  const handleChange = event => {
    setProductId(products.indexOf(event.target.value));
  };
  const description = useParam("");
  const amount = useParam(null);
  const price = useParam(null);

  function handleSubmit() {
    if (props.type === "add") {
      dispatch(
        addProduct({
          userId: localStorage.getItem("id"),
          productId: productId,
          description: description.value,
          amount: amount.value,
          quantity: price.value,
        })
      );
    } else if (props.type === "edit") {
      console.log(description.value);

      dispatch(
        editProduct({
          id: props.id,
          userId: localStorage.getItem("id"),
          description: description.value,
          amount: amount.value,
          quantity: price.value,
        })
      );
    }
    description.onChange("");
    amount.onChange(null);
    price.onChange(null);
    props.handleClick(!props.open);
  }
  return (
    <div>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Dialog
                  open={props.open}
                  onClose={() => props.handleClick(!props.open)}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">{props.action} Product</DialogTitle>
                  <DialogContent>
                    {props.type === "add" ? (
                      <TextField
                        id="outlined-select-currency-native"
                        select
                        label=""
                        onChange={handleChange}
                        SelectProps={{
                          native: true,
                        }}
                        helperText="Please select your product"
                        variant="outlined"
                        className={classes.submit}
                      >
                        {products.map((option, i) => (
                          <option key={i}>{option}</option>
                        ))}
                      </TextField>
                    ) : null}
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows="4"
                      maxLength="4"
                      defaultValue=""
                      variant="outlined"
                      fullWidth
                      className={classes.submit}
                      onChange={description.onChange}
                      inputProps={{ maxLength: 30 }}
                    />
                    <TextField
                      id="outlined-basic"
                      type="number"
                      label="Amount Needed in kg"
                      variant="outlined"
                      inputProps={{ min: "0" }}
                      className={classes.submit}
                      onChange={amount.onChange}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Price in AMD"
                      type="number"
                      variant="outlined"
                      inputProps={{ min: "10", step: "10" }}
                      className={classes.submit}
                      onChange={price.onChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleSubmit} style={{ color: yellow[600] }}>
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </form>
          </div>
        </MuiThemeProvider>
      </Container>
    </div>
  );
}

function useParam(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    if (!e) {
      setValue(e);
    } else {
      setValue(e.target.value);
    }
  }

  return {
    value,
    onChange: handleChange,
  };
}
