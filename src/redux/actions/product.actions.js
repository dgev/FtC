import { productConstants } from "../constants";
import { makeGet, makePost, makeDelete, makePut } from "../../API/App";

const addProduct = product => dispatch => {
  dispatch({
    type: productConstants.ADD_REQUEST,
  });
  makePost("/api/v1/product", {}, product)
    .then(data => {
      dispatch({ type: productConstants.ADD_SUCCESS, data });
    })
    .catch(error => dispatch({ type: productConstants.ADD_FAILURE, error }));
};

const getAllProducts = () => dispatch => {
  dispatch({ type: productConstants.GET_REQUEST });
  makeGet("/api/v1/product", {})
    .then(data => {
      dispatch({ type: productConstants.GET_SUCCESS, data });
    })
    .catch(error => dispatch({ type: productConstants.GET_FAILURE, error }));
};

const editProduct = editedProduct => dispatch => {
  dispatch({ type: productConstants.EDIT_REQUEST });
  makePut(`/api/v1/product/${editedProduct.id}`, {}, editedProduct)
    .then(data => {
      console.log(data);
      dispatch({ type: productConstants.EDIT_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.EDIT_FAILURE, error }));
};

const deleteProduct = product => dispatch => {
  dispatch({ type: productConstants.DELETE_REQUEST, product });
  makeDelete(`/api/v1/delete/${product.id}`, {})
    .then(data => {
      dispatch({ type: productConstants.DELETE_SUCCESS, data });
    })
    .catch(error => dispatch({ type: productConstants.DELETE_FAILURE, error }));
};

// const getProductByName = id => dispatch => {
//   dispatch({
//     type: productConstants.GET_REQUEST,
//   });
//   makeGet(`/api/v1/user/${id}`, {}, {}, false)
//     .then(data => {
//       dispatch({ type: productConstants.GET_SUCCESS, user: data });
//     })
//     .catch(error => dispatch({ type: productConstants.GET_FAILURE, error }));
// };

export { addProduct, getAllProducts, editProduct, deleteProduct };
