import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";

const styling = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "20px solid white",
};

export default function ProductTable(props) {
  const products = props.data.map((elem, i) => (
    <ProductList description={elem.descriptio} key={i} id={elem.id} />
  ));

  return (
    <div style={styling}>
      <Header />
      {products}
    </div>
  );
}
