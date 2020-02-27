import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { BoxLoading } from "react-loadingg";
// core components

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ProductTable from "./ProductTable/ProductTable";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "redux/actions";

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
};

const useStyles = makeStyles(styles);

export default function Companies() {
  const dispatch = useDispatch();
  // const data = dispatch(getProductById(localStorage.getItem("id")));
  const data = useSelector(state => state.getProducts.products);
  const loaded = useSelector(state => state.getProducts.loaded);
  console.log(data);

  const classes = useStyles();
  return (
    <>
      {true ? (
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Product List</h4>
          </CardHeader>
          <CardBody>
            <ProductTable data={data} />
          </CardBody>
        </Card>
      ) : (
        <BoxLoading />
      )}{" "}
    </>
  );
}
