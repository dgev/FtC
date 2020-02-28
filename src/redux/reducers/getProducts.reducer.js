import { productConstants } from "../constants";
const initialState = {};

export default function getProducts(state = initialState, action) {
  switch (action.type) {
    case productConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case productConstants.GET_SUCCESS:
      return {
        ...state,
        products: action.products,
        loaded: true,
      };
    case productConstants.GET_FAILURE:
      return {
        ...state,
        getError: action.error,
        loaded: false,
      };
    case productConstants.FILTER_REQUEST:
      return {
        ...state,
        filtering: true,
      };
    case productConstants.FILTER_SUCCESS:
      return {
        ...action.payload,
        filtered: true,
      };
    case productConstants.FILTER_FAILURE:
      return {
        ...state,
        filtered: false,
      };
    default:
      return {
        ...state,
      };
  }
}
