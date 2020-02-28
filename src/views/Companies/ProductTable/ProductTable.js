import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";

const styling = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "20px solid white",
};

export default function ProductTable(props) {
  const loaded = useSelector(state => state.getProducts.loaded);
  console.log(props.data);

  const products = loaded
    ? props.data.map((elem, i) => (
        <ProductList description={elem.description} key={i} productId={elem.id} id={i} />
      ))
    : null;

  return (
    <div style={styling}>
      <Header />
      {products}
    </div>
  );
}
