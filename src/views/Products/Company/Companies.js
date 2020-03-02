import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { BoxLoading } from "react-loadingg";

// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import AddIcon from "@material-ui/icons/Add";
import CompanyTable from "views/Products/ProductTable/Company/Table/CompanyTable";
import FarmerTable from "views/Products/ProductTable/Farmer/Table/FarmerTable";
import AddProduct from "views/Products/ProductTable/AddProduct";
import { useSelector, useDispatch } from "react-redux";
import { getProductById, getAllProducts } from "redux/actions/product/product.actions";
import { Button } from "@material-ui/core";
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
  const [openAdd, setAddProduct] = useState(false);
  const loadedUser = useSelector(state => state.userData.loaded);
  const user = useSelector(state => state.userData);
  const handleClickOpen = isOpen => {
    setAddProduct(isOpen);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadedUser) {
      user.hasCompany ? dispatch(getProductById(user.id)) : dispatch(getAllProducts());
    }
  }, [loadedUser]);

  const currentData = useSelector(state => state.getProducts.products);
  const loaded = useSelector(state => state.getProducts.loaded);

  const classes = useStyles();
  return (
    <>
      {loaded ? (
        <Card>
          {user.hasCompany ? (
            <>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Product List</h4>
                <Button
                  variant="contained"
                  className={(classes.button, classes.addButton)}
                  startIcon={<AddIcon />}
                  onClick={() => handleClickOpen(!openAdd)}
                >
                  Add
                </Button>
              </CardHeader>
              <CompanyTable data={currentData} />
            </>
          ) : (
            <>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Product List</h4>
              </CardHeader>
              <FarmerTable data={currentData} />
            </>
          )}
        </Card>
      ) : (
        <BoxLoading />
      )}{" "}
      <AddProduct handleClick={handleClickOpen} open={openAdd} action={"Add New"} type={"add"} />
    </>
  );
}
