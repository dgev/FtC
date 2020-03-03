import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { BoxLoading } from "react-loadingg";

// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import AllProducts from "views/Products/ProductTable/AllProducts";
import Filter from "views/Products/ProductTable/FilterProduct";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "redux/actions/product/product.actions";
import { yellow } from "@material-ui/core/colors";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  addButton: { backgroundColor: yellow[600], color: "white", float: "right" },
};

const useStyles = makeStyles(styles);

export default function Companies() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const currentData = useSelector(state => state.getProducts.products);
  const page = useSelector(state => state.getProducts.page);
  const count = useSelector(state => state.getProducts.count);
  const loaded = useSelector(state => state.getProducts.loaded);

  function handleClick() {
    setOpen(!open);
  }

  const classes = useStyles();
  return (
    <>
      {loaded ? (
        <div>
          <Button onClick={handleClick} style={{ zIndex: "1000" }}>
            Filter by product
          </Button>
          <Card>
            <>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Product List</h4>
              </CardHeader>
              <AllProducts data={currentData} count={count} page={page} />
            </>
          </Card>
        </div>
      ) : (
        <BoxLoading />
      )}{" "}
      <Filter handleClick={handleClick} open={open} />
    </>
  );
}
