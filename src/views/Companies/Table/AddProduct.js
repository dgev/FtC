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

const products = [
  "apple",
  "apricot",
  "peach",
  "plum",
  "fig",
  "pear",
  "pomegranate",
  "quince",
  "table white grapes",
  "table black grapes",
  "wine black grapes",
  "wine white grapes",
  "tomato",
  "cucumber",
  "potato",
  "eggplant",
  "squash",
  "bell pepper",
  "garlic",
  "onion",
  "wheat",
  "barley",
  "mushroom",
  "strawberry",
  "raspberry",
  "cherry",
  "redcurrant",
  "blackcurrant",
  "walnut",
  "hazelnut",
];

export default function AddProduct(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const handleChange = event => {
    setProduct(event.target.value);
  };

  function handleSubmit() {
    if (props.type === "add") {
      dispatch(
        addProduct({
          userId: localStorage.getItem("id"),
          productId: "1",
          description: product,
          amount: 5,
          quantity: 3,
        })
      );
    } else if (props.type === "edit") {
      dispatch(
        editProduct({
          id: props.id,
          userId: localStorage.getItem("id"),
          productId: "1",
          description: product,
          amount: 55,
          quantity: 33,
        })
      );
    }
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
                        value={product}
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
                      defaultValue=""
                      variant="outlined"
                      fullWidth
                      className={classes.submit}
                    />
                    <TextField
                      id="outlined-basic"
                      type="number"
                      label="Amount Needed in kg"
                      variant="outlined"
                      className={classes.submit}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Price in AMD"
                      type="number"
                      variant="outlined"
                      className={classes.submit}
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
