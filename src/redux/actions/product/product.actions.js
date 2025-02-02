import { productConstants } from "redux/constants";
import { makeGet, makePost, makeDelete, makePut } from "API/App";

const addProduct = product => dispatch => {
  dispatch({
    type: productConstants.ADD_REQUEST,
  });
  makePost("/api/v1/product", {}, product)
    .then(data => {
      dispatch({ type: productConstants.ADD_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.ADD_FAILURE, error }));
};

const getAllProducts = () => dispatch => {
  dispatch({ type: productConstants.GET_REQUEST });
  makeGet("/api/v1/product/?page=&size=&productId=", {})
    .then(data => {
      dispatch({ type: productConstants.GET_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.GET_FAILURE, error }));
};

const editProduct = (editedProduct, id) => dispatch => {
  dispatch({ type: productConstants.EDIT_REQUEST });
  makePut(`/api/v1/product/${id}/?page=&size=&productId=&isActive=`, {}, editedProduct)
    .then(data => {
      dispatch({ type: productConstants.EDIT_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.EDIT_FAILURE, error }));
};

const deleteProduct = (productId, id) => dispatch => {
  dispatch({ type: productConstants.DELETE_REQUEST });
  makeDelete(`/api/v1/product/${productId}`, {})
    .then(data => {
      dispatch({ type: productConstants.DELETE_SUCCESS, payload: { id } });
    })
    .catch(error => dispatch({ type: productConstants.DELETE_FAILURE, error }));
};

const getProductById = id => dispatch => {
  makeGet(`/api/v1/product/?page=&size=&productId=${id}&isActive=`, {})
    .then(data => {
      dispatch({ type: productConstants.GET_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.GET_FAILURE, error }));
};

const getMyProductById = (id, userId) => dispatch => {
  makeGet(`/api/v1/product/${userId}/?page=&size=&productId=${id}&isActive=`, {})
    .then(data => {
      dispatch({ type: productConstants.GET_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.GET_FAILURE, error }));
};

const getMyProducts = userId => dispatch => {
  makeGet(`/api/v1/product/${userId}/?page=&size=&productId=&isActive=`, {})
    .then(data => {
      dispatch({ type: productConstants.GET_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.GET_FAILURE, error }));
};

const getProductsByPage = (page, size) => dispatch => {
  makeGet(`/api/v1/product/?page=${page}&size=${size}&productId=&isActive=`, {})
    .then(data => {
      dispatch({ type: productConstants.GET_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.GET_FAILURE, error }));
};

const getMyProductsByPage = (userId, page, size) => dispatch => {
  makeGet(`/api/v1/product/${userId}/?page=${page}&size=${size}&productId=&isActive=`, {})
    .then(data => {
      dispatch({ type: productConstants.GET_SUCCESS, payload: data });
    })
    .catch(error => dispatch({ type: productConstants.GET_FAILURE, error }));
};

const paging = page => dispatch => {
  console.log(page);

  dispatch({ type: productConstants.GET_PAGE, payload: page });
};

export {
  addProduct,
  getAllProducts,
  editProduct,
  deleteProduct,
  getProductById,
  getMyProductById,
  getMyProducts,
  getProductsByPage,
  getMyProductsByPage,
  paging,
};
