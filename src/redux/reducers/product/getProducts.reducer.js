import { productConstants } from "redux/constants";
const initialState = {
  products: [],
};

export default function getProducts(state = initialState, action) {
  switch (action.type) {
    case productConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case productConstants.GET_SUCCESS:
      return {
        ...state,
        products: action.payload.productResponseDtoList.filter(elem => Object.values(elem)),
        loaded: true,
      };
    case productConstants.GET_FAILURE:
      return {
        ...state,
        getError: action.error,
        loaded: false,
      };
    case productConstants.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.ADD_SUCCESS:
      return {
        products: state.products.concat([action.payload]),
        loaded: true,
      };
    case productConstants.ADD_FAILURE:
      return {
        ...state,
        getError: action.error,
        loaded: false,
      };
    case productConstants.EDIT_REQUEST:
      return {
        ...state,
        editing: true,
      };
    case productConstants.EDIT_SUCCESS:
      return {
        products: action.payload.filter(elem => Object.values(elem)),
        edited: true,
        loaded: true,
      };
    case productConstants.EDIT_FAILURE:
      return {
        ...state,
        edited: false,
      };
    case productConstants.DELETE_REQUEST:
      return {
        ...state,
        deleting: true,
      };
    case productConstants.DELETE_SUCCESS:
      return {
        products: state.products.filter((elem, index) => index !== action.payload.id),
        loaded: true,
      };
    case productConstants.DELETE_FAILURE:
      return {
        ...state,
        deleteError: action.error,
        deleted: false,
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
