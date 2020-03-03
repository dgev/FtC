import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles, theme } from "../AddProduct/style/AddProductCss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { yellow } from "@material-ui/core/colors";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "redux/actions/product/product.actions";
import { products } from "../Company/products/products";

export default function AddProduct(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [productId, setProductId] = useState(0);

  const handleChange = event => {
    setProductId(products.indexOf(event.target.value) + 1);
  };

  const user = useSelector(state => state.userData);
  const description = useText("");
  const amount = useParam(null);
  const price = useParam(null);
  const [canSubmit, setSubmit] = useState(true);

  function handleSubmit() {
    if (description.isValid && amount.isValid && price.isValid) {
      if (props.type === "add") {
        dispatch(
          addProduct({
            userId: user.id,
            productId: productId,
            description: description.value,
            amount: amount.value,
            quantity: price.value,
          })
        );
      } else if (props.type === "edit") {
        dispatch(
          editProduct(
            {
              userId: user.id,
              description: description.value,
              amount: amount.value,
              quantity: price.value,
            },
            props.id
          )
        );
      }
      setSubmit(true);
      description.onChange("");
      amount.onChange(null);
      price.onChange(null);
      props.handleClick(!props.open);
    } else {
      setSubmit(false);
    }
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
                      error={!description.isValid && !canSubmit}
                      helperText={!description.isValid && !canSubmit ? "Invalid Input" : null}
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
                      error={!amount.isValid && !canSubmit}
                      helperText={!amount.isValid && !canSubmit ? "Invalid Input" : null}
                      onChange={amount.onChange}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Price in AMD"
                      type="number"
                      variant="outlined"
                      inputProps={{ min: "10", step: "10" }}
                      error={!price.isValid && !canSubmit}
                      helperText={!price.isValid && !canSubmit ? "Invalid Input" : null}
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

function useText(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setValid] = useState(false);
  function handleChange(e) {
    if (!e || !/[a-zA-Z]/.test(e.target.value)) {
      setValue("");
      setValid(false);
    } else {
      setValue(e.target.value);
      setValid(true);
    }
  }

  return {
    value,
    onChange: handleChange,
    isValid,
  };
}

function useParam(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setValid] = useState(false);
  function handleChange(e) {
    if (!e || e.target.value <= 0) {
      setValue(e);
      setValid(false);
    } else {
      setValue(e.target.value);
      setValid(true);
    }
  }

  return {
    value,
    onChange: handleChange,
    isValid,
  };
}
